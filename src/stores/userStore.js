import { create } from "zustand";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

const supabase = createClient();

export const useUserStore = create((set) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  // Set initial user state
  setUser: (user) => set({ user }),

  // Set user profile
  setProfile: (profile) => set({ profile }),

  // Set loading state
  setLoading: (loading) => set({ loading }),

  // Set error state
  setError: (error) => set({ error }),

  // Login action
  login: async (data) => {
    try {
      set({ loading: true, error: null });

      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword(data);

      if (error) throw error;

      set({ user });
      if (user) {
        await useUserStore.getState().fetchProfile(user.id);
      }
    } catch (error) {
      set({ error: error.message });
      redirect("/error");
    } finally {
      set({ loading: false });
    }
  },

  // Signup action
  signup: async (data) => {
    try {
      set({ loading: true, error: null });

      const {
        data: { user },
        error,
      } = await supabase.auth.signUp(data);

      if (error) throw error;

      set({ user });
      if (user) {
        await useUserStore.getState().fetchProfile(user.id);
      }
    } catch (error) {
      set({ error: error.message });
      redirect("/error");
    } finally {
      set({ loading: false });
    }
  },

  // Fetch user profile
  fetchProfile: async (userId) => {
    try {
      set({ loading: true, error: null });

      const { data, error, status } = await supabase
        .from("profiles")
        .select("full_name, username, website, avatar_url")
        .eq("id", userId)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        set({ profile: data });
      }
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  // Update user profile
  updateProfile: async (profileData) => {
    try {
      set({ loading: true, error: null });

      const { error } = await supabase.from("profiles").upsert({
        id: profileData.id,
        full_name: profileData.full_name,
        username: profileData.username,
        website: profileData.website,
        avatar_url: profileData.avatar_url,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      set({ profile: profileData });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  // Sign out
  signOut: async () => {
    try {
      set({ loading: true, error: null });
      await supabase.auth.signOut();
      set({ user: null, profile: null });
      redirect("/login");
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
