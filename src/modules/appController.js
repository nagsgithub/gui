/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define([ 'ojs/ojcore',
         'knockout',
         'common/src/routes' ,
         'ojs/ojknockout',
         'ojs/ojrouter',
         'ojs/ojknockout',
         'ojs/ojarraytabledatasource',
         'ojs/ojoffcanvas'],
  function(oj, ko,routes) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("App Name");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");
      // ojModule template and viewModel
      oj.ModuleBinding.defaults.modelPath = '';
      oj.ModuleBinding.defaults.viewPath = 'text!';
      oj.ModuleBinding.defaults.viewSuffix = '.tmpl.html';
      // Router setup
      self.router = oj.Router.rootInstance;

      self.router.configure(routes);

      self.content=ko.observable(self.router.getState(self.router.defaultStateId).value);
      
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
      
      var baseUrl = window.location.pathname.split('?')[0];
      
      if (baseUrl.charAt(baseUrl.length - 1) === '/') {
            baseUrl = baseUrl.substring(0, baseUrl.length - 1);
      }

      oj.Router.defaults.baseUrl = baseUrl;
      self.navData=[];
      for(var x=0;x<self.router.states.length;x++){
          var routerState = self.router.states[x];
          if (routerState.value.scope !== false) {
                        var name = routerState.label;
                        var id = routerState.id;
                        var iconValue = routerState.value.icon;
                        var icon = 'oj-navigationlist-item-icon demo-icon-font-24 ' + iconValue;   
                        self.navData[self.navData.length] = 
                                { 'name':name, 'id': id, 'iconClass': icon};
          }
      }
      self.navDataSource= new oj.ArrayTableDataSource(self.navData, {idAttribute: 'id'});
      self.router.currentValue.subscribe(function () {
              self.content(self.router.currentValue());
      });
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      }
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
     }

     return new ControllerViewModel();
  }
);
