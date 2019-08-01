
const env = process.env.NODE_ENV || 'development';

const apiEnvironment = {
  development: {
    api: 'http://192.168.1.89:5000/api/v1'
  },
  production: {
    api: 'http://192.168.1.89:5000/api/v1'
  }
};

module.exports = apiEnvironment[env];
