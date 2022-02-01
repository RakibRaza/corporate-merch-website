import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import refresh from '../../../public/images/icon/refresh.svg';
import RangeSlider from '../RangeSlider/RangeSlider';

const ProductSidebar = () => {
  return (

    <div className="col-lg-4">
      <aside className="shope-sidebar">
        <div className="filter-top">
          <div className="left">
            <h5>Filter</h5>
          </div>
          <div className="right">
            <Image src={refresh} alt="icon" />
          </div>
        </div>
        <div className="filter-bottom">
          <div className="single-widget">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Catagory</Accordion.Header>
                <Accordion.Body>
                  <div className="categories-list">
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="Tshirts" />
                        <label className="form-check-label" htmlFor="Tshirts">T-Shirt</label>
                      </div>
                      <span className="categories-count">368</span>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="polo-shirt" />
                        <label className="form-check-label" htmlFor="polo-shirt">Polo Shirts</label>
                      </div>
                      <span className="categories-count">185</span>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="casual-pant" />
                        <label className="form-check-label" htmlFor="casual-pant">Casual Pant</label>
                      </div>
                      <span className="categories-count">98</span>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="jeans" />
                        <label className="form-check-label" htmlFor="jeans">Jeans</label>
                      </div>
                      <span className="categories-count">75</span>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="gymware" />
                        <label className="form-check-label" htmlFor="gymware">Gymware</label>
                      </div>
                      <span className="categories-count">48</span>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="single-widget">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body>
                  <ul className="color-switch">
                    <li className="single-color active"></li>
                    <li className="single-color yellow"></li>
                    <li className="single-color blue"></li>
                    <li className="single-color pink"></li>
                    <li className="single-color green"></li>
                    <li className="single-color cyan"></li>
                    <li className="single-color orange"></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="single-widget">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Production Time</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="single-widget">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Minimum Quantity</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="single-widget">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Price Range</Accordion.Header>
                <Accordion.Body>
                  <RangeSlider min={0}
                    max={1000}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="single-widget">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <div className="categories-list">
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="addidas" />
                        <label className="form-check-label" htmlFor="addidas">Addidas</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="nike" />
                        <label className="form-check-label" htmlFor="nike">Nike</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="eddie" />
                        <label className="form-check-label" htmlFor="eddie">Eddie </label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="gidan" />
                        <label className="form-check-label" htmlFor="gidan">Gidan</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="lacoster" />
                        <label className="form-check-label" htmlFor="lacoster">Lacoster</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="polo" />
                        <label className="form-check-label" htmlFor="polo">Polo</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="urena" />
                        <label className="form-check-label" htmlFor="urena">Urena</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="puma" />
                        <label className="form-check-label" htmlFor="puma">Puma</label>
                      </div>
                    </div>
                    <div className="single-categorie">
                      <div className="categorie-left">
                        <input className="form-check-input" type="checkbox" id="nike" />
                        <label className="form-check-label" htmlFor="nike">Nike</label>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </aside>
    </div>


  )
}

export default ProductSidebar;
