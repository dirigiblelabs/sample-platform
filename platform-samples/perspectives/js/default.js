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
const examplePerspective = angular.module('example', ['platformView', 'platformLayout', 'blimpKit']);
// Initialize controller
examplePerspective.controller('ExamplePerspectiveController', function ($scope) {

    $scope.layoutConfig = {
        // Array of view ids
        views: ['exampleViewLeft', 'exampleViewBottom', 'exampleViewCenter', , 'exampleViewRight'],
        viewSettings: {
            'exampleViewCenter': { closable: true },
        },
        layoutSettings: {
            hideCenterPane: false,
            leftPaneMinSize: 240
        },
    };
});
