/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace ui {
        export namespace c {
            /**
             * 编辑视图-业务伙伴联系人
             */
            export class ContactPersonEditView extends ibas.BOEditView implements app.IContactPersonEditView {

                private page: sap.m.Page;
                private viewTopForm: sap.ui.layout.form.SimpleForm;

                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择业务伙伴事件 */
                chooseBusinessPartnerEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_ownertype") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(bo.emBusinessPartnerType)
                            }).bindProperty("selectedKey", {
                                path: "ownerType",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_businesspartner") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                }
                            }).bindProperty("value", {
                                path: "businessPartner"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_activated") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                            }).bindProperty("selectedKey", {
                                path: "activated",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_name") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "name"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_gender") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(bo.emGender)
                            }).bindProperty("selectedKey", {
                                path: "gender",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_position") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "position"
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_contact") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_address") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "address"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_mobilephone") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "mobilePhone"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_mail") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "mail"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_fax") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "fax"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_telephone1") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "telephone1"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_telephone2") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "telephone2"
                            }),
                        ],
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [this.viewTopForm],
                    });
                    this.id = this.page.getId();
                    return this.page;
                }

                /** 改变视图状态 */
                private changeViewStatus(data: bo.ContactPerson): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    }
                    // 不可编辑：已批准，
                }

                /** 显示数据 */
                showContactPerson(data: bo.ContactPerson): void {
                    this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
                    this.viewTopForm.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.viewTopForm, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
            }
        }
    }
}