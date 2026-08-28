module.exports = {
    name: "mi-app",
    slug: "mi-app",
    version: "1.0.0",
    scheme: "pencawdc",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",

    ios: {
        supportsTablet: true,
    },

    android: {
        package: "com.wdc.penca",
        adaptiveIcon: {
            backgroundColor: "#E6F4FE",
            foregroundImage: "./assets/android-icon-foreground.png",
            backgroundImage: "./assets/android-icon-background.png",
            monochromeImage: "./assets/android-icon-monochrome.png",
        },
    },

    web: {
        favicon: "./assets/favicon.png",
    },

    plugins: [
        "expo-font",
        "expo-status-bar",
        [
            "react-native-auth0",
            {
                domain: "wdc-webdesigncarmelo.us.auth0.com",
                customScheme: "pencawdc",
            },
        ],
    ],

    extra: {
        eas: {
            projectId: "e96173a7-c5f2-400b-a21f-099a22cd0f57",
        },
    },
};