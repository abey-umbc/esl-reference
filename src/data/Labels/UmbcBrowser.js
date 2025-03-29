export default {
  headerProps: {
    appName: "Moodnotes",
    platform: "iOS",
    iconSlug: "mood",
    isAccessible: true,
    version: "2.8.4",
    evaluatedOn: "February 18, 2025",
  },
  interruptionsProps: {
    notifications: 4,
    popups: 2,
    text: 1,
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Optional",
        prompts: true,
        limits: true,
      },
      mic: {
        label: "Microphone",
        access: "Optional",
        prompts: true,
        limits: true,
      },
      photos: {
        label: "Photos",
        access: "Mandatory",
        prompts: true,
        limits: false,
      },
      loc: {
        label: "Location",
        access: "Optional",
        prompts: true,
        limits: true,
      },
      contacts: {
        label: "Contacts",
        access: "Not Applicable",
        prompts: false,
        limits: false,
      },
      storage: {
        label: "Storage",
        access: "Optional",
        prompts: true,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Not Applicable",
        prompts: false,
        limits: false,
      },
      healthData: {
        label: "Health Data",
        access: "Not Applicable",
        prompts: false,
        limits: false,
      },
    },
    dataHandling: {
      dataCollection: "Yes",
      dataTransmissionFreq: "Always",
      thirdPartySharing: "No",
      thirdPartySharingConsent: "Not Applicable",
    },
    updateAlerts: "Yes",
  },
  userRightsProps: {
    adsOptOut: "Allowed",
    accountDel: "Allowed",
    dataExport: "Allowed",
  },
  monetizationProps: {
    usageCost: {
      price: "Free",
      note: "with in-app purchases",
    },
    recurringPayments: "No",
    inAppPurchases: "Yes",
  },
  deviceResourcesProps: {
    batteryImpact: 5,
    storage: {
      size: 180,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "35MB/hr",
    },
  },
};