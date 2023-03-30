import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiJavascript } from 'react-icons/si';
import Button from './Button';
import '../styles/CardInfos.css';

function CardInfos() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="profile-picture"></div>
        <div className="titles-container">
          <h1 className="title">Thiago Rangel</h1>
          <h2 className="subtitle">Web Development Student</h2>
        </div>
      </header>

      <main className="button-container">
        <Button
          icon={<FaLinkedin className="icon" />}
          link="https://www.linkedin.com/in/ThiagoDRangel/"
          className="link-button"
          id="LinkedIn"
        />
        <Button
          icon={<FaGithub className="icon" />}
          link="https://github.com/ThiagoDRangel"
          className="link-button"
          id="GitHub"
        />
        <Button
          icon={<FiMail className="icon" />}
          link="mailto:info.tec.campos@gmail.com"
          className="link-button"
          id="Email"
        />
      </main>
      <footer>
        <span className="span-footer">Developed by <a href="https://github.com/ThiagoDRangel">ThiagoDRangel</a><SiJavascript /></span>
      </footer>
    </div>
  );
}

export default CardInfos;