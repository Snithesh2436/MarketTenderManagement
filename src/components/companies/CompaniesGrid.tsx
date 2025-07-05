
import CompanyCard, { Company } from "./CompanyCard";

interface CompaniesGridProps {
  companies: Company[];
}

const CompaniesGrid = ({ companies }: CompaniesGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompaniesGrid;
