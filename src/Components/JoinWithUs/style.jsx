import styled from "styled-components";
import jwu from '../../images/jwu/jwu.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 425px;
  background-image: url(${jwu});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Content = styled.div`
  width: 487px;
  height: 188px;
  margin-right: 300px;
`
export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #3D3D3D;
  margin-bottom: 30px;
`
export const Btn = styled.div`
  width: ${({size})=>size&&'207px'};
  height: ${({size})=>size&&'62px'};
  background: #6652DA;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.25s linear;
  :hover{
    background: #7f6ee0;
  }
  :active{
    transform: scale(0.8);
  }
`