import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [mylist,setMylist]=useState(resList);
  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newList=mylist.filter((res)=> res.data.avgRating >= 4)
            setMylist(newList)
          }}
          
        >
          Top Rated Restaurant's
        </button>
      </div>
      <div className="res-container">
        {mylist.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
