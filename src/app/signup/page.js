"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SiGooglechrome } from "react-icons/si";

import { useUserStore } from "@/stores/userStore";

import { PrimaryLink } from "@/components/link";
import { PrimaryText, TertiaryText } from "@/components/text";
import { Button } from "@/components/button";
import { TextInput } from "@/components/input";

export default function SignupPage() {
  const router = useRouter();
  const { user, loading, signup } = useUserStore();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/listings");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const handleSignup = () => {
    signup({ email, password });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <PrimaryText>Create your DesiHood account</PrimaryText>
          <div className="flex justify-center">
            <TertiaryText>
              Already have an account?
              <PrimaryLink href="/login" className="ml-1">
                Log in
              </PrimaryLink>
            </TertiaryText>
          </div>
        </div>

        <form className="mt-8">
          <div className="mb-8">
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <TextInput
              label="Password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <Button variant="primary" className="w-full" onClick={handleSignup}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
