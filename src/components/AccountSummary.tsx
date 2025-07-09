
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, CreditCard, Wallet, PiggyBank, TrendingUp } from "lucide-react";

export const AccountSummary = () => {
  const accounts = [
    {
      name: "Checking Account",
      balance: 12540.65,
      change: 2.4,
      icon: Wallet,
      color: "from-amber-400 to-orange-400"
    },
    {
      name: "Savings Account",
      balance: 48920.12,
      change: 1.8,
      icon: PiggyBank,
      color: "from-yellow-400 to-amber-400"
    },
    {
      name: "Credit Cards",
      balance: -2184.30,
      change: -5.2,
      icon: CreditCard,
      color: "from-orange-400 to-red-400"
    },
    {
      name: "Investments",
      balance: 85640.88,
      change: 12.7,
      icon: TrendingUp,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {accounts.map((account, index) => (
        <Card key={index} className="bg-amber-50/90 backdrop-blur-lg border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">
              {account.name}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${account.color}`}>
              <account.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-900">
              {account.balance < 0 ? '-' : ''}{formatCurrency(account.balance)}
            </div>
            <div className="flex items-center text-xs">
              {account.change > 0 ? (
                <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={account.change > 0 ? "text-green-600" : "text-red-600"}>
                {Math.abs(account.change)}% from last month
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
