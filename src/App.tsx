import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { About, Contact, Home, Projects } from "./components/sections";
import { AnimatedBackground } from "./components/sections/background";
import './sass/app.scss';

function App() {
  return (
    <div id="app">
      <AnimatedBackground />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
