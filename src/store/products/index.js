import axios from "axios";

const state = {
  products: [],
  session_url: "www.mod-bina.com/api/v1/products",
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allProducts: (state) => {
    return state.products;
  },
};

const actions = {
  async fetchProducts({ commit, state }) {
    const response = await axios.get(state.session_url);
    commit("setProducts", response.data);
  },
  async addProduct({ commit, state }, product) {
    console.log('hi');
    console.log(product);
    const response = await axios.post(state.session_url, product);
    commit("newProduct", response.data);
  },
  async updateProduct({ commit, state }, payload) {
    const { id, product } = payload;
    await axios.put(`${state.session_url}/${id}`, product);
    commit("editProduct");
  },
  async deleteProduct({ commit, state }, id) {
    await axios.delete(`${state.session_url}/${id}`);
    commit("removeProduct");
  },
};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  newProduct: (state, product) => {
    state.products.unshift(product);
  },
  removeProduct: (state) => {
    console.log(state.products);
  },
  editProduct: (state) => {
    console.log(state.products);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
