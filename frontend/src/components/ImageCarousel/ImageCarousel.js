import { Carousel } from "react-bootstrap"

const ImageCarousel = () => {
    return (
        <>
            <Carousel interval={null} variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/CanadianCheque.svg/1920px-CanadianCheque.svg.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ImageCarousel