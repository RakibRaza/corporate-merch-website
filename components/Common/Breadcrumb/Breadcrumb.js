import Link from 'next/link';

const Breadcrumb = ({ page }) => {
  return (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-wrap text-center">
              <h2 className="page-title">{page}</h2>
              <ul className="breadcrumb-page">
                <li><Link href="/"><a>Home</a></Link></li>
                <li className="current-page">{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
