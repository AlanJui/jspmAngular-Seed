import {ExternalLogger} from '../../components/utils/log-decorator';
let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug(`Configuraing 'main' module`);

import MainCtrl from './main.controller';

let module = angular.module('Main', ['ui.router'])

	.controller('MainCtrl', MainCtrl)

	.config(function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	});

export default module;
