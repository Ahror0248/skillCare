import React, { Component } from "react";
import Card from './Card'
// import bosh from './img/Bosh.png'
import bosh from "./img/Co.png";
import Imgss from "./imgs";
import Textss from "./Textss";
import Go from "./img/bosh.png";
import Goo from "./img/sss.png";
import Ui from "./img/Ui.png";
import al from "./img/alteryx.png";
import gu from "./img/google.png";
import ibn from "./img/ibm.png";
import mi from "./img/microsoft.png";
import mod from "./img/mode.png";
import ux from "./img/ux.png";
import web from "./img/web.png";
import grap from "./img/grap.png";
import react from "./img/react.png";
import strla from "./img/srela.png";
import { Browse, Container, Container2, Line, Line2, Main, MainCard, Micro, Trust } from "./style";
// import { Text1 } from './imgs/style'

export default class Index extends Component {
  render() {
    return (
      <Container>
        <Container2>
          <Main>
            <Imgss title="10000+ Online Course" icon={bosh} />
            <Imgss title="Expert Instruction" icon={Go} />
            <Imgss title="Lifetime Access" icon={Goo} />
          </Main>

          <Trust>Trusted By 500+ Leading Universiting And Companies </Trust>
          <Micro>
            <Textss text="" icon={Ui} />
            <Textss text="" icon={al} />
            <Textss text="" icon={gu} />
            <Textss text="" icon={ibn} />
            <Textss text="" icon={mi} />
            <Textss text="" icon={mod} />
          </Micro>
          <Browse>Browse Online Course Categoryies</Browse>
          <Line><Line2/></Line>

          <MainCard >
            <Card title='UI UX Design' icon={ux}/>
          <Card title='Web Development' icon={web}/>
          <Card title='Graphic Design' icon={grap} />
          <Card title='Data Science' icon={react}/>
          <Card title='Digital Marketibg' icon={strla}/>
          </MainCard>
          
          

        </Container2>
      </Container>
    )
  }
}
