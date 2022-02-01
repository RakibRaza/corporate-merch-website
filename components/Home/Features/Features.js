import Image from 'next/image';
import dashboard from '../../../public/images/icon/dashboard-4.svg';
import bag from '../../../public/images/icon/bag.svg'
import ship from '../../../public/images/icon/ship.svg'

const data = [
  { id: 1, title: "Create", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae", icon: dashboard },
  { id: 2, title: "Store", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae", icon: bag },
  { id: 3, title: "Ship", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae", icon: ship },
]
const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {data.map(({ id, title, desc, icon }, i) => (
            <div key={id} className="col-md-6 col-lg-4">
              <div className="feature text-center">
                <div className={`feature__icon bg-${i}`}>
                  <Image src={icon} alt="dashboard" />
                </div>
                <h2 className="feature__title">{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Features;
