import React,{ useState } from 'react';
import './header.css';
import { LayoutDashboard,ClipboardList, CalendarDays, MessageCircle,Settings,Phone,Bell,User} from "lucide-react";
import { Link } from 'react-router-dom';

function Header() {

  const [bgcolor, setbgcolor]=useState("true");

  const Bgchange=()=>{
    const close =document.querySelector("#word");
    setbgcolor(!bgcolor)
       close.style.background = bgcolor ? "black" : "white";
       close.style.color=bgcolor ? "white" : "black";
   }
  
  return (
       
    <div className="header-container" id="word" >
      <div className="header-logo">
        <h1>Medical Magic</h1>
      </div>
      <div className="header-center">
        <div className="header-one">
        <LayoutDashboard size={20} color="#fcfcfc" strokeWidth={1.5} />
           <Link to="/dashboard" id="link">Dashboard</Link>
      </div>
      <div className="header-one">
      <ClipboardList size={20} color="#ffffff" strokeWidth={1.5} />
        <Link to="/Report" id="link">Reports</Link>
      </div>
      <div className="header-one">
      <CalendarDays size={20} color="#ffffff" strokeWidth={1.5} />
        <Link to="/calander" id="link">Calander</Link>
      </div>
      <div className="header-one">
      <MessageCircle size={20} color="#ffffff" strokeWidth={1.5} />
        <Link to="/chat" id="link">Chat</Link>
      </div>
      <div className="header-one">
      <Settings size={20} color="#ffffff" strokeWidth={1.5} />
        <Link to="/settings" id="link">Settings</Link>
      </div>
      </div>
      <div className="header-left">
        <div className="header-end">
      <Phone size={20} color="#ffffff" strokeWidth={1.5} />
      </div>
      <div className="header-end">
      <Bell size={20} color="#ffffff" strokeWidth={1.5} />
      </div>
      <div className="header-end">
      <User size={20} color="#ffffff" strokeWidth={1.5}  onClick={Bgchange}/>
      </div>
      </div>
    </div>
  )
}

export default Header;
