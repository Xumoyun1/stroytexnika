import { useEffect, useState } from 'react'
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';


const HCat = () => {


    const [cat, setCat] = useState('')

    const getCat = () => {
        axios.get(API_PATH + 'categories/')
            .then((res) => {
                setCat(res.data)
            })
    }

    useEffect(() => {
        getCat()
    }, [])



    return (
        <>
            <div className="HCat" id='service'>
                <div className="rec_2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-end justify-content-lg-start justify-content-center mt-4 mb-4">
                            <div className="h_cat_name">
                                {getText("h_cat_name")}
                            </div>
                            <img src="/img/h_cat.png" alt="" className="h_cat_img" />
                        </div>
                    </div>
                    <div className="row">
                        {cat && cat.map((item, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 mt-4">
                                    <div className="h_cat_box">
                                        <div className="h_cat_img_box">
                                            <img src={item.image_path} alt="" />
                                            <div className="h_cat_box_p">
                                                {item.description.slice(1,120)}
                                            </div>
                                        </div>
                                        <div className="h_cat_box_name">
                                            {item.name}
                                        </div>

                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HCat