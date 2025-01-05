export type EnvType = {
  WEBPACK_SERVE: boolean;
  development?: boolean;
  production?: boolean;
};

export type argv = {
  env: EnvType;
  mode: 'development' | 'production' | 'none';
  config: string[];
};
