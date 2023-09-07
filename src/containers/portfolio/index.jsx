/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderinfo from "../../components/pageHeaderContent";
import codeQ2 from '../../images/codeQuizF.png';
import ecom3 from "../../images/eCommerceB.png";
import emp3 from '../../images/empTrackB.png'
import note2 from '../../images/NoteTakerScreenShotF.png'
import password2 from '../../images/passGenF.png'
import pwa3 from '../../images/pwaB.png'
import refresh2 from '../../images/reFreshF.png'
import seo2 from '../../images/seoF.png'
import api3 from '../../images/socialNetworkAPIB.png'
import streamly2 from '../../images/streamlyF.png'
import workday2 from '../../images/workdayF.png'
import awristocrats2 from '../../images/AwristocratsF.png'
import './styles.scss'

const portfolioinfo = [
    {
        id: 2,
        name: 'Streamly! Website',
        image: streamly2,
        link: 'https://safwaan41.github.io/entertainment-finder/index.html',
        link2: 'https://github.com/safwaan41/entertainment-finder'
    },
    {
        id: 2,
        name: "reFresh Website",
        image: refresh2,
        link: 'https://fathomless-mountain-82440-c3be6a1b5065.herokuapp.com/',
        link2: 'https://github.com/safwaan41/REFRESH'
    },
    {
        id: 2,
        name: "Awristocrats: A Luxury Watch Retailer",
        image: awristocrats2,
        link: 'https://gentle-citadel-72526-fb3aee39e14f.herokuapp.com/',
        link2: 'https://github.com/safwaan41/Awristocrats'
    },
    {
        id: 3,
        name: 'Social Network API',
        image: api3,
        link: 'https://drive.google.com/file/d/1Ey6fSmqcDyD7KWaLd3NeB_i8SkX8f1re/view',
        link2: 'https://github.com/safwaan41/socialNetworkAPI'
    },
    {
        id: 3,
        name: 'Ecommerce Back End',
        image: ecom3,
        link: 'https://drive.google.com/file/d/1SDWvYwDHuudX0DA3vPS-dVD91GOQJ4HR/view',
        link2: 'https://github.com/safwaan41/eCommerce'
    },
    {
        id: 2,
        name: 'Code Quiz',
        image: codeQ2,
        link: 'https://safwaan41.github.io/Code-Quiz/',
        link2: 'https://github.com/safwaan41/Code-Quiz'
    },
    {
        id: 3,
        name: 'Employee Tracker',
        image: emp3,
        link: 'https://drive.google.com/file/d/1Jtcw93Q_8Ft8SqoU538ZCCvwM3k5ciZm/view',
        link2: 'https://github.com/safwaan41/Employee-Tracker'
    },
    {
        id: 3,
        name: 'Express Note Taker',
        image: note2,
        link: 'https://fathomless-beyond-99783-d07bf0b91be9.herokuapp.com/',
        link2: 'https://github.com/safwaan41/noteTakerExpress'
    },
    {
        id: 2,
        name: 'Password Generator',
        image: password2,
        link: 'https://safwaan41.github.io/Password-Generator/',
        link2: 'https://github.com/safwaan41/Password-Generator'
    },
    {
        id: 3,
        name: 'PWA Text Editor',
        image: pwa3,
        link: 'https://text-editor-994141-8f0f398e2918.herokuapp.com/',
        link2: 'https://github.com/safwaan41/PWAtext'
    },
    {
        id: 2,
        name: 'SEO Website',
        image: seo2,
        link: 'https://safwaan41.github.io/HoriseonRefactor/',
        link2: 'https://github.com/safwaan41/HoriseonRefactor'
    },

    {
        id: 2,
        name: 'Work Day Scheduler',
        image: workday2,
        link: 'https://safwaan41.github.io/Scheduler/Develop/',
        link2: 'https://github.com/safwaan41/Scheduler'
    }
]

const data2 = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Front End'
    },
    {
        filterId: 3,
        label: 'Back End'
    },
]

const Portfolio = () => {

    const [filterdvalue, setFilteredvalue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredvalue(currentId)
    };

    function handleHover(index) {
        setHoveredValue(index)
    }

    const filteredItems = filterdvalue === 1 ? portfolioinfo :
        portfolioinfo.filter(item => item.id === filterdvalue)


    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderinfo
                headerText='Portfolio'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__info">

                <ul className="portfolio__info__filter">
                    {
                        data2.map(item => (
                            <li className={item.filterId === filterdvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>

                                {
                                    item.label
                                }

                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__info__cards">
                    {
                        filteredItems.map((item, index) => (
                            
                            <div className="portfolio__info__cards__item" key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >

                                <div className="portfolio__info__cards__item__img-container">
                                    <a>
                                        <img alt="preview img" src={item.image} />
                                    </a>

                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <a href={item.link} target="_blank" rel="noreferrer" >
                                                    <button>Visit</button>
                                                </a>
                                                <a href={item.link2} target="_blank" rel="noreferrer" >
                                                    <button>Repo</button>
                                                </a>
                                            </div>
                                        )
                                    }

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}
export default Portfolio;