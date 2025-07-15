import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Camera, Save, User, Mail, Phone, MapPin, Bell, Shield, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe", 
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    bio: "Financial enthusiast and AI assistant user",
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisible: true,
      dataSharing: false
    }
  });

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile:", profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" size="sm" className="border-stone-300 hover:bg-stone-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-600 to-amber-600 bg-clip-text text-transparent">
              Profile Settings
            </h1>
            <p className="text-stone-600">Manage your account and preferences</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <Card className="bg-stone-50/80 border-stone-200/60">
            <CardHeader>
              <CardTitle className="text-stone-800 flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Picture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-gradient-to-r from-stone-400 to-amber-400 text-white text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" className="border-stone-300 hover:bg-stone-100">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="bg-stone-50/80 border-stone-200/60">
            <CardHeader>
              <CardTitle className="text-stone-800 flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-stone-700">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                    className="border-stone-300 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-stone-700">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                    className="border-stone-300 focus:border-amber-400"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-stone-700 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="border-stone-300 focus:border-amber-400"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-stone-700 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                  className="border-stone-300 focus:border-amber-400"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-stone-700 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                  className="border-stone-300 focus:border-amber-400"
                />
              </div>

              <div>
                <Label htmlFor="bio" className="text-stone-700">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  className="border-stone-300 focus:border-amber-400 resize-none"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-stone-50/80 border-stone-200/60">
            <CardHeader>
              <CardTitle className="text-stone-800 flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-stone-700">Email Notifications</Label>
                  <p className="text-sm text-stone-500">Receive updates via email</p>
                </div>
                <Switch
                  checked={profile.notifications.email}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, notifications: { ...prev.notifications, email: checked } }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-stone-700">Push Notifications</Label>
                  <p className="text-sm text-stone-500">Receive push notifications</p>
                </div>
                <Switch
                  checked={profile.notifications.push}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, notifications: { ...prev.notifications, push: checked } }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-stone-700">SMS Notifications</Label>
                  <p className="text-sm text-stone-500">Receive text messages</p>
                </div>
                <Switch
                  checked={profile.notifications.sms}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, notifications: { ...prev.notifications, sms: checked } }))
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="bg-stone-50/80 border-stone-200/60">
            <CardHeader>
              <CardTitle className="text-stone-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-stone-700">Profile Visibility</Label>
                  <p className="text-sm text-stone-500">Make your profile visible to others</p>
                </div>
                <Switch
                  checked={profile.privacy.profileVisible}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, privacy: { ...prev.privacy, profileVisible: checked } }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-stone-700">Data Sharing</Label>
                  <p className="text-sm text-stone-500">Allow anonymous data sharing for analytics</p>
                </div>
                <Switch
                  checked={profile.privacy.dataSharing}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, privacy: { ...prev.privacy, dataSharing: checked } }))
                  }
                />
              </div>

              <Button variant="outline" className="w-full border-stone-300 hover:bg-stone-100">
                <CreditCard className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button 
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-stone-600 to-amber-600 hover:from-stone-700 hover:to-amber-700 text-white"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}