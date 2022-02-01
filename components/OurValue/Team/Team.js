import Image from 'next/image';
import team1 from '../../../public/images/our-value/team-1.png';
import team2 from '../../../public/images/our-value/team-2.png';
import team3 from '../../../public/images/our-value/team-3.png';
import team4 from '../../../public/images/our-value/team-4.png';
const data = [
  { id: 1, name: "Kara Perez", title: "Vice President", img: team1 },
  { id: 2, name: "Kara Perez", title: "Vice President", img: team2 },
  { id: 3, name: "Kara Perez", title: "Vice President", img: team3 },
  { id: 4, name: "Kara Perez", title: "Vice President", img: team4 },
]
const Team = () => {
  return (
    <section className="team-area">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="team-top">
              <h2 className="title">Meet the team</h2>
              <p className="top-text">Our products are built with safe working conditions, ethical manufacturing processes and environmentally friendly materials</p>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(({ id, name, title, img }) => (
            <div key={id} className="col-6 col-md-3" data-aos="fade-down">
              <div className="single-person">
                <div className="person-img">
                  <Image src={img} alt={name} />
                </div>
                <div className="person-info text-center">
                  <h3 className="name">{name}</h3>
                  <h5 className="title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team;
