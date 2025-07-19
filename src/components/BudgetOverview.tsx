
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const BudgetOverview = () => {
  const budgets = [
    { category: "Food & Dining", spent: 680, budget: 800, color: "bg-amber-500" },
    { category: "Transportation", spent: 320, budget: 400, color: "bg-yellow-500" },
    { category: "Entertainment", spent: 240, budget: 300, color: "bg-orange-500" },
    { category: "Shopping", spent: 450, budget: 500, color: "bg-amber-600" },
    { category: "Bills & Utilities", spent: 1200, budget: 1200, color: "bg-orange-600" },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Card className="bg-card/90 backdrop-blur-lg border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-foreground">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgets.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{item.category}</span>
              <span className="text-sm text-muted-foreground">
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
