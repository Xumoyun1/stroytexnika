import { } from 'react'
import { getText } from '../locales';

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center mt-5 mb-5">
                            <div className="head_h">{getText("head_h_1")}</div>
                            <div className="head_p">
                                {getText("head_h_2")}
                            </div>
                            <div className="head_btn">
                                <div >
                                    {getText("get_consultating")}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-lg-flex d-none">
                            <img className='w-100 h-100' src="/img/head_1.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="Header_3">
                <div className="col-12">
                    <img src="/img/head_1.png" alt="" className="w-100" />
                </div>
                <div className="col-12">
                    <img src="/img/head_2.png" alt="" className="w-100" />
                </div>
            </div>
            <div className="Header_2">
                <div className="rec_1"></div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-5 ">
                            <div className="head_2_h">{getText("head_8")}</div>
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
        </>
    )
}

export default Header