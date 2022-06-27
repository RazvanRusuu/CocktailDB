import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { api_url as url } from "./utilis";

const AppContext = React.createContext({
  loading: null,
  cocktails: [],
  serchTerm: "",
  setSearchTerm: () => {},
});

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const { data } = response;
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
          } = item;

          return {
            id,
            name,
            image,
            info,
            glass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
