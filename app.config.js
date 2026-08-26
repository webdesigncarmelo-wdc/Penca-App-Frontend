const { expo } = require("./app.json");

module.exports = {
    ...expo,
    plugins: [
        ...(expo.plugins || []),
        "react-native-auth0",
    ],
};