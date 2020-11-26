import {REMOVEFROMBASKET, SETUSER, ADDTOBASKET} from "../types/rootTypes";

export const addToBasket = (data) => {
	return {type: ADDTOBASKET, data};
};
export const removeFromBasket = (id) => {
	return {type: REMOVEFROMBASKET, data: id};
};
export const setUser = (user) => {
	return {type: SETUSER, data: user};
};
