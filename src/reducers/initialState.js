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
	saveProject:{
		error: null,
		loading: false
	},
	listProject:{
		projects: [],
		error: null,
		loading: false
	},
	updateProject:{
		project: false,
		loading: false,
  		error: null
	},
};

export default initialState;