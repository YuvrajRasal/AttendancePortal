import { createContext, useContext, useState } from "react";
import { data as initialData } from "../Data/DummyData";

const defaultProviderValues = {};

const AppContext = createContext(defaultProviderValues);

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [userToken, setUserToken] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [filterData, setFilterData] = useState(data);
  const [all, setAll] = useState("");

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        search,
        setSearch,
        data,
        setData,
        selectedLecture,
        setSelectedLecture,
        filterData,
        setFilterData,
        all,
        setAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
