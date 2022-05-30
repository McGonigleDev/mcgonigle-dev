import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image';

export default function MyPortfolio() {
    return (
        <div>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                interval={6100} 
                showIndicators={false}
                showThumbs={true}
                showStatus={false}
                
            >
                <div>
                    <StaticImage src="../images/portfolio/firstresponse.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/lancasters.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/supremeheating.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/fsagency.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/narsons.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/charlotte.png" />
                </div>
                <div>
                    <StaticImage src="../images/portfolio/cvleigh.png" />
                </div>
            </Carousel>
        </div>
    )
}
