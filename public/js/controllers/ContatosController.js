angular.module('contatooh').controller('ContatosController', 
    function($scope, Contato){
        $scope.contatos = [];
        $scope.filtro = ''; 
        $scope.mensagem = {texto: ''};
        
        function buscarContatos(){
            Contato.query(
                function(contatos){
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                function(erro){
                    //console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não foi possível obter a lista de contatos'
                    };
                });
        };
    
        buscarContatos();
    
        $scope.remove = function(contato){
            console.log(contato);
            Contato.delete({id: contato._id},
                buscarContatos, 
                function(erro){
                    //console.log('Não foi possível remover o contato');
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não foi possível remover o contato'
                    };
                }
            );
        };
    
    });