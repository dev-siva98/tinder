
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'

function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',


        },
        {
            name: 'Steve Jobs',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
        }
    ])

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log("removing", nameToDelete, direction);
        setLastDirection(direction)
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }
    return (
        <div className='tinderCards'>
            <div className='cards-container'>
                {people.map((person) =>
                    <TinderCard className='swipe' key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default Cards
