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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId="+resId+""
    );
    const json = await data.json();
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    setRes(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
  }
  return (
    <div>
      <div>
        <h1>Restaurant id:-{resId}</h1>
        <h2>{res.name}</h2>
        <img src={CDN_URL + res.imageId} alt="" />
        <h2>{res.areaName}</h2>
        <h3>{res.city}</h3>
        <h3>{res.costForTwoMessage}</h3>
        <h3>{res.avgRating} Stars</h3>
        <p>{res.cuisines}</p>
      </div>
      <div >
      <h1>Menu</h1>
      <ul>
        {
          res.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)
        }
      </ul>
          </div>
    </div>
  );
};
export default RestaurantMenu;
