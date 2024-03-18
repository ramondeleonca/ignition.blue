import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";

import Index from './routes/Index';

import Team from './routes/team/Team';
import Alumni from './routes/team/Alumni';
import Sponsors from './routes/team/Sponsors';

import Legacy2024 from './routes/legacy/Legacy2024';
import Legacy2023 from './routes/legacy/Legacy2023';
import Legacy2022 from './routes/legacy/Legacy2022';

import Programming from './routes/engineering/Programming';
import Electrical from './routes/engineering/Electrical';
import Mechanical from './routes/engineering/Mechanical';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Loading from './routes/loading';
import Engineering from './routes/engineering/Engineering';

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          {/* Homepage */}
          <Route path='/' element={<Index></Index>}></Route>

          {/* Legacy routes */}
          <Route path='/legacy/2024' element={<Legacy2024></Legacy2024>}></Route>
          <Route path='/legacy/2023' element={<Legacy2023></Legacy2023>}></Route>
          <Route path='/legacy/2022' element={<Legacy2022></Legacy2022>}></Route>

          {/* Team Routes */}
          <Route path='/team' element={<Team></Team>}></Route>
          <Route path='/team/alumni' element={<Alumni></Alumni>}></Route>
          <Route path='/team/sponsors' element={<Sponsors></Sponsors>}></Route>

          {/* Engineering Routes */}
          <Route path='/engineering' element={<Engineering></Engineering>}></Route>
          <Route path='/engineering/programming' element={<Programming></Programming>}></Route>
          <Route path='/engineering/electrical' element={<Electrical></Electrical>}></Route>
          <Route path='/engineering/mechanical' element={<Mechanical></Mechanical>}></Route>
        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
