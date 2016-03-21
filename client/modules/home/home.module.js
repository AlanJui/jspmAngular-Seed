import {ExternalLogger} from '../../components/utils/log-decorator';
let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug(`Configuraing 'home' module`);

import HomeCtrl from './home.controller';
import UsersService from '../../components/users/users.service';

let module = angular.module('Home', ['ui.router'])

	.service('UsersService', UsersService)

	.controller('HomeCtrl', HomeCtrl)

	.config(function ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'modules/home/home.tpl.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
	});

export default module;

