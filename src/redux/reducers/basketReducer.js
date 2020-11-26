import {ADDTOBASKET, REMOVEFROMBASKET, SETUSER} from "../types/rootTypes";
const basketReducer = (
	state = {user: null, counter: 0, products: [], total: 0},
	action
) => {
	switch (action.type) {
		case ADDTOBASKET:
			state = {
				...state,
				counter: state.counter + 1,
				total: state.total + action.data.price,
				products: [...state.products, action.data],
			};
			return state;
		case REMOVEFROMBASKET:
			const product = state.products.filter(
				(product) => product.id === action.data
			);
			console.log(product);
			const newProducts = state.products.filter(
				(product) => product.id !== action.data
			);
			const total = state.total - product[0].price;
			state = {
				...state,
				total: total.toFixed(2),
				counter: state.counter - 1,
				products: newProducts,
			};
			return state;
		case SETUSER:
			state = {
				...state,
				user: action.data,
			};
			return state;
		default:
			return state;
	}
};

export default basketReducer;
