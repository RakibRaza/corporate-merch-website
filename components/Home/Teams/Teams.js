import Image from 'next/image';
import dashboard from '../../../public/images/icon/dashboard-2.svg';
import sales from '../../../public/images/icon/sales.svg';
import mike from '../../../public/images/icon/mike.svg';
import employee from '../../../public/images/icon/employee.svg';
import finance from '../../../public/images/icon/finance.svg';

const data = [
  {
    id: 1, title: "HR Solution", desc: "Starting a new job is scary. Welcome new hire with a special onboarding pack and a warm note", img: dashboard
  },
  {
    id: 2, title: "Sales Management", desc: "Express gratitude to loyal clients with curated gifts picked for them. Dont forget to include a notecard!", img: sales
  },
  {
    id: 3, title: "Marketing Solution", desc: "Schlepping swag to and from conferences is OLD SCHOOL. Let us handle all the logistics for you. ", img: mike
  },
  {
    id: 4, title: "Employee Experience", desc: "Keeping company culture alive throughout the year is difficult. Try sending monthly themed gifts to your team!", img: employee
  },
  {
    id: 5, title: "Finance Solution", desc: "Budget. Budget. Budget! Our software comes with a robust billing center which will enable your team to analyze and plan your swag purchases.", img: finance
  },
]
const Teams = () => {
  return (
    <section className="teams-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-title">
              <div className="line"></div>
              <h2>Created For <br /> <span>Enterprise</span>  Teams</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {data.map(({ id, title, desc, img }, i) => (
            <div key={id} className="col-md-6 col-lg-4">
              <div data-aos="fade-up" className="single-team">
                <div className={`icon bg-${i}`}>
                  <Image src={img} alt={title} />
                </div>
                <div className="team-right">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
