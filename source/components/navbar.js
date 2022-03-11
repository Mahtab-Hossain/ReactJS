import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={` ${styles['navbar']} ${projectStyles['navbar-Link']} `}>
      <span
        className={` ${projectStyles['card-Heading']} ${styles['Heading']} `}
      >
        {props.Heading}
      </span>
      <div className={styles['links-container']}>
        <span className={` ${styles['link']} ${projectStyles['navbar-Link']} `}>
          {props.link}
        </span>
        <span
          className={` ${styles['link1']} ${projectStyles['navbar-Link']} `}
        >
          {props.link1}
        </span>
        <span className={projectStyles['navbar-Link']}>{props.link2}</span>
      </div>
      <div data-type="BurgerMenu" className={styles['burger-menu']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className={styles['mobile-menu']}>
        <div className={styles['container']}>
          <span
            className={` ${projectStyles['card-Heading']} ${styles['Heading1']} `}
          >
            {props.Heading1}
          </span>
          <div data-type="CloseMobileMenu" className={styles['CloseMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['links-container1']}>
          <span
            className={` ${styles['link3']} ${projectStyles['navbar-Link']} `}
          >
            {props.link3}
          </span>
          <span
            className={` ${styles['link4']} ${projectStyles['navbar-Link']} `}
          >
            {props.link4}
          </span>
          <span
            className={` ${styles['link5']} ${projectStyles['navbar-Link']} `}
          >
            {props.link5}
          </span>
          <span className={projectStyles['navbar-Link']}>{props.link6}</span>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  Heading: 'Logo',
  link: 'Projects',
  link1: 'Skills',
  link2: 'Contact',
  Heading1: 'Logo',
  link3: 'About',
  link4: 'Experience',
  link5: 'Portofolio',
  link6: 'Contact',
}

Navbar.propTypes = {
  Heading: PropTypes.string,
  link: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  Heading1: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
}

export default Navbar
