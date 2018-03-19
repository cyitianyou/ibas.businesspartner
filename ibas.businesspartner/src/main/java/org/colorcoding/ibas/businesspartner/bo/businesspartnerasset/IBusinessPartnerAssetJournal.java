package org.colorcoding.ibas.businesspartner.bo.businesspartnerasset;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;

/**
 * 业务伙伴资产日记账 接口
 * 
 */
public interface IBusinessPartnerAssetJournal extends IBOSimple {

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
	 */
	void setObjectKey(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value
	 *            值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号
	 * 
	 * @param value
	 *            值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value
	 *            值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value
	 *            值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value
	 *            值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-更新日期
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-更新时间
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value
	 *            值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-更新用户
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-服务码
	 * 
	 * @return 值
	 */
	String getServiceCode();

	/**
	 * 设置-服务码
	 * 
	 * @param value
	 *            值
	 */
	void setServiceCode(String value);

	/**
	 * 获取-方向
	 * 
	 * @return 值
	 */
	emDirection getDirection();

	/**
	 * 设置-方向
	 * 
	 * @param value
	 *            值
	 */
	void setDirection(emDirection value);

	/**
	 * 获取-交易量
	 * 
	 * @return 值
	 */
	Decimal getAmount();

	/**
	 * 设置-交易量
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(Decimal value);

	/**
	 * 设置-交易量
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(String value);

	/**
	 * 设置-交易量
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(int value);

	/**
	 * 设置-交易量
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(double value);

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	String getBaseDocumentType();

	/**
	 * 设置-基于类型
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentType(String value);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 设置-基于标识
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentEntry(Integer value);

	/**
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentLineId();

	/**
	 * 设置-基于行号
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentLineId(Integer value);

	/**
	 * 获取-原始类型
	 * 
	 * @return 值
	 */
	String getOriginalDocumentType();

	/**
	 * 设置-原始类型
	 * 
	 * @param value
	 *            值
	 */
	void setOriginalDocumentType(String value);

	/**
	 * 获取-原始标识
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentEntry();

	/**
	 * 设置-原始标识
	 * 
	 * @param value
	 *            值
	 */
	void setOriginalDocumentEntry(Integer value);

	/**
	 * 获取-原始行号
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentLineId();

	/**
	 * 设置-原始行号
	 * 
	 * @param value
	 *            值
	 */
	void setOriginalDocumentLineId(Integer value);

}
