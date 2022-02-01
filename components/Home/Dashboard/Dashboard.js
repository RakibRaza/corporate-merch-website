import Image from 'next/image';
import dashboard from '../../../public/images/home/dashboard.png';

const Dashboard = () => {
  return (
    <section className="dashboard-area">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-5">
            <h2 className="title">API Powered Swag Dashboard</h2>
            <div className="single-dash-item">
              <span className="number">1</span>
              <div className="dashboard-text">
                <h4>Easy Inventory management</h4>
                <p>Manage your inventory levels 24/7. Re-order with a simple Click!</p>
              </div>
            </div>
            <div className="single-dash-item">
              <span className="number">2</span>
              <div className="dashboard-text">
                <h4>Powerful Tracking System</h4>
                <p>Track and review previous shipments.</p>
              </div>
            </div>
            <div className="single-dash-item">
              <span className="number">3</span>
              <div className="dashboard-text">
                <h4>Customization</h4>
                <p>Easy customize everything for a personalized experience.</p>
              </div>
            </div>
            <div className="single-dash-item">
              <span className="number">4</span>
              <div className="dashboard-text">
                <h4>One solution for all</h4>
                <p>Sync contacts from your CRM and Sales software</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div data-aos="flip-left" className="dashboard-right">
              <Image src={dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
