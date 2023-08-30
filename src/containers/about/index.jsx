/* eslint-disable */
import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { FaDev, FaDatabase } from 'react-icons/fa';
import { DiJavascript, DiNodejsSmall } from 'react-icons/di'



const personalDetails = [
    {
        label: 'Name',
        value: 'Safwaan Ahmed (Saf)'
    },
    {
        label: 'Age',
        value: '30'
    },
    {
        label: 'Location',
        value: 'Dallas, TX'
    },
    {
        label: 'Email',
        value: 'safwaan41@gmail.com'
    },
    {
        label: 'Phone',
        value: '817-808-3958'
    },

];

const JobSummary = "I'm a new web developer who has a passion for learning new technologies."

const About = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate

                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >
                        <h3>
                            Full Stack Developer
                        </h3>

                        <p>
                            {JobSummary}
                        </p>
                    </Animate>

                    <Animate

                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}>

                        <h3>
                            Personal Infomation
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate

                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiJavascript size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiNodejsSmall size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>

                </div>

            </div>
        </section >
    );
};
export default About;