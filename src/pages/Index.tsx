
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Building, FileText, Users, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const featuredTenders = [
    {
      id: 1,
      title: "Cloud Infrastructure Migration Services",
      company: "TechCorp Solutions",
      budget: "$150,000 - $300,000",
      deadline: "2025-08-15",
      category: "Technology",
      applications: 12
    },
    {
      id: 2,
      title: "Marketing Campaign for Product Launch",
      company: "InnovateCo",
      budget: "$50,000 - $100,000",
      deadline: "2025-07-20",
      category: "Marketing",
      applications: 8
    },
    {
      id: 3,
      title: "Supply Chain Optimization Consulting",
      company: "GlobalTrade Ltd",
      budget: "$75,000 - $150,000",
      deadline: "2025-09-01",
      category: "Consulting",
      applications: 15
    }
  ];

  const stats = [
    { label: "Active Tenders", value: "2,450", icon: FileText },
    { label: "Registered Companies", value: "18,500", icon: Building },
    { label: "Total Applications", value: "45,200", icon: Users },
    { label: "Success Rate", value: "89%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Connect. Compete. <span className="text-blue-200">Collaborate.</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              The premier B2B tender management platform where companies discover opportunities, 
              showcase capabilities, and build lasting business relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/tenders">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold">
                  Browse Tenders
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-xl text-gray-600">Discover high-value tenders from leading companies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">{tender.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{new Date(tender.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{tender.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{tender.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Budget Range</p>
                      <p className="font-semibold text-green-600">{tender.budget}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Applications</p>
                      <p className="font-semibold">{tender.applications}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/tenders">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Tenders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TenderLink?</h2>
            <p className="text-xl text-gray-600">Everything you need to manage B2B relationships and opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Trusted</h3>
              <p className="text-gray-600">Enterprise-grade security with verified company profiles and secure document handling.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Discovery</h3>
              <p className="text-gray-600">Advanced search and matching algorithms to find the perfect business partners and opportunities.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Focused</h3>
              <p className="text-gray-600">Analytics and insights to help you make data-driven decisions and grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of companies already using TenderLink</p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TenderLink</h3>
              <p className="text-gray-400">Connecting businesses through intelligent tender management.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Tenders</a></li>
                <li><a href="#" className="hover:text-white">Post Tenders</a></li>
                <li><a href="#" className="hover:text-white">Company Search</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Best Practices</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TenderLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
