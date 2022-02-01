import Image from 'next/image';
import shape from '../../../public/images/use-cases/shape-1.png';
import box from '../../../public/images/use-cases/box.png';

const MarketingSolution = () => {
  return (
    <section id="marketing-solution" className="marketing section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="marketing__left">
              <p className="use-case-top-title">MARKETING SOLUTION</p>
              <h2 className="use-case-title">Spread brand awareness</h2>
              <div className="points">
                <div className="point">
                  <span className="point__number">1</span>
                  <p className="point__text">Schlepping swag to and from conferences is OLD SCHOOL. Let us handle all the logistics for you.</p>
                </div>
                <div className="point">
                  <span className="point__number">2</span>
                  <p className="point__text">Better yet, don’t even bring swag to conferences. Use our QR code and we’ll ship directly to each recipient.</p>
                </div>
                <div className="point">
                  <span className="point__number">3</span>
                  <p className="point__text">You’ve got loyal fans and employees. Let them buy merch whenever they want. Use our E-commerce capabilities to bring your brand online!</p>
                </div>
                <div className="point">
                  <span className="point__number">4</span>
                  <p className="point__text">Holiday gifting is a crucial time of year for reaffirming those connections. Give your recipients the Gift of choice to choose which gift they want.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="marketing__right">
              <div className="shape">
                <Image src={shape} alt="shape" />
                <div className="shape__box">
                  <Image src={box} alt="box" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingSolution;
