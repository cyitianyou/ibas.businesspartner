/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournal extends ibas.IBOSimple {
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 业务伙伴资产码 */
            serviceCode: string;
            /** 方向 */
            direction: ibas.emDirection;
            /** 交易量 */
            amount: number;
            /** 交易次数 */
            times: number;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;

        }


    }
}
