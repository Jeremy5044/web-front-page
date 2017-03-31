import angular from 'angular';

import $ from "jquery";

import { routerConfig } from './routes';
import { HomeController } from './controllers/home';
import { ContactController } from './controllers/contact';
import { LayoutController } from './controllers/layout';
import { AboutController } from './controllers/about';
import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('ContactController', ContactController)
  .controller('AboutController', AboutController)
//  .constant('SERVER', SERVER);
