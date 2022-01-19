import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import axios from "../axiosConfig";

function TenderCards() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("/tinder/cards");
                console.log(res.data);
                setPerson(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        // call fetchData
        fetchData();
    }, []);


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }


    return (
        <div className='tenderCard_container'>
            {
                person.map((person, index) => {
                    return (
                        <TinderCard
                            key={index}
                            className='swipe'
                            onSwipe={() => onSwipe(person.name)}
                            onCardLeftScreen={() => onCardLeftScreen(person.name)}
                            preventSwipe={['up', 'down']}>
                            <div className="tenderCard_card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    );
                })
            }
        </div>
    );
}

export default TenderCards;
