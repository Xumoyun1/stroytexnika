import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Map from '../components/Map'
import { getText } from '../locales';
import { API_PATH } from '../tools/constant';
import axios from 'axios';

const Construction = () => {

    const [con, setCon] = useState()

    const getCon = () => {
        axios.get(API_PATH + 'technics/?type_id=2')
            .then((res) => {
                setCon(res.data)
                console.log(res.data);
            })
    }

    useEffect(() => {
        getCon()
    }, [])



    return (
        <>
            <div className="top"></div>
            <div className="Link_name">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="Link_name_h">
                                <Link className='Link_name_link' to="/">{getText("head_11")} </Link> /    {getText("cat_h_1")}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Catalog ">
                <div className="rec_2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-end justify-content-lg-start mt-lg-4 mt-0 mb-4 justify-content-center">
                            <div className="cat_name">
                                {getText("cat_h_1")}
                            </div>
                            <img src="/img/h_cat.png" alt="" className="cat_img" />
                        </div>

                        {con && con.map((item, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 mt-4">
                                    <div className="cat_box">
                                        <div className="cat_box_img">
                                            <img src={item?.image} alt="" />
                                        </div>
                                        <div className="cat_box_text">
                                            <div className="cat_box_name">
                                                {item?.name}
                                            </div>
                                            {item.infos && item.infos.map((item2, index2) => (
                                                <div key={index2} className="cat_main">
                                                    <div className="cat_main_h">{item2.key} :</div>
                                                    <div className="cat_main_p">{item2.value}</div>
                                                </div>
                                            ))}



                                        </div>
                                        <Link to={`/technic/${item.id}`}>
                                            <button>
                                                Подробнее
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>
            <div className="pt-5"></div>
            <Map />
        </>
    )
}

export default Construction