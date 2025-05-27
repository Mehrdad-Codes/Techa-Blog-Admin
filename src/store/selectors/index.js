import { getCookie } from "../../helpers";

export const useAuth = () => {
    const user = getCookie("jwt");
    return user ? true : false;
};