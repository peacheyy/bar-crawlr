import 'dotenv/config';

export default {
  expo: {
    name: "bar-crawlr",
    slug: "bar-crawlr",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      supportsTablet: true
    },
    android: {
      googleMaps: { 
        apiKey: process.env.GOOGLE_MAPS_API_KEY 
      },
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
};