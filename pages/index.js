import Banner from "../components/Home/Banner/Banner";
import Brand from "../components/Home/Brand/Brand";
import Teams from "../components/Home/Teams/Teams";
import Dashboard from "../components/Home/Dashboard/Dashboard";
import Procurement from "../components/Home/Procurement/Procurement";
import Stores from "../components/Home/Stores/Stores";
import Redemption from "../components/Home/Redemption/Redemption";
import Notecards from "../components/Home/Notecards/Notecards";
import EnterpriseTeams from "../components/Home/EnterpriseTeams/EnterpriseTeams";
import Shipping from "../components/Home/Shipping/Shipping";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Features from "../components/Home/Features/Features";


const Home = () => {
  return (<>
    <main className="pattern">
      <Banner />
      <Features />
      <Procurement />
      <Notecards />
      <Redemption />
      <Stores />
      <Shipping />
      <Testimonial />
    </main>
  </>
  )
}
export default Home;
