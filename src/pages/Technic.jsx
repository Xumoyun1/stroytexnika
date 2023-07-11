import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Map from '../components/Map';

import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';


const Technic = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [tech, setTech] = useState()
    const { id } = useParams()

    const getTech = () => {
        axios(API_PATH + `technics/${id}/`)
            .then((res) => {
                setTech(res.data)
            })
    }

    useEffect(() => {
        getTech()
    }, [])




    return (
        <>
            <div className="top"></div>
            <div className="Link_name">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="Link_name_h">
                                <Link className='Link_name_link' to="/">{getText("head_11")} </Link> /   {tech?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-lg-none d-flex align-items-start">
                <div className="row">
                    <div className="col-12">
                        <Link to='/'><img className='Link_name_h_img' src="/img/icon_back.png" alt="" /></Link>
                        <Link className='Link_name_link' to="/">{getText("head_11")} </Link>
                    </div>
                </div>
            </div>
            <div className="Technic">
                <div className="container">
                    <div className="row mt-lg-5 mt-0">
                        <div className="col-lg-6">
                            <Swiper

                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >

                                {tech?.images && tech?.images.map((item, index) => (
                                    <>
                                        <SwiperSlide className='slid_img_1' key={index}>
                                            <img className='w-100 h-100' src={item?.image_path} />
                                        </SwiperSlide>
                                    </>
                                ))}



                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >

                                {tech?.images && tech?.images.map((item, index) => (
                                    <>
                                        <SwiperSlide className='slid_img_2' key={index}>
                                            <img className='w-100 h-100 mt-3' src={item?.image_path} />
                                        </SwiperSlide>
                                    </>
                                ))}


                            </Swiper>
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-between">
                            <div className=''>
                                <div className="technic_name">
                                    {tech?.name}
                                </div>

                                {tech?.infos && tech?.infos.map((item, index) => (
                                    <>
                                        <div key={index} className="technic_name_box">
                                            <div className="technic_box_h">{item.key}:</div>
                                            <div className="technic_box_p">{item.value}</div>
                                        </div>

                                    </>
                                ))}
                            </div >
                            <Link to="/contacts" className='technic_a d-lg-flex d-none' href="">
                                {getText("get_stay")}
                            </Link>
                        </div>





                        <div className="col-12">
                            <div className="tech_desc_name">
                                {getText("op")}
                            </div>


                            {tech?.descriptions && tech?.descriptions.map((item, index) => (
                                <div key={index} className="tech_desc_box">
                                    <div className="tech_desc_h">{item.key}</div>
                                    <div className="tech_desc_p">{item.value}</div>
                                </div>
                            ))}


                        </div>
                        <div className="col-12">
                            <Link to="/contacts" className='technic_a d-lg-none d-flex' >
                                {getText("get_stay")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </>
    )
}

export default Technic