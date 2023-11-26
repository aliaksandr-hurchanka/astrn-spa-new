export type WeightRegularTexOptions = 400 | 500;

export type Font = 'Montserrat' | 'Poppins';
export type Weight = WeightRegularTexOptions | 700;

export type Target = '_self' | '_blank' | '_top' | '_parent';

export type ExternalWindowState = {
  externalPopup: Window;
  hasValidSession: (time: number) => boolean;
  setExternalPopup: (window: Window | null) => void;
  redirectStep?: string;
  successCb?: () => void;
};

export type ProfileDataUserProps = {
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
};

export type TextVariant = {
  font: Font;
  weight: WeightRegularTexOptions;
  size: number;
  lineHeight: number;
};

export type VariantName =
  | 'textBody16'
  | 'textBody16Medium'
  | 'textBody18'
  | 'textBody18Medium'
  | 'textBody24'
  | 'textBody24Medium';

export type GetTypography = ({
  variant,
  color,
}: {
  variant: TextVariant;
  color?: string;
}) => any;
