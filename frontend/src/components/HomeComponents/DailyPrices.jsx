import React from 'react'
import './DailyPrices.css'

const DailyPrices = () => {
  return (
    <>
        <div className="DPcontainer">
            <div className="DPtitle">
                Daily Prices
            </div>
            <div className="DPinner">
                <button className="DPleft">₹ 30/KG</button>
                    <div className="DPright">
                    <div className="DPrightTop">
                        Select Breed
                        <select name="breed" id="breed">
                            <option value="breed1">Breed 1</option>
                            <option value="breed2">Breed 2</option>
                            <option value="breed3">Breed 3</option>
                            <option value="breed4">Breed 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DailyPrices