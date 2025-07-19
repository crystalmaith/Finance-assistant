
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
    <Card className="bg-card/90 backdrop-blur-lg border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-foreground">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis dataKey="month" className="stroke-muted-foreground" />
              <YAxis className="stroke-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
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
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
