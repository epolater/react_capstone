
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { useEffect } from 'react';
import { useState } from 'react';

const MenuCard = (props) => {
    return (
        <div class="menucards">
            <img src={props.image} height={215} alt="dish"></img>
            <div class="menucards-description">
                <div class="menucards-name">{props.name}</div>
                <div class="menucards-price">{props.price}</div>
            </div>
            <article>{props.text}</article>
            <div class="menucards-link">Order a  delivery</div>
        </div>
    )
}


const Specials = (props) => {
    return (
        <Carousel
            centerMode={true}
            centerSlidePercentage={props.slideWidth}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            showArrows={false}
            showThumbs={false}
            dynamicHeight={false}

        >
            <MenuCard
                image={require("../assets/images/greek_salad.jpg")}
                name={"Greek Salad"}
                price={"$12,99"}
                text={"The famous greek salad of crispy lettuce, olives and our Chicago \
                style feta cheese, garnished with crunchy garlic and rosemary croutons."}
            />
            <MenuCard
                image={require("../assets/images/bruchetta.jpg")}
                name={"Bruchetta"}
                price={"$5,99"}
                text={"Our Bruchetta is made from grilled bread that has been smeared \
                with garlic and seosened with slat and olive oil."}
            />
            <MenuCard
                image={require("../assets/images/lemon_dessert.jpg")}
                name={"Lemon Dessert"}
                price={"$5,00"}
                text={" This comes straight from grandma's recipe book, every last ingredient\
                has been sourced and is as authentic as can be imagined."}
            />

        </Carousel>
    )
}

const SpecialsCarousel = () => {

    var initialWidth = window.innerWidth < 800 ? 80 : 35

    const [width, setWidth] = useState(initialWidth)

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800) {setWidth(80)}
        else {setWidth(35)}
        //console.log(width)
    })

    return <Specials slideWidth={width} />


}

export default SpecialsCarousel

