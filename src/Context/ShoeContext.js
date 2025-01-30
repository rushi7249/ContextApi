import {createContext ,useContext} from "react"
import brown_leather_shoe from "../Imgaes/brown-leather-shoes.jpg"
import pair_trainers from "../Imgaes/pair-trainers.jpg"
import sport_shoe from "../Imgaes/pexels-melvin-buezo-1253763-2529148.jpg"
import formal_shoe from "../Imgaes/pexels-webdonut-19090.jpg"
import casual_shoe from "../Imgaes/shoes.jpg"

export const ShoeContext=createContext({
     shoes : [
        {
            img: casual_shoe,
            price: "$70",
            name: "White Casual Sneaker",
            btn: "Add To Cart"
        },
        {
            img: sport_shoe,
            price: "$60",
            name: "Sport Shoe",
            btn: "Add To Cart"
        },
        {
            img: formal_shoe,
            price: "$120",
            name: "Formal Shoe",
            btn: "Add To Cart"
        },
        {
            img: pair_trainers,
            price: "$100",
            name: "Pair of Trainers",
            btn: "Add To Cart"
        },
        {
            img: brown_leather_shoe,
            price: "$160",
            name: "Brown Leather Shoe",
            btn: "Add To Cart"
        }
    ],
    cart:[],
addToCart:(shoe)=>{},
incrementValue:(name)=>{},
decrementValue:(name)=>{}


})
export const ShoeProvider=ShoeContext.Provider;

export const useShoe=()=>{
    return useContext(ShoeContext)
}