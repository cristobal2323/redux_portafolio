const initialState = {
	productList:{
		products: [],
		error: null,
		loading: false
	},
	activeProduct:{
		product: null,
		error: null,
		loading: false
	},
	cart:{
		items: [],
		total: 0
	},
	savePerson:{
		error: null,
		loading: false
	},
	listPerson:{
		people: [],
		error: null,
		loading: false
	},
};

export default initialState;