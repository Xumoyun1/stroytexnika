import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Map from '../components/Map'
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';

const NewsInfo = () => {

    const [news, setNews] = useState('')

    const { id } = useParams()

    const getNews = () => {
        axios(API_PATH + `news/${id}/`)
            .then((res) => {
                setNews(res.data)
            })
    }

    useEffect(() => {
        getNews();
    }, [])


    return (
        <>
            <div className="top"></div>
            <div className="Link_name">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="Link_name_h">
                                <Link to='/news'><img className='Link_name_h_img' src="/img/icon_back.png" alt="" /></Link>
                                <Link className='Link_name_link' to="/news">{getText("head_5")} </Link> /   {news?.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-lg-none d-flex align-items-start">
                <div className="row">
                    <div className="col-12">
                        <Link to='/news'><img className='Link_name_h_img' src="/img/icon_back.png" alt="" /></Link>
                        <Link className='Link_name_link' to="/news">{getText("head_5")} </Link>
                    </div>
                </div>
            </div>
            <div className="NewsInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='w-100' src={news?.image_path} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="news_in_h">{news?.title}</div>
                            <div className="news_in_p" dangerouslySetInnerHTML={{ __html: news?.content }} />
                        </div>
                    </div>
                </div>
            </div>

            <Map />
        </>
    )
}

export default NewsInfo