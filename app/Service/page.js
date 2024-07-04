import Navbar from '/app/component/nav';

export default function Service() {
    return (
      <>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1>Our Services</h1>
          <p>Discover the range of services we offer to enhance your gaming experience.</p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Game Sales</h3>
            <p>
              We offer a wide selection of the latest and greatest video games across various platforms. Whether you are looking for the newest release or classic titles, our extensive collection ensures that you'll find the perfect game for you.
            </p>
            <a href="#" className="btn btn-primary">Browse Games</a>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Game Rentals</h3>
            <p>
              Enjoy your favorite games without the commitment of a purchase. Our game rental service allows you to borrow games for a period that suits you, offering a flexible and cost-effective solution for your gaming needs.
            </p>
            <a href="#" className="btn btn-primary">Rent a Game</a>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Game Repairs</h3>
            <p>
              Having issues with your game console or accessories? Our professional repair service can handle various problems, from minor fixes to more complex repairs, ensuring your equipment is up and running in no time.
            </p>
            <a href="#" className="btn btn-primary">Request Repair</a>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
}

function Footer() {
    return (
      <footer className="py-5 bg-light">
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
