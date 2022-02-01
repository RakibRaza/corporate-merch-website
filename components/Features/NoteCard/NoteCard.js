import Image from 'next/image';
import card from '../../../public/images/features/card.png';

const NoteCard = () => {
  return (
    <section className="notecard-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="features-title">
              <h2 className="title">Include personalized notecards with every shipment</h2>
              <p className="sub-title mb-30">Connect in a genuine and personal way with our notecards. We’ll print them out and include with every shipment</p>
              <p className="sub-title">We use the highest quality card-stock for each note. Full color printing is available.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div data-aos="flip-right" className="notecard-left text-center">
              <Image src={card} alt="card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoteCard;
