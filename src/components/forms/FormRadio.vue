<template>
  <ValidationProvider
    ref="formCheckboxValidationProvider"
    v-slot="{ errors, classes, invalid, valid }"
    :vid="name"
    :name="label"
    :rules="rules"
  >
    <div class="element-wrapper">
      <div
        :class="{
          'input-wrapper--valid':
            (valid && classes.dirty) || (valid && classes.validated),
          'input-wrapper--invalid':
            (invalid && classes.dirty) || (invalid && classes.validated),
          'input-wrapper--just-focused': isFocused
        }"
        class="input-wrapper"
      >
        <div class="input-wrapper">
          <div class="radio-label">
            {{ label }}<span v-if="classes.required"> *</span>
          </div>
          <div
            v-for="option in options"
            :key="option.value"
            class="radio-wrapper"
            :class="{
              'is-checked': radioGroup === option.value
            }"
            tabindex="0"
            @keyup.space="selectCheckbox(option.value)"
          >
            <span class="radio-circle" />
            <input
              :id="`radio_${option.value}`"
              v-model="radioGroup"
              :value="option.value"
              :name="name"
              type="radio"
              tabindex="-1"
              @blur="isFocused = false"
              @focus="isFocused = true"
            />
            <label :for="`radio_${option.value}`">{{
              option.description
            }}</label>
          </div>
        </div>
        <div v-if="classes.dirty || classes.validated" class="validation-info">
          <span>{{ errors[0] }}</span>
        </div>
      </div>
    </div>
  </ValidationProvider>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    rules: {
      type: String,
      required: true
    },
    preSelected: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [Object, Array],
      default: null
    }
  },
  data() {
    return {
      isFocused: null,
      radioGroup: []
    };
  },
  watch: {
    preSelected() {
      this.preSelectItem();
    },
    radioGroup() {
      this.emitInput();
    }
  },
  mounted() {
    this.preSelectItem();
  },
  methods: {
    emitInput() {
      this.$emit("input", {
        type: "radio",
        label: this.label,
        description: this.options.find(o => o.value === this.radioGroup)
          .description,
        value: this.radioGroup
      });
      this.$nextTick(() => {
        this.$refs.formCheckboxValidationProvider.validate();
      });
    },
    preSelectItem() {
      if (this.preSelected) {
        this.radioGroup = this.preSelected;
      }
    },
    selectCheckbox(val) {
      this.radioGroup = val;
    }
  }
};
</script>
<style scoped lang="scss">
.input-wrapper {
  position: relative;
}
.radio-wrapper {
  position: relative;
  padding: space(2);
  &:focus {
    outline: none;
  }
}
input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.radio-label {
  color: $color-mono-8;
  font-size: 14px;
  position: relative;
  .input-wrapper--valid & {
    color: $color-theme-success;
  }
  .input-wrapper--invalid & {
    color: $color-theme-error;
  }
  .input-wrapper--just-focused & {
    color: $color-theme-secondary;
  }
}
.radio-circle {
  display: none;
  fill: $color-theme-success;
  position: absolute;
  left: 13px;
  top: 11px;
  z-index: 2;
  pointer-events: none;
  cursor: pointer;
  background-color: $color-theme-primary;
  width: 14px;
  height: 14px;
  border-radius: 100%;

  .is-checked & {
    display: block;
  }
}
label {
  font-size: 14px;
  padding-left: 30px;
  cursor: pointer;
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: 8px;
    top: 6px;
    pointer-events: none;
    border: 2px solid $color-mono-6;
    border-radius: 100%;
    background-color: white;
    :focus & {
      border-color: $color-theme-secondary;
    }
  }
}
.validation-info {
  span {
    font-size: 14px;
    padding-left: space(2);
  }
  .input-wrapper--valid & {
    color: $color-theme-success;
  }
  .input-wrapper--invalid & {
    color: $color-theme-error;
  }
}
</style>
