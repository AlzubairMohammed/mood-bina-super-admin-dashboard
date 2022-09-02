import axios from "axios";

const state = {
  categories: [],
  session_url: "http://localhost:5000/api/v1/sections",
};

const getters = {
  allCategories: (state) => {
    return state.categories;
  },
};

const actions = {
  async fetchCategories({ commit, state }) {
    const response = await axios.get(state.session_url);
    commit("setCategories", response.data);
  },
  async addCategory({ commit, state }, category) {
    const response = await axios.post(state.session_url, category);
    commit("newCategory", response.data);
  },
  async updateCategory({ commit, state }, payload) {
    const { id, category } = payload;
    await axios.put(`${state.session_url}/${id}`, category);
    commit("editCategory");
  },
  async deleteCategory({ commit, state }, id) {
    await axios.delete(`${state.session_url}/${id}`);
    commit("removeCategory");
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  newCategory: (state, category) => {
    state.categories.unshift(category);
  },
  removeCategory: (state) => {
    console.log(state.categories);
  },
  editCategory: (state) => {
    console.log(state.categories);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
