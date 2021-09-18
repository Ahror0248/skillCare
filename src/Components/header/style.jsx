import styled from "styled-components";
import girl from "../../assets/header/joyGirl.png";

export const HeadWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export const Leftside = styled.div`
  width: 50%;
  padding-top: 165px;
`;

export const LeftTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 60px;
  text-transform: capitalize;
  color: #3d3d3d;
  text-transform: capitalize;
`;

export const Span = styled.span`
  color: #fe7244;
  font-family: "Montserrat", sans-serif;
`;

export const LeftText = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #58575d;
  padding-top: 30px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 64px;
`;

export const PlayDiv = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s ease-in;
  :hover {
    transform: scale(1.2);
  }
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.9) 0%,
    #ffffff 100%
  );
  box-shadow: 0px 8px 24px rgba(254, 114, 68, 0.08);
`;

export const Play = styled.img`
  transition: 0.3s ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonText = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #3d3d3d;
`;

export const RightSide = styled.div`
  width: 50%;
`;

export const RightBackImg = styled.div`
  background-image: url(${girl});
  width: 602px;
  height: 612px;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MessageDiv = styled.div`
  width: 198px;
  height: 56px;
  margin-left: 30px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.79) 100%
  );
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  backdrop-filter: blur(24px);
  border-radius: 6px;
  padding: 11px 11px 15px 8px;
  box-sizing: border-box;
  margin-top: 173px;
  display: flex;
  align-items: flex-start;
`;

export const MesImg = styled.img``;

export const MesTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

export const MesTitle = styled.h3`
  font-weight: 900;
  font-family: "Montserrat" sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.8px;
  color: #3d3d3d;
`;

export const MesText = styled.p`
  font-size: 8px;
  line-height: 10px;
  font-family: "Montserrat" sans-serif;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  color: #3d3d3d;
`;

export const MesTickImg = styled.img`
  margin-top: 3px;
`;

export const CourseDiv = styled.div`
  width: 144px;
  height: 84px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.79) 100%
  );
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  backdrop-filter: blur(24px);
  border-radius: 6px;
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CourseImg = styled.img``;

export const CourseTilte = styled.h4`
  font-weight: 600;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 20px;
  text-transform: capitalize;
  color: #3d3d3d;
`;

export const CourseText = styled.p`
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #3d3d3d;
  letter-spacing: 0.3px;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomLeft = styled.div`
  width: 184px;
  height: 89px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.85) 100%
  );
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  border-radius: 16px;
  margin-top: 181px;
  padding: 12px 20px 10px 21px;
`;

export const BotLeftTopDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const BotLeftTopText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  line-height: 17px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #3d3d3f;
`;

export const BotLeftTopDivImg = styled.div`
  width: 22px;
  height: 22px;
  background: #ffeddf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const BotLeftTopImg = styled.img``;

export const BotLeftPicsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GroupImg = styled.img``;

export const BottomRight = styled.div`
  width: 195px;
  height: 84px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.79) 100%
  );
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  border-radius: 6px;
  margin-top: 257px;
  display: flex;
`;

export const BotRightLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BotleftImg = styled.img``;

export const BotRightRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BotRightTitle = styled.h4`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: capitalize;
  color: #3d3d3d;
  letter-spacing: 0.6px;
`;

export const BotRightText = styled.p`
  font-size: 9px;
  line-height: 11px;
  color: #3d3d3d;
  margin-top: 3px;
`;

export const Btn = styled.div`
  width: 58px;
  height: 17px;
  background: #6652da;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 9px; 
  line-height: 11px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s linear;
  margin-top: 7px;
  margin-left: 20px;
  :hover {
    background: #7f6ee0;
  }
  :active {
    transform: scale(0.8);
  }
`;
