function Menu(language) {
    this.language = language

}


var planetaBrasilControllers = angular.module('planetaBrasilControllers', ['ngSanitize']);
planetaBrasilControllers.controller('LanguageCtrl', ['$scope', '$http',
    function ($scope, $http ) {
    // $http.get('templates/phones.json').success(function(data) {
    //   $scope.phones = data;
    // });
        $scope.chooseLanguage = function(id_language) {
            window.localStorage.setItem('language', id_language);
            setup_push_plugin();
            window.location.href = "#login";
        }
    }]
);

planetaBrasilControllers.controller('LoginCtrl', ['$scope', '$http',
    function ($scope, $http ) {
        $scope.language = window.localStorage.getItem('language');
        if (window.localStorage.getItem('language') == 2) {
            $scope.passaport = "passaport";
            $scope.login = "Login";
            $scope.advance = "Next";
            $scope.full_name = "Full name";
        } else if(window.localStorage.getItem('language') == 3) {
            $scope.passaport = "pasaporte";
            $scope.login = "Login";
            $scope.advance = "Próximo";
            $scope.full_name = "nombre completo";
        } else {
            $scope.passaport = "Passaporte";
            $scope.login = "Identifique-se";
            $scope.advance = "Avançar";
            $scope.full_name = "nome completo";
        };
        $scope.errors = {
            '1': {
                'full_name_short': 'O nome precisa ter mais que 5 dígitos.',
                'full_name_long': 'O nome precisa ter menos que 20 dígitos.',
                'email': 'Email inválido'
            },
            '2': {
                'full_name': 'O nome precisa ter mais que 6 dígitos.',
                'full_name': 'O nome precisa ter mais que 6 dígitos.',
                'email': 'Email inválido'
            },
            '3': {
                'full_name': 'O nome precisa ter mais que 6 dígitos.',
                'full_name': 'O nome precisa ter mais que 6 dígitos.',
                'email': 'Email inválido'
            }
        }
        $scope.submitForm = function(){
            window.localStorage.setItem('email', $scope.email);
            window.localStorage.setItem('full_name', $scope.full_name_form);
            console.log('Fazer o post com o nome e email e o id do telefone.');
            window.location.href = "#loading";
        };
    }]
);


planetaBrasilControllers.controller('LoadingCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        var language = window.localStorage.getItem('language');
        if (language == 2) {
            message = "Wait, we are carrying the information of your city.";
        }else if (language == 3) {
            message = "Por favor, espere un momento mientras cargamos la información de tu ciudad.";
        }
        else {
            message = "Aguarde, estamos carregando as informações da sua cidade.";
        }

        $scope.message = message;
        $scope.$on('$viewContentLoaded', function() {
            var language = window.localStorage.getItem('language');
            $rootScope.items = menu[language];
            setTimeout(function(){
                window.location.href = "#home";
            },4000);
        });
    }]
);



planetaBrasilControllers.controller('CuriosityCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        language = localStorage.getItem('language');
        if (language == 2) {
            $scope.bg_img = "curiosidades_en.jpg";
        }else if (language == 3) {
            $scope.bg_img = "curiosidades_es.jpg";
        }else {
            $scope.bg_img = "curiosidades.jpg";
        }
        $scope.items = $rootScope.items;
        $scope.curiosities = curiosities[language];
        $scope.$on('$viewContentLoaded', function() {

            elemets_banner = document.getElementsByClassName('input_checked');
            ontouch(document.getElementById('curiosity'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_banner);
                    };
                    if (dir == 'right') {
                        back_element(elemets_banner);
                    };
                };
            });
            swipe_menu();

            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);

planetaBrasilControllers.controller('FacebookCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $scope.items = $rootScope.items;
        $scope.$on('$viewContentLoaded', function() {
            swipe_menu();
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);

planetaBrasilControllers.controller('GameCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $scope.items = $rootScope.items;
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);


planetaBrasilControllers.controller('StadiumsCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        var language = window.localStorage.getItem('language');
        if (language == 2) {
            $scope.lang_stadium = "Stadiums";
            
        }else if (language == 3) {
            $scope.lang_stadium = "Estadios";
        }else {
            $scope.lang_stadium = "Estádios";
        }
        $scope.stadiums = stadiums;
        $scope.items = $rootScope.items;
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);


planetaBrasilControllers.controller('StadiumCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $rootScope, $routeParams, $http ) {
        var language = window.localStorage.getItem('language');
        if (language == 2) {
            $scope.lang_stadium = "Stadiums";
            
        }else if (language == 3) {
            $scope.lang_stadium = "Estadios";
        }else {
            $scope.lang_stadium = "Estádios";
        }
        $scope.language = language;
        $scope.stadium = stadiums[$routeParams.stadiumId];
        $scope.items = $rootScope.items;
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);


planetaBrasilControllers.controller('PlayersByTeamCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $rootScope, $routeParams, $http ) {
        var letter_group = $routeParams.teamId[0];
        var position_team = $routeParams.teamId[1];
        var language = window.localStorage.getItem('language');
        
        $scope.items = $rootScope.items;
        $scope.letter_group = letter_group;
        $scope.position_team = position_team;
        team_object = teamPerGroup[letter_group][position_team];
        $scope.img = team_object.img;
        $scope.team_name = team_object[language];
        $scope.players = team_object['players'];
        $scope.language = language;
        if (language == 2) {
            $scope.group = "Group";
            $scope.bg_img = "interna-lista-jogadores_en.jpg";
        }else if (language == 3) {
            $scope.group = "Grupo";
            $scope.bg_img = "interna-lista-jogadores_es.jpg";
        }else {
            $scope.group = "Grupo";
            $scope.bg_img = "interna-lista-jogadores.jpg";
        }

        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);




planetaBrasilControllers.controller('TeamPerGroupCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $scope.items = $rootScope.items;
        $scope.teams = teamPerGroup
        var language = window.localStorage.getItem('language');
        $scope.language = language
        if (language == 2) {
            $scope.group = "Group";
            $scope.bg_img = "interna-lista-jogadores_en.jpg";
        }else if (language == 3){
            $scope.group = "Grupo";
            $scope.bg_img = "interna-lista-jogadores_es.jpg";
        }else {
            $scope.group = "Grupo";
            $scope.bg_img = "interna-lista-jogadores.jpg";
        }
        $scope.$on('$viewContentLoaded', function() {
            elemets_banner = document.getElementsByClassName('input_checked');
            ontouch(document.getElementById('team-per-group'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_banner);
                    };
                    if (dir == 'right') {
                        back_element(elemets_banner);
                    };
                };
            });
            swipe_menu();
            
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);





/** 
***       COM API 
***/

planetaBrasilControllers.controller('PhotoFansCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        $scope.items = $rootScope.items;

        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };

      var api_url = API_ROOT_URL + '/api/photos/' + '?lang=' + window.localStorage.getItem('language', '1');
      $http({method: 'GET', url: api_url}).
          success(function(data, status, headers, config) {
              $scope.photos = data;
      
      }).error(function(data, status, headers, config) {
      
              alert('Ocorreu um erro. Tente novamente.')
      
      });
    
    }]
);


planetaBrasilControllers.controller('WorldChampionshipCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        $scope.items = $rootScope.items;
        language = localStorage.getItem('language');
        //$scope.guess = guess[language];

        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        
        document.getElementById('guess_id').onchange = function() {
            this.disabled = true;
            var data = 'country=' + this.value;
            var request = new XMLHttpRequest();
            request.open('POST', API_ROOT_URL + '/api/guesses/', true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.send(data);
        };
        
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };


       var api_url = API_ROOT_URL + '/api/guesses/' + '?lang=' + language;
        $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.guess = data[language];
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });

    }]
);


planetaBrasilControllers.controller('NewsCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        $scope.items = $rootScope.items;
        language = localStorage.getItem('language');
        //$scope.news = news;
        
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };

       var api_url = API_ROOT_URL + '/api/news/' + '?lang=' + language;
      $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.news = data;
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });



    }]
);


planetaBrasilControllers.controller('ShowNewsCtrl', ['$scope', '$http', '$location',
    function ($scope, $rootScope, $location ) {
        var $http = $rootScope;
        $scope.items = $rootScope.items;
        language = localStorage.getItem('language');
        //$scope.show_news = show_news;
        
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };

      var pk = $location.path().split('/')[2];
      var api_url = API_ROOT_URL + '/api/news/' + pk + '/?lang=' + language;
      $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.show_news = data;
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });

    }]
);




planetaBrasilControllers.controller('TableGamesCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        //$scope.matches = matches;
        language = window.localStorage.getItem('language');
        
        if (language == 2) {
            $scope.th_match = "Game day";
            $scope.bg_img = "tabela-de-jogos_en.jpg"
        }else if (language == 3) {
            $scope.th_match = "DÍA DEL JUEGO";
            $scope.bg_img = "tabela-de-jogos_es.jpg"
        }else {
            $scope.th_match = "DIA DO JOGO";
            $scope.bg_img = "tabela-de-jogos.jpg"
        }
        $scope.items = $rootScope.items;
        
        $scope.$on('$viewContentLoaded', function() {
elemets_banner = document.getElementsByClassName('input_checked');
            ontouch(document.getElementById('team-per-group'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_banner);
                    };
                    if (dir == 'right') {
                        back_element(elemets_banner);
                    };
                };
            });
            swipe_menu();
            
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };

       
      var api_url = API_ROOT_URL + '/api/matches_by_groups/' + '?lang=' + language;
      $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.matches = data;
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });

    }]
);




planetaBrasilControllers.controller('LastGamesCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $rootScope, $rootParams, $http ) {
        $http = $rootScope;
        language = window.localStorage.getItem('language');
        offset = $rootParams.offset;
        $scope.items = $rootScope.items;
        
        var api_url = API_ROOT_URL + '/api/last_games/' + '?lang=' + language + '&page=' + offset;
        $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
                $scope.last_games = data;
                paginate = parseInt(data.total / 10);
                rest = data.total % 10;
                if (paginate > 0 && rest != 0) {
                    paginate += 1;
                }
                $scope.paginate = Array.apply(null, Array(paginate)).map(function (_, i) {return {"num": i+1, "id": i*10, "active": i*10 == offset};});
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });


        $scope.$on('$viewContentLoaded', function() {
            swipe_menu();

            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.item, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       }
    }]
);




planetaBrasilControllers.controller('ProgrammingCtrl', ['$scope', '$http', '$location',
    function ($scope, $rootScope, $location ) {
        var $http = $rootScope;
        language = window.localStorage.getItem('language');
        $scope.items = $rootScope.items;
        //$scope.programming = programming;
        
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };

      var pk = $location.path().split('/')[2];
      var api_url = API_ROOT_URL + '/api/venue/' + pk +'/?lang=' + language;
      $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.programming = data;
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });

    }]
);





planetaBrasilControllers.controller('FinalsCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        $scope.items = $rootScope.items;
        language = localStorage.getItem('language');
        //$scope.finals = finals[language];

        var api_url = API_ROOT_URL + '/api/finals/' + '?lang=' + language;
        $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.finals = data[language];
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });
        
        $scope.$on('$viewContentLoaded', function() {
            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
        });
        var dropdown = document.querySelectorAll('.dropdown');
        var dropdownArray = Array.prototype.slice.call(dropdown,0);
        dropdownArray.forEach(function(el){
            var button = el.querySelector('a[data-toggle="dropdown"]'),
                    menu = el.querySelector('.dropdown-menu'),
                    arrow = button.querySelector('i.icon-arrow');
            button.addEventListener("click", function(e) {
                if(!menu.hasClass('show')) {
                    menu.classList.add('show');
                    menu.classList.remove('hide');
                    arrow.classList.add('open');
                    arrow.classList.remove('close');
                    event.preventDefault();
                }
                else {
                    menu.classList.remove('show');
                    menu.classList.add('hide');
                    arrow.classList.remove('open');
                    arrow.classList.add('close');
                    event.preventDefault();
                }
                e.preventDefault();
            });
        })

        Element.prototype.hasClass = function(className) {
            return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
        };
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.items, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       };
    }]
);





planetaBrasilControllers.controller('HomeCtrl', ['$scope', '$http',
    function ($scope, $rootScope, $http ) {
        $http = $rootScope;
        language = localStorage.getItem('language');
        $scope.items = $rootScope.items;
        //$scope.home = home;
        $scope.locals = [{
            'title': 'Trilha da Pedra da Gavea',
            'img': 'images/language-br.png'
            },
            {
            'title': 'Trilha da Pedra da Gavea',
            'img': 'images/language-br.png'
            },
            {
            'title': 'Trilha da Pedra da Gavea',
            'img': 'images/language-br.png'
            },
        ]
        var api_url = API_ROOT_URL + '/api/home/' + '?lang=' + language;
        $http({method: 'GET', url: api_url}).
            success(function(data, status, headers, config) {
            $scope.home = data;
          }).
          error(function(data, status, headers, config) {
            alert('Ocorreu um erro. Tente novamente.')
        });
        

        $scope.$on('$viewContentLoaded', function() {
            banner = document.getElementsByClassName('element_banner');
            elemets_banner = document.getElementsByClassName('input_checked');
            ontouch(document.getElementById('slider'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_banner);
                    };
                    if (dir == 'right') {
                        back_element(elemets_banner);
                    };
                };
            });
            elemets_match = document.getElementsByClassName('input_checked_match');
            ontouch(document.getElementById('next-macth'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_match);
                    };
                    if (dir == 'right') {
                        back_element(elemets_match);
                    };
                };
            });
            elemets_programming = document.getElementsByClassName('input_checked_programming');
            ontouch(document.getElementById('cultural-programming'), function(evt, dir, phase, swipetype, distance){
                if (phase == 'end') {
                    event.stopPropagation();
                    if (dir == 'left'){
                        forward_element(elemets_programming);
                    };
                    if (dir == 'right') {
                        back_element(elemets_programming);
                    };
                };
            });

            swipe_menu();

            body = document.body;
            menuAchor = document.getElementsByClassName('menu')[0];
            menuAchor.addEventListener("click", function(e) {
                e.preventDefault();
                if (body.classList.length == 0) {
                    body.className = "menu-active";
                }else {
                    body.className = "";
                };
            });
            forward = document.getElementById("forward");
            forward.addEventListener("click", function(e) {
                forward_element(elemets_banner);
                e.preventDefault();
            });
            
            back = document.getElementById("back");
            back.addEventListener("click", function(e) {
                back_element(elemets_banner);
                e.preventDefault();
            });
        });
        
        $scope.showProgramming = function(id_programming) {
            window.location.href = "#programming/" + id_programming;
        }
        
        $scope.activeMenu = function(item) {
            angular.forEach($rootScope.item, function(i) {
                i.status = 'deactive';
            });
            item.status = 'active';
            body.className = "";
       }
    }]
);