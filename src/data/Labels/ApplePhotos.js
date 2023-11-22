export default {
  headerProps: {
    appName: "Apple Photos",
    platform: "iOS", // Typically, Apple Photos is only on iOS and macOS, but for this example, we will use iOS.
    isAccessible: true,
    version: "7.0",
    iconSlug: "photos",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 2, // For Memories, Sharing Suggestions, etc.
    popups: 0,
    text: 0,
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Mandatory", // For taking photos and videos
        prompts: true,
        limits: false,
      },
      mic: {
        label: "Microphone",
        access: "Mandatory", // For videos with audio
        prompts: true,
        limits: false,
      },
      photos: {
        label: "Photos",
        access: "Mandatory", // Core functionality for managing photos and videos
        prompts: true,
        limits: false,
      },
      loc: {
        label: "Location",
        access: "Optional", // For geo-tagging photos and videos
        prompts: true,
        limits: true,
      },
      contacts: {
        label: "Contacts",
        access: "Optional", // For creating shared albums with contacts
        prompts: true,
        limits: true,
      },
      storage: {
        label: "Storage",
        access: "Mandatory", // For saving photos and videos
        prompts: true,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Optional", // For secure access to the app
        prompts: true,
        limits: true,
      },
      healthData: {
        label: "Health Data",
        access: "Not Applicable", // Not used by photo apps
        prompts: false,
        limits: false,
      },
    },
    dataHandling: {
      dataCollection: "Yes", // For creating Memories, face albums, etc.
      dataTransmissionFreq: "Regular", // As photos and videos are synced with iCloud
      thirdPartySharing: "No", // Apple typically does not share data with third parties without consent
      thirdPartySharingConsent: "No", // Consent not typically required due to lack of third-party sharing
    },
    updateAlerts: "Yes", // For updates or issues with iCloud Photo Library
  },
  userRightsProps: {
    adsOptOut: "Not Applicable", // Apple Photos does not have ads
    accountDel: "Allowed",
    dataExport: "Allowed", // Users can export their photos and videos
  },
  monetizationProps: {
    usageCost: {
      price: "Free",
      note: "iCloud storage above the free tier requires a subscription",
    },
    recurringPayments: "Yes", // For iCloud storage subscriptions
    inAppPurchases: "No", // No in-app purchases for the Photos app itself
  },
  deviceResourcesProps: {
    batteryImpact: 3, // Viewing and organizing photos are low battery usage activities
    storage: {
      size: 150, // Base app size, not including user data
      unit: "MB",
    },
    internet: {
      req: "Yes", // Required for iCloud Photo Library syncing
      dataPh: "Varies", // Depends on the size and number of photos/videos synced
    },
  },
};
