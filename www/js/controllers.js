angular.module('starter.controllers', [])


.controller('LoginController', function($scope, $state) {

  $scope.login = function () {
        $state.go('app.arquivos')
  }
})


.controller('AppController', function($scope, $ionicModal, $timeout) {

})

.controller('ArquivosController', function($scope, ServiceArquivos) {
    $scope.arquivos = ServiceArquivos.arquivos_todos();
})

.controller('DetalheArquivoController', function($scope, $stateParams, ServiceArquivos) {
    $scope.arquivo = ServiceArquivos.get($stateParams.id);
})

.controller('GrupoMaisController', function($scope, ServiceGrupos) {
    $scope.gruposMais = ServiceGrupos.grupo_todos();
})

.controller('PerfilController', function($scope) {
})

.controller('GaleriaController', function($scope) {
  $scope.galerias = [
    {
      nome:''
    }
  ];
});
