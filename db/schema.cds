namespace demo;

entity BusinessPartners {
    key businessPartner         : Integer;
        firstName               : String;
        lastName                : String;
        businessPartnerCategory : String;
}


entity BusinessPartnerAddress {
    key businessPartner : Integer;
    key addressId       : Integer;
        postalCode      : String;
        cityName        : String;
        streetName      : String;
        houseNumber     : Integer;
}
