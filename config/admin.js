module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ac69738e4aec482ace44769d22c9178'),
  },
});
