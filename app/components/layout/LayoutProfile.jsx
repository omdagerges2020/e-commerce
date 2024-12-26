'use client'
import React from 'react'
import ProfileHeader from './../ProfileHeader';

const LayoutProfile = ({children}) => {
  return (
    <div>
        <ProfileHeader/>
        {children}
    </div>
  )
}

export default LayoutProfile;