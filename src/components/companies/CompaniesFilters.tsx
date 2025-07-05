
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface CompaniesFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  industries: string[];
  locations: string[];
}

const CompaniesFilters = ({
  searchTerm,
  setSearchTerm,
  selectedIndustry,
  setSelectedIndustry,
  selectedLocation,
  setSelectedLocation,
  industries,
  locations
}: CompaniesFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
          <SelectTrigger>
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location.toLowerCase()}>
                {location}
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
  );
};

export default CompaniesFilters;
