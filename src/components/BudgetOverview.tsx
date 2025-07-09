
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const BudgetOverview = () => {
  const budgets = [
    { category: "Food & Dining", spent: 680, budget: 800, color: "bg-blue-500" },
    { category: "Transportation", spent: 320, budget: 400, color: "bg-green-500" },
    { category: "Entertainment", spent: 240, budget: 300, color: "bg-purple-500" },
    { category: "Shopping", spent: 450, budget: 500, color: "bg-orange-500" },
    { category: "Bills & Utilities", spent: 1200, budget: 1200, color: "bg-red-500" },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-white/20 shadow-xl">
      <CardHeader>
        <CardTitle className="text-gray-900">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgets.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{item.category}</span>
              <span className="text-sm text-gray-600">
                {formatCurrency(item.spent)} / {formatCurrency(item.budget)}
              </span>
            </div>
            <Progress 
              value={(item.spent / item.budget) * 100} 
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
