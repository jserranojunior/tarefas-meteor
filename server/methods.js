Meteor.methods({
    adiciona : function(obj){
        Tarefas.insert({nome: obj.nome, data: new Date()});
    }
});