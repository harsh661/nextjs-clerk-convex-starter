"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export function UserSync() {
  const { isSignedIn, isLoaded } = useAuth();
  const syncUser = useMutation(api.users.getOrCreateUser);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    syncUser();
  }, [isLoaded, isSignedIn, syncUser]);

  return null;
}
