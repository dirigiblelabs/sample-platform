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
exports.getMenu = () => ({
	perspectiveId: 'examplePerspective',
	include: {
		help: true,
		window: true
	},
	items: [
		{
			label: 'Example',
			items: [
				{
					label: 'Event',
					action: 'event',
					data: {
						topic: 'example.menu.event',
						message: 'example'
					}
				},
				{
					id: 'workbench',
					label: 'Workbench',
					action: 'showPerspective',
				},
				{
					id: 'about',
					label: 'About',
					action: 'openWindow',
					hasHeader: true,
				},
				{
					label: 'Submenu',
					items: [
						{
							label: 'GitHub page',
							action: 'open',
							link: 'https://github.com/dirigiblelabs/sample-platform',
						},
						{
							label: 'Empty item with a separator',
							separator: true,
						},
						{
							label: 'Empty item',
						}
					]
				},
			]
		}
	]
});