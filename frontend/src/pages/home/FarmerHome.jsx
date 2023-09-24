import React from 'react'
import HomeTop from '../../components/HomeComponents/HomeTop'
import HomeMiddle from '../../components/HomeComponents/HomeMiddle'
import DailyPrices from '../../components/HomeComponents/DailyPrices'
import HomeFooter from '../../components/HomeComponents/HomeFooter'
import HomeAppGuide from '../../components/HomeComponents/HomeAppGuide'

const FarmerHome = () => {
  return (
    <>
        <div className="farmerHomeContainer">
            <HomeTop />
            <HomeMiddle />
            <DailyPrices />
            <HomeAppGuide />
            <HomeFooter />
        </div>
    </>
  )
}

export default FarmerHome