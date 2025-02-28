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
exports.getPerspectiveGroup = () => ({
	id: 'examplePerspectiveGroup', // Unique group ID
	label: 'Group', // User-facing name
	expanded: true, // Should the group be expanded by default
	order: 1000, // Used to sort the tabs in the sidebar
	icon: '/services/web/platform-samples/images/sample.svg', // The svg icon shown in the sidebar
	headerLabel: 'Group header', // If provided, the group can have a header label before it that acts as a separator
	items: []
});