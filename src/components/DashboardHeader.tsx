
import { Bell, Settings, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-gray-600 text-sm">Your AI Financial Assistant</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-blue-50">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-blue-50">
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>
          <Avatar className="h-10 w-10 ring-2 ring-blue-200">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
