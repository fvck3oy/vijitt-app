import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import Header from '../Header/Header'
const items = [
    {
        src: 'https://www.vijittresort.com/images/vijitt-home-slide01.jpg',
        altText: 'Slide 1',
        caption: '',
        header: ''
      },
      {
        src: 'https://www.vijittresort.com/images/vijitt-home-slide02.jpg',
        altText: 'Slide 2',
        caption: '',
        header: ''
      },
      {
        src: 'https://www.vijittresort.com/images/vijitt-home-slide03.jpg',
        altText: 'Slide 3',
        caption: '',
        header: ''
      },
    {
      src: 'https://www.vijittresort.com/images/vijitt-home-slide04.jpg',
      altText: 'Slide 4',
      caption: '',
      header: ''
    },
    {
      src: 'https://www.vijittresort.com/images/vijitt-home-slide05.jpg',
      altText: 'Slide 5',
      caption: '',
      header: ''
    },
    {
      src: 'https://www.vijittresort.com/images/vijitt-home-slide06.jpg',
      altText: 'Slide 6',
      caption: '',
      header: ''
    }
  ];

export default class Banner extends Component {
    render() {
        return (
            <div className="">
                <UncontrolledCarousel items={items} className="banner" />
            </div>
        )
    }
}
