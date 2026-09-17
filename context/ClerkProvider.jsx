import { ClerkProvider } from '@clerk/expo';

export default function ClerkAuthProvider({ children }) {
    return (
        <ClerkProvider
            publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            {children}
        </ClerkProvider>
    );
}