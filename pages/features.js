import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Dashboard from "../components/Features/Dashboard/Dashboard";
import Purchasing from "../components/Features/Purchasing/Purchasing";
import NoteCard from "../components/Features/NoteCard/NoteCard";
import Integration from "../components/Features/Integration/Integration";
import Brands from "../components/Features/Brands/Brands";
import Storage from "../components/Features/Storage/Storage";
import Animation from "../components/Features/Animation/Animation";

const Features = () => {
  return (
    <main className="pattern">
      <Breadcrumb page="how it works" />
      <Animation />
      <Brands />
      <Dashboard />
      <Purchasing />
      <Storage />
      <NoteCard />
      <Integration />
    </main>
  )
}

export default Features;
