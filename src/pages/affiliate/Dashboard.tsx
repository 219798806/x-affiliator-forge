import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  MousePointer, 
  DollarSign, 
  BarChart,
  ExternalLink,
  Copy,
  Eye
} from "lucide-react";

export default function AffiliateDashboard() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Affiliate Dashboard</h1>
            <p className="text-muted-foreground">Track your performance and earnings</p>
          </div>
          <Button className="gradient-brand shadow-brand">
            <ExternalLink className="h-4 w-4 mr-2" />
            Browse Offers
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: "Total Earnings", 
              value: "$3,247", 
              change: "+23.5%",
              icon: DollarSign,
              positive: true
            },
            { 
              label: "Clicks", 
              value: "12,345", 
              change: "+12.3%",
              icon: MousePointer,
              positive: true
            },
            { 
              label: "Conversions", 
              value: "89", 
              change: "+8.7%",
              icon: TrendingUp,
              positive: true
            },
            { 
              label: "Conversion Rate", 
              value: "3.2%", 
              change: "+0.5%",
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
          {/* Active Links */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Active Links</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {[
                { 
                  name: "Premium Software Suite", 
                  clicks: 1234, 
                  conversions: 34, 
                  earnings: "$1,234",
                  conversionRate: 2.8
                },
                { 
                  name: "Online Course Platform", 
                  clicks: 892, 
                  conversions: 28, 
                  earnings: "$980",
                  conversionRate: 3.1
                },
                { 
                  name: "E-commerce Tools", 
                  clicks: 654, 
                  conversions: 19, 
                  earnings: "$712",
                  conversionRate: 2.9
                }
              ].map((link, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.clicks} clicks • {link.conversions} conversions
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{link.earnings}</div>
                      <div className="text-xs text-muted-foreground">Total earned</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-medium">{link.conversionRate}%</span>
                    </div>
                    <Progress value={link.conversionRate * 20} className="h-2" />
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Copy className="h-3 w-3 mr-1" />
                      Copy Link
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Earnings Progress */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">This Month</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Payout Goal</span>
                    <span className="text-sm font-medium">$850 / $1,000</span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Pending Payout</div>
                  <div className="text-3xl font-bold text-gradient mb-2">$3,247</div>
                  <p className="text-xs text-muted-foreground">Available on Nov 30, 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Active Offers</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Top Performer</span>
                  <Badge variant="secondary" className="text-xs">Software</Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Avg. Click Value</span>
                  <span className="font-semibold">$0.26</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
