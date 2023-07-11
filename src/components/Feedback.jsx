import { useState } from 'react'
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constant';

const Feedback = () => {

    const [name, setName] = useState([])
    const [num, setNum] = useState([])

    const post = (e) => {
        e.preventDefault()
        axios.post(API_PATH + 'contact/', { name, phone: num })
            .then((response) => {
                console.log(response);
                if (response) {
                    setName("")
                    setNum("")
                }
            })

    }


    return (
        <>
            <div className="Feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="feed_h">{getText("feed_h_1")}</div>
                            <div className="feed_p">{getText("feed_h_2")}</div>
                            <form onSubmit={e => post(e)} className="feed_form">
                                <input onChange={(e) => setName(e.target.value)} required placeholder={getText("feed_form_1")} type="text" name="" id="" value={name}/>
                                <input onChange={(e) => setNum(e.target.value)} required placeholder={getText("feed_form_2")} type="number" name="" id="" value={num}/>
                                <button>{getText("get_stay")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback