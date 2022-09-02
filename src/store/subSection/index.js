import axios from "axios";

export default {
    state: {
        subSections:[],
        session_url: "http://localhost:5000/api/v1/subSections"
    },
    getters: {
        allSubSections: (state)=>{
            return state.subSections
        }
    },
    actions: {
        async createSubSection({commit, state} ,subSections) {
            const response = await axios.post(state.session_url, subSections)
            commit('newSubSection', response.data)
        },
        async getSubSections({commit, state}) {
            const response = await axios.get(state.session_url);
            commit('setSubSections', response.data)
        },
        async deletSubSection({commit, state} ,id) {
            console.log(id);
            const response = await axios.delete(`${state.session_url}/${id}`)
            commit('deletSubSectionMutation', response.data)
        }
    },
    mutations: {
        newSubSection: (state, subSections)=>{
            state.subSections.unshift(subSections)
        },
        setSubSections: (state, subSections)=>{
            state.subSections = subSections
        },
        deletSubSectionMutation: ()=>{
            console.log('sub section deleted');
        }
    }
}

