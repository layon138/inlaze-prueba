module.exports = {
  '^.+/entries': {
    target: 'http://localhost:3000',
    secure: false,
    changeOrigin: true,
    rewrite: () => '/mocks/entries.mock.json'
  }
};
