import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const themes = [
  {
    name: "Amber Gold",
    id: "amber",
    primary: "hsl(45, 100%, 51%)",
    secondary: "hsl(39, 100%, 57%)",
    background: "hsl(45, 100%, 97%)",
    preview: "from-amber-400 to-orange-400"
  },
  {
    name: "Ocean Blue",
    id: "blue",
    primary: "hsl(221, 83%, 53%)",
    secondary: "hsl(213, 93%, 67%)",
    background: "hsl(221, 100%, 97%)",
    preview: "from-blue-400 to-cyan-400"
  },
  {
    name: "Forest Green",
    id: "green",
    primary: "hsl(142, 76%, 36%)",
    secondary: "hsl(160, 84%, 39%)",
    background: "hsl(142, 100%, 97%)",
    preview: "from-green-400 to-emerald-400"
  },
  {
    name: "Royal Purple",
    id: "purple",
    primary: "hsl(263, 70%, 50%)",
    secondary: "hsl(272, 81%, 67%)",
    background: "hsl(263, 100%, 97%)",
    preview: "from-purple-400 to-indigo-400"
  },
  {
    name: "Rose Pink",
    id: "rose",
    primary: "hsl(330, 81%, 60%)",
    secondary: "hsl(346, 87%, 65%)",
    background: "hsl(330, 100%, 97%)",
    preview: "from-rose-400 to-pink-400"
  },
  {
    name: "Sunset Orange",
    id: "orange",
    primary: "hsl(25, 95%, 53%)",
    secondary: "hsl(43, 96%, 56%)",
    background: "hsl(25, 100%, 97%)",
    preview: "from-orange-400 to-yellow-400"
  }
];

export const ThemeSettings = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState("amber");

  const applyTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary.replace('hsl(', '').replace(')', ''));
    root.style.setProperty('--secondary', theme.secondary.replace('hsl(', '').replace(')', ''));
    root.style.setProperty('--background', theme.background.replace('hsl(', '').replace(')', ''));
    setSelectedTheme(theme.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Theme Settings
            </h1>
            <p className="text-muted-foreground">Choose your preferred color theme</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => applyTheme(theme)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                  {selectedTheme === theme.id && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className={`w-full h-20 rounded-lg bg-gradient-to-r ${theme.preview} mb-4`} />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <span className="text-sm text-muted-foreground">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: theme.secondary }}
                    />
                    <span className="text-sm text-muted-foreground">Secondary</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>See how your selected theme looks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-6 rounded-lg bg-gradient-to-r from-background to-primary/5 border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl">
                  <div className="h-6 w-6 bg-white rounded" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    FinanceAI
                  </h3>
                  <p className="text-muted-foreground text-sm">Your AI Financial Assistant</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Sample Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};