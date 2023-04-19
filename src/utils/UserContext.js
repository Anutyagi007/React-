import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "User",
    email: "dummy@gmail.com",
  },
});
export default UserContext;
// we import createContext from react and give default value to createContext
// then for accessing it we can use a useContext hook as pass our UserContext in it