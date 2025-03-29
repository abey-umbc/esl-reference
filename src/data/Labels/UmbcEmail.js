export default {
  headerProps: {
    appName: "Finch",
    platform: "iOS",
    iconSlug: "finch",
    isAccessible: true,
    version: "2.3.1",
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
      dataCollection: "Yes", // Assumed based on standard — can be updated if specified
      dataTransmissionFreq: "Always", // Assumed based on pattern — update if different
      thirdPartySharing: "No", // Assumed — update if needed
      thirdPartySharingConsent: "Not Applicable",
    },
    updateAlerts: "Yes", // Assumed consistent — update if needed
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
      size: 200,
      unit: "MB",
    },
    internet: {
      req: "Yes",
      dataPh: "40MB/hr",
    },
  },
};