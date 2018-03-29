export type ModelType = {
    name: string,
    displayName: string,
}
export type AppType = {
  verbose_name: string,
  path: string,
  models: Array<ModelType>
};
type Option = {
    title: string,
    apps: Array<AppType>
}
class Admin {
  constructor(options:Option = { title: "React Administration", apps: [] }) {
    this.title = options.title || "React Administration";
    this.apps = options.apps || [];
  }
  registerApps(apps: Array<AppType>) {
    this.apps = apps;
  }
}

export default Admin;
