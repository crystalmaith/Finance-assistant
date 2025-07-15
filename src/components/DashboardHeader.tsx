
import { Bell, Settings, User, TrendingUp, FileText, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AccountSection } from "./AccountSection";
import { Link, useNavigate } from "react-router-dom";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-amber-50/90 backdrop-blur-lg rounded-2xl border border-amber-200/50 shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-amber-700/80 text-sm">Your AI Financial Assistant</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-amber-100/70">
            <Bell className="h-5 w-5 text-amber-700" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-amber-100/70">
            <Settings className="h-5 w-5 text-amber-700" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 ring-2 ring-stone-300 cursor-pointer hover:ring-stone-400 transition-all">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-r from-stone-400 to-amber-400 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-fit p-0 bg-white border-stone-200">
              <DropdownMenuLabel className="px-4 py-2 text-stone-800">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-stone-200" />
              <div className="p-2">
                <AccountSection />
              </div>
              <DropdownMenuSeparator className="bg-stone-200" />
              <DropdownMenuItem 
                className="text-stone-600 hover:bg-stone-50 cursor-pointer"
                onClick={() => navigate("/statements")}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Statements
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-stone-600 hover:bg-stone-50 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-stone-600 hover:bg-stone-50 cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
