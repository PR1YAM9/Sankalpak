import React from 'react'
import serviceImg from '../../images/servicesImg.svg';
import emandiImg from '../../images/emandiImg.svg';
import qualityImg from '../../images/qualityImg.svg';
import newsImg from '../../images/newsImg.svg';
import educationImg from '../../images/educationImg.svg';
import analyticsImg from '../../images/analyticsImg.svg';
import './HomeMidlle.css'
import { Link } from 'react-router-dom';

const ImgData=[
    {
        img:serviceImg,
        title:"Services"
    },
    {
        img:emandiImg,
        title:"eMandi"
    },
    {
        img:qualityImg,
        title:"Quality Check"
    },
    {
        img:newsImg,
        title:"News"
    },
    {
        img:educationImg,
        title:"Education",
        path: "/edu"
    },
    {
        img:analyticsImg,
        title:"Analytics"
    }
]


const HomeMiddle = () => {
  return (
    <>
        <div className="HMcontainer">
            <div className="HMbox">
                {
                    ImgData.map((item,index)=>{
                        return(
                            <div className="HMcard" key={index}>
                                <Link to={item.path}>
                                <div className='HMImgcover'><img className="HMcardImg" src={item.img} alt="img" /></div>
                                <figcaption className="HMcardTitle">{item.title}</figcaption>
                                </Link>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    </>
  )
}

export default HomeMiddle