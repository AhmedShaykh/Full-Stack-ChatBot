import SampleCar from "../assets/images/SampleCar.jpg";
import AlamoLogo from "../assets/images/alamo_logo.gif";
import BigCar from "../assets/images/bigCar.jpg";
import Car1 from "../assets/images/car1.jpg";
import DollarLogo from "../assets/images/dollar_logo.gif";
import EuroLogo from "../assets/images/europcar_logo.gif";

export const cars = [
  {
    id: 1,
    carImg: SampleCar,
    topRated: true,
    CarName: "Toyota Corolla",
    seats: "5",
    transmission: "automatic",
    largeBags: "4",
    smallBags: "2",
    location: "Jinnah airport",
    days: "3",
    price: "400",
    brandImg: EuroLogo,
    reviews: "2",
    rating: "9",
  },
  {
    id: 2,
    carImg: Car1,
    topRated: false,
    CarName: "Toyota Yaris",
    seats: "5",
    transmission: "automatic",
    largeBags: "4",
    smallBags: "2",
    location: "Jinnah airport",
    days: "5",
    price: "700",
    brandImg: DollarLogo,
    reviews: "6",
    rating: "7.8",
  },
  {
    id: 3,
    carImg: BigCar,
    topRated: true,
    CarName: "Kia sportage",
    seats: "5",
    transmission: "automatic",
    largeBags: "4",
    smallBags: "2",
    location: "Muscat airport",
    days: "3",
    price: "400",
    brandImg: AlamoLogo,
    reviews: "9",
    rating: "9",
  },
];