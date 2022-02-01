import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import FAQ from "../components/Pricing/FAQ/FAQ";
import Notes from "../components/Pricing/Notes/Notes";

const Pricing = () => {
  return (
    <main className="pattern">
      <Breadcrumb page="pricing" />
      <Notes />
      <FAQ />
    </main>
  )
}

export default Pricing;
