import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LANGUANGE } from '../tools/constant';
import { getLanguage, getText } from '../locales';

const Navbar = () => {

    const [burger, setBurger] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUANGE, e.target.value);
        document.location.reload(true)
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row ">
                        <div className="col-3">
                            <Link to=''><img className='nav_logo' src="/img/logo.png" alt="" /></Link>
                        </div>
                        <div className={`col-9 d-flex align-items-center justify-content-end nav_a_box ${burger ? 'active' : ''}`}>
                            <div className="nav_l_2">
                                <div className="nav_l_2_name">
                                    {getText("head_1")}
                                    <img src="/img/icon_down.png" alt="" />
                                </div>
                                <div className="nav_l_2_cat">
                                    <Link onClick={() => setBurger(!burger)} to="/construction" className="nav_l_2_cat_name">{getText("head_2")}</Link>
                                    <Link onClick={() => setBurger(!burger)} to="/equipment" className="nav_l_2_cat_name">{getText("head_3")}</Link>
                                </div>
                            </div>
                            <Link onClick={() => setBurger(!burger)} to='/about' className="nav_l">{getText("head_4")}</Link>
                            <Link onClick={() => setBurger(!burger)} to='/news' className="nav_l">{getText("head_5")}</Link>
                            <Link onClick={() => setBurger(!burger)} to='/leasing' className="nav_l">{getText("head_6")}</Link>
                            <Link onClick={() => setBurger(!burger)} to='/contacts' className="nav_l">{getText("head_7")}</Link>
                            <a className='nav_a' href="tel:+99890 167 35 53">
                                <img src="/img/icon_tel_2.png" alt="" />
                                +99890 167 35 53
                            </a>
                            <select onChange={changeLanguage} name="" id="" className="nav_lang">
                                <option selected={getLanguage() === 'ru'} value="ru">РУС</option>
                                <option selected={getLanguage() === 'uz'} value="uz" >UZB</option>
                                <option selected={getLanguage() === 'en'} value="en">ENG</option>
                            </select>
                        </div>
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar