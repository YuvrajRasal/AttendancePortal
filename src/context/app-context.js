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

  const [batch, setBatch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [note, setNote] = useState("");
  const [room, setRoom] = useState("");
  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [lecCreated, setLecCreated] = useState("");

  const [MyData, SetMyData] = useState([]);
  const [MyDataNew, SetMyDataNew] = useState([]);
  const [MyDataProfile, SetMyDataProfile] = useState([]);
  const [BatchData, SetBatchData] = useState([]);

  const [openCreate, setOpenCreate] = useState(false);
  const [studentId, setStudentId] = useState([]);

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

        batch,
        setBatch,
        from,
        setFrom,
        to,
        setTo,
        note,
        setNote,
        room,
        setRoom,
        teacher,
        setTeacher,
        subject,
        setSubject,
        date,
        setDate,
        lecCreated,
        setLecCreated,

        MyData,
        SetMyData,
        MyDataNew,
        SetMyDataNew,
        BatchData,
        SetBatchData,
        MyDataProfile,
        SetMyDataProfile,

        openCreate,
        setOpenCreate,
        studentId,
        setStudentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
