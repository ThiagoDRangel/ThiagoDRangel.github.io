import CardInfos from "./components/CardInfos";
import CardProjects from "./components/CardProjects";
import './styles/App.css';

function App() {
  return (
    <main className="container">
      <CardInfos />
      <CardProjects />
    </main>
  );
}

export default App;