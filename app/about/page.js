import Navbar from '/app/component/nav';

export default function About() {
    return (
      <>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about our company and our values.</p>
        </div>

        {/* Vision Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/img/m.png" className="img-fluid rounded-3" alt="Vision Image" />
          </div>
          <div className="col-md-6">
            <h2 className="display-6">Our Vision</h2>
            <p className="lead">
              At Game Haven, we envision a world where gaming transcends beyond entertainment to become a source of joy, challenge, and community. Our mission is to bring the best and most innovative games to our customers, creating a haven for gamers of all kinds. We believe in fostering a passion for games through exceptional service, diverse selections, and engaging experiences.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img src="/img/a.png" className="img-fluid rounded-3" alt="Mission Image" />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="display-6">Our Mission</h2>
            <p className="lead">
              Our mission at Game Haven is to provide a diverse range of high-quality video games, from the latest releases to timeless classics. We are dedicated to building a vibrant community where gamers can connect, share, and grow their love for games. We strive to offer outstanding customer service, expert advice, and a welcoming environment for all gaming enthusiasts.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/img/r.png" className="img-fluid rounded-3" alt="Values Image" />
          </div>
          <div className="col-md-6">
            <h2 className="display-6">Our Values</h2>
            <ul className="lead">
              <li><strong>Commitment to Quality:</strong> We are committed to offering top-tier games and products that meet the highest standards.</li>
              <li><strong>Community Engagement:</strong> We believe in building a supportive and inclusive community for gamers of all backgrounds.</li>
              <li><strong>Passion for Gaming:</strong> Our love for games drives everything we do, from curating our selection to engaging with our customers.</li>
              <li><strong>Integrity and Trust:</strong> We operate with honesty and transparency, always putting the needs of our customers first.</li>
              <li><strong>Innovation:</strong> We seek out new trends and technologies to keep our offerings fresh and exciting.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
}

function Footer() {
    return (
      <footer className="py-5 bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Home</a></li>
                <li><a href="#" className="text-dark">Features</a></li>
                <li><a href="#" className="text-dark">Pricing</a></li>
                <li><a href="#" className="text-dark">FAQs</a></li>
                <li><a href="#" className="text-dark">About</a></li>
              </ul>
            </div>
    
            <div className="col-md-3 mb-3">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Contact Us</a></li>
                <li><a href="#" className="text-dark">Help Center</a></li>
                <li><a href="#" className="text-dark">Report a Problem</a></li>
              </ul>
            </div>
    
            <div className="col-md-3 mb-3">
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Facebook</a></li>
                <li><a href="#" className="text-dark">Twitter</a></li>
                <li><a href="#" className="text-dark">Instagram</a></li>
              </ul>
            </div>
    
            <div className="col-md-3 mb-3">
              <h5>Subscribe</h5>
              <p>Get the latest updates and offers.</p>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" aria-label="Your email" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
}
