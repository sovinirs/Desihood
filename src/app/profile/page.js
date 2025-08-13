"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useUserStore } from "@/stores/userStore";

import Image from "next/image";

import {
  Edit,
  VerifiedIcon,
  BriefcaseBusiness,
  Languages,
  ForkKnife,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/card";
import { PrimaryText, SecondaryText, TertiaryText } from "@/components/text";
import { Button } from "@/components/button";

import ProfilePic from "../../../public/images/51.png";

export default function ProfilePage() {
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
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="w-full h-32 relative px-2 py-6 bg-gray-200">
                <Image
                  src={ProfilePic}
                  alt="profile-picture"
                  className="h-32 w-32 absolute -bottom-16 left-2 rounded-full border-4"
                />
                <Button
                  variant="secondary"
                  className="absolute -top-1 -right-2"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit Profile
                </Button>
              </div>

              <div className="mt-20">
                <PrimaryText>Sooryavanshi Devaraj</PrimaryText>
              </div>
              <div className="mt-2 flex flex-row gap-4">
                <TertiaryText>
                  <BriefcaseBusiness className="w-4 h-4 mr-1" /> Professional
                </TertiaryText>
                <TertiaryText>|</TertiaryText>
                <TertiaryText>
                  <VerifiedIcon className="w-4 h-4 mr-1" /> LinkedIn Verified
                </TertiaryText>
              </div>
              <div className="h-1 bg-gray-800 w-full mt-4"></div>
            </CardHeader>
            <CardContent>
              <div>
                <SecondaryText>About Me</SecondaryText>
                <TertiaryText className="text-justify">
                  Your computer may be offline or the Figma server may be
                  experiencing problems. Your computer may be offline or the
                  Figma server may be experiencing problems. Your computer may
                  be offline or the Figma server may be experiencing problems.
                  Your computer may be offline or the Figma server may be
                  experiencing problems.
                </TertiaryText>
              </div>
              <div className="mt-8 flex">
                <div className="flex items-start">
                  <div className="pr-2 pt-2">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <TertiaryText className="font-bold">
                      Language Preferences
                    </TertiaryText>
                    <TertiaryText>Tamil, Malayalam, Kannada</TertiaryText>
                  </div>
                </div>
                <div className="ml-10 flex items-start">
                  <div className="pr-2 pt-2">
                    <ForkKnife className="w-5 h-5" />
                  </div>
                  <div>
                    <TertiaryText className="font-bold">
                      Food Preferences
                    </TertiaryText>
                    <TertiaryText>Vegan</TertiaryText>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
