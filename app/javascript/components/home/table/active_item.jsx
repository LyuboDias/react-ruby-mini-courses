import React, { Component } from 'react'
import Video from './video'
import styled from 'styled-components'

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

const ActiveItem = (props) => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <Video/>
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
                    <Button onClick={props.handleVideoChange} href="#" className="btn cta-btn">Whatch this video</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem;
