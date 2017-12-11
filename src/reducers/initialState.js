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
	saveTime:{
		error: null,
		loading: false
	},
	listTime:{
		times: [],
		error: null,
		loading: false
	},
	updateTime:{
		time: false,
		loading: false,
  		error: null
	},
	home:{
		person: {},
		errorPerson: null,
		loadingPerson: false,
		stacks: [],
		errorStack: null,
		loadingStack: false,
		times: [],
		errorTime: null,
		loadingTime: false,
		projects: [],
		errorProject: null,
		loadingProject: false
	},
};

export default initialState;