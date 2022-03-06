module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e24136f19b2cd7e5f977e6d9c45e2e47'),
  },
});
