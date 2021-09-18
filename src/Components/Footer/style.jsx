import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
export const Footers = styled.div`
  width: 100%;
  height: 344px;
  background-color: #FAFAFA;
`
export const MainFooter = styled.div`
  width: 100%;
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #24242E;
  margin: 50px 0 36px;
`
export const Nav = styled.ul`
  li{
    list-style: none;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: #3B3A41;
    margin-bottom: 24px;
  }
`
export const SocialMed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 75px;
  margin-top: 58px;
  .icons{
    width: 38px;
    height: 38px;
    background: #E8E3FC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      color: #6652DA;
      cursor: pointer;
      transition: all 0.25s linear;
      :hover{
        transform: scale(1.5);
      }
    }
  }
`
