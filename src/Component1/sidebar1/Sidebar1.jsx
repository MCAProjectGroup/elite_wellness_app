import "./sidebar1.css";
// import {LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";

export default function Sidebar1() {
  return (
    <div className="sidebar1">
      <div className="sidebar1Wrapper">
        <div className="sidebar1Menu">
          <h3 className="sidebar1Title">Dashboard</h3>
          <ul className="sidebar1List">
            <Link to="/" className="link">
            <li className="sidebar1ListItem active">
              <LineStyleIcon className="sidebar1Icon" />
              Home
            </li>
            </Link>
            <li className="sidebar1ListItem">
              <TimelineIcon className="sidebar1Icon" />
              Analytics
            </li>
            <li className="sidebar1ListItem">
              <TrendingUpIcon className="sidebar1Icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar1Menu">
          <h3 className="sidebar1Title">Quick Menu</h3>
          <ul className="sidebar1List">
            <Link to="/users" className="link">
              <li className="sidebar1ListItem">
                <PermIdentityIcon className="sidebar1Icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar1ListItem">
                <StorefrontIcon className="sidebar1Icon" />
                Products
              </li>
            </Link>
            <li className="sidebar1ListItem">
              <AttachMoneyIcon className="sidebar1Icon" />
              Transactions
            </li>
            <li className="sidebar1ListItem">
              <BarChartIcon className="sidebar1Icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar1Menu">
          <h3 className="sidebar1Title">Notifications</h3>
          <ul className="sidebar1List">
            <li className="sidebar1ListItem">
              <MailOutlineIcon className="sidebar1Icon" />
              Mail
            </li>
            <li className="sidebar1ListItem">
              <DynamicFeedIcon className="sidebar1Icon" />
              Feedback
            </li>
            <li className="sidebar1ListItem">
              <ChatBubbleOutlineIcon className="sidebar1Icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar1Menu">
          <h3 className="sidebar1Title">Staff</h3>
          <ul className="sidebar1List">
            <li className="sidebar1ListItem">
              <WorkOutlineIcon className="sidebar1Icon" />
              Manage
            </li>
            <li className="sidebar1ListItem">
              <TimelineIcon className="sidebar1Icon" />
              Analytics
            </li>
            <li className="sidebar1ListItem">
              < ReportIcon className="sidebar1Icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  }