'use strict';

angular.module('ticketvizApp.auth', [
  'ticketvizApp.constants',
  'ticketvizApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
