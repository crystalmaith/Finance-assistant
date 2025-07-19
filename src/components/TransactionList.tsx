
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Car, Coffee, Home, Heart } from "lucide-react";

export const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      description: "Grocery Store",
      amount: -89.45,
      category: "Food",
      date: "Today",
      icon: ShoppingCart,
      color: "text-amber-600"
    },
    {
      id: 2,
      description: "Gas Station",
      amount: -45.20,
      category: "Transportation",
      date: "Yesterday",
      icon: Car,
      color: "text-yellow-600"
    },
    {
      id: 3,
      description: "Coffee Shop",
      amount: -8.50,
      category: "Food",
      date: "2 days ago",
      icon: Coffee,
      color: "text-orange-600"
    },
    {
      id: 4,
      description: "Salary Deposit",
      amount: 4200.00,
      category: "Income",
      date: "3 days ago",
      icon: Home,
      color: "text-green-600"
    },
    {
      id: 5,
      description: "Charity Donation",
      amount: -100.00,
      category: "Giving",
      date: "1 week ago",
      icon: Heart,
      color: "text-amber-700"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  return (
    <Card className="bg-card/90 backdrop-blur-lg border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl hover:bg-secondary/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-background/70 text-primary`}>
                  <transaction.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-foreground'}`}>
                  {transaction.amount > 0 ? '+' : '-'}{formatCurrency(transaction.amount)}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {transaction.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
