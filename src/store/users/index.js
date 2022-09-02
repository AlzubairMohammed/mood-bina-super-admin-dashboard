import axios from "axios";

export default {
    state: {
        users:[],
        session_url: "http://localhost:5000/api/v1/auth/register"
    },
    getters: {
        allUsers: (state)=>{
            return state.users
        }
    },
    actions: {
        async createUser({commit, state} ,users) {
            this.users = Object.fromEntries(users)
            this.users.address = 'kalakla'
            this.users.image = 'a.jpg'
            this.users.country = 'sudan'
            console.log(Object.fromEntries(users));
            const response = await axios.post(state.session_url, this.users)
            commit('createUser', response.data)
        },
        async getUsers({commit, state}) {
            const response = await axios.get(state.session_url);
            commit('setUsers', response.data)
        },
        async deletUser({commit, state} ,id) {
            console.log(id);
            const response = await axios.delete(`${state.session_url}/${id}`)
            commit('deletUserMutation', response.data)
        },
        async updateUser({ commit, state }, payload) {
            const { id, user } = payload;
            console.log(user.userName);
            console.log(user.role);
            await axios.put(`${state.session_url}/${id}`, user);
            commit("editUser");
          } 
    },
    mutations: {
        createUser: (state, users)=>{
            state.users.unshift(users)
        },
        setUsers: (state, users)=>{
            state.users = users
        },
        deletUserMutation: ()=>{
            console.log('user deleted');
        },
        editUser: ()=>{
            console.log('user updated');
        }
    }
}

