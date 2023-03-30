import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
          id=""
        />
        <Button
          icon={<FaGithub className="icon" />}
          link="https://github.com/ThiagoDRangel"
          className="link-button"
          id=""
        />
        <Button
          icon={<FiMail className="icon" />}
          link="mailto:info.tec.campos@gmail.com"
          className="link-button"
          id=""
        />
      </main>
    </div>
  );
}

export default CardInfos;
