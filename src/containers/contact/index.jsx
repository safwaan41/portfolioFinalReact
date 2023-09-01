import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'
import './styles.scss'

const Contact = () => {
    return (
        <section id="contact" className="contact">

            <PageHeaderContent
                headerText='Contact Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
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
                    <h3 className="contact__content__header-text">
                        Let's Talk
                    </h3>

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(200px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <div className="contact__content__form">

                        <div className="contact__content__form__controlswrapper">
                            <div className="nameWrapper">
                                <input type={'text'} name="name" className="inputName" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div className="emailWrapper">
                                <input type={'text'} name="email" className="inputEmail" />
                                <label htmlFor="email" className="emailLabel">Name</label>
                            </div>
                            <div className="descriptionWrapper">
                                <input type={'text'} name="description" className="inputDescription" />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                            <button>Submit</button>
                        </div>

                    </div>
                </Animate>

            </div>

        </section>
    )
}
export default Contact;