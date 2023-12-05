import React from 'react';
import Group42 from '../../../../assets/Group 42.png';
import FanIcon from '../../../../assets/icons/fan.svg';
import WaterIcon from '../../../../assets/icons/water.svg';
import FanArrow from '../../../../components/Progress/Arrow.svg';
import WaterArrow from '../../../../components/Progress/ArrowBlue.svg';
import image32 from '../../../../assets/image32.png';
import LeftArrow from '../../../../assets/icons/left-arrow.svg';
import RightArrow from '../../../../assets/icons/right-arrow.svg';
import './styles.css';
import { Container } from '../../../../common/components/grid';

export function Temporary() {
  return (
    <Container>
      <div className="home-page">
        {/* <div className="header">
      <div className="pattern-dark">
        <img className="icon" alt="" src="/2532459-1@2x.png" />
      </div>
      <div className="navigation">
        <div className="menu-nav">
          <div className="logo">
            <img className="logo-icon" alt="" src="/logo.svg" />
            <img className="asteron-icon" alt="" src="/asteron.svg" />
          </div>
          <div className="menu-categories">
            <div className="equipment">Equipment</div>
            <div className="equipment">Resources</div>
            <div className="equipment">FAQ</div>
            <div className="equipment">Contacts</div>
            <div className="equipment">Login</div>
          </div>
          <div className="button">
            <img
              className="message-24-outline"
              alt=""
              src="/message--24--outline.svg"
            />
            <div className="text">En</div>
            <img
              className="message-24-outline"
              alt=""
              src="/right-arrow--24--outline.svg"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <b className="additional-terahash-for-container">
          <span>{`Additional terahash `}</span>
          <span className="for-your-devices">for your devices</span>
          <span> forever</span>
        </b>
        <div className="we-accelerate-your">
          We accelerate your equipment gently and well and conserve energy
        </div>
        <div className="button1">
          <img
            className="message-24-outline1"
            alt=""
            src="/message--24--outline1.svg"
          />
          <div className="text1">See all support devices</div>
          <img
            className="message-24-outline1"
            alt=""
            src="/right-arrow--24--outline1.svg"
          />
        </div>
      </div>
      <img className="image-33-icon" alt="" src="/image-33@2x.png" />
    </div> */}
        <div className="apps">
          <b className="we-are-one-container">
            <span>{`We are `}</span>
            <span className="one">one</span>
            <span>{` of the market `}</span>
            <span className="one">leaders</span>
          </b>
          <img className="apps-child" alt="" src={Group42} />
          <div className="card-parent">
            <div className="card">
              <b className="title">HASHRATE</b>
              <div className="description">
                Increase the performance of miners to maximum values - up to 50%.
              </div>
            </div>
            <div className="card">
              <b className="title">INCOME</b>
              <div className="description">
                <p className="no-commissions-firmware">
                  No commissions. Firmware works only for you and brings income
                  only to you.
                </p>
                <p className="it-is-significantly">
                  It is significantly more profitable to buy firmware at a fixed
                  price, and use for years, receive all the additional income. No
                  official and no hidden commissions. We know what we are talking
                  about.
                </p>
              </div>
            </div>
            <div className="card">
              <b className="title">RELIABILITY</b>
              <div className="description">
                Time-tested. Over 100,000 firmware installations successfully
                installed since 2018.
              </div>
            </div>
            <div className="card">
              <b className="title">Performance</b>
              <div className="description">Maximum performance modes</div>
            </div>
          </div>
        </div>
        <div className="text2">
          <b className="for-5-years">
            For 5 years we've been helping customers earn more, providing
            technical support and releasing updates — each time making the product
            even better.
          </b>
          <div className="flex">
            <div className="parent">
              <b className="b">235 000</b>
              <div className="projects-completed">Projects completed</div>
            </div>
            <div className="parent">
              <b className="b1">+50 000</b>
              <div className="projects-completed">Hours Saved Annually</div>
            </div>
            <div className="parent">
              <b className="b1">3 500</b>
              <div className="projects-completed">Unique Users</div>
            </div>
          </div>
        </div>
        <div className="equipment1">
          <div className="title4">
            <b className="supported-hardware-upgrade">
              SUPPORTED HARDWARE UPGRADE
            </b>
            <div className="pricing-that-scales">
              Pricing that scales with your business immediately.
            </div>
          </div>
          <div className="equipment-card-parent">
            <div className="equipment-card">
              <div className="wrapper-parent">
                <div className="wrapper">
                  <b className="name">Antminer S19 XP</b>
                  <div className="badge">
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/right-arrow--24--outline2.svg"
                    />
                    <div className="text3">126 chips</div>
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/cancel--24--outline.svg"
                    />
                  </div>
                </div>
                <div className="wtapper-tags">
                  <div className="th">134, 141Th</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper1">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={FanIcon}
                  />
                  <div className="num">
                    <div className="name">46</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={FanArrow} />
                <div className="num1">
                  <div className="div1">180</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper2">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={WaterIcon}
                  />
                  <div className="num">
                    <div className="name">86</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={WaterArrow} />
                <div className="num1">
                  <div className="div1">220</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="button2">
                <img
                  className="message-24-outline"
                  alt=""
                  src="/message--24--outline2.svg"
                />
                <div className="text">See details</div>
                <img
                  className="message-24-outline"
                  alt=""
                  src="/right-arrow--24--outline3.svg"
                />
              </div>
            </div>
            <div className="equipment-card">
              <div className="wrapper-parent">
                <div className="wrapper">
                  <b className="name">Antminer S19J PRO</b>
                  <div className="badge1">
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/right-arrow--24--outline4.svg"
                    />
                    <div className="text3">126 chips</div>
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/cancel--24--outline1.svg"
                    />
                  </div>
                </div>
                <div className="wtapper-tags">
                  <div className="th">88, 92, 96, 100, 104Th</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper1">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={FanIcon}
                  />
                  <div className="num">
                    <div className="name">48</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={FanArrow} />
                <div className="num1">
                  <div className="div1">140</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper2">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={WaterIcon}
                  />
                  <div className="num">
                    <div className="name">78</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={WaterArrow} />
                <div className="num1">
                  <div className="div1">170</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="button2">
                <img
                  className="message-24-outline"
                  alt=""
                  src="/message--24--outline3.svg"
                />
                <div className="text">See details</div>
                <img
                  className="message-24-outline"
                  alt=""
                  src="/right-arrow--24--outline5.svg"
                />
              </div>
            </div>
            <div className="equipment-card">
              <div className="wrapper-parent">
                <div className="wrapper">
                  <b className="name">Antminer S19</b>
                  <div className="badge1">
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/right-arrow--24--outline6.svg"
                    />
                    <div className="text3">76 chips</div>
                    <img
                      className="cancel-24-outline"
                      alt=""
                      src="/cancel--24--outline2.svg"
                    />
                  </div>
                </div>
                <div className="wtapper-tags">
                  <div className="th">82, 84, 86, 90, 95Th</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper1">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={FanIcon}
                  />
                  <div className="num">
                    <div className="name">31</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={FanArrow} />
                <div className="num1">
                  <div className="div1">115</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="data-1">
                <div className="wrapper2">
                  <img
                    className="ventilator-24-outline"
                    alt=""
                    src={WaterIcon}
                  />
                  <div className="num">
                    <div className="name">51</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <img className="arrow-icon" alt="" src={WaterArrow} />
                <div className="num1">
                  <div className="div1">135</div>
                  <div className="ths">Th/s</div>
                </div>
              </div>
              <div className="button2">
                <img
                  className="message-24-outline"
                  alt=""
                  src="/message--24--outline4.svg"
                />
                <div className="text">See details</div>
                <img
                  className="message-24-outline"
                  alt=""
                  src="/right-arrow--24--outline7.svg"
                />
              </div>
            </div>
            <div className="equipment-card-group">
              <div className="equipment-card3">
                <div className="wrapper-parent">
                  <div className="wrapper">
                    <b className="name">Antminer S19Pro+Hydro</b>
                    <div className="badge">
                      <img
                        className="cancel-24-outline"
                        alt=""
                        src="/right-arrow--24--outline8.svg"
                      />
                      <div className="text3">76 chips</div>
                      <img
                        className="cancel-24-outline"
                        alt=""
                        src="/cancel--24--outline3.svg"
                      />
                    </div>
                  </div>
                  <div className="wtapper-tags">
                    <div className="th">198Th</div>
                  </div>
                </div>
                <div className="data-16">
                  <div className="wrapper1">
                    <img
                      className="ventilator-24-outline"
                      alt=""
                      src="/ventilator--24--outline3.svg"
                    />
                    <div className="num">
                      <div className="name">31</div>
                      <div className="ths">Th/s</div>
                    </div>
                  </div>
                  <img className="arrow-icon" alt="" src="/arrow6.svg" />
                  <div className="num1">
                    <div className="div1">115</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <div className="data-1">
                  <div className="wrapper2">
                    <img
                      className="ventilator-24-outline"
                      alt=""
                      src="/rainy-weather--24--outline3.svg"
                    />
                    <div className="num">
                      <div className="name">63</div>
                      <div className="ths">Th/s</div>
                    </div>
                  </div>
                  <img className="arrow-icon" alt="" src="/arrow7.svg" />
                  <div className="num1">
                    <div className="div1">240</div>
                    <div className="ths">Th/s</div>
                  </div>
                </div>
                <div className="button2">
                  <img
                    className="message-24-outline"
                    alt=""
                    src="/message--24--outline5.svg"
                  />
                  <div className="text">See details</div>
                  <img
                    className="message-24-outline"
                    alt=""
                    src="/right-arrow--24--outline9.svg"
                  />
                </div>
              </div>
              <div className="button6">
                <img
                  className="message-24-outline1"
                  alt=""
                  src="/message--24--outline6.svg"
                />
                <div className="text1">See all support devices</div>
                <img
                  className="message-24-outline1"
                  alt=""
                  src="/right-arrow--24--outline10.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="feature">
          <img className="image-32-icon" alt="" src={image32} />
          <b className="performance-vs-energy-container">
            <span>{`Performance `}</span>
            <span className="one">vs</span>
            <span> Energy saving</span>
          </b>
          <b className="savings-in-electricity">
            Savings in electricity consumption
          </b>
          <b className="overclocking-or-low">
            Overclocking or low consumption modes
          </b>
          <b className="switching-off-the">Switching off the fans</b>
          <b className="different-acceleration-modes">
            Different acceleration modes
          </b>
          <b className="quick-switch-between">
            Quick switch between performance modes
          </b>
          <b className="voltage-settings-for">
            Voltage settings for stable operation
          </b>
          <div className="up-to-15">
            Up to 15% energy efficiency relative to factory firmware
          </div>
          <div className="button7">
            <img
              className="message-24-outline1"
              alt=""
              src="/message--24--outline7.svg"
            />
            <div className="text1">See all support devices</div>
            <img
              className="message-24-outline1"
              alt=""
              src="/right-arrow--24--outline11.svg"
            />
          </div>
        </div>
        <div className="question">
          <b className="frequently-asked-questions">Frequently Asked Questions</b>
          <div className="flex1">
            <img className="arrow-icon8" alt="" src={LeftArrow} />
            <div className="flex2">
              <div className="wrapper12">
                <div className="wrapper13">
                  <b className="is-it-possible">
                    Is it possible not to overclock the device and leave it at
                    stock values but reduce power consumption?
                  </b>
                  <div className="wrapper14">
                    <div className="of-25">1 of 25</div>
                    <div className="see-all-questions">See all questions</div>
                  </div>
                </div>
                <div className="yes-this-is">
                  Yes, this is one of the main usage modes of our firmware. You
                  can leave the stock value and use the firmware module that
                  provides energy efficiency, or you can adjust the power
                  consumption in manual mode.
                </div>
              </div>
            </div>
            <img className="arrow-icon8" alt="" src={RightArrow} />
          </div>
        </div>
        {/* <div className="footer-main">
      <div className="menu-categories1">
        <div className="equipment">Equipment</div>
        <div className="equipment">Resources</div>
        <div className="equipment">FAQ</div>
        <div className="equipment">Contacts</div>
        <div className="equipment">Login</div>
      </div>
      <div className="logo1">
        <img className="logo-icon" alt="" src="/logo1.svg" />
        <img className="asteron-icon" alt="" src="/asteron1.svg" />
      </div>
      <div className="asteron-all-rights">
        © 2023 Asteron. All rights reserved.
      </div>
      <div className="terms">Terms</div>
      <div className="privacy">Privacy</div>
      <div className="cookies">Cookies</div>
      <div className="footer-main-child" />
      <div className="frame-parent">
        <div className="input-parent">
          <div className="input">
            <div className="input1">
              <div className="input-and-label">
                <div className="label">Email</div>
                <div className="input2">
                  <div className="content1">
                    <img
                      className="message-24-outline1"
                      alt=""
                      src="/message--24--outline8.svg"
                    />
                    <div className="text13">Enter your email</div>
                  </div>
                </div>
              </div>
              <div className="hint-text">Hint text goes here.</div>
            </div>
          </div>
          <div className="button8">
            <img
              className="message-24-outline1"
              alt=""
              src="/message--24--outline9.svg"
            />
            <div className="text14">Try it out</div>
            <img
              className="message-24-outline1"
              alt=""
              src="/right-arrow--24--outline12.svg"
            />
          </div>
        </div>
        <div className="we-care-about-container">
          <span>{`We care about your data in our `}</span>
          <span className="one">privacy policy</span>
        </div>
      </div>
    </div> */}
      </div>
    </Container>
  );
}
