import React from "react";
import Rasm from "./malchik.png";
import Star from "./starr.png";
import "./index.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  Bottombody,
  BottomText,
  BottomTextdiv,
  Btn,
  Container,
  ReadMore,
  Topbody,
  TopText,
  TopTextdiv,
  Video,
  TopContainer,
  BottomContainer,
  BottomTopText,
  CardBody,
  Card,
  InfoDiv,
  Info,
  InfoText,
  AboutDiv,
  About,
  StarDiv,
  Starter,
} from "./style.jsx";

export const Benefits = () => {

  // const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div>
      <CardBody>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
      </CardBody>
    </div>,
    <div>
      <CardBody>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
      </CardBody>
    </div>,
    <div>
      <CardBody>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
        <Card>
          <img src={Rasm} alt="" />
          <About>
            <InfoDiv>
              <Info>“The wonderful of data science course”</Info>
              <InfoText>
                I think this first course is incredibly well structured with a
                very good approach of covering all the steps in their most basic
                form and then advancing into them while having the big picture
                in mind.
              </InfoText>
            </InfoDiv>
            <StarDiv>
              <AboutDiv>
                <InfoDiv>Alex Smith</InfoDiv>
                <InfoText>FullStack Web-Developer</InfoText>
              </AboutDiv>
              <div style={{ marginRight: `10px` }}>
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
                <Starter src={Star} />
              </div>
            </StarDiv>
          </About>
        </Card>
      </CardBody>
    </div>,
  ];
  return (
    <Container>
      <TopContainer>
        <Topbody>
          <TopTextdiv>
            <TopText>
              Benefits Of Learning From <span>SkillCare</span>
            </TopText>
            <BottomText>
              Watch on-demand video lectures from renowned instructors in
              subjects such as Proggraming, business, computer science, data
              science, and language learning.
            </BottomText>
          </TopTextdiv>
          <BottomTextdiv>
            <Btn size className="btn">
              Start learning
            </Btn>
            <ReadMore href="#">Read more</ReadMore>
          </BottomTextdiv>
        </Topbody>
        <Bottombody>
          <Video>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Pp5WeyplUbM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Video>
        </Bottombody>
      </TopContainer>
      <BottomContainer>
        <BottomTopText center>
          What our student say <br /> <span>About Us</span>
        </BottomTopText>
        
      </BottomContainer>
      <AliceCarousel mouseTracking items={items} />
    </Container>
  );
};
