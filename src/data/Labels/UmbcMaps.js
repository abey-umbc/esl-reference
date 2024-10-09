export default {
  headerProps: {
    appName: "Example Maps",
    platform: "Android",
    isAccessible: true,
    version: "11.5",
    iconSlug: "maps",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 5,
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
        access: "Mandatory",
        prompts: true,
        limits: false,
      },
      contacts: {
        label: "Contacts",
        access: "Optional",
        prompts: true,
        limits: true,
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
      note: "Offers in-app purchases for additional services",
    },
    recurringPayments: "No",
    inAppPurchases: "Yes",
  },
  deviceResourcesProps: {
    batteryImpact: 6,
    storage: {
      size: 120,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "Varies",
    },
  },
};
