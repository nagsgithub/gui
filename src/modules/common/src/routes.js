define(['ojs/ojcore', 'knockout'],function(oj,ko){
   var routes={
               'analytics':{
                    label:'Analytics',
               	  value:{
               	  	name:'analytics/src/viewModels/analytics',
               	  	viewName:'analytics/src/views/analytics',
               	  	icon:'demo-info-icon-24'
               	  },
               	  isDefault:true
               },
               'siteDesigner':{
                    label:'Site Designer',
               	  value:{
               	  	name:'siteDesigner/src/viewModels/designer',
               	  	viewName:'siteDesigner/src/views/designer',
               	  	icon:'demo-fire-icon-24'
               	  }
               }

   };
   return routes;
});