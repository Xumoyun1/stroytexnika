import { } from 'react'
import Map from '../components/Map'
import Feedback from '../components/Feedback'
import { getText } from '../locales';

const About = () => {
    return (
        <>
            <div className="top"></div>
            <div className="About_1">
                <img className='w-100' src="/img/head_2.png" alt="" />
            </div>
            <div className="About">
                <div className="rec_1"></div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-5 ">
                            <div className="head_2_h">{getText("head_8")}   </div>
                            <div className="head_2_p">{getText("head_2_h_1")}
                            </div>
                            <div className="head_2_p">
                                {getText("head_2_h_2")}
                            </div>
                        </div>
                        <div className="col-lg-7 d-lg-flex d-none">
                            <img className='w-100 h-100' src="/img/head_2.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <Feedback />
            <Map />
        </>
    )
}

export default About