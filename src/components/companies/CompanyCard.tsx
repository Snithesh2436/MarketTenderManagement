
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Star,
  Eye,
  Mail,
  ExternalLink
} from "lucide-react";

interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  description: string;
  logo: string;
  employees: string;
  founded: string;
  rating: number;
  reviewsCount: number;
  activeTenders: number;
  successfulProjects: number;
  services: string[];
  website: string;
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={company.logo} alt={`${company.name} logo`} />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
              {company.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-1">
              {company.name}
            </CardTitle>
            <CardDescription className="mb-2">
              {company.industry} • {company.employees} employees
            </CardDescription>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-medium">{company.rating}</span>
                <span className="text-gray-500 ml-1">({company.reviewsCount})</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {company.location}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4 line-clamp-2">{company.description}</p>
        
        {/* Services */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-900 mb-2">Core Services</p>
          <div className="flex flex-wrap gap-2">
            {company.services.slice(0, 4).map((service, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {company.services.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{company.services.length - 4} more
              </Badge>
            )}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 bg-gray-50 rounded-lg px-3">
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-600">{company.activeTenders}</p>
            <p className="text-xs text-gray-600">Active Tenders</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-green-600">{company.successfulProjects}</p>
            <p className="text-xs text-gray-600">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-purple-600">{company.founded}</p>
            <p className="text-xs text-gray-600">Founded</p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Website
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
export type { Company };
