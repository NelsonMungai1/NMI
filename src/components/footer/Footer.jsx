import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">NMI</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="www.facebook.com"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="www.instagram.com"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="www.twitter.com"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; NMI Solutions. All rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
