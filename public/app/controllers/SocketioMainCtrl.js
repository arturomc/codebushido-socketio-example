angular.module('Socketio', [])

	.controller('MainCtrl', function($scope){
        $scope.people = {
            family:[	
                {fname:"eduardo", 			lname:"mosqueda chavez", 	age:"32", 	location:"Col. Anzures, Distrito Federal", 	birthday:"00-00-0000"		},
                {fname:"lillian", 			lname:"mosqueda chavez", 	age:"18", 	location:"Ixtapaluca, Estado de Mexico", 	birthday:"00-00-0000"		},
                {fname:"lillian guadalupe", lname:"chavez garcia", 		age:"58", 	location:"Chapala, Jalisco", 				birthday:"00-00-0000"		},
                {fname:"eduardo", 			lname:"mosqueda ruiz", 		age:"56", 	location:"Ixtapaluca, Estado de Mexico", 	birthday:"00-00-0000"		},                                
                {fname:"laura fabiola", 	lname:"rojas lopez", 		age:"31", 	location:"Xochimilci, Distrito Federal", 	birthday:"00-00-0000"		},                                
                {fname:"emma ximena", 		lname:"rojas lopez", 		age:"9", 	location:"Xochimilco, Distrito Federal", 	birthday:"00-00-0000"		}                               
        	],	
            
            friends:[
                {fname:"oscar alejandor", lname:"ayala martinez", age:"32", location:"Amecameca, Estado de México"	},                                
                {fname:"daniel", lname:"hernandez constantino", age:"32", location:"Iztapalapa, Distrito Federal"	}
            ]};
    });