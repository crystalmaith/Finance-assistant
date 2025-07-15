import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Activity, CreditCard, TrendingUp } from "lucide-react";

interface SpendingRecord {
  date: string;
  action: string;
  usageType: string;
  creditsSpent: number;
  status: "completed" | "pending" | "failed";
  notes?: string;
}

const mockSpendingData: SpendingRecord[] = [
  {
    date: "2024-01-15",
    action: "AI Budget Analysis",
    usageType: "Premium",
    creditsSpent: 5,
    status: "completed",
    notes: "Monthly budget review"
  },
  {
    date: "2024-01-14", 
    action: "Investment Recommendation",
    usageType: "Premium",
    creditsSpent: 8,
    status: "completed",
    notes: "Portfolio optimization"
  },
  {
    date: "2024-01-13",
    action: "Expense Categorization",
    usageType: "Standard",
    creditsSpent: 2,
    status: "completed"
  },
  {
    date: "2024-01-12",
    action: "Financial Report Generation",
    usageType: "Premium",
    creditsSpent: 10,
    status: "pending",
    notes: "Quarterly summary"
  },
  {
    date: "2024-01-11",
    action: "Risk Assessment",
    usageType: "Premium", 
    creditsSpent: 6,
    status: "failed",
    notes: "System timeout"
  }
];

export const AccountSection = () => {
  const totalCredits = mockSpendingData.reduce((sum, record) => sum + record.creditsSpent, 0);
  const totalActions = mockSpendingData.length;
  const mostFrequentAction = mockSpendingData
    .reduce((acc, record) => {
      acc[record.action] = (acc[record.action] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
  const topAction = Object.entries(mostFrequentAction)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || "N/A";

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200", 
      failed: "bg-red-100 text-red-800 border-red-200"
    };
    return variants[status as keyof typeof variants] || variants.completed;
  };

  return (
    <div className="w-80 max-h-96 overflow-y-auto">
      <Card className="border-stone-200/60 bg-stone-50/80">
        <CardHeader className="pb-3">
          <CardTitle className="text-stone-800 flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Account Activity
          </CardTitle>
          
          {/* Summary */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-stone-600">
              <CreditCard className="h-3 w-3" />
              <span className="font-medium">{totalCredits}</span> credits used
            </div>
            <div className="flex items-center gap-2 text-stone-600">
              <TrendingUp className="h-3 w-3" />
              <span className="font-medium">{totalActions}</span> actions
            </div>
          </div>
          <div className="text-xs text-stone-500">
            Most used: <span className="font-medium text-stone-700">{topAction}</span>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-3">
            {mockSpendingData.map((record, index) => (
              <div key={index} className="border-b border-stone-200/50 pb-3 last:border-b-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-3 w-3 text-stone-400" />
                    <span className="text-xs text-stone-500">{record.date}</span>
                  </div>
                  <Badge variant="outline" className={`text-xs ${getStatusBadge(record.status)}`}>
                    {record.status}
                  </Badge>
                </div>
                
                <div className="text-sm font-medium text-stone-800 mb-1">
                  {record.action}
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-600">{record.usageType}</span>
                  <span className="font-medium text-amber-700">{record.creditsSpent} credits</span>
                </div>
                
                {record.notes && (
                  <div className="text-xs text-stone-500 mt-1 italic">
                    {record.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};