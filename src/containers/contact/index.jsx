import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderinfo from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'
import './styles.scss'

const person = () => {



    return (
        <section id="person" className="person">

            <PageHeaderinfo
                headerText='person Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="person__info">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(-200px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <h3 className="person__info__header-text">
                        Let's Talk
                    </h3>

                </Animate>
                <Animate play duration={1} delay={0}
                    start={{
                        transform: 'translateX(200px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <div className="person__info__form">

                        <div className="person__info__form__controlswrapper">
                            <div>
                                <input required type={'text'} name="name" className="inputName" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required type={'text'} name="email" className="inputEmail" />
                                <label htmlFor="email" className="emailLabel">E-Mail</label>
                            </div>
                            <div >
                                <textarea required type={'text'} rows='5' name="description" className="inputDescription" />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>

                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>

            </div>

        </section>
    )
}
export default person;