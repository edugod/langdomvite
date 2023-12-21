import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src='images/img-9.jpg'
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label='adventure'
                    path='/services'/>
                    <CardItem src='images/img-2.jpg'
                    text="Travel through the island of bali"
                    label='Luxury'
                    path='/services'/>
                </ul>
                <ul className="cards__items">
                    <CardItem src='images/img-9.jpg'
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label='adventure'
                    path='/services'/>
                    <CardItem src='images/img-2.jpg'
                    text="Travel through the island of bali"
                    label='Luxury'
                    path='/services'/>
                    <CardItem src='images/img-2.jpg'
                    text="Travel through the island of bali"
                    label='Luxury'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards

console.log('teste')