module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dblm329in'),
        api_key: env('317811358877128'),
        api_secret: env('yRo5m0wCQTAyT7gKVn4BVy-KNA0'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });