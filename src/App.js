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
                  Triguna
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
                      <h2>Triguna Internusa Pratama</h2>
                      <p style={{ marginTop: "0rem", fontSize: "14px" }}>January 3, 2014 - Oktober 20, 2017</p>
                      <h5>Project Document Controller</h5>
                      <p>Responsible for carrying out the following functions:</p>
                      <ul>
                        <li>Input and update status document (correspondence, engineering document, QC
document and drawing)</li>
                        <li>Circulate document for approval from particular engineer and Project Manager.</li>
                        <li>Prepare and track document transmittals.</li>
                        <li>Ensure that the most current revision of controlled documents is available for use by
Construction.</li>
                        <li>Establish, and maintain the status register and controlled document distribution list.</li>
                        <li>Administer the control of documentation for Construction. This includes receipt, logging,
                        reproduction, distribution, filing, and auditing of the documents and interim change
documents.</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <div className="tabsLayout">
                      <h2>Teknoglobal Multi Sistem Integrasi</h2>
                      <p style={{ marginTop: "0rem", fontSize: "14px" }}>January 3, 2018 - December 14, 2019</p>
                      <h5>Software Quality Assurance <small style={{ fontSize: "12px" }}>Mar 2019 – Oct 2019</small></h5>
                      <ul>
                        <li>Monitors every phase of the development process to ensure that the design and
software adhere to company standards.</li>
                        <li>Identify bugs and potential problems</li>
                        <li>Plan and perform different stages of testing</li>
                        <li>Develop new tools technology and testing processes</li>
                        <li>Make document test progress and result</li>
                      </ul>
                      <h5>Junior ETL/SQL Developer <small style={{ fontSize: "12px" }}>Jan 2018-Apr 2019</small></h5>
                      <ul>
                        <li>Developed and tested extraction, transformation, and load (ETL) processes.</li>
                        <li>Designed and developed SSIS and Sessions based on business user requirements and
business rules to load data from source flat files and SQL tables to target tables.</li>
                        <li>Designed and implemented stored procedures, views and other application database
code objects to aid mappings.</li>
                        <li>Maintained SQL scripts and complex queries for analysis and extraction.</li>
                        <li>Provided guidance to campaign analyst on complex technical projects that required
SQL coding</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <div className="tabsLayout">
                      <h2>Indonesian Financial Services Authority (Otoritas Jasa Keuangan)</h2>
                      <p style={{ marginTop: "0rem", fontSize: "14px" }}>December 15, 2019 - Now</p>
                      <h5>Research Fellow Business Analyst (Contract)</h5>
                      <ul>
                        <li>Assist Analyst to inform Financial Sector Data for Member of the Board of
Commissioners Otoritas Jasa Keuangan.</li>
                        <li>Providing assistance to analysts in developing an application such as creating
                        user requirements and attachments, IS / Application modules, studies, and mapping
of an application coordination between users and IT.</li>
                        <li>Doing User Acceptance Testing as identify bugs and potential problems, plan and
perform different stages of testing, make document test progress and result.</li>
                      </ul>
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
