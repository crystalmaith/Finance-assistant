
import { DashboardHeader } from "@/components/DashboardHeader";
import { AccountSummary } from "@/components/AccountSummary";
import { SpendingChart } from "@/components/SpendingChart";
import { TransactionList } from "@/components/TransactionList";
import { BudgetOverview } from "@/components/BudgetOverview";
import { AIInsights } from "@/components/AIInsights";
import { InvestmentPortfolio } from "@/components/InvestmentPortfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-accent/30">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <AccountSummary />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpendingChart />
              <BudgetOverview />
            </div>
            <TransactionList />
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <AIInsights />
            <InvestmentPortfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
