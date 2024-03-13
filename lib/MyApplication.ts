import { Backend } from "kuzzle";
import { PrometheusPlugin } from "kuzzle-plugin-prometheus";

export type MyApplicationConfig = {
  someValue: string;

  another: {
    value: number;
  };
};

export class MyApplication extends Backend {
  public configuration: MyApplicationConfig;
  private prometheusPlugin = new PrometheusPlugin();

  get appConfig() {
    return this.config.content.application as MyApplicationConfig;
  }

  constructor(config?: MyApplicationConfig) {
    super("my-application");

    if (config) {
      this.configuration = config;
    } else {
      this.configuration = this.config.content
        .application as MyApplicationConfig;
    }

    this.plugin.use(this.prometheusPlugin);
  }

  async start() {
    await super.start();

    this.log.info("Application started");
  }
}
