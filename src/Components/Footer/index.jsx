import React from "react";
import { Container, Footers, MainFooter, Title, Nav, SocialMed } from "./style";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Footers>
      <Container>
        <MainFooter>
          <Title className="title">Services</Title>
          <Nav>
            <li className="link">Online Instructor</li>
            <li className="link">Premium E Course</li>
            <li className="link">E Books</li>
            <li className="link">Our Blogs</li>
          </Nav>
        </MainFooter>
        <MainFooter>
          <Title className="title">Information</Title>
          <Nav>
            <li className="link">Join Us</li>
            <li className="link">Get Promo</li>
            <li className="link">Premium Feature</li>
            <li className="link">Schedule</li>
          </Nav>
        </MainFooter>
        <MainFooter>
          <Title className="title">Company</Title>
          <Nav>
            <li className="link">Patnership</li>
            <li className="link">Terms of Use</li>
            <li className="link">About</li>
            <li className="link">Contact</li>
          </Nav>
        </MainFooter>
        <MainFooter>
          <Title className="title">Get in Touch</Title>
          <Nav>
            <li className="link">
              Follow us on social media and stay updated with the latest
              information about our services
            </li>
            <SocialMed>
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <AiOutlineTwitter />
              </div>
              <div className="icons">
                <AiFillInstagram />
              </div>
              <div className="icons">
                <FaPinterestP />
              </div>
            </SocialMed>
          </Nav>
        </MainFooter>
      </Container>
    </Footers>
  );
};
