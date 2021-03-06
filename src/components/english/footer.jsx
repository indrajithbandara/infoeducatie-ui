"use strict";

import React from "react";
import Router from "react-router";
import { Navbar, Nav, NavItem, Row, Col, Thumbnail, Grid } from "react-bootstrap";
import { NavItemLink } from "react-router-bootstrap";

let { Route, Link, RouteHandler } = Router; // eslint-disable-line

import "../footer.less";
import Facebook from "../../../assets/img/icons/fb.png";
import Twitter from "../../../assets/img/icons/twitter.png";
import Google from "../../../assets/img/icons/gplus.png";
import Github from "../../../assets/img/icons/github.png";

import NewsletterForm from "../newsletter-form";

export default React.createClass({
  displayName: "FooterEnglish",

  render() {
    return <Grid className="footer">
      <Row className="small-spacing" />
      <Row className="small-spacing second" />
      <Row>
        <Col xs={12}>
          <Navbar>
            <Nav className="navbar-nav" ref="nav">
              <NavItem target="_blank" href="http://community.infoeducatie.ro">Forum</NavItem>
              <NavItem target="_blank" href="http://blog.infoeducatie.ro">Blog</NavItem>
              <NavItemLink to="contact-english">Contact</NavItemLink>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row className="small-spacing" />
      <Row className="call-to-action">
        <Col sm={6} smOffset={3} className="text-center">
          <Row>
            <Col xs={12}>
              <ul className="social-logos list-inline">
                <li><a href="https://www.facebook.com/infoeducatie" target="_blank"><img alt="Facebook" src={Facebook} /></a></li>
                <li><a href="https://twitter.com/infoeducatie" target="_blank"><img alt="Twitter" src={Twitter} /></a></li>
                <li><a href="https://plus.google.com/+InfoeducatieRomania" target="_blank"><img alt="Google+" src={Google} /></a></li>
                <li><a href="https://github.com/infoeducatie" target="_blank"><img alt="Github" src={Github} /></a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p className="copyright">
                &copy; 2015 InfoEduca&#355;ie
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>;
  }
});
