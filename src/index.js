import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Home';
import Photos from './Photos';
import AnotherAttraction from './AnotherAttraction';
import Attraction from './Attraction';
import City from './City';
import image from './Photos/1.jpg';
import image2 from './Photos/2.jpg';
import image3 from './Photos/3.jpg';
let cityInfo = "Кременчу́г (укр. Кременчу́к) — город в Полтавской области Украины, административный центр Кременчугского района и Кременчугской городской общины. Состоит из Автозаводского и Крюковского районов. Расположен на реке Днепр в 112 км от областного центра Полтава. Кременчугская агломерация входит в десятку крупнейших в стране. Кременчуг занимает 31 место среди городов Украины по количеству жителей.";
let AttractionInfo = "Крюковский мост — совмещенный двухъярусный автомобильно-железнодородный разводной мост через реку Днепр в Кременчуге, соединяющий правобережную часть города, Крюков, с левобережной. Через мост проходят две автодороги государственного значения: Борисполь — Днепр — Запорожье и Полтава — Александрия[1]. За сутки по мосту проезжает до 3000 грузовых автомобилей[2]. Железная дорога имеет одну колею, электрифицированную переменным током.";
let Attraction2Info ="Здание Кременчугского отделения Государственного банка Российской империи — одно из немногих сохранившихся дореволюционных зданий города Кременчуг Полтавской области (Украина). Входит в перечень памятников архитектуры города.";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Photos",
        element: <Photos images={[image,image2,image3]}></Photos>
      },
      {
        path: "/AnotherAttraction",
        element: <AnotherAttraction image={image3} AttractionInfo={Attraction2Info}></AnotherAttraction>
      },
      {
        path: "/Attraction",
        element: <Attraction image={image2} AttractionInfo={AttractionInfo}></Attraction>
      },
      {
        path: "/City",
        element: <City image={image} cityInfo={cityInfo}></City>
      }
    ]
  }
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
