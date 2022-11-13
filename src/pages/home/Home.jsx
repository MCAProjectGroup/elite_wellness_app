import Topbar from "../../Component1/topbar/Topbar";

import Chart from "../../Component1/chart/Chart";
import Featuredinfo from "../../Component1/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../Component1/widgetSm/WidgetSm";
import WidgetLg from "../../Component1/widgetLg/WidgetLg";
import Sidebar1 from "../../Component1/sidebar1/Sidebar1";



export default function Home() {
  return (
    <div className="home">
      <Topbar/>
      <div className="home_1">

      <Sidebar1/>
      <div className="div">
      <Featuredinfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>

      </div>
      </div>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
      </div>
    </div>
  );
}