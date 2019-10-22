import Vue from 'vue';
import moment from 'moment';
/* 
* 日期格式化
* formatString likes 'YYYY-MM-DD HH:mm:ss'
*/
Vue.filter('DateFormat', function(value, formatString) {
    return moment(value).format(formatString);
});