import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Play, 
  FileText, 
  CheckCircle2,
  Clock,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Affiliate Marketing Fundamentals",
    description: "Learn the basics of affiliate marketing and how to get started",
    duration: "2 hours",
    lessons: 8,
    progress: 75,
    category: "Beginner"
  },
  {
    id: 2,
    title: "Advanced Tracking Strategies",
    description: "Master tracking pixels, attribution models, and conversion optimization",
    duration: "3 hours",
    lessons: 12,
    progress: 30,
    category: "Advanced"
  },
  {
    id: 3,
    title: "Content Marketing for Affiliates",
    description: "Create engaging content that converts visitors into customers",
    duration: "2.5 hours",
    lessons: 10,
    progress: 0,
    category: "Intermediate"
  },
  {
    id: 4,
    title: "Video Marketing Mastery",
    description: "Leverage video content to boost your affiliate sales",
    duration: "4 hours",
    lessons: 15,
    progress: 0,
    category: "Advanced"
  }
];

const resources = [
  {
    title: "Affiliate Marketing Glossary",
    type: "Guide",
    icon: FileText
  },
  {
    title: "Best Practices Checklist",
    type: "Checklist",
    icon: CheckCircle2
  },
  {
    title: "Conversion Optimization Guide",
    type: "Guide",
    icon: TrendingUp
  },
  {
    title: "Targeting Your Audience",
    type: "Tutorial",
    icon: Target
  }
];

export default function Tutor() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center shadow-brand">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Affiliation <span className="text-gradient">Tutor</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Master affiliate marketing with our comprehensive learning center. 
            From beginner basics to advanced strategies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Courses Completed", value: "2/4", icon: CheckCircle2 },
            { label: "Hours Learned", value: "12.5", icon: Clock },
            { label: "Skills Mastered", value: "8", icon: Zap },
            { label: "Progress", value: "50%", icon: TrendingUp }
          ].map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Learning Path</h2>
            <Button variant="outline">Browse All Courses</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="p-6 space-y-4 hover:shadow-elevated transition-smooth">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary">{course.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{course.lessons} lessons</span>
                    <span className="font-medium">{course.progress}% complete</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <Button 
                  className={course.progress > 0 ? "" : "gradient-brand"}
                  variant={course.progress > 0 ? "outline" : "default"}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Quick Resources</h2>
            <p className="text-muted-foreground">Essential guides and tools for affiliate success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-smooth cursor-pointer group">
                <resource.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="font-bold mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.type}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12 p-12 text-center space-y-6 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Become an Affiliate Expert?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful affiliates who've accelerated their earnings through our training
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg">
              Explore All Courses
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
