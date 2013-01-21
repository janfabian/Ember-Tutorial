App = Em.Application.create();

App.ApplicationView = Em.View.extend({
  templateName: "application", 
});

App.ApplicationController = Em.Controller.extend({
});

App.Router = Em.Router.extend({
  root: Em.Route.extend({
    index: Em.Route.extend({
      route: "/",
    }),
  }), 
});

App.initialize();