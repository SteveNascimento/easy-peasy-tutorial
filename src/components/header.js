import React from "react";
import BasketCount from "./basket-count";
import Logo from "./logo";
import { Layout } from 'antd'
import './header.css'

export default function funHeader() {
  const { Header } = Layout
  return (
    <Header className='Header'>
      <Logo /> 
      <BasketCount />
    </Header>
  );
}
