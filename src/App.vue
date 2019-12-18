<template>
  <div class="wrapper">
    <ValidationObserver
      ref="testForm"
      v-slot="{ invalid, valid, passes, errors, validate }"
    >
      <form class="form">
        <FormRadio
          v-model="formItems.parcelSize"
          v-bind="formConfig.parcelSize"
        />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import FormRadio from "./components/forms/FormRadio";

export default {
  name: "App",
  components: {
    FormRadio
  },
  data() {
    return {
      formItems: {
        parcelSize: null
      },
      formConfig: {
        parcelSize: {
          name: "parcelSize",
          label: "Parcel size",
          rules: "required",
          preSelected: "2",
          options: [
            {
              value: "1",
              description: "Large"
            },
            {
              value: "2",
              description: "Medium"
            },
            {
              value: "3",
              description: "Small"
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss">
// required to pre-import main.scss
.wrapper {
  margin: 0 auto;
  background: white;
  padding: space(8);
  max-width: 900px;
}
</style>
