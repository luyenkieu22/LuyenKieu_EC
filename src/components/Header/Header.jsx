import React, { useEffect, useRef } from 'react'
import { Container, Row } from 'reactstrap'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import user_icon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'


const nav__link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]
const Header = () => {
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(() => {
        stickyHeaderFunc();

        return () => window.addEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => {
        return menuRef.current.classList.toggle('active__menu')
    }

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {nav__link.map((item, index) => (
                                    <li className='nav__item' key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) =>
                                                navClass.isActive ? "nav__active" : ""
                                            }
                                        >
                                            {item.display}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className='fav__icon'>
                                <i class="ri-heart-line"></i>
                                <span className='badge'>2</span>
                            </span>
                            <span className='cart__icon'>
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <span><motion.img whileTap={{ scale: 1.2 }} src={user_icon} alt="" /></span>
                            <div className="mobile__menu">
                                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header >
    )
}

export default Header