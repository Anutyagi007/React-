import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, setRes] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6628779&lng=77.4648192&restaurantId="+resId+"&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info);
    setRes(json.data.cards[0].card.card.info);
  }
  return (
    <div>
      <div>
        <h1>Restaurant id:-{resId}</h1>
        <h2>{res.name}</h2>
        <img src={CDN_URL + res.cloudinaryImageId} alt="" />
        <h2>{res.areaName}</h2>
        <h3>{res.city}</h3>
        <h3>{res.costForTwoMessage}</h3>
        <h3>{res.avgRating} Stars</h3>
        <p>{res.cuisines}</p>
      </div>
      <h1>Menu</h1>
      <ul>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
        <li>Paneer Masala</li>
      </ul>
    </div>
  );
};
//ccrgpubt2dvjsqvxktfl
export default RestaurantMenu;
