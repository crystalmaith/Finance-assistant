
import { Bell, Settings, User, TrendingUp, FileText, LogOut, Palette } from "lucide-react";
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
    <header className="bg-card/90 backdrop-blur-lg rounded-2xl border border-border shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-muted-foreground text-sm">Your AI Financial Assistant</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Settings className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-card border-border">
              <DropdownMenuItem 
                className="text-foreground hover:bg-accent cursor-pointer"
                onClick={() => navigate("/theme-settings")}
              >
                <Palette className="mr-2 h-4 w-4" />
                Theme Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 ring-2 ring-border cursor-pointer hover:ring-primary transition-all">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-fit p-0 bg-card border-border">
              <DropdownMenuLabel className="px-4 py-2 text-foreground">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <div className="p-2">
                <AccountSection />
              </div>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem 
                className="text-foreground hover:bg-accent cursor-pointer"
                onClick={() => navigate("/statements")}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Statements
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-foreground hover:bg-accent cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-foreground hover:bg-accent cursor-pointer"
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
