import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    brand_name: "Your Brand Here"
}

const getters = {
    get_brand: state => state.brand_name
}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state
})