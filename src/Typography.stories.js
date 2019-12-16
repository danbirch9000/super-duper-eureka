/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

storiesOf("Typography", module).add("Variations", () => ({
  template: `
    <div>
      <h1>Headline one</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        molestias omnis officiis dolores consequuntur, voluptatum numquam
        nobis sint consectetur molestiae soluta pariatur at mollitia ullam
        delectus vel asperiores commodi ad!
      </p>
      <h2>Headline two</h2>
      <p class="p-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        molestias omnis officiis dolores consequuntur, voluptatum numquam
        nobis sint consectetur molestiae soluta pariatur at mollitia ullam
        delectus vel asperiores commodi ad!
      </p>
      <h3>Headline three</h3>
      <p class="p-sm">
        Lorem ipsum dolor <a href="#">some link</a> sit amet consectetur
        adipisicing elit. Error molestias omnis officiis dolores consequuntur,
        voluptatum numquam nobis sint consectetur molestiae soluta pariatur at
        mollitia ullam delectus vel asperiores commodi ad!
      </p>
      <h4>Headline four</h4>
      <p class="p-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        molestias omnis officiis dolores consequuntur, voluptatum numquam
        nobis sint consectetur molestiae soluta pariatur at mollitia ullam
        delectus vel asperiores commodi ad!
      </p>
      <ul>
        <li>Some list items</li>
        <li>Some list items</li>
        <li>Some list items</li>
        <li>Some list items</li>
      </ul>
      <h5>Headline five</h5>
    </div>
    `
}));
