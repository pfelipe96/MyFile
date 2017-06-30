angular.module('starter.controllers', [])


.controller('LoginController', function($scope, $state) {

  $scope.login = function () {
        $state.go('app.arquivos')
  }

  $scope.cadastro = function () {
        $state.go('cadastro')
  }

})

.controller('CadastroController', function($scope, $state) {
    $scope.salvar = function () {
        $state.go('login')
    }
})

.controller('AppController', function($scope, $ionicModal, $timeout) {

})

.controller('GruposController', function($scope, ServiceGrupos, $stateParams) {
    $scope.grupos = ServiceGrupos.grupos_todos();
})

.controller('ArquivosController', function($scope, ServiceArquivos,) {
    $scope.arquivos = ServiceArquivos.arquivos_todos();
})

.controller('DetalheArquivoController', function($scope, $stateParams, ServiceArquivos) {
    $scope.arquivo = ServiceArquivos.get($stateParams.id);
})

.controller('PerfilController', function($scope) {
})

.controller('GrupoMaisController', function($scope) {
})

.controller('GaleriaController', function($scope) {
  $scope.galerias = [
    {
      nome:''
    }
  ];
});
