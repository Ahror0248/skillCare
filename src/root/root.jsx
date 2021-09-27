import React from 'react'
import PopularCourses from '../Components/popularCourses'
import { Header } from "../Components/header";
import { Navbar } from "../Components/navbar";
import  Index  from "../Components/Browser";
import { Footer } from "../Components/Footer";
import { SubFooter } from "../Components/SubFooter";
import { JoinWithUs } from "../Components/JoinWithUs";

export const Root = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Index />
            <PopularCourses />
            <JoinWithUs />
            <Footer />
            <SubFooter />
        </div>
    );
};