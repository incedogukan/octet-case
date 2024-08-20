import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const socials: React.ReactNode[] = [
    <FaFacebookSquare />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];
  const links: string[] = [
    "Conditions of Use",
    "Privacy & Policy",
    "Press Room",
  ];

  return (
    <footer className="footer">
      <div className="social">
        {socials.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <div className="links f-w-700">
        {links.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <div className="copyright">&copy; 2023 Movies by Octet</div>
    </footer>
  );
}

export default Footer;
