export function Pricing() {
  return (
    <article id="pricing" className="panel">
      <h2>PRICING</h2>
      <div id="info">
        <section>
          <h3>BASIC</h3>
          <div>
            <p>
              <span className="price">Rp 1mil</span>
              /month
            </p>
            <a href="#">Get Started</a>
          </div>
          <ul>
            <li>Record incoming inventory</li>
            <li>Record outgoing inventory</li>
            <li>Track daily profit</li>
          </ul>
        </section>
        <section>
          <h3>BUSINESS</h3>
          <div>
            <p>
              <span className="price">Rp 3mil</span>
              /month
            </p>
            <a href="#">Get Started</a>
          </div>
          <ul>
            <li>All features of BASIC plan</li>
            <li>Sales analysis with charts</li>
            <li>24/7 support</li>
          </ul>
        </section>
        <section>
          <h3>ENTREPRENEUR</h3>
          <div>
            <p>
              <span className="price">Rp 10mil</span>
              /month
            </p>
            <a href="#">Get Started</a>
          </div>
          <ul>
            <li>All features of BUSINESS plan</li>
            <li>Data export to Excel</li>
            <li>AI-driven income prediction</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
