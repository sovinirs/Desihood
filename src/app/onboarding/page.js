"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserStore } from "@/stores/userStore";

import { PrimaryText, TertiaryText, SecondaryText } from "@/components/text";
import { Card, CardHeader, CardContent } from "@/components/card";
import { TextInput } from "@/components/input";
import { FileUpload } from "@/components/file-upload";
import { MultiSelect } from "@/components/multi-select";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Button } from "@/components/button";
import { TextArea } from "@/components/textarea";

import { SiLinkedin } from "react-icons/si";

export default function OnboardingPage() {
  const router = useRouter();
  const { user, loading } = useUserStore();

  const [fullName, setFullName] = useState("");

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
      <div className="max-w-2xl w-full">
        <div className="flex justify-center">
          <PrimaryText>Complete your profile</PrimaryText>
        </div>
        <div className="flex justify-center mt-2">
          <TertiaryText>
            Tell us a bit about yourself to find the best matches
          </TertiaryText>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <SecondaryText>Basic Information</SecondaryText>
              <div className="h-1 bg-gray-800 w-full mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <TextInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-8">
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                  htmlFor="verify-linkedin"
                >
                  Verify your account with LinkedIn
                </label>
                <Button variant="secondary" className="w-full">
                  <SiLinkedin className="w-4 h-4 mr-2" />
                  Verify with LinkedIn
                </Button>
              </div>
              <div className="mb-8">
                <TextArea
                  label="Your Bio"
                  placeholder="Bio generated from your LinkedIn profile"
                />
              </div>
              <div className="mt-8">
                <div className="flex gap-2">
                  <SecondaryText>Preferences</SecondaryText>
                  <TertiaryText>
                    (Preferences are optional. You don't have to select if you
                    are open to all.)
                  </TertiaryText>
                </div>
                <div className="h-1 bg-gray-800 w-full mt-2"></div>
              </div>
              <div className="my-8">
                <MultiSelect
                  label="Languages"
                  placeholder="Select your language preferences"
                  options={[
                    { label: "English", value: "english" },
                    { label: "Spanish", value: "spanish" },
                    { label: "French", value: "french" },
                    { label: "German", value: "german" },
                    { label: "Italian", value: "italian" },
                  ]}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-8">
                  <RadioGroup label="Food">
                    <RadioGroupItem value="vegetarian">
                      Vegetarian
                    </RadioGroupItem>
                    <RadioGroupItem value="non-vegetarian">
                      Non-Vegetarian
                    </RadioGroupItem>
                  </RadioGroup>
                </div>
                <div className="mb-8">
                  <RadioGroup label="Occupation">
                    <RadioGroupItem value="student">Student</RadioGroupItem>
                    <RadioGroupItem value="professional">
                      Professional
                    </RadioGroupItem>
                  </RadioGroup>
                </div>
              </div>
              <div className="mb-8">
                <RadioGroup label="Gender">
                  <RadioGroupItem value="male">Male</RadioGroupItem>
                  <RadioGroupItem value="female">Female</RadioGroupItem>
                </RadioGroup>
              </div>
              <div>
                <Button variant="primary" className="w-full">
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
