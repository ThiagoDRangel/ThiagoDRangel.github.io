import Button from './Button';
import { GiMeal } from 'react-icons/gi';
import { MdQuiz } from 'react-icons/md';
import { AiFillDashboard,AiOutlineWallet, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiPlanet } from 'react-icons/bi';
import '../styles/CardProjects.css';

function CardProjects() {
  return (
    <main className="button-projects">
      <h1 className="title-container">Main Projects</h1>
        <section className="container-01">
          <Button
            icon={<GiMeal className="icon" />}
            link="https://thiagodrangel-receitas-mauve.vercel.app/"
            className="button"
            id="recipes"
          />
          <Button
            icon={<MdQuiz className="icon" />}
            link="https://thiagorangel-trivia.vercel.app/"
            className="button"
            id="trivia"
          />
          <Button
            icon={<AiOutlineWallet className="icon" />}
            link="https://thiagorangel-wallet.vercel.app/"
            className="button"
            id="wallet"
          />
        </section>
        <section className="container-02">
          <Button
            icon={<AiOutlineShoppingCart className="icon" />}
            link="https://thiagodrangel-shopping-cart.vercel.app/"
            className="button"
            id="cart"
          />
          <Button
            icon={<BiPlanet className="icon" />}
            link="https://thiagorangel-solar-system.vercel.app/"
            className="button"
            id="solarSystem"
          />
          <Button
            icon={<AiFillDashboard className="icon" />}
            link="https://thiagodrangel-dashboard.vercel.app/"
            className="button"
            id="dashboard"
          />
        </section>
        <footer className="footer">
          <a href="https://github.com/ThiagoDRangel">
            Developed by <span>ThiagoDRangel</span>
          </a>
        </footer>
      </main>
  );
}

export default CardProjects;
