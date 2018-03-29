import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/Button";
import App from "../src/App";
import "../src/styles/css/base.css";

storiesOf("Django Admin React", module)
  .add("App", () => <App />)
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
