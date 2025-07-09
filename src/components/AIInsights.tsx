
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Target, Lightbulb } from "lucide-react";

export const AIInsights = () => {
  const insights = [
    {
      type: "saving",
      title: "Save $180/month",
      description: "You're spending 15% more on dining out than similar users. Consider meal planning to reduce costs.",
      priority: "high",
      icon: Target,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      type: "investment",
      title: "Investment Opportunity",
      description: "Based on your risk profile, consider increasing your S&P 500 allocation by 5%.",
      priority: "medium",
      icon: TrendingUp,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      type: "alert",
      title: "Budget Alert",
      description: "You've used 95% of your entertainment budget this month. Consider adjusting spending.",
      priority: "high",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      type: "tip",
      title: "Credit Score Tip",
      description: "Paying off your credit card balance early could improve your utilization ratio.",
      priority: "low",
      icon: Lightbulb,
      color: "text-amber-700",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <Card className="bg-amber-50/90 backdrop-blur-lg border-amber-200/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-amber-900">
          <Brain className="h-5 w-5 text-amber-600" />
          <span>AI Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className={`p-4 rounded-xl ${insight.bgColor} border border-amber-200/30`}>
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-white/80 shadow-sm ${insight.color}`}>
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-amber-900 text-sm">{insight.title}</h4>
                  <Badge 
                    variant={insight.priority === 'high' ? 'destructive' : 
                           insight.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">{insight.description}</p>
                <Button size="sm" variant="outline" className="text-xs h-8 border-amber-300 text-amber-700 hover:bg-amber-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
