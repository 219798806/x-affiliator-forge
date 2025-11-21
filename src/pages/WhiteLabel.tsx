import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Palette, 
  Code, 
  BarChart, 
  CheckCircle2,
  Rocket,
  Users,
  Zap
} from "lucide-react";

export default function WhiteLabel() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Rocket className="h-4 w-4" />
              <span>Enterprise Solution</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              Your Brand, Our <span className="text-gradient">Technology</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Launch a fully customized affiliate program with your branding in minutes. 
              No technical knowledge required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-brand shadow-brand">
                Request Demo
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Complete <span className="text-gradient">White-Label</span> Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful affiliate program under your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Palette,
                title: "Custom Branding",
                description: "Full customization with your logo, colors, and domain"
              },
              {
                icon: Code,
                title: "Easy Integration",
                description: "Embed seamlessly on your website with simple code"
              },
              {
                icon: BarChart,
                title: "Advanced Analytics",
                description: "Real-time tracking and comprehensive reporting"
              },
              {
                icon: Shield,
                title: "Fraud Protection",
                description: "Built-in security and fraud detection"
              },
              {
                icon: Users,
                title: "Affiliate Management",
                description: "Complete control over your affiliate network"
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description: "Launch your program in minutes, not months"
              },
              {
                icon: CheckCircle2,
                title: "Automated Payouts",
                description: "Schedule and process payments automatically"
              },
              {
                icon: Rocket,
                title: "Scalable",
                description: "Grows with your business from 10 to 10,000 affiliates"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-smooth text-center">
                <feature.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                See It In <span className="text-gradient">Action</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule a personalized demo and discover how X-Affiliator can transform 
                your affiliate marketing strategy.
              </p>

              <ul className="space-y-4">
                {[
                  "Live demonstration of the platform",
                  "Custom branding walkthrough",
                  "Integration options and best practices",
                  "Pricing and package discussion",
                  "Q&A with our experts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 shadow-elevated">
              <form className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Request a Demo</h3>
                  <p className="text-muted-foreground">Fill out the form and we'll be in touch</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input id="website" placeholder="https://yoursite.com" />
                  </div>

                  <Button type="submit" className="w-full gradient-brand shadow-brand">
                    Request Demo
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Flexible <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "/month",
                features: [
                  "Up to 50 affiliates",
                  "Custom branding",
                  "Basic analytics",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$599",
                period: "/month",
                features: [
                  "Up to 500 affiliates",
                  "Advanced branding",
                  "Advanced analytics",
                  "Priority support",
                  "API access"
                ],
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited affiliates",
                  "Full customization",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantee"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 space-y-6 ${plan.featured ? 'border-2 border-primary shadow-elevated' : ''}`}
              >
                {plan.featured && (
                  <Badge className="gradient-brand">Most Popular</Badge>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.featured ? 'gradient-brand shadow-brand' : ''}`}
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
