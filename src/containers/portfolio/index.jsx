/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import codeQ2 from '../../images/codeQuizF.png';
import ecom3 from "../../images/eCommerceB.png";
import emp3 from '../../images/empTrackB.png'
import note2 from '../../images/NoteTakerScreenShotF.png'
import password2 from '../../images/passGenF.png'
import port2 from '../../images/portfolioF.png'
import pwa3 from '../../images/pwaB.png'
import refresh2 from '../../images/reFreshF.png'
import seo2 from '../../images/seoF.png'
import api3 from '../../images/socialNetworkAPIB.png'
import streamly2 from '../../images/streamlyF.png'
import workday2 from '../../images/workdayF.png'
import './styles.scss'

const portfolioData = [
    {
        id: 2,
        name: 'Code Quiz',
        image: codeQ2
    },
    {
        id: 3,
        name: 'Ecommerce Back End',
        image: ecom3
    },
    {
        id: 3,
        name: 'Employee Tracker',
        image: emp3
    },
    {
        id: 3,
        name: 'Express Note Taker',
        image: note2
    },
    {
        id: 2,
        name: 'Password Generator',
        image: password2
    },
    {
        id: 2,
        name: 'First Portfolio Project',
        image: port2
    },
    {
        id: 3,
        name: 'PWA Text Editor',
        image: pwa3
    },
    {
        id: 2,
        name: "reFresh Website",
        image: refresh2
    },
    {
        id: 2,
        name: 'SEO Website',
        image: seo2
    },
    {
        id: 3,
        name: 'Social Network API',
        image: api3
    },
    {
        id: 2,
        name: 'Streamly! Website',
        image: streamly2
    },
    {
        id: 2,
        name: 'Work Day Scheduler',
        image: workday2
    }
]

const filterData = [
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

    const [filterdvalue,setFilteredvalue] = useState(1)

    function handleFilter(currentId) {
        setFilteredvalue(currentId)
    };

    const filteredItems = filterdvalue ===1 ? portfolioData :
    portfolioData.filter(item=>item.id === filterdvalue)


    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderContent
                headerText='Portfolio'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">

                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className= {item.filterId === filterdvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>

                                {
                                    item.label
                                }

                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item)=>(
                            <div className="portfolio__content__cards__item" key ={`cardItem${item.name.trim()}`}>

                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="preview img" src={item.image}/>
                                    </a>

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