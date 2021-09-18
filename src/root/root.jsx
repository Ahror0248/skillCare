import React from 'react'
import { Benefits } from '../Components/Benefits'

export const Root = () => {
    return (
        <div>
            <Benefits/>
        </div>
    )
}
import React from "react";
import { Header } from "../Components/header";
import { Navbar } from "../Components/navbar";
import  Index  from "../Components/Browser";
import { Footer } from "../Components/Footer";
import { SubFooter } from "../Components/SubFooter";
import { JoinWithUs } from "../Components/JoinWithUs";

export const Root = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Index />
      <JoinWithUs />
      <Footer />
      <SubFooter />
    </>
  );
};
