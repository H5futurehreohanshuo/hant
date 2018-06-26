module.exports = {
  plugins: {
    // https://github.com/TrySound/postcss-easy-import
    'postcss-easy-import': {},
    // https://github.com/jonathantneal/precss
    'precss': {},
    // https://github.com/postcss/postcss-calc
    'postcss-calc': {},
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    }
  }
};
