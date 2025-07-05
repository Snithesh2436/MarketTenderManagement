
import { useState } from "react";
import Header from "@/components/Header";
import CompaniesHeader from "@/components/companies/CompaniesHeader";
import CompaniesFilters from "@/components/companies/CompaniesFilters";
import CompaniesGrid from "@/components/companies/CompaniesGrid";
import CompaniesPagination from "@/components/companies/CompaniesPagination";
import CompaniesSorting from "@/components/companies/CompaniesSorting";
import { companiesData, industries, locations } from "@/data/companiesData";

const Companies = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredCompanies = companiesData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === "all" || 
                           company.industry.toLowerCase() === selectedIndustry.toLowerCase();
                           
    const matchesLocation = selectedLocation === "all" || 
                           company.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <div className="container mx-auto px-4 py-8">
        <CompaniesHeader 
          totalCompanies={companiesData.length} 
          filteredCount={filteredCompanies.length} 
        />

        <CompaniesFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          industries={industries}
          locations={locations}
        />

        <div className="flex items-center justify-end mb-6">
          <CompaniesSorting />
        </div>

        <CompaniesGrid companies={filteredCompanies} />

        <CompaniesPagination />
      </div>
    </div>
  );
};

export default Companies;
