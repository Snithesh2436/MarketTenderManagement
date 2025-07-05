import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Building,
  Clock,
  Users,
  Eye
} from "lucide-react";
import Header from "@/components/Header";

const Tenders = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  const tenders = [
    {
      id: 1,
      title: "Cloud Infrastructure Migration Services",
      company: "TechCorp Solutions",
      description: "We are seeking experienced cloud architects to migrate our legacy systems to AWS. The project includes database migration, application containerization, and DevOps setup.",
      budget: "$150,000 - $300,000",
      deadline: "2025-08-15",
      category: "Technology",
      location: "Remote",
      applications: 12,
      postedDate: "2025-07-01",
      urgency: "high"
    },
    {
      id: 2,
      title: "Digital Marketing Campaign for Product Launch",
      company: "InnovateCo",
      description: "Comprehensive digital marketing strategy and execution for launching our new SaaS product. Includes social media, content marketing, and paid advertising campaigns.",
      budget: "$50,000 - $100,000",
      deadline: "2025-07-20",
      category: "Marketing",
      location: "New York, NY",
      applications: 8,
      postedDate: "2025-06-28",
      urgency: "urgent"
    },
    {
      id: 3,
      title: "Supply Chain Optimization Consulting",
      company: "GlobalTrade Ltd",
      description: "Seeking consultants to analyze and optimize our global supply chain operations. Focus on cost reduction, efficiency improvements, and risk management.",
      budget: "$75,000 - $150,000",
      deadline: "2025-09-01",
      category: "Consulting",
      location: "Chicago, IL",
      applications: 15,
      postedDate: "2025-06-25",
      urgency: "medium"
    },
    {
      id: 4,
      title: "Mobile App Development",
      company: "StartupXYZ",
      description: "Native iOS and Android app development for our e-commerce platform. Requires experience with React Native, payment integration, and real-time notifications.",
      budget: "$25,000 - $50,000",
      deadline: "2025-08-30",
      category: "Technology",
      location: "Austin, TX",
      applications: 22,
      postedDate: "2025-06-30",
      urgency: "medium"
    },
    {
      id: 5,
      title: "Brand Identity and Website Redesign",
      company: "CreativeStudio",
      description: "Complete brand overhaul including logo design, brand guidelines, and responsive website development. Looking for creative agencies with proven B2B experience.",
      budget: "$15,000 - $30,000",
      deadline: "2025-07-25",
      category: "Design",
      location: "Los Angeles, CA",
      applications: 18,
      postedDate: "2025-06-22",
      urgency: "high"
    },
    {
      id: 6,
      title: "Financial Audit and Compliance Review",
      company: "FinanceFirst Corp",
      description: "Comprehensive financial audit and regulatory compliance review. Must have experience with SOX compliance and public company auditing standards.",
      budget: "$40,000 - $80,000",
      deadline: "2025-08-10",
      category: "Finance",
      location: "Boston, MA",
      applications: 6,
      postedDate: "2025-07-02",
      urgency: "medium"
    }
  ];

  const categories = ["All", "Technology", "Marketing", "Consulting", "Design", "Finance"];
  const budgetRanges = [
    "All",
    "Under $25K",
    "$25K - $50K", 
    "$50K - $100K",
    "$100K - $200K",
    "Over $200K"
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "urgent": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           tender.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Tenders</h1>
          <p className="text-gray-600 text-lg">Discover new business opportunities from verified companies</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tenders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range.toLowerCase()}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTenders.length}</span> of <span className="font-semibold">{tenders.length}</span> tenders
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="deadline">Deadline Soon</SelectItem>
              <SelectItem value="budget-high">Highest Budget</SelectItem>
              <SelectItem value="budget-low">Lowest Budget</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tender Cards */}
        <div className="space-y-6">
          {filteredTenders.map((tender) => {
            const daysRemaining = getDaysRemaining(tender.deadline);
            
            return (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{tender.category}</Badge>
                        <Badge className={getUrgencyColor(tender.urgency)}>
                          {tender.urgency}
                        </Badge>
                        {daysRemaining <= 7 && (
                          <Badge variant="destructive">
                            {daysRemaining} days left
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl leading-tight mb-2">
                        {tender.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-blue-600 font-medium">
                        <Building className="w-4 h-4 mr-1" />
                        {tender.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Budget Range</p>
                      <p className="font-semibold text-green-600 text-lg">{tender.budget}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-2">{tender.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Deadline</p>
                        <p className="font-medium">{new Date(tender.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium">{tender.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Applications</p>
                        <p className="font-medium">{tender.applications}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Posted</p>
                        <p className="font-medium">{new Date(tender.postedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
