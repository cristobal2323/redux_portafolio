const initialState = {
	savePerson:{
		error: null,
		loading: false
	},
	listPerson:{
		people: [],
		error: null,
		loading: false
	},
	updatePerson:{
		person: false,
		loading: false,
  		error: null
	},
	saveStack:{
		error: null,
		loading: false
	},
	listStack:{
		stacks: [],
		error: null,
		loading: false
	},
	updateStack:{
		stack: false,
		loading: false,
  		error: null
	},
};

export default initialState;