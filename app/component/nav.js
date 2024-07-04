import Link from "next/link";

export default function Nav() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src="/img/w.png" alt="Logo" width="40" height="40" className="me-2" />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-end mb-md-0">
          <li><a href="/" className="nav-link px-2 mx-3 link-secondary">Home</a></li>
          <li><Link href="/about" className="nav-link px-2 mx-3">About</Link></li>
          <li><Link href="/Service" className="nav-link px-2 mx-3">Service</Link></li>
          <li><Link href="/Contact" className="nav-link px-2 mx-3">Contact</Link></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </>
  );
}
