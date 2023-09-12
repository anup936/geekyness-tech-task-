import React from "react";
import { Hero } from "./hero/Hero";
import { Card } from "./hero/Card";
import { Product } from "./product/Product";
import { Banner } from "./banner/Banner";
import { Price } from "./price/Price";

export const Home = ()=>{
  return(
  <>
    <Hero/>
    <Card/>
    <Product/>
    <Banner/>
    <Price/>
  </>
)}

  