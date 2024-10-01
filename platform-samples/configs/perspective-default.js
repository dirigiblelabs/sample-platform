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
const perspectiveData = { // This must always be called "perspectiveData"
	id: 'examplePerspective', // Unique perspective ID
	label: 'Example', // User-facing name
	path: '/services/web/platform-samples/perspectives/default.html', // Link to the perspective page
	groupId: 'examplePerspectiveGroup', // The id of the group this perspective belongs to.
	order: 1000, // Used to sort the tabs in the sidebar (or the group it belongs to)
	icon: '/services/web/platform-samples/images/sample.svg', // The svg icon shown in the sidebar
};
// This config is used by both the front-end and the back-end, therefore we need to have this:
if (typeof exports !== 'undefined') {
	exports.getPerspective = function () {
		return perspectiveData;
	}
}