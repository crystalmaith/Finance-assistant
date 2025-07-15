import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Calendar, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

interface StatementData {
  period: string;
  totalIncome: number;
  totalExpenses: number;
  netChange: number;
  categories: { name: string; amount: number; type: "income" | "expense" }[];
}

const mockStatements = {
  monthly: [
    {
      period: "January 2024",
      totalIncome: 5200,
      totalExpenses: 3800,
      netChange: 1400,
      categories: [
        { name: "Salary", amount: 5000, type: "income" as const },
        { name: "Freelance", amount: 200, type: "income" as const },
        { name: "Rent", amount: 1200, type: "expense" as const },
        { name: "Groceries", amount: 450, type: "expense" as const },
        { name: "Utilities", amount: 180, type: "expense" as const },
        { name: "Entertainment", amount: 320, type: "expense" as const }
      ]
    },
    {
      period: "December 2023",
      totalIncome: 4800,
      totalExpenses: 4200,
      netChange: 600,
      categories: [
        { name: "Salary", amount: 4800, type: "income" as const },
        { name: "Rent", amount: 1200, type: "expense" as const },
        { name: "Groceries", amount: 520, type: "expense" as const },
        { name: "Holiday Shopping", amount: 800, type: "expense" as const },
        { name: "Utilities", amount: 190, type: "expense" as const }
      ]
    }
  ],
  weekly: [
    {
      period: "Week of Jan 15-21, 2024",
      totalIncome: 1250,
      totalExpenses: 420,
      netChange: 830,
      categories: [
        { name: "Salary", amount: 1250, type: "income" as const },
        { name: "Groceries", amount: 120, type: "expense" as const },
        { name: "Gas", amount: 65, type: "expense" as const },
        { name: "Dining Out", amount: 85, type: "expense" as const },
        { name: "Coffee", amount: 35, type: "expense" as const }
      ]
    }
  ],
  yearly: [
    {
      period: "2023",
      totalIncome: 58400,
      totalExpenses: 45200,
      netChange: 13200,
      categories: [
        { name: "Salary", amount: 55000, type: "income" as const },
        { name: "Freelance", amount: 3400, type: "income" as const },
        { name: "Housing", amount: 14400, type: "expense" as const },
        { name: "Transportation", amount: 8500, type: "expense" as const },
        { name: "Food", amount: 6200, type: "expense" as const },
        { name: "Utilities", amount: 2100, type: "expense" as const }
      ]
    }
  ]
};

export default function Statements() {
  const [activeTab, setActiveTab] = useState("monthly");

  const renderStatement = (statement: StatementData) => (
    <Card key={statement.period} className="bg-stone-50/80 border-stone-200/60">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-stone-800 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {statement.period}
          </CardTitle>
          <Button variant="outline" size="sm" className="border-stone-300 hover:bg-stone-100">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-700 mb-1">Total Income</div>
            <div className="font-bold text-green-800">${statement.totalIncome.toLocaleString()}</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="text-sm text-red-700 mb-1">Total Expenses</div>
            <div className="font-bold text-red-800">${statement.totalExpenses.toLocaleString()}</div>
          </div>
          <div className={`text-center p-3 rounded-lg border ${statement.netChange >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'}`}>
            <div className={`text-sm mb-1 ${statement.netChange >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>Net Change</div>
            <div className={`font-bold flex items-center justify-center gap-1 ${statement.netChange >= 0 ? 'text-blue-800' : 'text-orange-800'}`}>
              {statement.netChange >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              ${Math.abs(statement.netChange).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-medium text-stone-800 mb-3">Category Breakdown</h4>
          <div className="space-y-2">
            {statement.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white/60 rounded-lg border border-stone-200/50">
                <div className="flex items-center gap-2">
                  <Badge variant={category.type === "income" ? "default" : "secondary"} className={category.type === "income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                    {category.type}
                  </Badge>
                  <span className="text-stone-700">{category.name}</span>
                </div>
                <span className="font-medium text-stone-800">${category.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30 p-6">
      <div className="max-w-4xl mx-auto">
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
              Financial Statements
            </h1>
            <p className="text-stone-600">View your detailed financial activity and reports</p>
          </div>
        </div>

        {/* Statements Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-stone-100/80">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-white data-[state=active]:text-stone-800">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="weekly" className="data-[state=active]:bg-white data-[state=active]:text-stone-800">
              Weekly
            </TabsTrigger>
            <TabsTrigger value="yearly" className="data-[state=active]:bg-white data-[state=active]:text-stone-800">
              Yearly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-4">
            {mockStatements.monthly.map(renderStatement)}
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            {mockStatements.weekly.map(renderStatement)}
          </TabsContent>

          <TabsContent value="yearly" className="space-y-4">
            {mockStatements.yearly.map(renderStatement)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}