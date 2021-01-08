import Vue from 'vue';
import Axios from 'axios';
import { Service } from 'vandoras';

const $http = Axios.create({
    baseURL: 'http://127.0.0.1:3000'
})

Vue.prototype.$http = $http;
Service.prototype.http = $http;
