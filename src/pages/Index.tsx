import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart, 
  Shield, 
  Rocket,
  Link2,
  DollarSign,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section 1 - Primary */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>The Future of Affiliate Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Launch Your{" "}
                <span className="text-gradient">Affiliate Empire</span>{" "}
                Today
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Connect brands with top-performing affiliates in the world's most transparent 
                affiliate marketplace. Or launch your own white-label affiliate program in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/register?type=merchant">
                  <Button size="lg" className="gradient-brand shadow-brand w-full sm:w-auto">
                    Join as Merchant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/auth/register?type=affiliate">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join as Affiliate
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gradient">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Affiliates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">5M+</div>
                  <div className="text-sm text-muted-foreground">Conversions Monthly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">$50M+</div>
                  <div className="text-sm text-muted-foreground">Paid Out</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-brand opacity-20 blur-3xl rounded-full"></div>
              <Card className="p-8 shadow-elevated border-2 relative">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="font-semibold">Dashboard Preview</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-primary mb-2" />
                      <div className="text-2xl font-bold">+24%</div>
                      <div className="text-xs text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-lg">
                      <Users className="h-8 w-8 text-accent mb-2" />
                      <div className="text-2xl font-bold">1,234</div>
                      <div className="text-xs text-muted-foreground">Active Links</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="text-sm font-semibold">3.4%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-brand w-[68%]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-muted rounded">
                      <div className="font-semibold">$12.4K</div>
                      <div className="text-muted-foreground">This Week</div>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <div className="font-semibold">856</div>
                      <div className="text-muted-foreground">Clicks</div>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <div className="font-semibold">29</div>
                      <div className="text-muted-foreground">Sales</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              Start Earning in <span className="text-gradient">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a merchant or affiliate, getting started is quick and easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth border-2 hover:border-primary/50">
              <div className="w-16 h-16 mx-auto gradient-brand rounded-2xl flex items-center justify-center shadow-brand">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">01</div>
                <h3 className="text-xl font-bold">Sign Up Free</h3>
                <p className="text-muted-foreground">
                  Create your account in seconds. Choose merchant or affiliate.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth border-2 hover:border-primary/50">
              <div className="w-16 h-16 mx-auto gradient-purple rounded-2xl flex items-center justify-center shadow-purple">
                <Link2 className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">02</div>
                <h3 className="text-xl font-bold">Generate Links</h3>
                <p className="text-muted-foreground">
                  Get unique trackable links for any product in our marketplace.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth border-2 hover:border-primary/50">
              <div className="w-16 h-16 mx-auto gradient-brand rounded-2xl flex items-center justify-center shadow-brand">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">03</div>
                <h3 className="text-xl font-bold">Earn Commissions</h3>
                <p className="text-muted-foreground">
                  Track performance in real-time and receive automated payouts.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="shadow-lg">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - White-Label */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="p-8 space-y-6 shadow-elevated border-2">
                <div className="flex items-center space-x-4 pb-4 border-b">
                  <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">YourBrand Affiliate Program</h4>
                    <p className="text-sm text-muted-foreground">Powered by X-Affiliator</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Custom Branding</div>
                      <div className="text-sm text-muted-foreground">Your logo, colors, and domain</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Embed Anywhere</div>
                      <div className="text-sm text-muted-foreground">Seamless website integration</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Full Control</div>
                      <div className="text-sm text-muted-foreground">Manage everything from your dashboard</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground mb-2">Integration Code</div>
                  <code className="text-xs">
                    &lt;script src="yourbrand.com/affiliate.js"&gt;&lt;/script&gt;
                  </code>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Rocket className="h-4 w-4" />
                <span>White-Label Solution</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold">
                Launch Your Own{" "}
                <span className="text-gradient">Branded</span>{" "}
                Affiliate Program
              </h2>

              <p className="text-lg text-muted-foreground">
                Get all the power of X-Affiliator under your own brand. No setup fees, 
                no technical knowledge required. Just pure performance marketing at scale.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-brand rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span>Complete white-label customization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-brand rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span>Advanced tracking & analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-brand rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span>Automated payouts & fraud detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-brand rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span>Dedicated support team</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/white-label">
                  <Button size="lg" className="gradient-purple shadow-purple w-full sm:w-auto">
                    Request Demo
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Everything You Need to <span className="text-gradient">Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for both merchants and affiliates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart,
                title: "Real-Time Analytics",
                description: "Track clicks, conversions, and revenue with precision analytics"
              },
              {
                icon: Shield,
                title: "Fraud Protection",
                description: "Advanced algorithms detect and prevent fraudulent activities"
              },
              {
                icon: Target,
                title: "Smart Matching",
                description: "AI-powered affiliate recommendations for maximum ROI"
              },
              {
                icon: Zap,
                title: "Instant Tracking",
                description: "Real-time link tracking with detailed performance metrics"
              },
              {
                icon: DollarSign,
                title: "Flexible Payouts",
                description: "Multiple payout methods with automated scheduling"
              },
              {
                icon: Sparkles,
                title: "Marketing Tools",
                description: "Pre-approved creatives, banners, and promotional materials"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-smooth">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <Card className="p-12 text-center space-y-6 shadow-elevated border-2 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of merchants and affiliates already growing their revenue with X-Affiliator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/auth/register">
                <Button size="lg" className="gradient-brand shadow-brand w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
