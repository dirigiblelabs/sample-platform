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
exports.getMenu = () => ({
	perspectiveId: 'examplePerspective',
	include: {
		help: true,
		window: true
	},
	items: [
		{
			label: "First",
			items: [
				{
					label: "Empty item",
				}
			]
		},
		{
			label: "Example",
			items: [
				{
					label: "Submenu",
					items: [
						{
							label: "GitHub page",
							data: "https://github.com/dirigiblelabs/sample-platform",
							action: "open",
						},
						{
							label: "Empty item with divider",
							divider: true,
						},
						{
							label: "Empty item",
						}
					]
				},
				{
					label: "Submenu",
					items: [
						{
							label: "GitHub page",
							data: "https://github.com/dirigiblelabs/sample-platform",
							action: "open",
						},
						{
							label: "Empty item with divider",
							divider: true,
						},
						{
							label: "Empty item",
							items: [
								{
									label: "GitHub page",
									data: "https://github.com/dirigiblelabs/sample-platform",
									action: "open",
								},
								{
									label: "Empty item with divider",
									divider: true,
								},
								{
									label: "Empty item",
								}
							]
						},
						{
							label: "Empty item 2",
							items: [
								{
									label: "GitHub page",
									data: "https://github.com/dirigiblelabs/sample-platform",
									action: "open",
								},
								{
									label: "Empty item with divider",
									divider: true,
								},
								{
									label: "Empty item",
									items: [
										{
											label: "GitHub page",
											data: "https://github.com/dirigiblelabs/sample-platform",
											action: "open",
										},
										{
											label: "Empty item with divider",
											divider: true,
										},
										{
											label: "Empty item",
										}
									]
								}
							]
						}
					]
				},
				{
					label: "Event",
					event: "example.menu.event",
					divider: true,
				},
				{
					label: "About",
					action: "openDialogWindow",
					dialogId: "about",
				}
			]
		}
	]
});