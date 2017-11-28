import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('home', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('index.home', {
      url: '?zoom',
      views: {
        overlay: {
          template: '<menu></menu>',
        },
        content: {
          template: '<viewer></viewer>',
        }
      },
    });

    $stateProvider
      .state('index.home.profile', {
        url: '/information',
        views: {
          'overlay@index': {
            template: '<profile></profile>',
          },
        },
        data: {
          'gsapifyRouter.overlay': {
            enter: {
              in: {
                transition: 'fadeUpDelayed',
              }
            }
          }
        },
      });

  })

  .directive('home', homeComponent);

export default homeModule;