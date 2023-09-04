import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderstuff from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss'

const Skills = () => {
    return (
        <section id="skills" className="skills">

            <PageHeaderstuff
                headerText='My Skills'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills__stuff-container">
                {
                    skillsData.map((item,i) =>(
                    <div key={i} className="skills__stuff-container__inner-stuff">
                        <Animate
                        play
                        duration ={1}
                        delay={.5}

                        start ={{
                            transform: 'translateX(-200px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                        >
                            <h3 className="skills__stuff-container__inner-stuff__category-text">
                                {item.label}
                            </h3>
                            <div className="skills__stuff-container__inner-stuff__progressbar-container">
                                {
                                    item.data.map((skillItem,j) =>(
                                        <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={['opacity:1', 'opacity:0' ]}
                                        iterationCount ='1'
                                        >
                                            <div className="progressbar-container" key={j}>
                                                <p>{skillItem.skillName}</p>
                                                <Line
                                                percent={skillItem.percentage}
                                                strokeWidth='2'
                                                strokeColor='var(--yellow-theme-main-color)'
                                                trailWidth='2'
                                                strokeLinecap="square"
                                                />

                                            </div>

                                        </AnimateKeyframes>
                                    ))
                                }
                            </div>
                        </Animate>
                    </div>
                    ))
                }

            </div>
            
        </section>
    )
}
export default Skills;