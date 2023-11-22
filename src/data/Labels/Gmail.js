export default {
  headerProps: {
    appName: "Gmail",
    platform: "Android", // Assuming we are generating for the Android platform
    iconSlug: "gmail",
    isAccessible: true,
    version: "2023.5",
    evaluatedOn: "November 18, 2023",
  },
  interruptionsProps: {
    notifications: 10, // Gmail may frequently notify the user of new emails
    popups: 1, // Rare, possibly for important updates or account issues
    text: 0, // Text interruptions are not a feature of Gmail
  },
  privacyProps: {
    permissions: {
      camera: {
        label: "Camera",
        access: "Optional", // For attaching images directly from the camera
        prompts: true,
        limits: true,
      },
      mic: {
        label: "Microphone",
        access: "Optional", // For voice-to-text features
        prompts: true,
        limits: true,
      },
      photos: {
        label: "Photos",
        access: "Optional", // For attaching photos from the gallery
        prompts: true,
        limits: false,
      },
      loc: {
        label: "Location",
        access: "Optional", // For location-based email features
        prompts: true,
        limits: true,
      },
      contacts: {
        label: "Contacts",
        access: "Mandatory", // Essential for sending emails to contacts
        prompts: true,
        limits: false,
      },
      storage: {
        label: "Storage",
        access: "Mandatory", // For caching emails and attachments
        prompts: true,
        limits: false,
      },
      biometrics: {
        label: "Biometrics",
        access: "Optional", // For secure authentication
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
      dataCollection: "Yes", // For app functionality and personalized ads
      dataTransmissionFreq: "Always", // Regular syncing with email servers
      thirdPartySharing: "Yes", // Possibly for integrated third-party apps within Gmail
      thirdPartySharingConsent: "Yes", // Users can opt in for sharing with third parties
    },
    updateAlerts: "Yes", // For informing users about app updates or account issues
  },
  userRightsProps: {
    adsOptOut: "Allowed", // Users can opt out of personalized ads in Google account settings
    accountDel: "Allowed", // Users can delete their accounts
    dataExport: "Allowed", // Users can export their data via Google Takeout
  },
  monetizationProps: {
    usageCost: {
      price: "Free", // The basic Gmail service is free
      note: "with ads",
    },
    recurringPayments: "Yes", // For Google One subscription
    inAppPurchases: "No", // Generally, Gmail does not offer in-app purchases
  },
  deviceResourcesProps: {
    batteryImpact: 3, // The battery impact is relatively low for email syncing
    storage: {
      size: 100, // The app size might be around 100 MB
      unit: "MB",
    },
    internet: {
      req: "Yes", // Internet is required for syncing emails
      dataPh: "Varies", // Depends on the number of emails and attachments downloaded
    },
  },
};
