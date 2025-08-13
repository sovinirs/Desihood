"use client";

import { useState } from "react";

import Image from "next/image";

import {
  ListFilter,
  BriefcaseBusiness,
  Languages,
  Calendar,
} from "lucide-react";

import { TextInput } from "@/components/input";
import { SecondaryText, PrimaryText, TertiaryText } from "@/components/text";
import { Slider } from "@/components/slider";
import { Card, CardHeader, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/select";
import { Checkbox } from "@/components/checkbox";

import Listing1 from "../../../public/images/50.jpeg";

export default function ListingsPage() {
  const [city, setCity] = useState("");

  return (
    <div className="flex items-start justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full">
        <div className="flex">
          <div className="w-1/5 min-h-[90vh] flex flex-col px-8 justify-between border-r-2">
            <div>
              <SecondaryText className="flex items-center">
                <ListFilter className="w-4 h-4 mr-1" /> Filters
              </SecondaryText>
            </div>
            <div className="mt-4">
              <TextInput
                label="City"
                placeholder="e.g. New York"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Budget Range (in USD)
              </label>
              <Slider defaultValue={[0]} max={100} step={1} />
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Lease Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Lease Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="new-lease">New Lease</SelectItem>
                    <SelectItem value="roomate-sublease">
                      Roomate/Sublease
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Move-in Date
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="new-lease">New Lease</SelectItem>
                    <SelectItem value="roomate-sublease">
                      Roomate/Sublease
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Languages
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="new-lease">New Lease</SelectItem>
                    <SelectItem value="roomate-sublease">
                      Roomate/Sublease
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Amenities
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="new-lease">New Lease</SelectItem>
                    <SelectItem value="roomate-sublease">
                      Roomate/Sublease
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                htmlFor={"amenities"}
              >
                Food Preference
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="new-lease">New Lease</SelectItem>
                    <SelectItem value="roomate-sublease">
                      Roomate/Sublease
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <Checkbox label="Private Room Only" />
            </div>
            <div className="mt-4">
              <Checkbox label="LinkedIn Verified Only" />
            </div>
            <div className="mt-4">
              <Button variant="primary" className="w-full">
                Apply Filters
              </Button>
            </div>
            <div className="mt-4">
              <Button variant="secondary" className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>
          <div className="w-4/5 px-8">
            <PrimaryText>Listings</PrimaryText>
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="flex">
                    <Image
                      src={Listing1}
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
                      Maharashtra
                    </div>
                    <div>
                      <TertiaryText>
                        <BriefcaseBusiness className="w-4 h-4 mr-2" />
                        Professional
                      </TertiaryText>
                      <TertiaryText>
                        <Languages className="w-4 h-4 mr-2" />
                        Hindi, English
                      </TertiaryText>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <SecondaryText className="font-extrabold">
                      $ 1200 / month
                    </SecondaryText>
                    <TertiaryText>
                      <Calendar className="w-4 h-4 mr-2" /> Move-in: 12/06/2025
                    </TertiaryText>
                  </div>
                  <div className="flex items-start justify-between mt-4 gap-4">
                    <Button variant="primary" className="w-full">
                      View Details
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
