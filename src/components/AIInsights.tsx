
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
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      type: "investment",
      title: "Investment Opportunity",
      description: "Based on your risk profile, consider increasing your S&P 500 allocation by 5%.",
      priority: "medium",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
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
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-white/20 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900">
          <Brain className="h-5 w-5 text-blue-600" />
          <span>AI Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className={`p-4 rounded-xl ${insight.bgColor} border border-opacity-20`}>
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-white shadow-sm ${insight.color}`}>
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
                  <Badge 
                    variant={insight.priority === 'high' ? 'destructive' : 
                           insight.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{insight.description}</p>
                <Button size="sm" variant="outline" className="text-xs h-8">
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
