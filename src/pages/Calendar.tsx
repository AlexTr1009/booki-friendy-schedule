import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-1">View and schedule appointments</p>
      </header>

      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="font-semibold">February 2024</h2>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <div key={day} className="text-sm text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <Button
              key={day}
              variant="ghost"
              className="h-10 w-full rounded-lg hover:bg-primary/20"
            >
              {day}
            </Button>
          ))}
        </div>
      </Card>

      <section>
        <h2 className="text-lg font-semibold mb-4">Available Slots</h2>
        <div className="grid grid-cols-2 gap-2">
          {["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"].map((time) => (
            <Button key={time} variant="outline">
              {time}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Calendar;