
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const SpendingChart = () => {
  const data = [
    { month: 'Jan', spending: 2400 },
    { month: 'Feb', spending: 1800 },
    { month: 'Mar', spending: 3200 },
    { month: 'Apr', spending: 2800 },
    { month: 'May', spending: 3600 },
    { month: 'Jun', spending: 2200 },
  ];

  return (
    <Card className="bg-amber-50/90 backdrop-blur-lg border-amber-200/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-amber-900">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3e8d3" />
              <XAxis dataKey="month" stroke="#92400e" />
              <YAxis stroke="#92400e" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(254, 243, 222, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar 
                dataKey="spending" 
                fill="url(#barGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
