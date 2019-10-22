import Vue from 'vue';

// 引入components下的所有.vue文件
const components = require.context('@/components', false, /[A-Z]\w+.(vue)$/);

components.keys().forEach((fileName) => {
    const componentConfig = components(fileName);
    const componentName = fileName.split('/').pop().split('.')[0];
    Vue.component(componentName, componentConfig.default || componentConfig);

});