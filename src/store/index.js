import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCity: "Kyiv",
    citys: []
  },
  mutations: {
    SET_CITY: (state, payload) => {
      state.citys.push({ ...payload });
    },
    SET_CURRENT_CITY: (state, payload) => {
      state.currentCity = payload;
    }
  },
  actions: {
    SET_CITY: (context, info) => {
      info.citys.map(async city => {
        let { data } = await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${info.key}`
        );
        context.commit("SET_CITY", data);
      });
    },
    SET_CURRENT_CITY: (context, name) => {
      context.commit("SET_CURRENT_CITY", name);
    }
  },
  getters: {
    GET_CITYS: state => {
      return state.citys;
    },
    GET_CITY: state => name => {
      return state.citys.find(city => city.name == name);
    },
    GET_CURRENT_CITY: state => {
      return state.currentCity;
    }
  }
});
