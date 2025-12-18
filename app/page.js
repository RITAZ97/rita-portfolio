import Spline from '@splinetool/react-spline/next';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Web from '../components/Web';
import Design from '../components/Design';
import About from '../components/About';
import Contact from '../components/Contact';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Skills />
      <Web />
      <Design/>
      <About/>
      <Contact/>
    </main >
  )
}
