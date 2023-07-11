import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';

const Catalog = () => {


    const [cat, setCat] = useState('')

    // const { id } = useParams()


    const getCat = () => {
        axios.get(API_PATH + 'technics/?type_id=1')
            .then((res) => {
                setCat(res.data)
            })
    }

    useEffect(() => {
        getCat()
    }, [])



    return (
        <>
            <div className="Catalog" id='catalog'>
                <div className="rec_2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-end justify-content-lg-start mt-4 mb-4 justify-content-center">
                            <div className="cat_name">
                                {/* {getText("cat_name_1")} */}
                            </div>
                            <img src="/img/h_cat.png" alt="" className="cat_img" />
                        </div>

                        {cat && cat.map((item, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 mt-4">
                                    <div className="cat_box">
                                        <div className="cat_box_img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="cat_box_text">
                                            <div className="cat_box_name">
                                                {/* {item.name} */}
                                            </div>
                                            {item.infos && item.infos.map((item2, index2) => (
                                                <>
                                                    <div key={index2} className="cat_main">
                                                        <div className="cat_main_h">{item2.key}:</div>
                                                        <div className="cat_main_p">{item2.value}</div>
                                                    </div>
                                                </>
                                            ))}

                                            {/* <div className="cat_main">
                                                <div className="cat_main_h">Модель: </div>
                                                <div className="cat_main_p">ROBSTER</div>
                                            </div>
                                            <div className="cat_main">
                                                <div className="cat_main_h">Мощность двигателя:</div>
                                                <div className="cat_main_p">ROBSTER</div>
                                            </div>
                                            <div className="cat_main">
                                                <div className="cat_main_h">Кол-во цилиндров: </div>
                                                <div className="cat_main_p">ROBSTER</div>
                                            </div>
                                            <div className="cat_main">
                                                <div className="cat_main_h">Частота вращения/об/мин: </div>
                                                <div className="cat_main_p">ROBSTER</div>
                                            </div> */}
                                        </div>
                                        <Link to={`technic/${item.id}`}>
                                            <button>
                                                {getText("more")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ))}
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <Link className='cat_link' to="">
                                <div>{getText("all")}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog