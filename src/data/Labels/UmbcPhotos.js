export default {
  headerProps: {
    appName: "Aetheria",
    platform: "iOS",
    iconSlug: "aetheria", // You can customize this if you have a specific icon slug
    isAccessible: true,
    version: "1.6.4",
    evaluatedOn: "February 18, 2025",
  },
  interruptionsProps: {
    notifications: 3,
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
        access: "Not Applicable",
        prompts: false,
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
      dataPh: "30MB/hr",
    },
  },
};