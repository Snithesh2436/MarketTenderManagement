
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CompaniesSorting = () => {
  return (
    <Select defaultValue="rating">
      <SelectTrigger className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating">Highest Rated</SelectItem>
        <SelectItem value="projects">Most Projects</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="alphabetical">A-Z</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CompaniesSorting;
