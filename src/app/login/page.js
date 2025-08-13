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

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, login } = useUserStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/listings");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <PrimaryText>Welcome to DesiHood</PrimaryText>
          <div className="flex justify-center">
            <TertiaryText>
              Need an account?
              <PrimaryLink href="/signup" className="ml-1">
                Sign up
              </PrimaryLink>
            </TertiaryText>
          </div>
        </div>

        <Button className="w-full">
          <SiGooglechrome className="w-4 h-4 mr-2" />
          Continue with Google
        </Button>

        <div className="flex items-center justify-center">
          <div className="w-1/2 h-[1px] bg-gray-300 mr-2"></div>
          <TertiaryText>OR</TertiaryText>
          <div className="w-1/2 h-[1px] bg-gray-300 ml-2"></div>
        </div>

        <form className="mt-8 space-y-6">
          <div className="mb-8">
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextInput
              label="Password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <PrimaryLink href="/forgot-password" className="text-sm ml-1">
              Forgot Password?
            </PrimaryLink>
          </div>
          <Button variant="primary" className="w-full" onClick={handleLogin}>
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
