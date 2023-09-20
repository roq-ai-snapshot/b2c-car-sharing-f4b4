interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Operations Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read feedback', 'Read location', 'Read car details', 'Read company details'],
  ownerAbilities: [
    'Manage payment information',
    'Manage insurance details',
    'Manage maintenance reports',
    'Manage feedbacks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/165d276c-957c-471e-a803-706a39e6799e',
};
