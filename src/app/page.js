"use client";

import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader, CardContent } from "@/components/card";
import { PrimaryText, SecondaryText, TertiaryText } from "@/components/text";
import { Button } from "@/components/button";
import {
  BriefcaseBusiness,
  Languages,
  Calendar,
  Home,
  Users,
  MessageSquare,
} from "lucide-react";

import ProfilePicture from "../../public/images/50.jpeg";
import ListingImage from "../../public/images/51.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
          <PrimaryText className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Your Desi Hood
          </PrimaryText>
          <SecondaryText className="mt-4 max-w-2xl mx-auto">
            Connect with roommates and find apartments that fit your lifestyle
            and preferences within the desi community.
          </SecondaryText>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/listings">
              <Button variant="primary" size="lg">
                Find a Roommate
              </Button>
            </Link>
            <Link href="/new-listing">
              <Button variant="secondary" size="lg">
                List Your Place
              </Button>
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <PrimaryText className="text-3xl font-bold text-center mb-12">
            How It Works
          </PrimaryText>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary-foreground p-3 rounded-full w-fit">
                  <Users className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="mt-2">
                  Sign up and create a profile to let others know about your
                  preferences.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary-foreground p-3 rounded-full w-fit">
                  <Home className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Browse Listings</h3>
                <p className="mt-2">
                  Filter and browse through listings to find the perfect match
                  for you.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary-foreground p-3 rounded-full w-fit">
                  <MessageSquare className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Connect & Move In</h3>
                <p className="mt-2">
                  Chat with potential roommates and finalize your new home.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <PrimaryText className="text-3xl font-bold text-center mb-12">
            Featured Listings
          </PrimaryText>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dummy Listing 1 */}
            <Card>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex">
                  <Image
                    src={ProfilePicture}
                    alt="listing"
                    width={52}
                    height={52}
                    className="neo-brutal-border mr-4"
                  />
                  <SecondaryText>Priya Sharma</SecondaryText>
                </div>
                <div className="rounded px-2 py-1 text-xs bg-[hsl(var(--primary))] font-bold">
                  Roommate
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="rounded px-2 py-1 text-xs border-2 font-bold">
                    New York
                  </div>
                  <div>
                    <TertiaryText>
                      <BriefcaseBusiness className="w-4 h-4 mr-2" />
                      Software Engineer
                    </TertiaryText>
                    <TertiaryText>
                      <Languages className="w-4 h-4 mr-2" />
                      Hindi, English
                    </TertiaryText>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-4">
                  <SecondaryText className="font-extrabold">
                    $ 1500 / month
                  </SecondaryText>
                  <TertiaryText>
                    <Calendar className="w-4 h-4 mr-2" /> Move-in: 08/01/2024
                  </TertiaryText>
                </div>
                <div className="flex items-start justify-between mt-4 gap-4">
                  <Button variant="primary" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Dummy Listing 2 */}
            <Card>
              <Image
                src={ListingImage}
                alt="listing"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="flex flex-row items-start justify-between">
                <SecondaryText>1BHK Apartment in Jumeirah</SecondaryText>
                <div className="rounded px-2 py-1 text-xs bg-[hsl(var(--primary))] font-bold">
                  Apartment
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="rounded px-2 py-1 text-xs border-2 font-bold">
                    Dubai
                  </div>
                </div>
                <div className="flex items-start justify-between mt-4">
                  <SecondaryText className="font-extrabold">
                    $ 2500 / month
                  </SecondaryText>
                  <TertiaryText>
                    <Calendar className="w-4 h-4 mr-2" /> Available Now
                  </TertiaryText>
                </div>
                <div className="flex items-start justify-between mt-4 gap-4">
                  <Button variant="primary" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Dummy Listing 3 */}
            <Card>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex">
                  <Image
                    src={ProfilePicture}
                    alt="listing"
                    width={52}
                    height={52}
                    className="neo-brutal-border mr-4"
                  />
                  <SecondaryText>Raj Patel</SecondaryText>
                </div>
                <div className="rounded px-2 py-1 text-xs bg-[hsl(var(--primary))] font-bold">
                  Roommate
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="rounded px-2 py-1 text-xs border-2 font-bold">
                    Toronto
                  </div>
                  <div>
                    <TertiaryText>
                      <BriefcaseBusiness className="w-4 h-4 mr-2" />
                      Student
                    </TertiaryText>
                    <TertiaryText>
                      <Languages className="w-4 h-4 mr-2" />
                      Gujarati, English
                    </TertiaryText>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-4">
                  <SecondaryText className="font-extrabold">
                    $ 800 / month
                  </SecondaryText>
                  <TertiaryText>
                    <Calendar className="w-4 h-4 mr-2" /> Move-in: 09/01/2024
                  </TertiaryText>
                </div>
                <div className="flex items-start justify-between mt-4 gap-4">
                  <Button variant="primary" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <SecondaryText>
            &copy; 2024 Desihood. All Rights Reserved.
          </SecondaryText>
          <div className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
