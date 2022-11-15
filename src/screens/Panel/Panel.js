import logo from './logo.svg';
import './Panel.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import { useState } from 'react';
import Requests from './screens/Requests';

function Panel() {
  const isDoctor = localStorage.getItem("doctor")

  const [Page, setPage] = useState(isDoctor?0:1)
  return (
    <div className="Panel">
      <div className="PanelGlass">
        <Sidebar setPage={setPage} />
        {
          [MainDash, Requests].map((Item, index)=> index===Page && <Item />)
        }
        {/* <MainDash /> */}
        {/* <RightSide /> */}
      </div>
    </div>
  );
}

export default Panel;
