package org.colorcoding.ibas.businesspartner.service.rest;

import javax.ws.rs.Produces;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.*;
import org.colorcoding.ibas.businesspartner.bo.contactperson.*;
import org.colorcoding.ibas.businesspartner.bo.customer.*;
import org.colorcoding.ibas.businesspartner.bo.supplier.*;

/**
 * 序列化解释器
 */
@Provider
@Produces({ "application/json" })
public class Resolver implements ContextResolver<JAXBContext> {

    private static JAXBContext jaxbContext = null;

    public JAXBContext getContext(Class<?> type) {
        try {
            if (jaxbContext == null) {
                jaxbContext = JAXBContext.newInstance(Criteria.class, OperationResult.class
                    , UserFieldProxy.class
                    , BusinessPartnerGroup.class
                    , ContactPerson.class
                    , Customer.class
                    , Supplier.class
                );
            }
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return jaxbContext;
    }

}