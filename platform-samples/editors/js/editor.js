/*
 * Copyright (c) 2024 Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
const editor = angular.module('editor', [
    'blimpKit',
    'platformView',
    'platformShortcuts', // Enable shortcut functionality, using the 'shortcut' directive
    'WorkspaceService']); // Include the WorkspaceService for working with files
editor.controller('EditorController', function ($scope, $window, WorkspaceService, ViewParameters) {
    const statusBarHub = new StatusBarHub(); // This is an API based on MessageHub for communicating with the shell's status bar
    const layoutHub = new LayoutHub(); // This is an API based on MessageHub for communicating with the layout
    $scope.state = {
        isBusy: true,
        error: false,
        busyText: 'Loading...',
    };
    $scope.file = {
        model: '', // Keep the file content/model in an object
    };

    // When the editor is focused, clean the status bar label (or set the proper one).
    angular.element($window).bind('focus', () => {
        statusBarHub.showLabel('');
    });

    // Whenever there is a change to the file model, mark the file as dirty
    $scope.modelChange = () => {
        layoutHub.setEditorDirty({
            path: $scope.dataParameters.filePath,
            dirty: true,
        });
    };

    $scope.saveShortcut = (keySet, event) => {
        event.preventDefault();
        if (keySet === 'ctrl+s') {
            $scope.state.isBusy = true;
            WorkspaceService.saveContent($scope.dataParameters.filePath, $scope.file.model).then(() => {
                // Clean the dirty status, once the file has been saved.
                layoutHub.setEditorDirty({
                    path: $scope.dataParameters.filePath,
                    dirty: false,
                });
                $scope.$evalAsync(() => {
                    $scope.state.isBusy = false;
                });
            }, (response) => {
                console.error(response);
                $scope.$evalAsync(() => {
                    $scope.state.error = true;
                    $scope.errorMessage = 'Error while saving file';
                    $scope.state.isBusy = false;
                });
            });
        }
    };

    const loadFileContents = () => {
        $scope.state.isBusy = true;
        WorkspaceService.loadContent($scope.dataParameters.filePath).then((response) => {
            $scope.$evalAsync(() => {
                $scope.file.model = response.data;
                $scope.state.isBusy = false;
            });
        }, (response) => {
            console.error(response);
            $scope.$evalAsync(() => {
                $scope.state.error = true;
                $scope.errorMessage = 'Error while loading file';
                $scope.state.isBusy = false;
            });
        });
    };

    // If the editor has been focused from the outside, clean the status bar label (or set the proper one).
    layoutHub.onFocusView((data) => {
        if (data.params && data.params.resourcePath === $scope.dataParameters.filePath) statusBarHub.showLabel('');
    });

    // If the file changes (rename, move, etc) outside the editor, parameters will be changed and should be reloaded.
    layoutHub.onReloadEditorParams((data) => {
        if (data.path === $scope.dataParameters.filePath) {
            $scope.$evalAsync(() => {
                $scope.dataParameters = ViewParameters.get();
            });
        };
    });

    // Use ViewParameters to get the editor parameters like 'filePath'
    $scope.dataParameters = ViewParameters.get();
    if (!$scope.dataParameters.hasOwnProperty('filePath')) {
        $scope.state.error = true;
        $scope.errorMessage = "The 'filePath' data parameter is missing.";
    } else {
        loadFileContents();
    }
});