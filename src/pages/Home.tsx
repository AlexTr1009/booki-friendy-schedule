import { AppointmentCard } from "@/components/AppointmentCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Header } from "@/components/Header";

const Home = () => {
  const appointments = [
    {
      title: "Business Strategy Meeting",
      date: "Today",
      time: "10:00 AM",
    },
    {
      title: "Product Review",
      date: "Tomorrow",
      time: "2:30 PM",
    },
    {
      title: "Team Sync",
      date: "Feb 20, 2024",
      time: "11:00 AM",
    },
  ];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <Header />
      
      <section className="mb-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-1">Manage your appointments</p>
      </section>

      <Button className="w-full mb-8" size="lg">
        <Plus className="mr-2 h-4 w-4" /> Book Appointment
      </Button>

      <section>
        <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;