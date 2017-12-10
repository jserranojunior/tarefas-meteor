if (Meteor.isClient) {

    Template.lista.helpers({
        
        tarefas : function(){
            return Tarefas.find({});
        }
    });

    Template.lista.events({
        "click button" : function(e, template){
            var tarefa = this;

            Tarefas.remove({ _id : tarefa._id });
        }
    });

} 

