(function(){
  "use strict";

  //create module
  angular.module('draliaTalent').factory('UserService', [function () {
      
      var teams = [ 
          {
            name: 'Socios Fundadores',
            members : [
                        {
                          name: 'David',
                          position: 'COO',
                          quote: [''],
                          img: 'assets/images/members/david.png'
                        }, 
                        {
                          name: 'Albert',
                          position: 'CEO',
                          quote: [''],
                          img: 'assets/images/members/albert.png'
                        },
                        {
                          name: 'Frederic',
                          position: 'Global Business Development',
                          quote: [''],
                          img: 'assets/images/members/fredi.png'
                        }
            ]
          },
          {
            name: 'People & Values',
            members : [
                        {
                          name: 'Mariona',
                          position: 'Me gustan los humanos y creo que necesitan muchos recursos',
                          quote: ['Kepp calm and love your cat'],
                          img: 'assets/images/members/mariona.png'
                        },
                        {
                          name: 'Jordi',
                          position: 'Soy cazador de unicornios',
                          quote: ['Si vas a tomar una cerveza, avísame'],
                          img: 'assets/images/members/jordicli.jpg'
                        },
                        {
                          name: 'Claudia',
                          position: 'Soy la Office Manager, así que me encargo que todo vaya sobre ruedas en la oficina.',
                          quote: ['Sin gluten y sin lactosa, es mi dieta maravillosa.'],
                          img: 'assets/images/members/claudia.jpg'
                        }
            ]
          },
          {
            name: 'UX & Copywriter', 
            members : [
                        {
                          name: 'Eduard',
                          position: 'UX, Revenue, y lo que haga falta :)',
                          quote: ['Somos sentimientos y tenemos seres humanos'],
                          img: 'assets/images/members/edu.gif'
                        },
                        {
                          name: 'Sergio',
                          position: 'Recito versos de amor a la tostadora cada mañana',
                          quote: ['¿Ha llegado ya la compra?'],
                          img: 'assets/images/members/sergio.gif'
                        },
                        {
                          name: 'Xavi',
                          position: 'Estoy en el departamento de Matching haciendo pinturitas para poder ofrecer de la forma más fàcil y amigable pacientes a los médicos, pensando yo por ellos',
                          quote: ['\"The world is full of \"One day\" \"'],
                          img: 'assets/images/members/xavi.gif'
                        },
                        {
                          name: 'Dani',
                          position: 'UX - Revenue: money, money, money',
                          quote: ['Listo el pollo'],
                          img: 'assets/images/members/dani.jpg'
                        },
                        {
                          name: 'Marc',
                          position: 'Hago UX en el equipo de ONE',
                          quote: ['Eric Clapton está sobrevalorado'],
                          img: 'assets/images/members/marc.jpg'
                        }
            ]
          },
          {
            name: 'Developers',
            members : [
                        {
                          name: 'Jordi',
                          position: 'Todo el día con la manguera apagando incendios',
                          quote: ['No toques mi pantalla!'],
                          img: 'assets/images/members/jordi.jpg'
                        },
                        {
                          name: 'David Perez',
                          position: '',
                          quote: [''],
                          img: 'assets/images/members/davidp.jpg'
                        },
                        {
                          name: 'Marcelo',
                          position: 'Análisis, desarrollo e integración de aplicaciones.',
                          quote: [''],
                          img: 'assets/images/members/marcelo.jpeg'
                        },
                        {
                          name: 'Eder',
                          position: 'Hago cosas que viven en Internet',
                          quote: ['I\'m-a-Luigi! Number One!'],
                          img: 'assets/images/members/eder.jpg'
                        },
                        {
                          name: 'Joan',
                          position: 'Hago que la web vaya fina fina',
                          quote: [' ¯\\_(ツ)_/¯', 'Canción favorita: Darude - Sandstorm'],
                          img: 'assets/images/members/joan.jpg'
                        },
                        {
                          name: 'Marcos',
                          position: 'Programo cosas',
                          quote: ['¿Homer? ¿Quién es Homer? Yo soy Tipo de Incógnito'],
                          img: 'assets/images/members/marcos.jpg'
                        },
                        {
                          name: 'Begoña',
                          position: 'Hago que las cosas se vean bonitas en la web',
                          quote: ['¡¡Ha dicho uno!! .. Soly'],
                          img: 'assets/images/members/begona.jpg'
                        },
                        {
                          name: 'Alejandro',
                          position: 'Pico teclas',
                          quote: [''],
                          img: 'assets/images/members/alejandro.jpg'
                        },
                        {
                          name: 'Dani',
                          position: 'Grito al ordenador para que programe por mi',
                          quote: ['Be water my friend'],
                          img: 'assets/images/members/danig.jpg'
                        }                        
            ]
          },
          {
            name: 'Customer Service',
            members : [
                        {
                          name: 'Alex',
                          position: 'Estoy en el Departamento de comercial y soporte, ayudando a los doctores de España y otros países',
                          quote: ['- Doctor, quiero hacerme una vasectomía   -Es una decisión importante ¿lo ha consultado con su esposa e hijos?    -17 votos a favor y 2 en contra'],
                          img: 'assets/images/members/alex.jpg'
                        },
                        {
                          name: 'Caterina',
                          position: 'Estoy en el departamento de soporte Italia y otros Países.',
                          quote: ['A veces hago dramas pero me río enseguida'],
                          img: 'assets/images/members/caterina.jpg'
                        },
                        {
                          name: 'Vanessa',
                          position: 'Actualmente soy la suporte de México.',
                          quote: ['\"La vida es aquello que te va sucediendo, mientras tu te empeñas en hacer otros planes!\"'],
                          img: 'assets/images/members/vanessa.jpg'
                        },
                        {
                          name: 'Eva',
                          position: 'Trabajo en el departamento Comercial/Soporte reponsabilizándome de que todos y todo fluya.',
                          quote: ['\"Life is a journey, not a guided tour\"'],
                          img: 'assets/images/members/eva.jpg'
                        },
                        {
                          name: 'Sandra',
                          position: 'Soporte',
                          quote: ['Departamento soporte a tope!!!!'],
                          img: 'assets/images/members/sandra.jpg'
                        },
                        {
                          name: 'Ingrid',
                          position: 'Me gusta investigar y encontrar soluciones a problemas, intento que todos los Drs puedan pagarnos y no se quieran dar de baja :)',
                          quote: ['De mayor quiero ser Jessica Fletcher'],
                          img: 'assets/images/members/ingrid.jpg'
                        },
                        {
                          name: 'Ferran',
                          position: 'Departamento Comercial España. Ayudo a que nuestros doctores sean unos triunfadores.  Quieres un Premium?',
                          quote: ['De que trabajas? Engaño a doctores...ya me entiendes. '],
                          img: 'assets/images/members/ferran.jpg'
                        },
                        {
                          name: 'Tâmara',
                          position: 'En Doctoralia hago Sorporte a Brasil y as veces ayudo mis compis de otros paises',
                          quote: ['Dont touch my hair...'],
                          img: 'assets/images/members/tamara.jpg'
                        },
                        {
                          name: 'Juliana',
                          position: 'Hago ventas... trabajo en el Dp comercial de Brasil e Portugal.',
                          quote: ['\"Si el plan no funciona cambia el plan, pero no cambies la meta\"'],
                          img: 'assets/images/members/juliana.jpg'
                        },
                        {
                          name: 'Luiz',
                          position: 'Estoy en el comercial (Brasil)',
                          quote: ['A entrenar y vender chicos!'],
                          img: 'assets/images/members/luiz.jpg'
                        }
            ]
          },
          {
            name: 'SEO & Content',
            members : [
                        {
                          name: 'Anna',
                          position: '',
                          quote: [''],
                          img: 'assets/images/members/anna.jpg'
                        },
                        {
                          name: 'Nina',
                          position: 'Soporte Backoffice (BR, PT, UK, DE y otros)',
                          quote: ['Me gusta leer novelas de fantasía y hacer senderismo en la naturaleza de Franconia.'],
                          img: 'assets/images/members/nina.jpg'
                        },
                        {
                          name: 'Luciana',
                          position: 'Estoy en el Dpto. de Contenidos',
                          quote: ['Mi hobby: ...hacer acampadas y senderismo.'],
                          img: 'assets/images/members/luciana.jpg'
                        },
                        {
                          name: 'Laura',
                          position: 'Back Office Content',
                          quote: ['Me encargo de añadir los ingredientes que enriquecen el perfil del doctor.'],
                          img: 'assets/images/members/laura.jpg'
                        },
                        {
                          name: 'Vanessa',
                          position: 'Estoy en el Dpto. de Contenidos. De mi trabajo me gusta mucho controlar las opiniones y foros',
                          quote: ['\"Queda prohibido no convertir en realidad tus sueños\" Pablo Neruda'],
                          img: 'assets/images/members/vanessam.png'
                        },
                        {
                          name: 'Natasha',
                          position: 'Estoy en el Dp de Contenidos, nuestro campo de trabajo son los perfiles sin registro, limpiar y ampliar datos, validar opiniones y solicitudes, etc.',
                          quote: ['\"Look and think\"'],
                          img: 'assets/images/members/natasha.jpg'
                        }

            ]
          },
          {
            name: 'Marketing & Comunicación', 
            members : [
                        {
                          name: 'Ana',
                          position: 'Intento que nos conozcan en el mundo entero',
                          quote: ['Aquí hace más frío que friín.'],
                          img: 'assets/images/members/ana.png'
                        },
                        {
                          name: 'Mercedes',
                          position: 'Busco partners y reparto widgets por el mundo',
                          quote: ['Keep calm and put a Widget in your life'],
                          img: 'assets/images/members/mercedes.jpeg'
                        },
                        {
                          name: 'Tere',
                          position: 'Escribo cosas en twitter',
                          quote: ['Sin música la vida sería un error '],
                          img: 'assets/images/members/tere.jpg'
                        }
            ]
          }
        ];

      return {
        getTeams : function()  {
          return teams;
        }

      }
  }]);

})();
