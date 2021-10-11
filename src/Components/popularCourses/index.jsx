import React from "react";
import './main.css'
import { Container, Title, Type, TypeWrapper, Card, Photo, CardWrapper, MentorWrapper, MentorImg, Department, DataWrapper, CourseName, Body, BestSeller, TimerWrapper, LastData, Price, Stars, ViewCourses } from "./style";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,

} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Photo1 from './images/img1.png'
import Photo2 from './images/img2.png';
import Photo3 from './images/img3.png';
import Photo4 from './images/img4.png';
import Photo5 from './images/img5.png';
import Photo6 from './images/img6.png';
import Mentor1 from './images/mentor1.png'
import Mentor2 from './images/mentor2.png';
import Mentor3 from './images/mentor3.png';
import Mentor4 from './images/mentor4.png';
import Mentor5 from './images/mentor5.png';
import Mentor6 from './images/mentor6.png';
import Timer from './images/timer.png';
import Star from './images/star.png';
import blackStar from './images/blackStar.png';
import { FiArrowRightCircle } from 'react-icons/fi'
import { FiArrowLeftCircle } from 'react-icons/fi'

function PopularCourses() {
  return (
    <Body>
      <Container>
        <Title>Explore most popular courses</Title>
        <TypeWrapper>
          <Type href='#'>Programing</Type>
          <Type href='#'>Design</Type>
          <Type href='#'>Business</Type>
          <Type href='#'>Lifestyle</Type>
          <Type href='#'>Health & Fitness</Type>
          <Type href='#'>Marketing</Type>
          <Type href='#'>Music</Type>
          <Type href='#'>Finance & Accounting</Type>
          <Type id='buttons' buttons></Type>
        </TypeWrapper>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={93}
          totalSlides={3}>
          <Slider>
            <Slide index={0}>
              <CardWrapper>
                <Card>
                  <Photo src={Photo1}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor1}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Web Design and Development Crash course 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>16 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo2}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor2}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Machine Learning, Data Science and Deep Learning
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo3}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor3}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Python for Data Science and Machine Learning Bootcamp
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$250</div>
                        <del className='oldPrice'>$300</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>

              <CardWrapper>
                <Card>
                  <Photo src={Photo4}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor4}></MentorImg>
                      <div className='mentorName'>Alex Smith</div>
                      <Department>
                        <p className='type'>Data Science</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Data Science Course 2021: Complete Data Science
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>14 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo5}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor5}></MentorImg>
                      <div className='mentorName'>Barin daniel</div>
                      <Department>
                        <p className='type'>Mobile App</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Ultimate Adobe Photoshop Training: From Beginner to Pro
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo6}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor6}></MentorImg>
                      <div className='mentorName'>Jonathan mask</div>
                      <Department>
                        <p className='type'>Game</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Ultimate Guide to Game Development with Unity 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$180</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>
            </Slide>

            <Slide index={1}>
              <CardWrapper>
                <Card>
                  <Photo src={Photo1}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor1}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Web Design and Development Crash course 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>16 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo2}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor2}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Machine Learning, Data Science and Deep Learning
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo3}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor3}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Python for Data Science and Machine Learning Bootcamp
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$250</div>
                        <del className='oldPrice'>$300</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>

              <CardWrapper>
                <Card>
                  <Photo src={Photo4}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor4}></MentorImg>
                      <div className='mentorName'>Alex Smith</div>
                      <Department>
                        <p className='type'>Data Science</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Data Science Course 2021: Complete Data Science
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>14 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo5}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor5}></MentorImg>
                      <div className='mentorName'>Barin daniel</div>
                      <Department>
                        <p className='type'>Mobile App</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Ultimate Adobe Photoshop Training: From Beginner to Pro
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo6}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor6}></MentorImg>
                      <div className='mentorName'>Jonathan mask</div>
                      <Department>
                        <p className='type'>Game</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Ultimate Guide to Game Development with Unity 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$180</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>
            </Slide>

            <Slide index={2}>
              <CardWrapper>
                <Card>
                  <Photo src={Photo1}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor1}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Web Design and Development Crash course 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>16 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo2}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor2}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Machine Learning, Data Science and Deep Learning
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo3}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor3}></MentorImg>
                      <div className='mentorName'>Alex Maxwell</div>
                      <Department>
                        <p className='type'>Web Design</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Python for Data Science and Machine Learning Bootcamp
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$250</div>
                        <del className='oldPrice'>$300</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>

              <CardWrapper>
                <Card>
                  <Photo src={Photo4}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor4}></MentorImg>
                      <div className='mentorName'>Alex Smith</div>
                      <Department>
                        <p className='type'>Data Science</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Data Science Course 2021: Complete Data Science
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>14 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$120</div>
                        <del className='oldPrice'>$180</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo5}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor5}></MentorImg>
                      <div className='mentorName'>Barin daniel</div>
                      <Department>
                        <p className='type'>Mobile App</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      Ultimate Adobe Photoshop Training: From Beginner to Pro
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>20 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$150</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>5.0</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
                <Card>
                  <Photo src={Photo6}></Photo>
                  <DataWrapper>
                    <MentorWrapper>
                      <MentorImg src={Mentor6}></MentorImg>
                      <div className='mentorName'>Jonathan mask</div>
                      <Department>
                        <p className='type'>Game</p>
                      </Department>
                    </MentorWrapper>
                    <CourseName>
                      The Ultimate Guide to Game Development with Unity 2022
                    </CourseName>
                    <TimerWrapper>
                      <img src={Timer} alt='' />
                      <p className='time'>36 hr 30 mins</p>
                      <BestSeller>Best Seller</BestSeller>
                    </TimerWrapper>
                    <LastData>
                      <Price>
                        <div className='actualPrice'>$180</div>
                        <del className='oldPrice'>$200</del>
                      </Price>
                      <Stars>
                        <div className='starNum'>4.9</div>
                        <div className='allStars'>
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={Star} alt='' />
                          <img src={blackStar} alt='' />
                        </div>
                      </Stars>
                    </LastData>
                  </DataWrapper>
                </Card>
              </CardWrapper>
            </Slide>
          </Slider>

          <ButtonBack className='back-btn'>
            <FiArrowLeftCircle />
          </ButtonBack>
          <ButtonNext className='next-btn'>
            <FiArrowRightCircle />
          </ButtonNext>
        </CarouselProvider>

        <ViewCourses>View all course</ViewCourses>
      </Container>
    </Body>
  );
};

export default PopularCourses;