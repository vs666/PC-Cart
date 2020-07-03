import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

function ControlledCarousel() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    const sstyle = styled.div`
        .img{
            width : 100%;
            height: 500px;
        }
    `;

    return (
        <Carousel>
            {/* //activeIndex={index} onSelect={handleSelect}> */}
            <Carousel.Item >
                <img style={{ width: '100%', height: '500px' }}
                    className="d-block w-100 img"
                    src={require('./Bck1.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3>Costumise and build your own <b>'Hyper-Computer'</b></h3>
                    <p>Choose from a range of powerful processors, GPUs, TPUs and other powerful computing resources...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '500px' }}
                    className="d-block w-100 img"
                    src={require('./SlideImg2.jpg')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Best costs for products of your demand.</h3>
                    <p>LOur existance is based on our cost-effectiveness and high costumisability</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width:'100%', height:'500px'}}
                    className="d-block w-100 img"
                    src={require('./Bck3.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{color:`#eee`,fontWeight:`bolder`}}>Options Unlimited...</h3>
                    <p>You can build your own PC, choose from handpicked costumized PCs, laptops and much more...</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}


export default ControlledCarousel;