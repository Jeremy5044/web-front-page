function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as home'
    })
    .state('root.about', {
      url: '/about',
      templateUrl:'templates/about.tpl.html',
      controller: 'AboutController as about'
      })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html',
      controller: 'ContactController as contact'
    });
    // .state('root.add', {
    //   url: '/add',
    //   templateUrl: 'templates/add.tpl.html',
    //   controller: 'AddController as add'
    // })
    // .state('root.single', {
    //   url: '/gif/:id',
    //   templateUrl: 'templates/single.tpl.html',
    //   controller: 'SingleController as single'
    // });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
