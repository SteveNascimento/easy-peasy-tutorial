import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import './logo.css'

export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/" className='logo'> <HomeOutlined/> Verdurão </Link>
    </div>
  );
}
