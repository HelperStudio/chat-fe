interface IGoogleConfig {
  client_id: string;
  project_id: string;
  auth_uri: string;
  token_uri: string;
  client_secret: string;
  redirect_uris: Array<string>;
  javascript_origins: Array<string>;
}

export interface IAppConfig {
  env: {
    name: string;
  };

  apiServer: {
    url: string;
  };

  google: IGoogleConfig;
}
