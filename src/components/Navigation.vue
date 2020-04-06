<template>
  <nav class="w--nav__citys">
    <ul>
      <li v-for="item in citys" :key="item">
        <button @click="toggleCity(item)">{{ item }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    citys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["GET_CURRENT_CITY"])
  },
  methods: {
    toggleCity(name) {
      this.$store.dispatch("SET_CURRENT_CITY", name);
    }
  }
};
</script>

<style lang="scss">
.w--nav__citys {
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 33.333%;
      position: relative;
      height: 60px;
      border-bottom: 1px solid #fff;
      button {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: transparent;
        padding: 20px;
        font-size: 16px;
        color: #fff;
        line-height: 1;
        border-right: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        border-bottom: 0;
        cursor: pointer;
      }
    }
    li:last-child {
      button {
        border-right: 0;
      }
    }
  }
}
</style>
