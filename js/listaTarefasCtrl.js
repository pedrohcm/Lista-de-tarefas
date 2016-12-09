angular.module("listaTarefas", ["ngMessages"]);
angular.module("listaTarefas").controller("listaTarefasCtrl", function ($scope) {

    $scope.app = "Lista Tarefas";
    $scope.tarefas = [
        {nome: "Lavar a louça"},
        {nome: "Assistir série"},
        {nome: "Terminar o LAB 2"}
    ];

    $scope.adicionarTarefa = function (tarefa) {
        $scope.tarefas.push(angular.copy(tarefa));
        delete $scope.tarefa;
        $scope.contatoForm.$setPristine();
    };

    $scope.apagarTarefas = function (tarefas) {
        $scope.tarefas = tarefas.filter(function (tarefa) {
            if (!tarefa.completa) return tarefa;
        });
    };
    $scope.classe = 'completa';

    $scope.quantidadeTarefas = function (tarefas) {
        return $scope.tarefas.length;
    };
    $scope.quantidadeConcluidas = function () {
        var completas = 0;
        for (var i = 0; i < $scope.quantidadeTarefas($scope.tarefas); i++) {
            if ($scope.tarefas[i].completa) completas++;
        }
        return completas;
    };

    $scope.temTarefaCompleta = function (tarefas) {
        return tarefas.some(function (tarefa) {
            return tarefa.completa;
        });
    };

    $scope.porcentagemConcluida = function () {
        if(!$scope.temTarefas()) {
            return 0;
        }
        var porcentagem = ($scope.quantidadeConcluidas() * 100) / $scope.quantidadeTarefas($scope.tarefas);
        return parseInt(porcentagem);
    };

    $scope.limpaLista = function () {
        $scope.tarefas = [];
    };

    $scope.temTarefas = function () {
        return $scope.tarefas.length > 0;
    }
});