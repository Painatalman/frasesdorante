!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MicaquoteHelper",[],t):"object"==typeof exports?exports.MicaquoteHelper=t():e.MicaquoteHelper=t()}(this,function(){return function(e){function t(a){if(o[a])return o[a].exports;var r=o[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports={quotes:["Tenho saudades do bluescreen","Para mim, é o standard","Faço de um beco sem saída uma autoestrada","Preciso de um terceiro monitor...","Vou acabar com a internet","Vou criar um novo git","Quero programar em VR","A culpa é do $names!","Façam isso, nem que eu pague!","A malta do $departments não faz nada!","Há uma linha que separa... não sei o quê, mas ya!","O $techs é estúpido!","Uma coisa é fazer pró Mac, outra é fazer DO Mac...","Testes unitários para css? Lol, metes um background vermelho e vê!","Testes unitários para $programming_languages? Lol","Vou minimificar o $programming_languages à la $names!","Dá-me os ingredientes que eu faço o molho","Devias o quê?... Esquece! A gente percebe, portanto é na boa!","O que podemos fazer, em relação aos editores de conteúdo, é limitar estragos","Mas para fazer isto vens ao... esquece, que isto não tem!"],dialogs:[],extras:{departments:["marketing","design","front-end","back-end","sysadmin"],techs:["editor","programa"],programming_languages:["javascript","css","html","c","android"],names:["Costa","Noddy","Batman","Micka","Mestre","Ninja"]}}},function(e,t,o){function a(e,t,o){this.quotes=e||r.quotes,this.dialogs=t||r.dialogs,this.extras=o||r.extras,this.extraTypeWildcard="$"}var r=o(0);a.prototype.getRandomQuoteOrDialog=function(){var e=this.quotes.concat(this.dialogs);return[].concat(e[Math.floor(Math.random()*e.length)])},a.prototype.getRandomDialog=function(e){defaultOptions={asString:!1,separator:" - "}},a.prototype.getRandomQuote=function(){return this.quotes[Math.floor(Math.random()*this.quotes.length)].replace(/\$(\w+)/g,function(e,t){return this.getRandomExtra(t)}.bind(this))},a.prototype.getRandomExtra=function(e){if(this.extras[e])return this.extras[e][Math.floor(Math.random()*this.extras[e].length)];throw new Error("there are no extras of type"+e)},a.prototype.appendRandomQuote=function(){},a.prototype.appendRandomDialog=function(){},e.exports=a}])});