import fetch from 'isomorphic-fetch';

//const baseURL = 'http://localhost:3001/api';
const baseURL = 'https://api-portafolio.herokuapp.com/api';

const API = {
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
    	async delete(id) {
      		const response = await fetch(`${baseURL}/person/${id}`, {
        	method: 'DELETE',
      		});
      		const data = await response.json();
      		return data;
    	},
    	async getSingle(id) {
      		const response = await fetch(`${baseURL}/person/${id}`);
      		const data = await response.json();
      		return data;
    	},
	},
	stack: {
		async getAll(stack){
			const response = await fetch(`${baseURL}/stack/${stack.name}/${stack.skip}/${stack.limit}`);
			const data = await response.json();
			return data;
		},
		async save (item) {
      		const response = await fetch(`${baseURL}/stack`, {
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
      		const response = await fetch(`${baseURL}/stack/${id}`, {
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
    	async delete(id) {
      		const response = await fetch(`${baseURL}/stack/${id}`, {
        	method: 'DELETE',
      		});
      		const data = await response.json();
      		return data;
    	},
    	async getSingle(id) {
      		const response = await fetch(`${baseURL}/stack/${id}`);
      		const data = await response.json();
      		return data;
    	},
	},
  project: {
    async getAll(project){
      const response = await fetch(`${baseURL}/project/${project.name}/${project.skip}/${project.limit}`);
      const data = await response.json();
      return data;
    },
    async save (item) {
          const response = await fetch(`${baseURL}/project`, {
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
          const response = await fetch(`${baseURL}/project/${id}`, {
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
      async delete(id) {
          const response = await fetch(`${baseURL}/project/${id}`, {
          method: 'DELETE',
          });
          const data = await response.json();
          return data;
      },
      async getSingle(id) {
          const response = await fetch(`${baseURL}/project/${id}`);
          const data = await response.json();
          return data;
      },
  },
  time: {
    async getAll(time){
      const response = await fetch(`${baseURL}/time/${time.name}/${time.skip}/${time.limit}`);
      const data = await response.json();
      return data;
    },
    async save (item) {
          const response = await fetch(`${baseURL}/time`, {
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
          const response = await fetch(`${baseURL}/time/${id}`, {
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
      async delete(id) {
          const response = await fetch(`${baseURL}/time/${id}`, {
          method: 'DELETE',
          });
          const data = await response.json();
          return data;
      },
      async getSingle(id) {
          const response = await fetch(`${baseURL}/time/${id}`);
          const data = await response.json();
          return data;
      },
  }

}

export default API;