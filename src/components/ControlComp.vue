<template>
  <div class="form-control">
    <label :for="control">{{ settings.label }}</label>
    <input
      :id="control"
      :placeholder="settings.placeholder || ''"
      :type="settings.type"
      :value="value"
      :class="{ error: errorValue }"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
    />
    <transition name="slide">
      <div v-if="errorValue" class="error-message">{{ errorMessage }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ControlComp",
  props: {
    settings: Object,
    control: String,
    errorValue: Boolean,
    errorMessage: String,
  },
  data() {
    return {
      value: "",
    };
  },
  created() {
    if ("initialValue" in this.settings) {
      this.value = this.settings.initialValue;
    }
  },
  methods: {
    onInput(e) {
      this.value = e.target.value;
    },
    onChange() {
      this.$emit("control-value-changed", {
        control: this.control,
        value: this.value,
      });
    },
    onBlur() {
      this.$emit("control-value-blured", this.control);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;
}

.form-control input {
  padding: 5px 20px;
  font-size: 18px;
  border-radius: 5px;
}

.form-control label {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}

.error {
  border: 2px solid red;
}

.error-message {
  font-size: 16px;
  color: red;
  position: absolute;
  top: 110%;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
  transform-origin: left;
}
</style>
