import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart,
  Plus,
  Eye,
  Settings
} from "lucide-react";

export default function MerchantDashboard() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Merchant Dashboard</h1>
            <p className="text-muted-foreground">Manage your affiliate program</p>
          </div>
          <Button className="gradient-brand shadow-brand">
            <Plus className="h-4 w-4 mr-2" />
            Create Offer
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: "Total Revenue", 
              value: "$45,231", 
              change: "+12.5%",
              icon: DollarSign,
              positive: true
            },
            { 
              label: "Active Affiliates", 
              value: "234", 
              change: "+5",
              icon: Users,
              positive: true
            },
            { 
              label: "Conversions", 
              value: "1,823", 
              change: "+18.2%",
              icon: TrendingUp,
              positive: true
            },
            { 
              label: "Average Commission", 
              value: "$24.80", 
              change: "+2.4%",
              icon: BarChart,
              positive: true
            }
          ].map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
                <Badge variant={stat.positive ? "default" : "secondary"} className="gradient-brand">
                  {stat.change}
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Active Offers</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Premium Software Suite", status: "Active", affiliates: 45, sales: 234 },
                { name: "Online Course Platform", status: "Active", affiliates: 32, sales: 189 },
                { name: "E-commerce Tools", status: "Paused", affiliates: 28, sales: 156 }
              ].map((offer, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{offer.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {offer.affiliates} affiliates • {offer.sales} sales
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={offer.status === "Active" ? "default" : "secondary"}>
                      {offer.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Offer
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Affiliates
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                Process Payouts
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
