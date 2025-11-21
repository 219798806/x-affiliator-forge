import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 100 affiliates",
        "Basic analytics",
        "Email support",
        "5% platform fee",
        "Standard tracking",
      ],
      notIncluded: [
        "Custom branding",
        "Priority support",
        "Advanced analytics",
      ],
      color: "primary",
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For growing businesses",
      features: [
        "Unlimited affiliates",
        "Advanced analytics",
        "Priority support",
        "2% platform fee",
        "Advanced tracking",
        "Custom branding",
        "API access",
      ],
      notIncluded: [
        "White-label solution",
      ],
      color: "accent",
      cta: "Start Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated account manager",
        "Custom integration",
        "0% platform fee",
        "SLA guarantee",
        "Custom contracts",
        "Training & onboarding",
      ],
      notIncluded: [],
      color: "primary",
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Simple, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your affiliate marketing needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 space-y-8 hover:shadow-elevated transition-smooth border-2 ${
                plan.popular
                  ? "border-accent shadow-purple scale-105"
                  : "border-border hover:border-primary/30"
              } relative animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-purple">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className={`h-5 w-5 ${plan.color === 'primary' ? 'text-primary' : 'text-accent'} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 opacity-50">
                    <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/auth/register" className="block">
                <Button
                  size="lg"
                  className={`w-full ${
                    plan.color === 'primary'
                      ? 'gradient-brand shadow-brand'
                      : 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-purple'
                  } hover:scale-105 transition-smooth`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need a custom solution?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team is ready to help you build the perfect affiliate program for your unique needs.
          </p>
          <Link to="/white-label">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-purple text-lg px-8 py-6 hover:scale-105 transition-smooth">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
