import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Mail,
  HelpCircle,
  FileText,
  Video,
  Phone
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started as an affiliate?",
    answer: "Getting started is simple! Sign up for a free account, browse our marketplace for offers that match your audience, generate your unique tracking links, and start promoting. You'll earn commissions for every successful conversion."
  },
  {
    question: "When and how do I get paid?",
    answer: "Payments are processed automatically based on your chosen schedule (weekly or monthly). We support multiple payout methods including bank transfer, PayPal, and wire transfer. The minimum payout threshold is $100."
  },
  {
    question: "What commission rates can I expect?",
    answer: "Commission rates vary by merchant and product category, typically ranging from 10% to 50% per sale. Some offers provide fixed commissions up to $200 per conversion. Check individual offer details in the marketplace."
  },
  {
    question: "How does tracking work?",
    answer: "We use advanced cookie-based tracking with a default 30-day cookie window. This means if someone clicks your link and makes a purchase within 30 days, you'll earn the commission. Some merchants offer extended cookie windows."
  },
  {
    question: "Can I promote on social media?",
    answer: "Yes! Most offers allow social media promotion. However, always check the specific terms for each offer as some merchants may have restrictions on certain platforms or promotional methods."
  },
  {
    question: "What is the White-Label solution?",
    answer: "Our White-Label solution allows businesses to launch their own branded affiliate program using our technology. It includes custom branding, domain integration, and complete control over your affiliate network."
  }
];

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs"
  },
  {
    icon: FileText,
    title: "Blog & Articles",
    description: "Tips, strategies, and industry insights"
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other affiliates"
  }
];

export default function Help() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-brand rounded-2xl shadow-brand mb-4">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            How Can We <span className="text-gradient">Help?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-elevated transition-smooth cursor-pointer group"
            >
              <resource.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="font-bold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Still Need <span className="text-gradient">Help?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth">
              <div className="w-16 h-16 mx-auto gradient-brand rounded-2xl flex items-center justify-center shadow-brand">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Chat with our support team in real-time
              </p>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth">
              <div className="w-16 h-16 mx-auto gradient-purple rounded-2xl flex items-center justify-center shadow-purple">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help via email within 24 hours
              </p>
              <Button variant="outline" className="w-full">Send Email</Button>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-elevated transition-smooth">
              <div className="w-16 h-16 mx-auto gradient-brand rounded-2xl flex items-center justify-center shadow-brand">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Phone Support</h3>
              <p className="text-sm text-muted-foreground">
                Speak with an expert (Enterprise only)
              </p>
              <Button variant="outline" className="w-full">Schedule Call</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
