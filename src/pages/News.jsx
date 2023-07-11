import { useEffect, useState } from 'react'
import Map from '../components/Map'
import { Link } from 'react-router-dom'
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';

const News = () => {

    const [news, setNews] = useState("")

    const getNews = () => {
        axios.get(API_PATH + 'news/')
            .then((res) => {
                setNews(res.data)
            })
    }

    useEffect(() => {
        getNews()
    }, [])



    return (

        <>
            <div className="top"></div>
            <div className="News">
                <div className="rec_2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-end justify-content-lg-start mt-lg-4 mt-0 mb-4 justify-content-center">
                            <div className="cat_name">
                                {getText("head_5")}
                            </div>
                        </div>

                        {news && news.map((item, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 mt-4">
                                    <div className="cat_box">
                                        <div className="cat_box_img">
                                            <img src={item.image_path} alt="" />
                                        </div>
                                        <div className="cat_box_text">
                                            <div className="cat_box_name">
                                                {item.title}
                                            </div>
                                            <div className="cat_main_h" dangerouslySetInnerHTML={{ __html: item.content.slice(0, 129) }} />
                                        </div>
                                        <Link to={`/news-info/${item.id}`} >
                                            <button>
                                                {getText("more")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </>
                        ))}



                    </div>
                </div>
            </div>
            <Map />
        </>
    )
}

export default News