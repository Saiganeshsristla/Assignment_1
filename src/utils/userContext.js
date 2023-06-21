import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "saiganesh",
        email: "saiganesh@gmail.com"
    }
})

export default UserContext;