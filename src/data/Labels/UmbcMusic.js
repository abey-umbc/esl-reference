export default {
  headerProps: {
    appName: "UMBCMusic",
    platform: "iOS",
    iconSlug: "music",
    isAccessible: true,
    version: "3.7.2",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 4,
    popups: 2,
    text: 0,
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Not Applicable",
        prompts: false,
        limits: false,
      },
      mic: {
        label: "Microphone",
        access: "Optional",
        prompts: true,
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
    adsOptOut: "Not Applicable", 
    accountDel: "Allowed",
    dataExport: "Allowed",
  },
  monetizationProps: {
    usageCost: {
      price: "Subscription-based",
      note: "free trial",
    },
    recurringPayments: "Yes",
    inAppPurchases: "No",
  },
  deviceResourcesProps: {
    batteryImpact: 5,
    storage: {
      size: 150,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "Varies",
    },
  },
};
