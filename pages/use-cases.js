import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import EmployeeExperience from "../components/UseCases/EmployeeExperience/EmployeeExperience";
import FinanceSolution from "../components/UseCases/FinanceSolution/FinanceSolution";
import HrManagement from "../components/UseCases/HrManagement/HrManagement";
import MarketingSolution from "../components/UseCases/MarketingSolution/MarketingSolution";
import SalesManagement from "../components/UseCases/SalesManagement/SalesManagement";
import Swag from "../components/UseCases/Swag/Swag";

const UseCases = () => {
  return (
    <main className="pattern">
      <Breadcrumb page="use cases" />
      <Swag />
      <HrManagement />
      <SalesManagement />
      <MarketingSolution />
      <EmployeeExperience />
      <FinanceSolution />
    </main>
  )
}

export default UseCases;
