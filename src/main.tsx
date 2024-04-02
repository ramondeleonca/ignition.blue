import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";

import Index from './routes/Index';

import Alumni from './routes/team/Alumni';
import Sponsors from './routes/team/Sponsors';

import Legacy2024 from './routes/legacy/Legacy2024';
import Legacy2023 from './routes/legacy/Legacy2023';
import Legacy2022 from './routes/legacy/Legacy2022';

import Programming from './routes/engineering/Programming';
import BIRD from './routes/engineering/BIRD';
import Mechanical from './routes/engineering/Mechanical';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Engineering from './routes/engineering/Engineering';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  new LocomotiveScroll();

  return (
    <React.StrictMode>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <NavBar></NavBar>
        <Routes>
          {/* Homepage */}
          <Route path='/' Component={Index}></Route>

          {/* Legacy routes */}
          <Route path='/legacy/2024' Component={Legacy2024}></Route>
          <Route path='/legacy/2023' Component={Legacy2023}></Route>
          <Route path='/legacy/2022' Component={Legacy2022}></Route>

          {/* Team Routes */}
          <Route path='/team/alumni' Component={Alumni}></Route>
          <Route path='/team/sponsors' Component={Sponsors}></Route>

          {/* Engineering Routes */}
          <Route path='/engineering' Component={Engineering}></Route>
          <Route path='/engineering/programming' Component={Programming}></Route>
          <Route path='/engineering/bird' Component={BIRD}></Route>
          <Route path='/engineering/mechanical' Component={Mechanical}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main></Main>);
