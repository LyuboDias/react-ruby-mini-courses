import React, { Component } from 'react'
import styled from 'styled-components'


const Section = styled.section`
background-color: #222323;
min-height: 550px;
padding:100px 0;
color: white;
`
const H1 = styled.h1`
font-size: 40px;
font-weight: 700;
line-height: 52px;
margin-bottom: 20px;
`

const Button = styled.a`
display: inline-block;
text-decoration: none;
font-weight: bold;
cursor: pointer;
background-color: #fff;
border-radius: 0;
box-shadow: 0px 0px 0px 3px #aaa,
  -6px 6px #C3244E,
  -6px 6px 0px 3px #aaa;

`


const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <H1>Please check our You Tube channel for more awesome content!</H1>
              <p>New VW Tiguan 2021 Facelift </p>
              <div className="cta-wrapper">
                <Button href="#" className="btn fancy-btn">Find out more</Button>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="text-center pt-4 mt-4">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5-sGyjQK78Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Jumbotron;
