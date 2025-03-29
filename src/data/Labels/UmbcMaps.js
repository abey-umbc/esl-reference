export default {
  headerProps: {
    appName: "Bearable: Symptom & Mood Tracker",
    platform: "iOS",
    iconSlug: "health",
    isAccessible: true,
    version: "1.0.5405",
    evaluatedOn: "February 8, 2025", 
  },
  interruptionsProps: {
    notifications: 4,
    popups: 3,       
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
        access: "Optional",
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
        access: "Not Applicable",
        prompts: false,
        limits: false,
      },
      healthData: {
        label: "Health Data",
        access: "Optional",
        prompts: true,
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
    recurringPayments: "Yes",
    inAppPurchases: "Yes",
  },
  deviceResourcesProps: {
    batteryImpact: 6,
    storage: {
      size: 220,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "40MB/hr", 
    },
  },
};