import React , { useState, useEffect } from 'react'
//styles
import {Wrap} from './index.styles'
//components
import Person from './Person';
//images
import UserIcon from '../assets/images/userIcon'
import Email from '../assets/images/email'
import Age from '../assets/images/age'
import Address from '../assets/images/address'
import Phone from '../assets/images/Phone'
import Password from '../assets/images/password'
export default function Main() {
    const [listPerson, setListPerson] = useState([]);
    const [selectedPart, setSelectedPart] = useState(0)
    useEffect(() => {
        fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
            setListPerson(json.results)
})
    .catch(err => console.log('Request Failed', err));
        }, []);
    const handleRandomUser = () => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            setListPerson(json.results)
        })
        .catch(err => console.log('Request Failed', err));

    }
    const handleHover = (number) => {
        setSelectedPart(number)
    }
    return (
        <Wrap >
            <div className="block bgc-black">
            </div>
            <div className="block bgc-white">
                <div className="wrap-info">
                    {listPerson.map((item,index) => (
                        <Person data={item} key={index} selectedPart={selectedPart}/>
                    ))}
                    <div className="wrap-btn-icon">
                        <button className="name" onMouseEnter={() => handleHover(0)} >
                            <UserIcon className="icon-style" />
                        </button>
                        <button className="email" onMouseEnter={() => handleHover(1)} >
                            <Email className="icon-style" />
                        </button>
                        <button className="age" onMouseEnter={() => handleHover(2)} >
                            <Age className="icon-style" />
                        </button>
                        <button className="address" onMouseEnter={() => handleHover(3)} >
                            <Address className="icon-style" />
                        </button>
                        <button className="phone" onMouseEnter={() => handleHover(4)} >
                            <Phone className="icon-style" />
                        </button>
                        <button className="password" onMouseEnter={() => handleHover(5)} >
                            <Password className="icon-style" />
                        </button>
                    </div>
                    <button className="btn-random" onClick={handleRandomUser}>
                        Random user
                    </button>
                </div>
            </div>
        </Wrap>
    )
}
