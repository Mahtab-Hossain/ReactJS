import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features from '../components/features'
import Skill from '../components/skill'
import Clients from '../components/clients'
import Faqs from '../components/faqs'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Portfolio Page1</title>
        <meta property="og:title" content="Portfolio Page1" />
      </Helmet>
      <div data-role="Header" className={styles['navbar-container']}>
        <Navbar></Navbar>
      </div>
      <div className={styles['section-separator']}></div>
      <div className={styles['section-separator1']}></div>
      <div className={styles['container01']}>
        <Hero></Hero>
      </div>
      <div className={styles['container02']}>
        <Features></Features>
      </div>
      <div className={styles['container03']}></div>
      <Skill></Skill>
      <div className={styles['section-separator2']}></div>
      <Clients></Clients>
      <div className={styles['pricing']}>
        <div className={styles['heading-container']}>
          <h1
            className={` ${styles['text']} ${projectStyles['section-Heading']} `}
          >
            Ask for a quote
          </h1>
          <span
            className={` ${styles['text01']} ${projectStyles['section-Text']} `}
          >
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className={styles['pricing-card-container']}>
          <div className={styles['card']}>
            <div className={styles['card-heading']}>
              <span
                className={` ${styles['type']} ${projectStyles['anchor']} `}
              >
                Minimal
              </span>
              <span className={projectStyles['section-Heading']}>Basic</span>
            </div>
            <div className={styles['card-content']}>
              <div className={styles['feature']}>
                <span className={projectStyles['card-Text']}>Feature one</span>
                <span
                  className={` ${styles['limit']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['feature1']}>
                <span className={projectStyles['card-Text']}>Feature two</span>
                <span
                  className={` ${styles['limit1']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['feature2']}>
                <span className={projectStyles['card-Text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['limit2']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['feature3']}>
                <span className={projectStyles['card-Text']}>Feature four</span>
                <span
                  className={` ${styles['limit3']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['choose']} ${projectStyles['button']} ${projectStyles['anchor']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card1']}>
            <div className={styles['card-heading1']}>
              <span
                className={` ${styles['type1']} ${projectStyles['anchor']} `}
              >
                medium
              </span>
              <span className={projectStyles['section-Heading']}>Complex</span>
            </div>
            <div className={styles['card-content1']}>
              <div className={styles['container04']}>
                <span className={projectStyles['card-Text']}>Feature one</span>
                <span
                  className={` ${styles['text03']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container05']}>
                <span className={projectStyles['card-Text']}>Feature two</span>
                <span
                  className={` ${styles['text05']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container06']}>
                <span className={projectStyles['card-Text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['text07']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['container07']}>
                <span className={projectStyles['card-Text']}>Feature four</span>
                <span
                  className={` ${styles['text09']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['button']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card2']}>
            <div className={styles['card-heading2']}>
              <span
                className={` ${styles['type2']} ${projectStyles['anchor']} `}
              >
                Premium
              </span>
              <span className={projectStyles['section-Heading']}>
                Professional
              </span>
            </div>
            <div className={styles['card-content2']}>
              <div className={styles['container08']}>
                <span className={projectStyles['card-Text']}>Feature one</span>
                <span
                  className={` ${styles['text11']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container09']}>
                <span className={projectStyles['card-Text']}>Feature two</span>
                <span
                  className={` ${styles['text13']} ${projectStyles['card-Text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container10']}>
                <span className={projectStyles['card-Text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['text15']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['container11']}>
                <span className={projectStyles['card-Text']}>Feature four</span>
                <span
                  className={` ${styles['text17']} ${projectStyles['card-Text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['button1']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator3']}></div>
      <div className={styles['section-separator4']}></div>
      <Faqs></Faqs>
      <div className={styles['section-separator5']}></div>
      <div className={styles['subscribe']}>
        <img
          alt="image"
          src="/playground_assets/default-img.svg"
          className={styles['image']}
        />
        <div className={styles['container12']}>
          <div className={styles['heading-container1']}>
            <h1
              className={` ${styles['text18']} ${projectStyles['section-Heading']} `}
            >
              Get our guide to crafting digital products
            </h1>
            <span
              className={` ${projectStyles['section-Text']} ${styles['text19']} `}
            >
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className={` ${styles['textinput']} ${projectStyles['section-Text']} ${projectStyles['input']} `}
          />
          <button
            className={` ${styles['button2']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            SEND
          </button>
        </div>
      </div>
      <div className={styles['section-separator6']}></div>
      <div className={styles['footer-container']}>
        <div className={styles['footer']}>
          <div className={styles['social-links']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon2']}
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon4']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className={styles['copyright-container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon6']}>
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className={projectStyles['anchor']}>Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
