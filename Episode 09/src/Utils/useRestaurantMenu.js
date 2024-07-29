import { useEffect, useState } from "react";
import { Swiggy_MENU_URL } from "./constant";

const useRestaurantMenu = (resID) => {
  
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_MENU_URL + resID);
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
