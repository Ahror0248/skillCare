import React from "react";
import { All, NavButton } from "../navbar/style";
import play from "../../assets/header/play.png";
import message from "../../assets/header/message.png";
import tick from "../../assets/header/tick.png";
import course from "../../assets/header/course.png";
import users from "../../assets/header/users.png";
import group from "../../assets/header/group.png";
import webman from "../../assets/header/webstudent.png";

import {
  BotleftImg,
  BotLeftPicsDiv,
  BotLeftTopDiv,
  BotLeftTopDivImg,
  BotLeftTopImg,
  BotLeftTopText,
  BotRightLeft,
  BotRightRight,
  BotRightText,
  BotRightTitle,
  BottomDiv,
  BottomLeft,
  BottomRight,
  Btn,
  ButtonDiv,
  ButtonText,
  CourseDiv,
  CourseImg,
  CourseText,
  CourseTilte,
  GroupImg,
  HeadWrapper,
  Leftside,
  LeftText,
  LeftTitle,
  MesImg,
  MessageDiv,
  MesText,
  MesTextDiv,
  MesTickImg,
  MesTitle,
  Play,
  PlayDiv,
  RightBackImg,
  RightSide,
  Span,
  TopDiv,
} from "./style";

export const Header = () => {
  return (
    <All>
      <HeadWrapper>
        <Leftside>
          <LeftTitle>
            Start your learning our <Span>experts trainers</Span>
          </LeftTitle>
          <LeftText>
            Build your skill from world-class universities and companies, you
            can learn online and earn certifications and degrees.
          </LeftText>
          <ButtonDiv>
            <NavButton headerbtn>Join for Free</NavButton>
            <PlayDiv>
              <Play src={play} alt="play" />
            </PlayDiv>
            <ButtonText>Play Now</ButtonText>
          </ButtonDiv>
          <RightSide></RightSide>
        </Leftside>
        <RightSide>
          <RightBackImg>
            <TopDiv>
              <MessageDiv>
                <MesImg src={message} alt="message" />
                <MesTextDiv>
                  <MesTitle>Congratulation!</MesTitle>
                  <MesText>Your addmission is completed</MesText>
                </MesTextDiv>
                <MesTickImg src={tick} alt="tick" />
              </MessageDiv>
              <CourseDiv>
                <CourseImg src={course} alt="courseImg" />
                <CourseTilte>10000+</CourseTilte>
                <CourseText>Interactive Courses</CourseText>
              </CourseDiv>
            </TopDiv>
            <BottomDiv>
              <BottomLeft>
                <BotLeftTopDiv>
                  <BotLeftTopText>20k Students</BotLeftTopText>
                  <BotLeftTopDivImg>
                    <BotLeftTopImg src={users} alt='users' />
                  </BotLeftTopDivImg>
                </BotLeftTopDiv>
                <BotLeftPicsDiv>
                 <GroupImg src={group} alt='group' />
                </BotLeftPicsDiv>
              </BottomLeft>
              <BottomRight>
                <BotRightLeft>
                  <BotleftImg src={webman} />
                </BotRightLeft>
                <BotRightRight>
                  <BotRightTitle>Web development class</BotRightTitle>
                  <BotRightText>Tomorrow at 10.00 AM</BotRightText>
                  <Btn>Join now</Btn>
                </BotRightRight>
              </BottomRight>
            </BottomDiv>
          </RightBackImg>
        </RightSide>
      </HeadWrapper>
    </All>
  );
};
