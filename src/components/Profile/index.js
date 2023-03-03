import React from 'react'
import './style.css'

const Profile = () => {
  return (
    <div className='row'>
      <div className='col-sm-8'>
        <img className="hero"src={url}/> {/* allow user to upload their own picture and assign it as their profile picture  */}
        <h1>{companyObj.name}</h1>
        <img className="profile" src={url}/> {/* profile picture */}
        <div>
          <p>{companyObj.tags}</p>
          <p>{companyObj.ratings}</p>
          <p>{data.price}</p>
          <p>{companyObj.phoneNumber}</p>
          <p>{companyObj.address}</p>
          <p>{data.distance}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile