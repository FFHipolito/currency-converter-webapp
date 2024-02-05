import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Visite os meus projetos!</p>
      <div className="links">
        <a
          href="https://github.com/FFHipolito"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../../../images/github-logo.png" alt="git hub logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-hipólito/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../../../images/linkedin-logo.png"
            alt="linkedin logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
