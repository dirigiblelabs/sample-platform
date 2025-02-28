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
const perspectiveData = { // This must always be called "perspectiveData"
	id: 'exampleUtilityPerspective', // Unique perspective ID
	label: 'Utility', // User-facing name
	path: '/services/web/platform-samples/perspectives/utility.html', // Link to the main perspective view
	order: 10, // Used to sort the tabs in the utility section in the sidebar
	icon: '/services/web/platform-samples/images/utility.svg', // The svg icon shown in the sidebar
};
// This config is used by both the front-end and the back-end, therefore we need to have this:
if (typeof exports !== 'undefined') {
	exports.getUtilityPerspective = () => perspectiveData;
}