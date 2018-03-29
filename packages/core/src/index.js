import { ReactAdmin } from "./admin/react-admin";
import "components/styles/css/base.css";
import { App } from "./admin";
import { User, Group, Todo } from "./App";

const auth = new App({
  verbose_name: "Authentication And Authorization",
  path: "auth",
  models: [User, Group]
});
const todo = new App({ verbose_name: "Todos", path: "todos", models: [Todo] });

const admin = new ReactAdmin({ apps: [auth, todo] });

admin.init(document.getElementById("root"));
