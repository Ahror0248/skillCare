import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 80px;
  width: 1200px;
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 118px;
`;
export const Topbody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Bottombody = styled.div`
  display: flex;
`;
export const TopTextdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomTextdiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;
export const TopText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  text-transform: capitalize;
  color: #3d3d3d;
  span {
    color: #fe7244;
  }
`;
export const BottomText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  /* or 170% */

  text-transform: capitalize;

  color: #000000;
  margin-top: 21px;
`;
export const Btn = styled.div`
  width: ${({ size }) => size && "207px"};
  height: ${({ size }) => size && "62px"};
  background: #6652da;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s linear;
  :hover {
    background: #7f6ee0;
  }
  :active {
    transform: scale(0.8);
  }
`;
export const ReadMore = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  margin-left: 31px;
  text-decoration-line: underline;

  color: #4d4d56;
`;
export const Video = styled.div`
  border-radius: 90px 5px;
  margin-left: 20px;
  width: 700px;
  height: 440px;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 90px 5px;
  }
`;
export const BottomTopText = styled.div`
  font-style: normal;
  flex-direction: column;
  text-align: ${({ center }) => center && "center"};
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  text-transform: capitalize;
  color: #3d3d3d;
  margin-bottom: 80px;
  span {
    color: #fe7244;
  }
`;
export const CardBody = styled.div`
  display: flex;
  align-items: center;
`;
export const Card = styled.div`
  display: flex;
  margin: 0 10px;
  padding: 10px;
  align-items: center;
  background: #feffff;
  /* Shadow */
  width: 100%px;
  height: 246px;
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  /* border: 1px solid red; */
  border-radius: 10px;
  @media (max-width: 1200px) {
    width: 500px;
    height: 200px;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Info = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  /* Black */

  color: #3d3d3d;
`;
export const InfoText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  /* or 159% */

  /* Black */

  color: #3d3d3d;
`;
export const AboutDiv = styled.div`
  display: flex;
  
  flex-direction: column;
  margin-top: 5px;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Starter = styled.img`
width: 20px;
margin: 0 5px;
`