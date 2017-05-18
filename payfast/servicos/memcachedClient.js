var memcached = require('memcached');

module.exports = function(){
	return createMemcachedClient;
}

function createMemcachedClient(){
	var cliente = new memcached('localhost:11211', {
		retries:10,
		retry: 10000,
		remove: true
	});	

	return cliente;

}

/*

//BOTA NA MEMORIA DO MEMCACHED
cliente.set('pagamento-20', {'id':20},6000, function(erro){
	console.log('nova chave adicionada ao cache: pagamento-20');
});

//retorno da memoria
cliente.get('pagamento-20',function(erro,retorno){
	if(erro || !retorno){
		console.log('MISS - Chave nao encontrada');
	}else{
		console.log('HIT - valor: ' + retorno + JSON.stringify(retorno));;
	}
});

*/