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
const exampleViewCenter = angular.module('exampleViewCenter', [
    'blimpKit',
    'platformView',
    'platformDialogs', // Only if the view is expected to work outside the platform
    'platformContextMenu' // Only if the view is expected to work outside the platform
]);

exampleViewCenter.controller('ExampleViewController', function ($scope, ViewParameters) {
    $scope.title = 'Center view';
    $scope.subtitle = 'Right-click this text for context menu';
    $scope.dataParameters = ViewParameters.get();
    const dialogApi = new DialogApi();
    const contextmenuApi = new ContextMenuApi();
    $scope.showContextmenu = (event) => {
        event.preventDefault();
        contextmenuApi.showContextmenu({
            ariaLabel: 'perspective contextmenu',
            posX: event.clientX,
            posY: event.clientY,
            icons: true,
            items: [
                {
                    id: 'item1',
                    label: 'Item 1',
                    iconClass: 'sap-icon--information',
                    separator: true
                },
                {
                    id: 'item2',
                    label: 'Item 2',
                    iconPath: '/services/web/platform-samples/images/sample.svg',
                    items: [
                        {
                            id: 'item3',
                            label: 'Item 3',
                            iconClass: 'sap-icon--information',
                            disabled: true
                        },
                        {
                            id: 'item4',
                            label: 'Item 4',
                            iconClass: 'sap-icon--information',
                            disabled: false
                        }
                    ]
                },
                {
                    id: 'item5',
                    label: 'Item 5',
                    iconPath: '/services/web/platform-samples/images/perspective-utility.svg',
                    items: [],
                    disabled: true
                }
            ]
        }).then((id) => {
            if (id) dialogApi.showAlert({
                title: 'Item selected',
                message: `You selected context menu item with id '${id}'`,
                type: AlertTypes.Success
            });
        });
    };
});