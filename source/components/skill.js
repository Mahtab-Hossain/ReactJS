import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './skill.module.css'

const Skill = (props) => {
  return (
    <div className={styles['about']}>
      <div className={styles['max-content-width-container']}>
        <div className={styles['heading-container']}>
          <h1
            className={` ${projectStyles['section-Heading']} ${styles['text']} `}
          >
            {props.heading}
          </h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['about-1']}>
            <div className={styles['container']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text01']} ${projectStyles['card-Text']} `}
              >
                {props.text}
              </span>
            </div>
            <div className={styles['container1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text02']} ${projectStyles['card-Text']} `}
              >
                {props.text1}
              </span>
            </div>
            <div className={styles['container2']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text03']} ${projectStyles['card-Text']} `}
              >
                {props.text2}
              </span>
            </div>
          </div>
          <div className={styles['about-11']}>
            <div className={styles['container3']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text04']} ${projectStyles['card-Text']} `}
              >
                <span>
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className={styles['container4']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text08']} ${projectStyles['card-Text']} `}
              >
                {props.text3}
              </span>
            </div>
            <div className={styles['container5']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles['text09']} ${projectStyles['card-Text']} `}
              >
                {props.text4}
              </span>
            </div>
          </div>
        </div>
        <button
          className={` ${styles['button']} ${projectStyles['anchor']} ${projectStyles['button']} `}
        >
          {props.button}
        </button>
      </div>
    </div>
  )
}

Skill.defaultProps = {
  button: 'CHECK MY WORK',
  heading: 'My Skils',
  text: 'Lorem ipsum dolor sit amet aulla quis sem at nibh elementum imperdiet.',
  text1: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  text2: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  text3: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  text4: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
}

Skill.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default Skill
