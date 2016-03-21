export default class HomeCtrl {

	/*@ngInject*/
	constructor(UsersService, $log) {
		let self = this;
		this.title = 'Testing home.controller';

		this.UsersService = UsersService;

		this.$log = $log.getInstance('SessionController');
		this.$log.debug('instancdOf()');

		UsersService
			.getAll()
			.then((users) => {
				self.users = [].concat(users);
				self.selected = self.users[0];
			});
	}

	// $onInit() {
	// 	self.UsersService
	// 		.getAll()
	// 		.then((users) => {
	// 			self.users = [].concat(users);
	// 			self.selected = self.users[0];
	// 		});
	// }

}