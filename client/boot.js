// Load the Angular Material CSS associated with ngMaterial
// then load the app.css to provide overrides, etc.

import 'assets/normalize.css!';
import 'assets/app.css!';

// Load Angular libraries

import angular from 'angular';
import 'angular-ui-router';

// import material from 'angular-material';

// Load custom application modules

import home from 'modules/home/home.module';
import main from 'modules/main/main.module';

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'components/utils/log-decorator';


/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
	.element( document )
	.ready( function() {

		let appName = 'app';
		let body = document.getElementsByTagName("body")[0];

		let $log = new ExternalLogger();
		$log = $log.getInstance( "BOOTSTRAP" );
		$log.debug( "Initializing '{0}'", [ appName ] );

		let app  = angular
			.module( appName, [ 'ui.router', main.name, home.name ] )
			.config( ['$provide', LogDecorator] );

		angular.bootstrap( body, [ app.name ], { strictDi: false });

	});
