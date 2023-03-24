import React from 'react'
import Navigation from '../components/Navigation'
import RightSidebar from '../components/RightSidebar'
import LeftSidebar from '../components/LeftSidebar'

function LandingPage() {
  return <>
        <Navigation/>
        <main className='main-container'>
            
            <RightSidebar />
            <LeftSidebar/>
        </main>
    </>
  
}

export default LandingPage
