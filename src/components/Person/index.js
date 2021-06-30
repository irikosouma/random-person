import React from 'react'
import {Wrap} from './index.styles'
export default function Person({data, selectedPart}) {
    return (
        <Wrap>
            <img src={data.picture.large} alt="avatar-default" className="avatar" />
            {selectedPart === 0 ?
                <>
                <p className="name">My name is </p>
                <span>{data.name.first} {data.name.last}</span>
                </>
                :""
            }
            {selectedPart === 1 ? 
                <>
                <p className="email">My email is </p>
                <span>{data.email}</span>
                </>
                :''
            }
            {selectedPart === 2 ? 
                <>
                <p className="age">My age is </p>
                <span>{data.dob.age}</span>
                </>
                :''
            }
            {selectedPart === 3 ? 
                <>
                <p className="address">My street is </p>
                <span>{data.location.street.number} {data.location.street.name}</span>
                </>
                :''
            }
            {selectedPart === 4 ? 
                <>
                <p className="phone">My phone is </p>
                <span>{data.cell}</span>
                </>
                :''
            }
            {selectedPart === 5 ? 
                <>
                <p className="password">My password is </p>
                <span>{data.login.password}</span>
                </>
                :''
            }
            
        </Wrap>
    )
}
