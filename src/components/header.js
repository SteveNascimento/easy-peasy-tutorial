import React from "react";
import BasketCount from "./basket-count";
import Logo from "./logo";
import './Header.css'

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <BasketCount />
    </div>
  );
}
