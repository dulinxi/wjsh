import Vue from 'vue';

Vue.directive(
    'InfiniteScroll', {
    bind: function (el, binding, vnode) {
        let loading = false;
        const scrollFunc = () => {
            let bottomOfWindow = el.offsetHeight - el.scrollTop - window.innerHeight <= 200;
            if (bottomOfWindow && loading == false) {
                loading = true;
                const stop = binding.value();
                if (stop) {
                    console.log("当前页面的数据已经大于或者等于数据总量,不会执行更新任何操作");
                    return false;
                    // el.removeEventListener('scroll', scrollFunc);
                } else {
                    loading = false;
                }
            }
        };
        el.addEventListener('scroll', scrollFunc);
    }
})