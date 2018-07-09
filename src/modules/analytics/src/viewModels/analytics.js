define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
 	function AnalyticsVM(){}
    var self=this;
    self.bundle = function(key, bundleParams) {
                return oj.Translations.getTranslatedString(key, bundleParams);
    };
     return AnalyticsVM;
});