import Button from './Button';
import { GiMeal } from 'react-icons/gi';
import { MdQuiz } from 'react-icons/md';
import { AiFillDashboard,AiOutlineWallet, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiPlanet } from 'react-icons/bi';

function CardProjects() {
  return (
    <main className="button-projects">
        <Button
          icon={<GiMeal className="icon" />}
          link="https://thiagodrangel-receitas-mauve.vercel.app/"
          className="app-recipes"
          id="recipes"
        />
        <Button
          icon={<MdQuiz className="icon" />}
          link="https://thiagorangel-trivia.vercel.app/"
          className="app-quiz"
          id="trivia"
        />
        <Button
          icon={<AiOutlineWallet className="icon" />}
          link="https://thiagorangel-wallet.vercel.app/"
          className="app-wallet"
          id="wallet"
        />
        <Button
          icon={<AiOutlineShoppingCart className="icon" />}
          link="https://thiagodrangel-shopping-cart.vercel.app/"
          className="app-cart"
          id="cart"
        />
        <Button
          icon={<BiPlanet className="icon" />}
          link="https://thiagorangel-solar-system.vercel.app/"
          className="solar-system"
          id="solarSystem"
        />
        <Button
          icon={<AiFillDashboard className="icon" />}
          link="https://thiagodrangel-dashboard.vercel.app/"
          className="project-06"
          id="dashboard"
        />
      </main>
  );
}

export default CardProjects;
