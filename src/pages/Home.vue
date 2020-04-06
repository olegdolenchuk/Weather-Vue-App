<template>
  <div class="wrapper">
    <Navigation :citys="citys" />
    <div class="w--data" v-if="GET_CITY(GET_CURRENT_CITY)">
      <div class="b--item">
        <span>City</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).name }}</strong>
      </div>
      <div class="b--item">
        <span>Temperature</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).main.temp }} °C</strong>
      </div>
      <div class="b--item">
        <span>Atmospheric pressure</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).main.pressure }} hPa</strong>
      </div>
      <div class="b--item">
        <span>Humidity</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).main.humidity }} %</strong>
      </div>
      <div class="b--item">
        <span>Wind speed</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).wind.speed }} meter/sec</strong>
      </div>
      <div class="b--item" v-if="GET_CITY(GET_CURRENT_CITY).wind.deg">
        <span>Wind direction</span>
        <strong>{{ GET_CITY(GET_CURRENT_CITY).wind.deg }} °</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      citys: ["Kyiv", "London", "New York"]
    };
  },
  computed: {
    ...mapGetters(["GET_CITYS", "GET_CITY", "GET_CURRENT_CITY"])
  },
  mounted() {
    const info = {
      citys: this.citys,
      key: "c2dcf8ffb5cdc3f8977bfd2ae7ea4738"
    };
    this.$store.dispatch("SET_CITY", info);
  }
};
</script>

<style lang="scss">
.wrapper {
  border: 1px solid #fff;
}
.w--data {
  .b--item {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
  }
  .b--item:last-child {
    border-bottom: 0;
  }
}
</style>
