<template>
  <button @click="onClick" :class="[colorClass, 'btn']">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    text: String,
    primaryColor: Boolean,
  },
  methods: {
    onClick(e) {
      this.$emit("btn-click", e);
    },
  },
  computed: {
    colorClass() {
      return this.primaryColor ? ["primary-color"] : ["secondary-color"];
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"

.btn {
  color: $white-color
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: inherit;
  transition: all 0.3s ease-in-out;
}

.primary-color {
  background:$primary-color
}

.secondary-color {
background: $secondary-color
}

.btn.primary-color:hover{
  background: darken($primary-color, 15);
  color: white;
}


.btn.secondary-color:hover{
  background: darken($secondary-color, 15);
  color: white;
}
</style>
