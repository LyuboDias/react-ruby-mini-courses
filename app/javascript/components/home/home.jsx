import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import Table from './table/table';
import axios from 'axios';

class Home extends Component {


  constructor() {
    super()

    this.state = {
      course_modules: [
        // { id: 1, title: 'Video 1', description: 'lorem ipsum  111', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', active: false },
        // { id: 2, title: 'Video 2', description: 'lorem ipsum 2222', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', active: false },
        // { id: 3, title: 'Video 3', description: 'lorem ipsum 333', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', active: false },
        // { id: 4, title: 'Video 4', description: 'lorem ipsum 44444', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', active: false }
      ]
    }
  }

  componentDidMount() {
    axios.get('/episodes.json')
    .then(data => {
      let res = []

      data.data.data.map( (data) => {
        res.push({id: data.id, title: data.title, description: data.description, active: false})

        this.setState({course_modules: res})

      })
    })
    .catch(data => {
      debugger
    })
  }


//  this functions is not working properly with rails db
  handleVideoChange(item, event) {
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map( data => {
      data.active = false
    });

    item.active = !item.active

    course_modules[item.id - 1] = item

    this.setState({course_modules})
  }


 render() {
  return (
    <div>
      <Jumbotron/>
      <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
    </div>
  );
 }
}

export default Home;
