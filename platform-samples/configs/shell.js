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
const shellData = { // This must always be called "shellData"
	id: 'exampleShell', // Unique shell ID
	path: '/services/web/platform-samples/shell/index.html', // Link to the perspective page
	label: 'Example Shell' // User-facing name. Used when listing all shells.
};
// This config is used by both the front-end and the back-end, therefore we need to have this:
if (typeof exports !== 'undefined') {
	exports.getShell = () => shellData;
}