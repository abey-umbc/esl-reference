export default {
  headerProps: {
    appName: "Apple Music",
    platform: "iOS", // Chosen for this example; you can change it to "Android" or "Windows"
    iconSlug: "music",
    isAccessible: true,
    version: "3.7.2",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 4, // Notifications for new releases, recommendations, etc.
    popups: 2, // Occasional prompts for subscription services or features
    text: 0, // No text interruptions
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Not Applicable", // Typically not used by music streaming apps
        prompts: false,
        limits: false,
      },
      mic: {
        label: "Microphone",
        access: "Optional", // For voice commands or singing along features
        prompts: true,
        limits: true,
      },
      photos: {
        label: "Photos",
        access: "Not Applicable", // Typically not used by music streaming apps
        prompts: false,
        limits: false,
      },
      loc: {
        label: "Location",
        access: "Optional", // Sometimes used for concert suggestions or localized content
        prompts: true,
        limits: true,
      },
      contacts: {
        label: "Contacts",
        access: "Not Applicable", // Not typically required for music streaming
        prompts: false,
        limits: false,
      },
      storage: {
        label: "Storage",
        access: "Mandatory", // For downloading music to the device
        prompts: true,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Optional", // For secure authentication or purchasing
        prompts: true,
        limits: true,
      },
      healthData: {
        label: "Health Data",
        access: "Not Applicable", // Not typically used by music streaming apps
        prompts: false,
        limits: false,
      },
    },
    dataHandling: {
      dataCollection: "Yes", // For personalized music recommendations and analytics
      dataTransmissionFreq: "Always", // Constantly as users stream or download music
      thirdPartySharing: "Yes", // Sharing with third-party partners for content provision
      thirdPartySharingConsent: "Yes", // Consent required for any data sharing
    },
    updateAlerts: "Yes", // Alerts for updates or important service messages
  },
  userRightsProps: {
    adsOptOut: "Not Applicable", // Apple Music does not have ads in its service
    accountDel: "Allowed",
    dataExport: "Allowed", // Users can export their data or playlists
  },
  monetizationProps: {
    usageCost: {
      price: "Subscription-based",
      note: "free trial",
    },
    recurringPayments: "Yes", // Subscription service with monthly payments
    inAppPurchases: "No", // Apple Music does not typically offer in-app purchases
  },
  deviceResourcesProps: {
    batteryImpact: 5, // Streaming and downloading can have a moderate impact on battery
    storage: {
      size: 150, // App size, excluding downloaded music
      unit: "MB",
    },
    internet: {
      req: "Yes", // Essential for streaming music
      dataPh: "Varies", // Depends on the quality of the music streamed or downloaded
    },
  },
};
