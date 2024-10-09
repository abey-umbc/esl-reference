export default {
  headerProps: {
    appName: "Example Email",
    platform: "Android",
    iconSlug: "mail",
    isAccessible: true,
    version: "2023.5",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 10,
    popups: 1,
    text: 0,
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
        access: "Optional",
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
        access: "Mandatory",
        prompts: true,
        limits: false,
      },
      storage: {
        label: "Storage",
        access: "Mandatory",
        prompts: true,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Optional",
        prompts: true,
        limits: true,
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
      thirdPartySharing: "Yes",
      thirdPartySharingConsent: "Yes",
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
      note: "with ads",
    },
    recurringPayments: "Yes",
    inAppPurchases: "No",
  },
  deviceResourcesProps: {
    batteryImpact: 3,
    storage: {
      size: 100,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "Varies",
    },
  },
};
