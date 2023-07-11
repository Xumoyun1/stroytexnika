import { } from 'react'
import { getText } from '../locales';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'; 

const Foot = () => {
    
    // console.log(AnchorLink) 

    return (
        <>
            <div className="Foot">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 d-flex flex-column align-items-lg-start align-items-center">
                            <img src="/img/logo_foot.png" alt="" className="foot_logo" />
                            <div className="foot_soc">
                                <a target={'_blank'} rel="noreferrer" href="" className="foot_a"><img src="/img/icon_facebook.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/stroy_texnika.uz/" className="foot_a"><img src="/img/icon_instagram.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" href="https://t.me/+RR_mvor6zPbYwLk5" className="foot_a"><img src="/img/icon_telegram.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-lg-start align-items-center ">
                            <div className="foot_link">
                              <Link style={{ textDecoration: "none", color: "inherit"}} href='#catalog'>
                                {getText("head_1")}
                              </Link>
                            </div>
                            <div className="foot_link"> 
                              <Link style={{ textDecoration: "none", color: "inherit"}} to={'/about'}>
                               {getText("head_4")}
                              </Link>
                            </div>
                            <div className="foot_link"> 
                              <Link style={{ textDecoration: "none", color: "inherit"}} to={'/news'}>
                                {getText("head_5")}
                              </Link>
                            </div>
                            <div className="foot_link"> 
                              <AnchorLink style={{ textDecoration: "none", color: "inherit"}} href='#service'>
                                {getText("head_9")}
                              </AnchorLink>
                            </div>

                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-lg-start align-items-center ">
                            <div className="foot_link"> 
                              <Link style={{ textDecoration: "none", color: "inherit"}} to={'/leasing'}>
                                {getText("head_6")}
                              </Link>
                            </div>
                            {/* <div className="foot_link"> 
                              <AnchorLink style={{ textDecoration: "none", color: "inherit"}}>
                                 {getText("head_10")}
                              </AnchorLink>
                            </div> */}
                            <div className="foot_link"> 
                              <Link style={{ textDecoration: "none", color: "inherit"}} to={'/contacts'}>
                                {getText("head_7")}
                              </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex flex-column align-items-lg-start align-items-center">
                            <div className="foot_box">
                                <img src="/img/icon_loc.png" alt="" />
                                <div className="foot_box_h">г. Ташкент, Сергелийский р-н, ул. Янги Сергели 7</div>
                            </div>
                            <div className="foot_box">
                                <img src="/img/icon_tel.png" alt="" />
                                <div className="foot_box_h">+99890 167 35 53</div>
                            </div>
                            <div className="foot_box">
                                <img src="/img/icon_time.png" alt="" />
                                <div className="foot_box_h">Пн-Сб 08:00–20:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot_2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="foot_2_h">
                                @ Copyright 2023
                                <a target={'_blank'} rel="noreferrer" href='https://zamaan.uz/' className="foot_a">
                                    <img src="/img/zamaan.png" alt="" />
                                    Zamaan.
                                </a>
                                All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foot