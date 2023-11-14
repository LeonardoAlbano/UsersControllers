class UsersController{
/**
 *  Index - GET para lista Vários registro
 *  Show - GET para exibir um registro especifico 
 *  create - POST para criar um registro
 *  Update - PUT para atualizar um registro
 *  Delete - DELETE para remover um registro
 */

 create(request, response){
        // Extrai os dados do corpo da requisição, que são esperados estar no formato JSON.
        const { name, email, password } = request.body;

        // Retorna os dados recebidos como resposta no formato JSON.
        response.json({ name, email, password });

 }
}

module.exports = UsersController