import { } from 'react'
import { getText } from '../locales';

const Map = () => {
    return (
        <>

            <div className="Map">
                <div className="map_box">
                    <div className="map_main">
                        <img src="/img/logo.png" alt="" className="map_logo" />
                        <div className="map_main_box">
                            <img src="/img/icon_map_loc.png" alt="" />
                            <div className="map_main_h">{getText("map_main_h_1")}</div>
                        </div>
                        <div className="map_main_box">
                            <img src="/img/icon_map_call.png" alt="" />
                            <div className="map_main_h">+99890 167 35 53</div>
                        </div>
                        <div className="map_main_box">
                            <img src="/img/icon_map_time.png" alt="" />
                            <div className="map_main_h">{getText("map_main_h_2")} 08:00–20:00</div>
                        </div>
                    </div>
                    <iframe className='maps_map' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5999.966570728588!2d69.284152!3d41.243922!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzM4LjEiTiA2OcKwMTcnMDMuMCJF!5e0!3m2!1sru!2s!4v1688561668734!5m2!1sru!2s" width="500" height="400" frameBorder="0"></iframe>

                </div>
            </div>

            <div className="Map">
                <div className="map_box">
                    <div className="map_main">
                        <img src="/img/logo.png" alt="" className="map_logo" />
                        <div className="map_main_box">
                            <img src="/img/icon_map_loc.png" alt="" />
                            <div className="map_main_h">{getText("map_main_h_3")}</div>
                        </div>
                        <div className="map_main_box">
                            <img src="/img/icon_map_call.png" alt="" />
                            <div className="map_main_h">+99890 167 35 53</div>
                        </div>
                        <div className="map_main_box">
                            <img src="/img/icon_map_time.png" alt="" />
                            <div className="map_main_h">{getText("map_main_h_2")} 08:00–20:00</div>
                        </div>
                    </div>


                    <iframe className='maps_map' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6000.233473857114!2d69.215667!3d41.241015!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzI3LjciTiA2OcKwMTInNTYuNCJF!5e0!3m2!1sru!2s!4v1688560445265!5m2!1sru!2s " width="500" height="400" frameBorder="0"></iframe>

                </div>
            </div>

        </>
    )
}

export default Map