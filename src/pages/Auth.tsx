import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      console.log("Login:", { email: formData.email, password: formData.password });
    } else {
      // Handle signup
      console.log("Signup:", formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-gradient-to-r from-stone-400 to-amber-400 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-600 to-amber-600 bg-clip-text text-transparent">
            FinanceAI
          </h1>
          <p className="text-stone-600 mt-2">Your AI Financial Assistant</p>
        </div>

        <Card className="bg-stone-50/80 border-stone-200/60 shadow-lg">
          <CardHeader>
            <Tabs value={isLogin ? "login" : "signup"} onValueChange={(value) => setIsLogin(value === "login")}>
              <TabsList className="grid w-full grid-cols-2 bg-stone-100/80">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-stone-800">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-stone-800">
                  Sign Up
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-stone-700">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="border-stone-300 focus:border-amber-400"
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-stone-700">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="border-stone-300 focus:border-amber-400"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-stone-700 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="border-stone-300 focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-stone-700 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter your password"
                    className="border-stone-300 focus:border-amber-400 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-stone-700">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Confirm your password"
                    className="border-stone-300 focus:border-amber-400"
                    required={!isLogin}
                  />
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-stone-600 to-amber-600 hover:from-stone-700 hover:to-amber-700 text-white"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              {isLogin && (
                <div className="text-center">
                  <Button variant="link" className="text-stone-600 hover:text-amber-600">
                    Forgot your password?
                  </Button>
                </div>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-stone-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button 
                  variant="link" 
                  className="text-amber-600 hover:text-amber-700 p-1 ml-1"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Button>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link to="/">
                <Button variant="link" className="text-stone-500 hover:text-stone-700">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}