import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Performance from "../components/OurValue/Performance/Performance";
import Team from "../components/OurValue/Team/Team";

const OurValue = () => {
  return (
    <main className="pattern">
      <Breadcrumb page="our value" />
      <Performance />
      <Team />
    </main>
  )
}

export default OurValue;
