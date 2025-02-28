/*
 * Copyright (c) 2025 Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
const utility = angular.module('utility', ['platformView', 'platformSplit', 'blimpKit']);
// Initialize controller
utility.controller('UtilityController', ($scope, ButtonStates) => {
    $scope.title = 'Utility perspective';
    $scope.subtitle = 'Test some stuff';
    const messageHub = new MessageHubApi();
    const dialogHub = new DialogHub();
    const statusBarHub = new StatusBarHub();
    const contextMenuHub = new ContextMenuHub();
    const notificationHub = new NotificationHub();
    const shellHub = new ShellHub();

    $scope.alert = () => dialogHub.showAlert({
        title: 'Test title',
        message: 'Alert body',
        type: AlertTypes.Information,
        preformatted: false,
        buttons: [
            { id: 'ok', label: 'OK', state: ButtonStates.Emphasized },
            { id: 'close', label: 'Close' }
        ]
    }).then((buttonId) => {
        statusBarHub.showMessage(`You selected button with id - ${buttonId}`);
    }, (error) => {
        statusBarHub.showError(`An error occurred - ${error}`);
    });

    $scope.dialog = () => dialogHub.showDialog({
        title: 'Test title',
        message: 'Dialog body',
        buttons: [
            { id: 'ok', label: 'OK', state: ButtonStates.Emphasized },
            { id: 'close', label: 'Close' }
        ]
    }).then((buttonId) => {
        statusBarHub.showMessage(`You selected button with id - ${buttonId}`);
    }, (error) => {
        statusBarHub.showError(`An error occurred - ${error}`);
    });

    $scope.busyDialog = () => {
        statusBarHub.showBusy('Another indicator');
        dialogHub.showBusyDialog('Loading...');
        setTimeout(() => {
            dialogHub.showBusyDialog('Almost done...');
        }, 2000);
        setTimeout(() => {
            dialogHub.closeBusyDialog();
            statusBarHub.hideBusy();
        }, 4000);
    };

    $scope.formDialog = () => dialogHub.showFormDialog({
        title: 'Form title',
        form: {
            'uname': {
                label: 'Username',
                controlType: 'input',
                type: 'text',
                placeholder: 'User Name',
                maxlength: 20,
                inputRules: {
                    excluded: ['excluded'],
                    patterns: ['^[^/]*$'] // Do not allow '/'
                },
                submitOnEnter: true,
                focus: true,
                required: true
            },
            'pass': {
                label: 'Password',
                controlType: 'input',
                type: 'password',
                minlength: 3,
                enabledOn: { key: 'uname' },
                required: true
            },
            'cc': {
                label: 'Choose color',
                controlType: 'checkbox',
                value: false
            },
            'color': {
                label: 'Color',
                controlType: 'input',
                type: 'color',
                value: '#4287f5',
                enabledOn: { key: 'cc', value: true },
                required: true
            },
            'bdate': {
                label: 'Birthday',
                controlType: 'input',
                type: 'date',
                // min: '2024-11-09',
                // max: '2024-11-19',
                required: true
            },
            'ai': {
                label: 'Additional information',
                controlType: 'textarea',
                placeholder: 'Something you want to say',
                hiddenOn: { key: 'cc', value: false },
                required: true
            },
            'time': {
                label: 'Time to execute',
                controlType: 'radio',
                enabledOn: { key: 'cc', value: true },
                options: [{
                    label: 'Slow',
                    value: 'slow'
                }, {
                    label: 'Normal',
                    value: 'normal'
                }, {
                    label: 'Fast',
                    value: 'fast'
                }],
                required: true,
            },
            'delivery': {
                label: 'Time to deliver',
                placeholder: 'Select time',
                controlType: 'dropdown',
                options: [{
                    label: 'Today',
                    value: 'today'
                }, {
                    label: 'Tomorrow',
                    value: 'tomorrow'
                }],
                required: true,
            },
            'noi': {
                label: 'Number of items',
                controlType: 'input',
                type: 'number',
                value: 2,
                min: 2,
                max: 12,
                step: 2,
                visibleOn: { key: 'delivery', value: 'today' },
                required: true
            },
        },
        width: '90%',
        height: '90%',
        minWidth: '320px',
        minHeight: '356px',
        maxWidth: '480px',
        maxHeight: '388px',
        submitLabel: 'Submit',
        cancelLabel: 'Cancel'
    }).then((form) => {
        console.log(form);
    }, (error) => {
        console.error(error);
    });

    $scope.showWindow = () => dialogHub.showWindow({
        hasHeader: true,
        id: 'about'
    });

    $scope.showCustomWindow = () => dialogHub.showWindow({
        hasHeader: true,
        title: 'Test window',
        path: '/services/web/platform-samples/views/view-bottom.html',
        params: { subtitle: 'Invoked from an utility perspective' },
    });

    $scope.switchPerspective = () => {
        shellHub.showPerspective({ id: 'examplePerspective' });
    };

    $scope.showContextMenu = (event) => {
        event.preventDefault();
        contextMenuHub.showContextMenu({
            ariaLabel: 'perspective contextmenu',
            posX: event.clientX,
            posY: event.clientY,
            icons: true,
            items: [
                {
                    id: 'notifyInfo',
                    label: 'Notify (info)',
                    leftIconClass: 'sap-icon--information',
                },
                {
                    id: 'notifyWarn',
                    label: 'Notify (warn)',
                    leftIconClass: 'sap-icon--warning',
                },
                {
                    id: 'notifyNeg',
                    label: 'Notify (negative)',
                    leftIconClass: 'sap-icon--error',
                },
                {
                    id: 'notifyPos',
                    label: 'Notify (positive)',
                    leftIconClass: 'sap-icon--sys-enter-2',
                    separator: true
                },
                {
                    id: 'submenu1',
                    label: 'Subview message',

                    iconPath: '/services/web/platform-samples/images/sample.svg',
                    items: [
                        {
                            id: 'subitem1',
                            label: 'Submenu Item 1',
                            leftIconClass: 'sap-icon--information',
                        },
                        {
                            id: 'subitem2',
                            label: 'Submenu Item 2',
                            leftIconClass: 'sap-icon--information',
                            disabled: false
                        }
                    ]
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    leftIconPath: '/services/web/platform-samples/images/perspective-utility.svg',
                    items: [],
                    disabled: true
                }
            ]
        }).then((id) => {
            if (id) {
                if (id === 'notifyInfo') notificationHub.show({ type: 'information', title: 'Information', description: 'This is used to show information.' });
                else if (id === 'notifyWarn') notificationHub.show({ type: 'warning', title: 'Warning', description: 'This is used to show a warning.' });
                else if (id === 'notifyNeg') notificationHub.show({ type: 'negative', title: 'Negative', description: 'This is used to show errors or any negative results.' });
                else if (id === 'notifyPos') notificationHub.show({ type: 'positive', title: 'Positive', description: 'This is used to show positive results.' });
                else messageHub.postMessage({ topic: 'platform.samples.subview', data: { selectedItemId: id } });
                statusBarHub.showLabel('Label');
            } else statusBarHub.showError('Nothing was selected');
        });
    };
});