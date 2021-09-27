import styled from "styled-components";

export const All = styled.div`
  background-color: #f8fcfe;
`;

export const NavWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 75px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-right: 80px;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  font-size: 20px;
  line-height: 27px;
  color: #797880;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  :hover {
    border-bottom: 2px solid #26242e;
    color: #26242e;
  }
`;

export const NavButton = styled.button`
  width: ${({ headerbtn }) => (headerbtn ? "207px" : "156px")};
  height: 57px;
  font-family: ${({ headerbtn }) =>
    headerbtn
      ? "Montserrat Alternates, sans-serif;"
      : '"Montserrat", sans-serif'};
  background: #6347eb;
  border-radius: 12px;
  outline: none;
  border: none;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  transition: 0.3s linear;
  :hover {
    background: #7f6ee0;
  }
  :active {
    transform: scale(0.8);
  }
`;
