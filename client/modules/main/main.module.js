import angular from 'angular';
import 'angular-ui-router';

import MainConfig from './main.config';
import MainCtrl from './main.controller';

const main = angular
	.module('Main', ['ui.router'])
	.config(MainConfig)
	.controller('MainCtrl', MainCtrl);

export default main;

angular.element(document).ready(function () {
	return angular.bootstrap(document, [main.name]);
});
