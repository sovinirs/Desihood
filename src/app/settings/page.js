"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useUserStore } from "@/stores/userStore";

import { Card, CardContent, CardHeader } from "@/components/card";
import { PrimaryText, SecondaryText, TertiaryText } from "@/components/text";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import { Trash, LogOut, Share2, Linkedin } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const { user, loading } = useUserStore();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <div className="flex justify-center items-start bg-gray-50 py-12">
      <div className="w-full max-w-2xl px-4">
        <PrimaryText className="text-3xl font-bold text-center mb-10">
          Settings
        </PrimaryText>

        <Card className="w-full">
          <CardHeader>
            <SecondaryText>Profile Visibility</SecondaryText>
            <TertiaryText>
              Control how your profile information is displayed to others.
            </TertiaryText>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">
                    Show LinkedIn Verified Badge
                  </h3>
                  <p className="text-sm text-gray-500">
                    Display the "LinkedIn Verified" badge on your profile and
                    listings if connected.
                  </p>
                </div>
              </div>
              <Switch id="linkedin-badge" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Share2 className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Allow Profile Sharing</h3>
                  <p className="text-sm text-gray-500">
                    Allow other users to view your detailed profile page.
                  </p>
                </div>
              </div>
              <Switch id="profile-sharing" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-8 border-red-500">
          <CardHeader>
            <SecondaryText>Account Actions</SecondaryText>
            <TertiaryText>
              Manage your account status and data. These actions are
              irreversible.
            </TertiaryText>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="destructive" className="w-full justify-start p-4">
              <div className="flex items-center">
                <Trash className="h-5 w-5 mr-3" />
                <span className="font-semibold">Delete Account</span>
              </div>
            </Button>
            <Button variant="secondary" className="w-full justify-start p-4">
              <div className="flex items-center">
                <LogOut className="h-5 w-5 mr-3" />
                <span className="font-semibold">Logout</span>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
