export interface User {
  firstName?: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  username: string;
  customAttributes?: {
    salutationKey: string;
    salutationLabel: string;
    myYamahaUserId: string;
    city: string;
    postalCode: string;
    street: string;
    countryCode: string;
    userAccountDealerId?: string;
    stateCode?: string;
    isNonCustomerUser?: boolean;
    fiscalCode?: string;
  };
}
