/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryBusinessPartner } from "../../borep/BORepositories";
import { BusinessPartnerBalanceJournalEditApp } from "./BusinessPartnerBalanceJournalEditApp";

/** 查看应用-业务伙伴余额记录 */
export class BusinessPartnerBalanceJournalViewApp extends ibas.BOViewService<IBusinessPartnerBalanceJournalViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "07d7c2c9-65a3-43b5-853b-6d8043f3d1dc";
    /** 应用名称 */
    static APPLICATION_NAME: string = "businesspartner_app_businesspartnerbalancejournal_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerBalanceJournal.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = BusinessPartnerBalanceJournalViewApp.APPLICATION_ID;
        this.name = BusinessPartnerBalanceJournalViewApp.APPLICATION_NAME;
        this.boCode = BusinessPartnerBalanceJournalViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: BusinessPartnerBalanceJournalEditApp = new BusinessPartnerBalanceJournalEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        if (arguments[0] instanceof bo.BusinessPartnerBalanceJournal) {
            this.viewData = arguments[0];
            this.show();
        } else {
            super.run();
        }
    }
    private viewData: bo.BusinessPartnerBalanceJournal;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository: BORepositoryBusinessPartner = new BORepositoryBusinessPartner();
        boRepository.fetchBusinessPartnerBalanceJournal({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerBalanceJournal>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.viewData = opRslt.resultObjects.firstOrDefault();
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-业务伙伴余额记录 */
export interface IBusinessPartnerBalanceJournalViewView extends ibas.IBOViewView {

}
/** 业务伙伴余额记录连接服务映射 */
export class BusinessPartnerBalanceJournalLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = BusinessPartnerBalanceJournalViewApp.APPLICATION_ID;
        this.name = BusinessPartnerBalanceJournalViewApp.APPLICATION_NAME;
        this.boCode = BusinessPartnerBalanceJournalViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new BusinessPartnerBalanceJournalViewApp();
    }
}
