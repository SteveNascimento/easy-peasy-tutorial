import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';

export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/" className="Logo"> <HomeOutlined/> Steve Shopping</Link>
    </div>
  );
}
