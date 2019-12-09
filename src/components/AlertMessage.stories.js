/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import AlertMessage from "@/components/AlertMessage.vue";

storiesOf("AlertMessage", module).add("Variations", () => ({
  components: { AlertMessage },
  template: `
      <div>
        <AlertMessage type="default">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage type="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage type="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage type="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage type="error">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
      </div>
      `
}));
