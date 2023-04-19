import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
const styleCard={
    backgroundColor:"#f0f0f0"
};

const RestaurantCard=(props)=>{

    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,costForTwoString,deliveryTime,avgRating}=resData.data;
    const {user}=useContext(UserContext)

      return(
          <div className="w-56 p-2 m-5 shadow-lg bg-pink-300 hover:outline" style={styleCard}>
              <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="" />
              <h3 className="font-bold text-xl"> {name}</h3>
              <h4> {cuisines.join(", ")}</h4>
              <h4>{costForTwoString}</h4>
              <h4>Delivery Time:- {deliveryTime} mins</h4>
              <h4>{avgRating}stars</h4>
          </div>
      );
  }
  export default RestaurantCard;