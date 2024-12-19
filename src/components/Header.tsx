import { Settings, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`
            );
            const data = await response.json();
            if (data.results?.[0]?.components?.city) {
              setLocation(data.results[0].components.city);
            } else {
              setLocation("Location not found");
            }
          } catch (error) {
            setLocation("Location not found");
          }
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <header className="flex justify-between items-center p-4 mb-6 card bg-opacity-30">
      <div className="flex items-center gap-2">
        <MapPin className="text-primary h-5 w-5" />
        <span className="text-sm text-muted-foreground">{location}</span>
      </div>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
    </header>
  );
};