import { CustomerUnloadingPoint } from './CustomerUnloadingPoint';
import { CustomerUnloadingPointRequestBuilder } from './CustomerUnloadingPointRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerUnloadingPointApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof CustomerUnloadingPoint;
    requestBuilder(): CustomerUnloadingPointRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerUnloadingPoint, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        UNLOADING_POINT_NAME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CUSTOMER_FACTORY_CALENDER_CODE: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_GOODS_RECEIVING_HOURS_CODE: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_DFLT_BP_UNLOADING_POINT: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        MONDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        MONDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        MONDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        MONDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        TUESDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        TUESDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        TUESDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        TUESDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        WEDNESDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        WEDNESDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        WEDNESDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        WEDNESDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        THURSDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        THURSDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        THURSDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        THURSDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        FRIDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        FRIDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        FRIDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        FRIDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SATURDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SATURDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SATURDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SATURDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SUNDAY_MORNING_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SUNDAY_MORNING_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SUNDAY_AFTERNOON_OPENING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        SUNDAY_AFTERNOON_CLOSING_TIME: OrderableEdmTypeField<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        ALL_FIELDS: AllFields<CustomerUnloadingPoint<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=CustomerUnloadingPointApi.d.ts.map