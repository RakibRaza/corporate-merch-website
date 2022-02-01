import Image from 'next/image';
import { useRouter } from 'next/router';
import data from '../../../public/data/products';

const MightLike = () => {
  const router = useRouter();
  return (
    <section className="might-like">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title">You might also like</h2>
          </div>
        </div>
        <div className="products">
          <div className="row">
            {data.slice(3, 8).map(({ id, title, oldPrice, disPrice, img }) => (
              <div key={id} className="col-sm-6 col-md-4 col-lg-3">
                <div onClick={() => router.push(`/products/${encodeURIComponent(id)}`)} className="product">
                  <div className="product__img">
                    <div className="img-wrapper">
                      <Image className="img" src={img} alt={title} />
                    </div>
                  </div>
                  <div className="details">
                    <h4 className="product__title">{title}</h4>
                    <div className="bottom">
                      <div className="left">
                        <h5 className="product__price"><span className="product__price-old"> ${oldPrice} </span> <span className="product__price-special"> ${disPrice}</span></h5>
                      </div>
                      <ul className="product__colors">
                        <li className="color"></li>
                        <li className="color cyan"></li>
                        <li className="color yellow"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MightLike;
