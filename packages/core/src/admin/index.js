export class App {
  constructor(options = { verbose_name: "", models: [], path: "" }) {
    this.verbose_name = options.verbose_name;
    this.models = options.models || [];
    this.path = options.path;
  }
  registerModels(models) {
    this.models = models;
  }
}
