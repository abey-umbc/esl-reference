export default {
  headerProps: {
    appName: "Google Maps",
    platform: "Android",
    isAccessible: true,
    version: "11.5",
    iconSlug: "google-maps",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 5, // For traffic alerts, place recommendations, etc.
    popups: 1, // Rarely, for major updates or feature introductions
    text: 0, // No text-based interruptions
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Optional", // For contributing photos or scanning QR codes
        prompts: true,
        limits: true,
      },
      mic: {
        label: "Microphone",
        access: "Optional", // For voice search and voice navigation commands
        prompts: true,
        limits: true,
      },
      photos: {
        label: "Photos",
        access: "Optional", // For saving maps or sharing screenshots
        prompts: true,
        limits: false,
      },
      loc: {
        label: "Location",
        access: "Mandatory", // Essential for navigation and location services
        prompts: true,
        limits: false,
      },
      contacts: {
        label: "Contacts",
        access: "Optional", // For navigating to contacts' addresses
        prompts: true,
        limits: true,
      },
      storage: {
        label: "Storage",
        access: "Optional", // For offline maps and caching
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
      dataCollection: "Yes", // For improving service and providing personalized content
      dataTransmissionFreq: "Always", // Constant updates for real-time navigation and traffic
      thirdPartySharing: "Yes", // Sharing data with third-party services for integrated experiences
      thirdPartySharingConsent: "Yes", // User consent is required for data sharing
    },
    updateAlerts: "Yes", // For new maps, features, or account notifications
  },
  userRightsProps: {
    adsOptOut: "Allowed", // Users can opt out of personalized ads in their Google account settings
    accountDel: "Allowed",
    dataExport: "Allowed", // Users can export their location history and data
  },
  monetizationProps: {
    usageCost: {
      price: "Free",
      note: "Offers in-app purchases for additional services",
    },
    recurringPayments: "No", // Standard Google Maps features do not require recurring payments
    inAppPurchases: "Yes", // For additional services or content
  },
  deviceResourcesProps: {
    batteryImpact: 6, // Navigation and location tracking can have a moderate to high battery usage
    storage: {
      size: 120, // Base app size, not including user data or offline maps
      unit: "MB",
    },
    internet: {
      req: "Yes", // Essential for accessing maps, traffic, and location services
      dataPh: "Varies", // Depends on usage patterns and map downloads
    },
  },
};
