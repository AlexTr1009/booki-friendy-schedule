import { Card } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

interface AppointmentCardProps {
  title: string;
  time: string;
  date: string;
}

export const AppointmentCard = ({ title, time, date }: AppointmentCardProps) => {
  return (
    <Card className="p-4 backdrop-blur-md bg-secondary/30 hover:bg-secondary/40 border-secondary/50 transition-all duration-300 cursor-pointer animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 backdrop-blur-sm rounded-lg">
          <CalendarClock className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground/90">{title}</h3>
          <p className="text-sm text-muted-foreground/80 mt-1">{date}</p>
          <p className="text-sm text-primary/90 mt-1">{time}</p>
        </div>
      </div>
    </Card>
  );
};