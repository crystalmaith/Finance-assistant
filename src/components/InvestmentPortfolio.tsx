
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export const InvestmentPortfolio = () => {
  const portfolio = [
    {
      name: "S&P 500 ETF",
      symbol: "SPY",
      value: 34200,
      allocation: 40,
      change: 2.8,
      changeValue: 934
    },
    {
      name: "Tech Stocks",
      symbol: "QQQ",
      value: 25600,
      allocation: 30,
      change: -1.2,
      changeValue: -310
    },
    {
      name: "Bonds",
      symbol: "BND",
      value: 17100,
      allocation: 20,
      change: 0.5,
      changeValue: 85
    },
    {
      name: "International",
      symbol: "VXUS",
      value: 8740,
      allocation: 10,
      change: 1.8,
      changeValue: 154
    }
  ];

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0);
  const totalChange = portfolio.reduce((sum, item) => sum + item.changeValue, 0);
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-white/20 shadow-xl">
      <CardHeader>
        <CardTitle className="text-gray-900">Investment Portfolio</CardTitle>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</p>
            <div className="flex items-center space-x-1">
              {totalChange > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm ${totalChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalChange > 0 ? '+' : ''}{totalChangePercent.toFixed(2)}% ({totalChange > 0 ? '+' : ''}{formatCurrency(totalChange)})
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {portfolio.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                <p className="text-xs text-gray-600">{item.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 text-sm">{formatCurrency(item.value)}</p>
                <div className="flex items-center space-x-1">
                  {item.change > 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={`text-xs ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
            <Progress value={item.allocation} className="h-2" />
            <p className="text-xs text-gray-600 text-right">{item.allocation}% of portfolio</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
