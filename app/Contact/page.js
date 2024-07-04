import Navbar from '/app/component/nav';

export default function Contact() {
    return (
      <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 text-center">
              <h2 className="mb-4">Contact Us</h2>
              <img src="/img/555.jpg" alt="Contact Us" className="img-fluid mb-4" />
              <p className="mb-4">
                We are located at 123 Game Street, Gamer City, GC 12345.<br />
                Feel free to reach out to us for any inquiries or support.
              </p>
              <a href="mailto:support@example.com" className="btn btn-primary">
                Send Us an Email
              </a>
            </div>
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
