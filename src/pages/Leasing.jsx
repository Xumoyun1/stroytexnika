import { } from 'react'
import Feedback from '../components/Feedback'
import Map from '../components/Map'
import { getText } from '../locales';

const Leasing = () => {
    return (
        <>
            <div className="top"></div>
            <div className="About_1">
                <img className='w-100' src="/img/leasing.png" alt="" />
            </div>
            <div className="About">
                <div className="rec_1"></div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-5 ">
                            <div className="head_2_h">{getText("head_6")}</div>
                            <div className="head_2_p">{getText("head_2_p_1")}
                            </div>
                            <div className="head_2_p">
                                {getText("head_2_p_2")}
                            </div>
                            <div className="head_2_p">
                                {getText("head_2_p_3")}
                            </div>
                            <div className="head_2_p">
                                {getText("head_2_p_4")}
                            </div>
                            <div className="head_2_p">
                                {getText("head_2_p_5")}
                            </div>
                        </div>
                        <div className="col-lg-7 d-lg-flex d-none">
                            <img className='w-100 h-100' src="/img/leasing.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <Feedback />
            <Map />
        </>
    )
}

export default Leasing