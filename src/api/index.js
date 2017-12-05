import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3001/api';
//const baseURL = 'https://api-portafolio.herokuapp.com/api';

const API = {
	products: {
		async getAll(){
			const response = await fetch(`${baseURL}/products`);
			const data = await response.json();
			return data;
		},
		async getSingle(id){
			const response = await fetch(`${baseURL}/products/${id}`);
			const data = await response.json();
			return data;
		},
		async save (item) {
      		const response = await fetch(`${baseURL}/products`, {
	        method: 'POST',
	        headers: new Headers({
	        	'Content-Type': 'application/json',
	        	Accept: 'application/json'
	        }),
	        body: JSON.stringify(item)
	      	});
		    const data = await response.json();
		    return data;
    	}
	},
	person: {
		async getAll(people){
			const response = await fetch(`${baseURL}/person/${people.name}/${people.last_name}/${people.mail}/${people.skip}/${people.limit}`);
			const data = await response.json();
			return data;
		},
		async save (item) {
      		const response = await fetch(`${baseURL}/person`, {
	        method: 'POST',
	        headers: new Headers({
	        	'Content-Type': 'application/json',
	        	Accept: 'application/json',
	        }),
	        body: JSON.stringify(item)
	      	});
		    const data = await response.json();
		    return data;
    	},
    	async update(item, id) {
    		console.log(item, id)
      		const response = await fetch(`${baseURL}/person/${id}`, {
        	method: 'PUT',
        	headers: new Headers({
          		'Content-Type': 'application/json',
          		Accept: 'application/json',
        	}),
        	body: JSON.stringify(item),
      		});
      		const data = await response.json();
      		return data;
    	},
    	async getSingle(id) {
      		const response = await fetch(`${baseURL}/person/${id}`);
      		const data = await response.json();
      		return data;
    	},
	}
}

export default API;