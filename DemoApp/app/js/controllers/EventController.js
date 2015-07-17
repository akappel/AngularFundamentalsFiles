'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {

    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularLogo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'Blahdy blah blah',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'Bobbbetttt Smith',
          duration: '2 hr',
          level: 'Beginner',
          abstract: 'Blahdy blah blah',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Bob Smithy',
          duration: '3 hr',
          level: 'Intermidiate',
          abstract: 'Blahdy blah blah',
          upVoteCount: 0
        }
      ]

    }

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
