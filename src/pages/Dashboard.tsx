import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building, 
  FileText, 
  Users, 
  TrendingUp, 
  Plus, 
  Edit, 
  Eye,
  Calendar,
  DollarSign,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Mock data
  const companyStats = {
    activeTenders: 3,
    applications: 12,
    activeApplications: 8,
    successfulBids: 24
  };

  const recentTenders = [
    {
      id: 1,
      title: "Digital Marketing Campaign",
      budget: "$25,000 - $50,000",
      deadline: "2025-08-15",
      applications: 5,
      status: "active"
    },
    {
      id: 2,
      title: "Web Development Services",
      budget: "$15,000 - $30,000",
      deadline: "2025-07-28",
      applications: 8,
      status: "active"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      budget: "$8,000 - $15,000",
      deadline: "2025-07-20",
      applications: 12,
      status: "closed"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      tender: "Cloud Infrastructure Setup",
      company: "TechCorp Solutions",
      submittedDate: "2025-07-02",
      status: "under-review",
      budget: "$75,000"
    },
    {
      id: 2,
      tender: "Marketing Automation Platform",
      company: "GrowthHackers Inc",
      submittedDate: "2025-07-01",
      status: "shortlisted",
      budget: "$35,000"
    },
    {
      id: 3,
      tender: "Supply Chain Optimization",
      company: "LogiFlow Systems",
      submittedDate: "2025-06-28",
      status: "rejected",
      budget: "$120,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "closed": return "bg-gray-100 text-gray-800";
      case "under-review": return "bg-yellow-100 text-yellow-800";
      case "shortlisted": return "bg-blue-100 text-blue-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, InnovateTech!</h1>
            <p className="text-gray-600">Manage your tenders, applications, and company profile</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/post-tender">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Post New Tender
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Tenders</p>
                  <p className="text-2xl font-bold text-gray-900">{companyStats.activeTenders}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{companyStats.applications}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{companyStats.activeApplications}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Successful Bids</p>
                  <p className="text-2xl font-bold text-gray-900">{companyStats.successfulBids}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="tenders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tenders">My Tenders</TabsTrigger>
                <TabsTrigger value="applications">My Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="tenders">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Tenders</CardTitle>
                    <CardDescription>
                      Manage your posted tenders and view application status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTenders.map((tender) => (
                        <div key={tender.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{tender.title}</h3>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                              <span className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {tender.budget}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {tender.deadline}
                              </span>
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {tender.applications} applications
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(tender.status)}>
                              {tender.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Link to="/my-tenders">
                        <Button variant="outline" className="w-full">
                          View All Tenders
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>
                      Track your tender applications and their status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentApplications.map((application) => (
                        <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{application.tender}</h3>
                            <p className="text-sm text-gray-600 mb-1">by {application.company}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {application.budget}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                Applied {application.submittedDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(application.status)}>
                              {application.status.replace("-", " ")}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Link to="/my-applications">
                        <Button variant="outline" className="w-full">
                          View All Applications
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg" alt="Company Logo" />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                      IT
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">InnovateTech Solutions</h3>
                    <p className="text-sm text-gray-600">Technology Consulting</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    contact@innovatetech.com
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (555) 123-4567
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Link to="/profile">
                    <Button variant="outline" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/post-tender" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Tender
                  </Button>
                </Link>
                <Link to="/browse-tenders" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Browse Tenders
                  </Button>
                </Link>
                <Link to="/companies" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="w-4 h-4 mr-2" />
                    Find Companies
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
