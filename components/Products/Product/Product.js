import Image from 'next/image';
import { useRouter } from 'next/router';

const Product = ({ products }) => {
  const router = useRouter();
  return (
    <div className="col-lg-8 order-lg-last">
      <div className="products">
        <div className="row">
          {products.map(({ id, title, oldPrice, disPrice, img, icon, label }, i) => (
            <div key={id} className="col-sm-6 col-md-4">
              <div onClick={() => router.push(`/products/${encodeURIComponent(id)}`)} className="product">
                <div className="product__img">
                  <div className="top">
                    {label && <div className="left">
                      <h5 className={`label ${i % 2 === 1 ? "green" : ""}`}>{label}</h5>
                    </div>}
                    {icon && <div className="right">
                      <div className="icon">
                        <Image src={icon} alt="icon" />
                      </div>
                    </div>}
                  </div>
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
  )
}

export default Product
