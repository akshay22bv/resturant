import panner from "../assets/veg/panner_logo.jpg";
import aloopalak from "../assets/veg/aloo_palak.jpg";
import bhendi_fry from "../assets/veg/bhendi_fry.jpg";
import dal_tadka from "../assets/veg/dal_tadka.jpg";
import kajukari from "../assets/veg/kajukari.webp";

import chicken_hydrabadi from "../assets/nonveg/chicken_hydrabadi.jpg";
import chicken_kadayi from "../assets/nonveg/chicken_kadayi.jpg";
import chicken_masala from "../assets/nonveg/chicken_masala.jpg";
import chicken_pepper_dry from "../assets/nonveg/chicken_pepper_dry.jpg";
import chicken_tanduri from "../assets/nonveg/chicken_tanduri.jpg";

import peanuts from "../assets/dessert/peanuts.jpg";
import raspberry from "../assets/dessert/raspberry.jpg";
import starwberry from "../assets/dessert/starwberry.jpg";
import vannila_choco from "../assets/dessert/vannila_choco.jpg";
import wafflecone from "../assets/dessert/wafflecone.jpg";

import idly from "../assets/breakfast/idly.jpg";
import doosa from "../assets/breakfast/doosa.jpg";
import kesaribat from "../assets/breakfast/kesaribat.jpg";
import puri from "../assets/breakfast/puri.webp";
import uppit from "../assets/breakfast/uppit.jpg";

import egg_rice from "../assets/rice/egg_rice.jpg";
import ghee_rice from "../assets/rice/ghee_rice.jpg";
import gobi_rice from "../assets/rice/gobi_rice.jpg";
import jeera_rice from "../assets/rice/jeera_rice.jpg";
import lemon_rice from "../assets/rice/lemon_rice.jpg";

import image1 from "../assets/carosuel/carosel1.jpg";
import image2 from "../assets/carosuel/carosel2.jpg";
import image3 from "../assets/carosuel/carosel3.jpg";
import image4 from "../assets/carosuel/carosel4.jpg";

import soup from "../assets/starter/soup.jpg";
import papad from "../assets/starter/papad.jpg";
import noodles from "../assets/starter/noodles.jpg";
import chicken_lolipop from "../assets/starter/cheicken_lolipop.webp";
import gobi from "../assets/starter/gobi.jpg";

export const data = [
  {
    question: "Starter",
    items: [
      {
        name: "soup",
        image: soup,
        price: { full: 35 },
      },
      {
        name: "papad",
        image: papad,
        price: { full: 40 },
      },
      {
        name: "noodles",
        image: noodles,
        price: { full: 20 },
      },
      {
        name: "gobi",
        image: gobi,
        price: { full: 25 },
      },
      {
        name: "chicken lolipop",
        image: chicken_lolipop,
        price: { full: 20 },
      },
    ],
  },
  {
    question: "Vegetarian",
    items: [
      {
        name: "panner",
        image: panner,
        price: { full: 150, half: 90 },
      },
      {
        name: "aloo palak",
        image: aloopalak,
        price: { full: 150, half: 90 },
      },
      {
        name: "kaju kari",
        image: kajukari,
        price: { full: 150, half: 90 },
      },
      {
        name: "dal tadka",
        image: dal_tadka,
        price: { full: 150, half: 90 },
      },
      {
        name: "bhendi fry",
        image: bhendi_fry,
        price: { full: 150, half: 90 },
      },
    ],
  },
  {
    question: "Non Vegetarian",
    items: [
      {
        name: "chicken hydrabadi",
        image: chicken_hydrabadi,
        price: { full: 150, half: 90 },
      },
      {
        name: "chicken kadayi",
        image: chicken_kadayi,
        price: { full: 150, half: 90 },
      },
      {
        name: "chicken masala",
        image: chicken_masala,
        price: { full: 150, half: 90 },
      },
      {
        name: "chicken pepper dry",
        image: chicken_pepper_dry,
        price: { full: 150, half: 90 },
      },
      {
        name: "chicken tanduri",
        image: chicken_tanduri,
        price: { full: 150, half: 90 },
      },
    ],
  },

  {
    question: "Rice",
    items: [
      {
        name: "jeera rice",
        image: jeera_rice,
        price: { full: 150, half: 90 },
      },
      {
        name: "lemon rice",
        image: lemon_rice,
        price: { full: 150, half: 90 },
      },
      {
        name: "ghee rice",
        image: ghee_rice,
        price: { full: 150, half: 90 },
      },
      {
        name: "gobi rice",
        image: gobi_rice,
        price: { full: 150, half: 90 },
      },
      {
        name: "egg rice",
        image: egg_rice,
        price: { full: 150, half: 90 },
      },
    ],
  },
  {
    question: "Dessert",
    items: [
      {
        name: "Peanuts",
        image: peanuts,
        price: { full: 50 },
      },
      {
        name: "raspberry",
        image: raspberry,
        price: { full: 60 },
      },
      {
        name: "starwberry",
        image: starwberry,
        price: { full: 30 },
      },
      {
        name: "vannila choco",
        image: vannila_choco,
        price: { full: 40 },
      },
      {
        name: "wafflecone",
        image: wafflecone,
        price: { full: 70 },
      },
    ],
  },
];

export const Carouseldata = [
  {
    name: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
    image: image1,
  },
  {
    name: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
    image: image2,
  },
  {
    name: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
    image: image3,
  },
  {
    name: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
    image: image4,
  },
];
