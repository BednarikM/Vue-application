<template>
  <li class="list">
    <span class="keys">{{ this.listKey }} :</span>
    <span class="values">{{ this.listValue }}</span>
  </li>
</template>

<script>
export default {
  name: "ListComp",
  props: {
    listKey: String,
    listValue: String,
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.list {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 10px 0;
  font-size: 18px;
}

.values {
  font-weight: bold;
}
</style>
