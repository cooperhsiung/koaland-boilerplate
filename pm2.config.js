module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'dev',
      },
      env_test: {
        NODE_ENV: 'test',
      },
      env_prod: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
