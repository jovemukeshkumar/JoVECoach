/**
 * Master switch for all Zoho CRM / form traffic.
 * When false: no POSTs to crm.zoho.in, no analytics scripts, redirects still work.
 * Wired through ZohoIntegrationGate (layouts), ZohoLeadsForm, and ZohoMasterForm.
 */
export const ZOHO_INTEGRATION_ENABLED = false;
