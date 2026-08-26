import { Auth0Provider as Auth0SDKProvider } from "react-native-auth0";

export default function Auth0Provider({ children }) {
    return (
        <Auth0SDKProvider
            domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID}
        >
            {children}
        </Auth0SDKProvider>
    );
}