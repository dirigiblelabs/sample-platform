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
const viewData = { // This must always be called 'viewData'
    id: 'exampleSettingsView', // Unique setting ID
    label: 'Example settings', // Setting label
    order: 100, // The index of this setting in the list of settings
    glyph: 'sap-icon--example', // CSS icon class name
    path: '/services/web/platform-samples/settings/example.html', // Link to the main html file
    autoFocusTab: false, // If true, the view will automatically send a focus request to the layout to focus its tab. Setting type views should have this disabled.
};
// This config is used by both the front-end and the back-end, therefore we need to have this:
if (typeof exports !== 'undefined') {
    exports.getView = () => viewData;
}