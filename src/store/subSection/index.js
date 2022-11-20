import axios from "axios";

export default {
    state: {
        subSections:[],
        session_url: "https://mod-bina.com/api/v1/subSections",
        config: {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user_token"),
            },
          },
    },
    getters: {
        allSubSections: (state)=>{
            return state.subSections
        }
    },
    actions: {
        async createSubSection({commit, state} ,subSections) {
            const response = await axios.post(state.session_url, subSections, state.config)
            commit('newSubSection', response.data)
        },
        async getSubSections({commit, state}) {
            const response = await axios.get(state.session_url, state.config);
            commit('setSubSections', response.data)
        },
        async updateSubSections({ commit, state }, payload) {
            const { id, category } = payload;
            await axios.put(`${state.session_url}/${id}`, category, state.config);
            commit("editSubSections");
          },
        async deletSubSection({commit, state} ,id) {
            console.log(id);
            const response = await axios.delete(`${state.session_url}/${id}`, state.config)
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
        editSubSections: ()=>{

        },
        deletSubSectionMutation: ()=>{
            console.log('sub section deleted');
        }
    }
}

