import styled, {css} from 'styled-components'

export const Body = styled.div`
  background: #f3f1fd;
`;

const common = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  /* height: 100vh; */
  padding-bottom: 5px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  text-transform: capitalize;
  color: #3d3d3d;
`;

export const TypeWrapper = styled.div`
  ${common}
  justify-content: space-between;
  #buttons{
    margin: 0 0 0 40px;
  }
`;
export const Type = styled.a`
  text-decoration: none;
  margin-top: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  transition: 0.3s linear;

  :hover {
    background: ${props => (props.buttons ? 'transparent' : '#ffffff')};
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    transform: scale(1.1);
  }
`;

export const CardWrapper = styled.div`
  margin-top: 50px;
  ${common}
  justify-content: space-between;
  /* border: 2px solid red; */
  width: 1200px;
`;

export const Card = styled.div`
  width: 364px;
  height: 496px;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.06);
  border-radius: 5px;
  /* cursor: pointer; */
`;
export const Photo = styled.img`
    /* height: 700px; */
    width: 364px;
    height: 263px;
    border-radius: 5px 5px 0px 0px;
`;

export const DataWrapper = styled.div`
  padding: 15px;
  box-sizing: border-box;
`;

export const MentorWrapper = styled.div`
  ${common}
  .mentorName {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: #3d3d3d;
    margin-left: 11px;
  }
`;

export const MentorImg = styled.img``;

export const Department = styled.div`
  margin-left: auto;
  width: 98px;
  height: 29px;
  background: linear-gradient(
    90.26deg,
    rgba(170, 128, 255, 0.12) 0.21%,
    rgba(160, 113, 255, 0.078) 97.38%
  );
  border-radius: 2px;
  ${common}
  justify-content: center;
  .type {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    color: #3d3d3d;
  }
`;

export const CourseName = styled.div`
  margin-top: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #3d3d3d;
`;

export const TimerWrapper = styled.div`
  ${common}
  margin-top: 16px;
  .time {
    margin-left: 11px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(61, 61, 61, 0.8);
  }
`;

export const BestSeller = styled.div`
  ${common}
  margin-left: auto;
  justify-content: center;
  width: 99px;
  height: 29px;
  background: linear-gradient(
    90.32deg,
    rgba(255, 212, 128, 0.15) 0.26%,
    rgba(255, 238, 87, 0.0975) 104.75%
  );
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: #3d3d3d;
`;

export const LastData = styled.div`
  ${common}
  justify-content: space-between;
  margin-top: 25px;
`;

export const Price = styled.div`
  ${common}
  .actualPrice {
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    text-transform: capitalize;
    color: #3d3d3d;
  }
  .oldPrice {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: line-through;
    text-transform: capitalize;
    color: rgba(61, 61, 61, 0.8);
    margin-left: 5px;
  }
`;

export const Stars = styled.div`
  ${common}
  .starNum {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: rgba(61, 61, 61, 0.8);
  }
  .allStars {
    ${common};
    img {
      margin-left: 7px;
    }
  }
`;

export const ViewCourses = styled.div`
  font-family: Montserrat Alternates;
  width: 220px;
  height: 47px;
  background: rgba(182, 169, 255, 0.15);
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #6652da;
  margin: 40px auto;
  ${common};
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s linear;
  :active {
    transform: scale(0.8);
  }
`;