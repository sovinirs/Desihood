"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserStore } from "@/stores/userStore";

import { PrimaryText, SecondaryText, TertiaryText } from "@/components/text";
import { Card, CardHeader, CardContent } from "@/components/card";
import { TextInput } from "@/components/input";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Button } from "@/components/button";
import { TextArea } from "@/components/textarea";
import RoomCard from "@/components/room-card";
import { PhotoUpload } from "@/components/photo-upload";

const amenitiesList = [
  "WiFi",
  "Kitchen",
  "Washer",
  "Dryer",
  "Air Conditioning",
  "Heating",
  "Dedicated Workspace",
  "TV",
  "Hair Dryer",
  "Iron",
  "Pool",
  "Gym",
  "Free Parking",
  "EV Charger",
];

export default function NewListingPage() {
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

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [rooms, setRooms] = useState([
    // Initial room structure for reference, will be managed by addRoom
    // {
    //   id: string,
    //   withBath: boolean,
    //   occupants: [{ name: string, linkedinUrl: string, avatarUrl: string|null }],
    //   newOccupantInput: string,
    //   isVacant: boolean,
    //   rent: string,
    //   capacity: string,
    //   notes: string
    // }
  ]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  // --- Unit Configuration Handlers ---
  function addRoom(withBath) {
    setRooms((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        withBath,
        occupants: [],
        newOccupantInput: "",
        isVacant: false,
        rent: "",
        capacity: "",
        notes: "",
      },
    ]);
  }

  function removeRoom(index) {
    setRooms((prev) => prev.filter((_, i) => i !== index));
  }

  function updateRoom(index, partial) {
    setRooms((prev) => {
      const arr = [...prev];
      arr[index] = { ...arr[index], ...partial };
      return arr;
    });
  }

  function addOccupant(index) {
    setRooms((prev) => {
      const arr = [...prev];
      const room = arr[index];
      if (room.newOccupantInput.trim() === "") return prev; // No change if input is empty
      room.occupants.push({
        name: room.newOccupantInput.trim(),
        linkedinUrl: room.newOccupantInput.trim(), // Assuming LinkedIn URL is same as name for now
        avatarUrl: null, // Default avatar
      });
      room.newOccupantInput = ""; // Clear input
      return arr;
    });
  }

  function removeOccupant(index, occIndex) {
    setRooms((prev) => {
      const arr = [...prev];
      arr[index].occupants = arr[index].occupants.filter(
        (_, i) => i !== occIndex
      );
      return arr;
    });
  }

  function toggleVacancy(index) {
    setRooms((prev) => {
      const arr = [...prev];
      arr[index].isVacant = !arr[index].isVacant;
      if (!arr[index].isVacant) {
        // Clear rent and capacity if not vacant
        arr[index].rent = "";
        arr[index].capacity = "";
      }
      return arr;
    });
  }
  // --- End Unit Configuration Handlers ---

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="flex justify-center">
          <PrimaryText>Create New Listing</PrimaryText>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <SecondaryText>Basic Information</SecondaryText>
              <div className="h-1 bg-gray-800 w-full mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <RadioGroup label="Lease Type">
                  <RadioGroupItem value="new-lease">
                    <div>
                      <div>New Lease</div>
                      <div>(You are starting a new lease)</div>
                    </div>
                  </RadioGroupItem>
                  <RadioGroupItem value="roomate">
                    <div>
                      <div>Roommate/Sublease</div>
                      <div>(You need someone to join an existing lease)</div>
                    </div>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
              <div className="mb-8">
                <TextInput
                  label="Location"
                  placeholder="Enter the address of the listing"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <TextInput
                    label="Rent"
                    placeholder="How much does the rent cost?"
                  />
                </div>
                <div>
                  <TextInput
                    label="Utilities"
                    placeholder="How much are the utilities?"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <TextInput
                    label="Move-in Date"
                    placeholder="When can you move in?"
                  />
                </div>
                <div>
                  <TextInput
                    label="Lease End Date"
                    placeholder="When does the lease end?"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                  htmlFor={"amenities"}
                >
                  Amenities
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                  {amenitiesList.map((amenity) => (
                    <Button
                      key={amenity}
                      onClick={() => toggleAmenity(amenity)}
                      className={`
                      p-4 border transition-colors
                      ${
                        selectedAmenities.includes(amenity)
                          ? "bg-gray-800 text-white border-gray-800"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }
                    `}
                    >
                      {amenity}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block"
                  htmlFor={"unit-configuration"}
                >
                  Unit Configuration
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Describe each room, who's already in it, and which rooms are
                  available.
                </p>

                <div className="flex space-x-4 my-4">
                  <Button
                    onClick={() => addRoom(true)}
                    className="border border-gray-300"
                  >
                    + Room with Bath
                  </Button>
                  <Button
                    onClick={() => addRoom(false)}
                    className="border border-gray-300"
                  >
                    + Room without Bath
                  </Button>
                </div>
                <div className="space-y-6">
                  {rooms.map((room, idx) => (
                    <RoomCard
                      key={room.id}
                      room={room}
                      index={idx}
                      onRemove={() => removeRoom(idx)}
                      onUpdate={(partial) => updateRoom(idx, partial)}
                      onAddOccupant={() => addOccupant(idx)}
                      onRemoveOccupant={(occIdx) => removeOccupant(idx, occIdx)}
                      onToggleVacancy={() => toggleVacancy(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
                  htmlFor="photos"
                >
                  Photos
                </label>
                <PhotoUpload onPhotosChange={setPhotos} />
              </div>
              <div className="mb-8">
                <TextArea
                  label="Description"
                  placeholder="Add any additional notes about the listing"
                />
              </div>
              <div className="flex justify-end mt-8">
                <Button className="bg-gray-800 text-white hover:bg-gray-700">
                  Create Listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
