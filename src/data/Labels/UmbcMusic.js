export default {
  headerProps: {
    appName: "Daylio",
    platform: "iOS",
    iconSlug: "daylio",
    isAccessible: true,
    version: "3.5.2",
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
        access: "Not Applicable",
        prompts: false,
        limits: false,
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
    batteryImpact: 4,
    storage: {
      size: 150,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "30MB/hr",
    },
  },
};