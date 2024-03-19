import { Backend } from "kuzzle";
import { PrometheusPlugin } from "kuzzle-plugin-prometheus";

export type ChatTestApplicationConfig = {
  someValue: string;

  another: {
    value: number;
  };
};

export class ChatTestApplication extends Backend {
  public configuration: ChatTestApplicationConfig;
  private prometheusPlugin = new PrometheusPlugin();

  get appConfig() {
    return this.config.content.application as ChatTestApplicationConfig;
  }

  constructor(config?: ChatTestApplicationConfig) {
    super("chat-test-application");

    if (config) {
      this.configuration = config;
    } else {
      this.configuration = this.config.content
        .application as ChatTestApplicationConfig;
    }

    this.plugin.use(this.prometheusPlugin);
  }

  async start() {
    await super.start();

    this.log.info("Application started");
  }
}
