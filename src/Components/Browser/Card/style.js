import styled from "styled-components";
export const Card = styled.div``;
const StyledTitle = styled.div`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
`;
export const Title = (props) => {
  return <StyledTitle {...props} />;
};
// export const CardWrapper = styled.div`
//   display: flex;
// `
export const CardWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 221px;
  height: 224px;
  transition: all 0.3s linear;

  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(31, 31, 51, 0.03);
  border-radius: 20px;
  :hover {
    background: linear-gradient(
      90.26deg,
      #f99462 0.21%,
      rgba(249, 148, 98, 0.65) 97.38%
    );
    box-shadow: 0px 2px 20px rgba(31, 31, 51, 0.03);
    border-radius: 20px;
    transform: scale(1.05);
  }
`;
export const CardImg = styled.img`
  margin-bottom: 20px;
`;
export const CardTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;

  /* Black */

  color: #3d3d3d;
  :hover {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;

    color: #ffffff;
  }
`;
