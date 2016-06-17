(function(){
  angular
    .module('filmes')
    .controller('FilmesController', function($scope) {
      $scope.titulo = "Filmes que já assisti";

      $scope.filmes = [
      	{
      		id: "d9385462d3deff78c352ebb3f941ce12",
      		titulo: "Deadpool",
      		ano: 2016,
      		produtora: "Fox",
      		sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
      		cartaz: 'http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg'
      	}
      ];

      $scope.novoFilme = {};

      $scope.criarFilme = function() {
      	$scope.filmes.push({
      		id: SparkMD5.hash(Date.now() + ""),
      		titulo: $scope.novoFilme.titulo,
      		ano: $scope.novoFilme.ano,
      		produtora: $scope.novoFilme.produtora,
      		sinopse: $scope.novoFilme.sinopse,
      		cartaz: $scope.novoFilme.cartaz
      	});

      	$scope.novoFilme = {};
      }

      $scope.removerFilme = function(id) {
      	angular.forEach($scope.filmes, function(filme, i){
      		if(filme.id == id){
      			$scope.filmes.splice(i, 1);
      		};
      	});
      }

    });
})();