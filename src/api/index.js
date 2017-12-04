import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3001/api';

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
    	}
	}
}

export default API;