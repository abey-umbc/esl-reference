export default {
  headerProps: {
    appName: "UMBC Browser",
    platform: "Android",
    iconSlug: "web",
    isAccessible: true,
    version: "94.4.068",
    evaluatedOn: "January 1, 2023",
  },
  interruptionsProps: {
    notifications: 3,
    popups: 4,
    text: 1,
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Mandatory",
        prompts: true,
        limits: false,
      },
      mic: {
        label: "Microphone",
        access: "Optional",
        prompts: false,
        limits: true,
      },
      photos: {
        label: "Photos",
        access: "Not Applicable",
        prompts: false,
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
        access: "Mandatory",
        prompts: false,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Optional",
        prompts: false,
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
    updateAlerts: "No",
  },
  userRightsProps: {
    adsOptOut: "Not Allowed",
    accountDel: "Allowed",
    dataExport: "Allowed",
  },
  monetizationProps: {
    usageCost: {
      price: "Free",
      note: "with ads",
    },
    recurringPayments: "No",
    inAppPurchases: "Yes",
  },
  deviceResourcesProps: {
    batteryImpact: "8",
    storage: {
      size: 250,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "50 MB/hr",
    },
  },
};
