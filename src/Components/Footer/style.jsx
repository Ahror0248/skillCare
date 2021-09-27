import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const Footers = styled.div`
  width: 100%;
  height: 344px;
  background-color: #fafafa;
`;
export const MainFooter = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #24242e;
  margin: 50px 0 36px;
`;
export const Nav = styled.ul`
  li {
    list-style: none;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: #3b3a41;
    margin-bottom: 24px;
    border-bottom: 2px solid transparent;
    transition: linear 0.3s;
    width: fit-content;
    :hover {
      border-bottom: 2px solid #26242e;
      color: #26242e;
      width: fit-content;
    }
  }
`;
export const SocialMed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 75px;
  margin-top: 58px;
  .icons {
    width: 38px;
    height: 38px;
    background: #e8e3fc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #6652da;
      cursor: pointer;
      transition: all 0.25s linear;
      :hover {
        transform: scale(1.5);
      }
    }
  }
`;
