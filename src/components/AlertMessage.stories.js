/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import AlertMessage from "@/components/AlertMessage.vue";

storiesOf("AlertMessage", module).add("Variations", () => ({
  components: { AlertMessage },
  template: `
      <div>
        <AlertMessage variant="default">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage variant="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage variant="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage variant="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage variant="error">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
      </div>
      `
}));
