"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

/**
 * Synchronizes the authenticated user with the backend when authentication state is ready.
 *
 * This component listens for the auth state to finish loading and checks whether
 * the user is signed in. Once both conditions are met, it triggers a mutation
 * to create or retrieve the corresponding user record via the API.
 *
 * @returns null
 */
export function UserSync() {
  const { isSignedIn, isLoaded } = useAuth();
  const syncUser = useMutation(api.users.getOrCreateUser);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    syncUser();
  }, [isLoaded, isSignedIn, syncUser]);

  return null;
}
