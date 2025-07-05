
interface CompaniesHeaderProps {
  totalCompanies: number;
  filteredCount: number;
}

const CompaniesHeader = ({ totalCompanies, filteredCount }: CompaniesHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Companies</h1>
      <p className="text-gray-600 text-lg">Connect with verified businesses and discover potential partners</p>
      <div className="flex items-center justify-between mt-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredCount}</span> of <span className="font-semibold">{totalCompanies}</span> companies
        </p>
      </div>
    </div>
  );
};

export default CompaniesHeader;
