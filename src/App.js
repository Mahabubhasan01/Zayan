import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/skills/Skills";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
