import React, { useState } from 'react';
import Typical from 'react-typical'
import './App.css';
import '@csstools/normalize.css';
import JumbotronPic from './assets/jumbotron_pic.svg';
import PhotoProfile from './assets/photo_profile.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Sidebar from './components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const App = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      <div className="jumbotronDiv">
        <Container >
          <Row className="jumbotronRow">
            {/*  */}
            <Col xs="8" sm="9" className="jumbotronCol">
              <h1 className="display-3 font-hello-world">Hello, world!</h1>
              <p className="lead rowParagraphJumbotron">
                <Typical
                  steps={['Welcome to my website, my name is Nur Fitriyyah and you can call me "Fitri". Let\'s enjoy this website together and I will tell you the story about my life.', 500]}
                  wrapper="p"
                />
              </p>
              <hr className="my-2" />
              <p className="light-paragaraph-jumbotron-font">So I am grateful for those of you who visit this website, and through this website I will share my career experiences.</p>

            </Col>
            <Col xs="4" sm="3" className="jumbotronCol">
              <img src={JumbotronPic} className="jumbotronPic" alt="jumbotron_pic" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container >
        <Row className="jumbotronRow">
          {/*  */}
          <Col xs="1" sm="2" className="jumbotronCol">
            <img src={PhotoProfile} className="roundedPic" alt="rounded_pic" />
            <br />
            <p className="fontAwesomeSetting"><a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></p>
            <p className="fontAwesomeSetting"><a href="mailto:fitriyyah.nur@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" /></a></p>
          </Col>
          <Col xs="11" sm="10" className="jumbotronCol">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  Rukun Raharja
          </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  TMSI
          </NavLink>
          
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }}
                >
                  OJK
          </NavLink>
          
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <div className="tabsLayout">
                    <h2>Rukun Raharja</h2>
                    <p style={{marginTop: "0rem", fontSize: "14px"}}>January 3, 2014 - Oktober 20, 2017</p>
                    <p>Di perusahaan ini saya bertugas sebagai document control yang terlibat dalam beberapa proyek.</p>
                    <hr />
                    <p><strong>Pembangunan pipa 20" Petronas Carigali - PJB UP Gresik</strong></p>
                    <p>Peran saya adalah memastikan dokumen yang digunakan update dan membuat MDR</p>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                <Col sm="12">
                    <div className="tabsLayout">
                    <h2>Teknoglobal Multi Sistem Integrasi</h2>
                    <p style={{marginTop: "0rem", fontSize: "14px"}}>January 3, 2018 - December 14, 2019</p>
                    <p>Di Teknoglobal saya melakukan sesuatu yang berkaitan dengan ETL dan saya juga terlibat dalam beberapa proyek.</p>
                    <hr />
                    <p><strong>Danamon FIRMS Project</strong></p>
                    <p>Peran saya adalah mengembangkan ETL bersama tim.</p>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                <Col sm="12">
                    <div className="tabsLayout">
                    <h2>Indonesian Financial Services Authority (Otoritas Jasa Keuangan)</h2>
                    <p style={{marginTop: "0rem", fontSize: "14px"}}>December 15, 2019 - Now</p>
                    <p>Di OJK saya melakukan sesuatu yang berkaitan dengan data dan saya juga terlibat dalam beberapa proyek.</p>
                    <hr />
                    <p><strong>Metadata Management Project</strong></p>
                    <p>Peran saya adalah membuat struktur metadata dan skenarionya.</p>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>

        </Row>
      </Container>
    </div>

  );

}

export default App;
