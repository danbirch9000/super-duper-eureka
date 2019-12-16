/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { AlertMessage } from "@/components/AlertMessage";

storiesOf("AlertMessage", module).add("Variations", () => ({
  components: { AlertMessage },
  template: `
      <div>
        <AlertMessage theme="default">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage theme="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage theme="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage theme="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
        <AlertMessage theme="error">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
      </div>
      `
}));
