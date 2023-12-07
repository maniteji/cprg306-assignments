"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Using the useUserAuth custom hook to get authentication-related information
  const { user, githubSignIn, firebaseSignout } = useUserAuth();

  // Function to handle authentication (sign in with GitHub and sign out from Firebase)
  const handleAuthentication = async () => {
    if (user) {
      await githubSignIn();
      await firebaseSignout();
    }
  };

  // Automatically trigger authentication handling when the component mounts
  handleAuthentication();

  // Component rendering
  return (
    <main>
      <header>
        <p>
          Welcome, {user ? `${user.displayName} (${user.email})` : 'Guest'}
        </p>
        <h1>Protected Page</h1>
      </header>
    </main>
  );
}
