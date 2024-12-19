import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, ChevronRight, User } from "lucide-react";

const Profile = () => {
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your account</p>
      </header>

      <Card className="p-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-full">
            <User className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </Card>

      <nav className="space-y-2">
        {[
          { icon: Bell, label: "Notifications" },
          { icon: User, label: "Personal Info" },
        ].map(({ icon: Icon, label }) => (
          <Button
            key={label}
            variant="ghost"
            className="w-full justify-between h-14"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              {label}
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Profile;