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
    id: 'exampleViewBottom', // Unique view ID
    label: 'Bottom view', // View label
    region: 'bottom', // The layout region in which this view will be shown
    path: '/services/web/platform-samples/views/view-bottom.html', // Link to the main html file
    lazyLoad: true // When set to true, the view will load only when it becomes visible to the user.
};
// This config is used by both the front-end and the back-end, therefore we need to have this:
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}