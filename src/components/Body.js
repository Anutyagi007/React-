import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRes, setAllRes] = useState([]);
  const [filteredmylist, setFilteredMylist] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6628779&lng=77.4648192&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredMylist(json?.data?.cards[2]?.data?.data?.cards);
    setAllRes(json?.data?.cards[2]?.data?.data?.cards);
  }

  //   if(filteredmylist?.length===0) return <h1>No Restaurant Matches Your Search</h1>
  return allRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = allRes.filter((res) =>
              res?.data?.name
                ?.toLowerCase()
                ?.includes(searchInput.toLowerCase())
            );
            setFilteredMylist(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newList = allRes.filter((res) => res.data.avgRating >= 4);
            setFilteredMylist(newList);
          }}
        >
          Top Rated Restaurant's
        </button>
      </div>
      <div className="res-container">
        {filteredmylist.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
