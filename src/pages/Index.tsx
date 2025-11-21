import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Rocket,
  Link2,
  DollarSign,
  Target,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe,
  Sparkle
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section 1 - Primary */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Connect Brands with the market through{" "}
                <span className="text-gradient animate-pulse-glow">Affiliations</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Join the world's most transparent affiliate marketplace. Connect top-performing 
                affiliates with leading brands, or launch your own white-label affiliate program instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/auth/register?type=merchant">
                  <Button size="lg" className="gradient-brand shadow-brand w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-smooth">
                    Join as Merchant
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/auth/register?type=affiliate">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-purple w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-smooth">
                    Join as Affiliate
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-12 pt-8 animate-fade-in">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">10K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Active Affiliates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">5M+</div>
                  <div className="text-sm text-muted-foreground font-medium">Conversions Monthly</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$50M+</div>
                  <div className="text-sm text-muted-foreground font-medium">Paid Out</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full animate-pulse-glow"></div>
              <Card className="p-10 shadow-elevated border-2 border-primary/20 relative backdrop-blur-sm bg-card/95 hover:border-primary/40 transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <h3 className="text-xl font-semibold">Live Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-bounce-subtle"></div>
                      <div className="w-3 h-3 rounded-full bg-accent animate-bounce-subtle" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce-subtle" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-smooth hover:scale-105">
                      <TrendingUp className="h-10 w-10 text-primary mb-3" />
                      <div className="text-3xl font-bold text-primary">+24%</div>
                      <div className="text-xs text-muted-foreground mt-1">Revenue Growth</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-smooth hover:scale-105">
                      <Users className="h-10 w-10 text-accent mb-3" />
                      <div className="text-3xl font-bold text-accent">1,234</div>
                      <div className="text-xs text-muted-foreground mt-1">Active Links</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">Conversion Rate</span>
                      <span className="text-sm font-bold text-foreground">3.4%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-[68%] animate-pulse-glow"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="font-bold text-primary">$12.4K</div>
                      <div className="text-muted-foreground text-xs mt-1">This Week</div>
                    </div>
                    <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="font-bold text-accent">856</div>
                      <div className="text-muted-foreground text-xs mt-1">Clicks</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
                      <div className="font-bold">29</div>
                      <div className="text-muted-foreground text-xs mt-1">Sales</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - How It Works */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Start Earning in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a merchant or affiliate, getting started is quick and seamless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 text-center space-y-6 hover:shadow-elevated transition-smooth border-2 hover:border-primary/50 hover:scale-105 animate-scale-in group">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-brand group-hover:scale-110 transition-smooth">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">01</div>
                <h3 className="text-2xl font-bold">Sign Up Free</h3>
                <p className="text-muted-foreground text-lg">
                  Create your account in seconds. Choose merchant or affiliate path.
                </p>
              </div>
            </Card>

            <Card className="p-10 text-center space-y-6 hover:shadow-elevated transition-smooth border-2 hover:border-accent/50 hover:scale-105 animate-scale-in group" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-purple group-hover:scale-110 transition-smooth">
                <Link2 className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-accent">02</div>
                <h3 className="text-2xl font-bold">Generate Links</h3>
                <p className="text-muted-foreground text-lg">
                  Get unique trackable links for any product in our marketplace.
                </p>
              </div>
            </Card>

            <Card className="p-10 text-center space-y-6 hover:shadow-elevated transition-smooth border-2 hover:border-primary/50 hover:scale-105 animate-scale-in group" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-brand group-hover:scale-110 transition-smooth">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">03</div>
                <h3 className="text-2xl font-bold">Earn Commissions</h3>
                <p className="text-muted-foreground text-lg">
                  Track performance in real-time and receive automated payouts.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center animate-bounce-subtle">
            <Link to="/marketplace">
              <Button size="lg" className="shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 hover:scale-105 transition-smooth">
                Explore Marketplace
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - White-Label */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <Card className="p-10 space-y-8 shadow-elevated border-2 border-accent/20 hover:border-accent/40 transition-smooth backdrop-blur-sm bg-card/95">
                <div className="flex items-center space-x-4 pb-6 border-b">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-purple">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">YourBrand Affiliate Program</h4>
                    <p className="text-sm text-muted-foreground">Powered by X-Affiliator</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-smooth" />
                    <div>
                      <div className="font-semibold text-lg">Custom Branding</div>
                      <div className="text-sm text-muted-foreground">Your logo, colors, and domain</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 group-hover:scale-110 transition-smooth" />
                    <div>
                      <div className="font-semibold text-lg">Embed Anywhere</div>
                      <div className="text-sm text-muted-foreground">Seamless website integration</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-smooth" />
                    <div>
                      <div className="font-semibold text-lg">Full Control</div>
                      <div className="text-sm text-muted-foreground">Manage everything from your dashboard</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-muted/50 to-muted rounded-xl border border-border">
                  <div className="text-xs text-muted-foreground mb-3 font-medium">Integration Code</div>
                  <code className="text-sm text-primary font-mono">
                    &lt;script src="yourbrand.com/affiliate.js"&gt;&lt;/script&gt;
                  </code>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Launch Your Own{" "}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Branded</span>{" "}
                Affiliate Program
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Get all the power of X-Affiliator under your own brand. No setup fees, 
                no technical knowledge required. Pure performance marketing at scale.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-brand group-hover:scale-110 transition-smooth">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Complete white-label customization</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-purple group-hover:scale-110 transition-smooth">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Advanced tracking & analytics</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-brand group-hover:scale-110 transition-smooth">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Automated payouts & fraud detection</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-purple group-hover:scale-110 transition-smooth">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Dedicated support team</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link to="/white-label">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-purple w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-smooth">
                    Request Demo
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" className="gradient-brand shadow-brand text-lg px-8 py-6 hover:scale-105 transition-smooth w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Everything You Need to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed for both merchants and affiliates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Track clicks, conversions, and revenue with precision analytics",
                color: "primary"
              },
              {
                icon: ShieldCheck,
                title: "Fraud Protection",
                description: "Advanced algorithms detect and prevent fraudulent activities",
                color: "accent"
              },
              {
                icon: Target,
                title: "Smart Matching",
                description: "AI-powered affiliate recommendations for maximum ROI",
                color: "primary"
              },
              {
                icon: Zap,
                title: "Instant Tracking",
                description: "Real-time link tracking with detailed performance metrics",
                color: "accent"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with affiliates and brands worldwide",
                color: "primary"
              },
              {
                icon: Sparkle,
                title: "Marketing Tools",
                description: "Pre-approved creatives, banners, and promotional materials",
                color: "accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-elevated transition-smooth border-2 hover:border-primary/30 group hover:scale-105">
                <feature.icon className={`h-14 w-14 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'} mb-6 group-hover:scale-110 transition-smooth`} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <Card className="p-16 text-center space-y-8 shadow-elevated border-2 border-primary/20 max-w-5xl mx-auto backdrop-blur-sm bg-card/95 hover:border-primary/40 transition-smooth animate-scale-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of merchants and affiliates already growing their revenue with X-Affiliator
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link to="/auth/register">
                <Button size="lg" className="gradient-brand shadow-brand w-full sm:w-auto text-lg px-10 py-6 hover:scale-105 transition-smooth">
                  Join Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-purple w-full sm:w-auto text-lg px-10 py-6 hover:scale-105 transition-smooth">
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
