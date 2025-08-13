import { Card, CardHeader, CardContent } from "@/components/card";
import { TextInput } from "@/components/input";
import { TextArea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function RoomCard({
  room,
  index,
  onRemove,
  onUpdate,
  onAddOccupant,
  onRemoveOccupant,
  onToggleVacancy,
}) {
  return (
    <Card className="border border-gray-200 rounded-2xl shadow-sm">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          Room {index + 1} ({room.withBath ? "With Bath" : "No Bath"})
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          aria-label="Remove Room"
        >
          ✕
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Occupants Section */}
        <div>
          <label className="text-sm font-medium block mb-1">
            Current Occupants
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {room.occupants.map((occ, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-100 px-2 py-1 rounded-full"
              >
                {occ.avatarUrl ? (
                  <img
                    src={occ.avatarUrl}
                    alt={occ.name}
                    className="w-6 h-6 rounded-full mr-1"
                  />
                ) : (
                  <div className="w-6 h-6 bg-gray-300 rounded-full mr-1" /> // Placeholder avatar
                )}
                <span className="text-sm mr-1">{occ.name}</span>
                <button
                  type="button" // Good practice for buttons not submitting forms
                  className="text-xs text-red-500 hover:text-red-700"
                  onClick={() => onRemoveOccupant(i)}
                  aria-label={`Remove ${occ.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <TextInput
              label="Add Occupant (LinkedIn URL or Name)"
              placeholder="https://linkedin.com/in/... or John Doe"
              value={room.newOccupantInput}
              onChange={(e) => onUpdate({ newOccupantInput: e.target.value })}
              name={`newOccupantInput-${index}`}
            />
            <Button variant="outline" size="sm" onClick={onAddOccupant}>
              Add Occupant
            </Button>
          </div>
        </div>

        {/* Vacancy Toggle + Conditional Rent/Capacity */}
        <div className="flex items-center space-x-2 pt-2">
          <input
            type="checkbox"
            id={`vacant-${room.id}`}
            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            checked={room.isVacant}
            onChange={onToggleVacancy}
          />
          <label htmlFor={`vacant-${room.id}`} className="text-sm font-medium">
            This room is available for rent
          </label>
        </div>

        {room.isVacant && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 p-4 border border-gray-200 rounded-md bg-gray-50">
            <TextInput
              label="Rent Price ($ per person)"
              placeholder="e.g. 625"
              value={room.rent}
              onChange={(e) => onUpdate({ rent: e.target.value })}
              name={`rent-${index}`}
              type="number"
            />
            <TextInput
              label="Max # of Roommates in this room"
              placeholder="e.g. 1 or 2"
              value={room.capacity}
              onChange={(e) => onUpdate({ capacity: e.target.value })}
              name={`capacity-${index}`}
              type="number"
            />
          </div>
        )}

        {/* Room Notes */}
        <div className="mt-4">
          <TextArea
            label="Room Notes (optional)"
            placeholder="e.g. Shared common bath, east-facing window, quiet hours after 10 PM…"
            value={room.notes}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            name={`notes-${index}`}
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}
