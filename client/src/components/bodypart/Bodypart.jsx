import React from 'react'
import {Heart,Brain,Eye,Candy,View }from "lucide-react";
import './bodypart.css';

function Bodypart() {
  return (
    <div className="bodyicon-container">
    <div className="bodyicon"> 
  <Heart size={20} color="black"  id="hearts" />
  </div>
  <div className="bodyicon"> 
  <Brain size={20} color="#ffffff" />
  </div>
  <div className="bodyicon"> 
  <Eye size={20} color="#ffffff" />
  </div>
  <div className="bodyicon"> 
  <Candy size={20} color="#ffffff" />
  </div> 
  <div className="bodyicon"> 
  <View size={20} color="#ffffff" />
  </div>
  </div>
  )
}

export default Bodypart
