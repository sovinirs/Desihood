"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useUserStore } from "@/stores/userStore";

const supabase = createClient();

export default function UserProvider({ children }) {
  const { setUser, setLoading, fetchProfile } = useUserStore();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, setLoading, fetchProfile]);

  return children;
}
