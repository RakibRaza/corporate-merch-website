import { Tabs, Tab, Accordion } from "react-bootstrap";

const data = [
  { id: 1, question: "How do we place an order?", answer: "For “Swag Packs”, the minimum is 50 packs, while for “Bulk Swag”, the minimum for clothing is 36 pieces, and for hard goods, 50 pieces. Minimums can be a mixture of different sizes and can be Male or Female style." },
  { id: 2, question: "What is the minimum quantity I can order?", answer: "For “Swag Packs”, the minimum is 50 packs, while for “Bulk Swag”, the minimum for clothing is 36 pieces, and for hard goods, 50 pieces. Minimums can be a mixture of different sizes and can be Male or Female style." },
  { id: 3, question: "How can you pay for your order?", answer: "For “Swag Packs”, the minimum is 50 packs, while for “Bulk Swag”, the minimum for clothing is 36 pieces, and for hard goods, 50 pieces. Minimums can be a mixture of different sizes and can be Male or Female style." },
  { id: 4, question: "We are not certain as to which decoration method to choose. Will your team guide us?", answer: "For “Swag Packs”, the minimum is 50 packs, while for “Bulk Swag”, the minimum for clothing is 36 pieces, and for hard goods, 50 pieces. Minimums can be a mixture of different sizes and can be Male or Female style." },
]

const Questions = () => (
  <Accordion defaultActiveKey="0" flush>
    {data.map(({ id, question, answer }, i) => (
      <Accordion.Item key={id} eventKey={i.toString()}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body> <p>{answer}</p></Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
)

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="faq-title-area text-center">
              <p className="title-top-text">learn how to get started</p>
              <h2 className="title">Frequently Asked Questions</h2>
              <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy or <span>Contact Support</span> </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="primary-tab">
              <Tabs defaultActiveKey="order">
                <Tab eventKey="order" title="order">
                  <Questions />
                </Tab>
                <Tab eventKey="printing" title="printing">
                  <Questions />
                </Tab>
                <Tab eventKey="shipping" title="shipping">
                  <Questions />
                </Tab>
                <Tab eventKey="impace" title="impace">
                  <Questions />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ;
