export default {
  headerProps: {
    appName: "Example Photos",
    platform: "iOS",
    isAccessible: true,
    version: "7.0",
    iconSlug: "photos",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 2,
    popups: 0,
    text: 0,
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
        access: "Mandatory",
        prompts: true,
        limits: false,
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
        access: "Optional",
        prompts: true,
        limits: true,
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
      dataTransmissionFreq: "Regular",
      thirdPartySharing: "No",
      thirdPartySharingConsent: "No",
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
      price: "Free",
      note: "iCloud storage above the free tier requires a subscription",
    },
    recurringPayments: "Yes",
    inAppPurchases: "No",
  },
  deviceResourcesProps: {
    batteryImpact: 3,
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
