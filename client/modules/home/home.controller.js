export default class HomeCtrl {

	/*@ngInject*/
	constructor(UsersService, $log) {
		let self = this;
		this.title = '會員清單';

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