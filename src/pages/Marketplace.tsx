import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star,
  ExternalLink
} from "lucide-react";

const offers = [
  {
    id: 1,
    name: "Premium Software Suite",
    category: "Software",
    commission: "30%",
    conversionRate: "4.2%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Online Course Platform",
    category: "Education",
    commission: "50%",
    conversionRate: "3.8%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "E-commerce Platform",
    category: "Software",
    commission: "25%",
    conversionRate: "5.1%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    name: "Marketing Tools",
    category: "Marketing",
    commission: "40%",
    conversionRate: "3.5%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 5,
    name: "Web Hosting Service",
    category: "Technology",
    commission: "100$",
    conversionRate: "6.2%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 6,
    name: "Fitness App",
    category: "Health",
    commission: "35%",
    conversionRate: "4.7%",
    payout: "Per Sale",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    featured: false
  }
];

const categories = ["All", "Software", "Education", "Marketing", "Technology", "Health"];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || offer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Affiliate <span className="text-gradient">Marketplace</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover high-converting offers from top brands and start earning commissions today
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search offers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-brand" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-elevated transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.name}
                  className="w-full h-full object-cover"
                />
                {offer.featured && (
                  <Badge className="absolute top-4 right-4 gradient-brand">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">{offer.category}</Badge>
                  <h3 className="text-xl font-bold">{offer.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Commission</div>
                    <div className="text-lg font-bold text-primary">{offer.commission}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Conversion</div>
                    <div className="text-lg font-bold flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      {offer.conversionRate}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Payout Type</span>
                    <span className="font-medium">{offer.payout}</span>
                  </div>
                  <Button className="w-full gradient-brand">
                    Get Link
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No offers found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
