import Arrow from './src/index';

/* istanbul ignore next */
Arrow.install = function (Vue) {
  Vue.component(Arrow.name, Arrow);
};

export default Arrow;

