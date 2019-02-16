
Template.Articulos.helpers({
  articulos() {
    return Articulos.find();
  },
  coments(){
    return Comentarios.find({idAr:this._id});
  },
  usuarios(){
    return Meteor.users.find({_id:this.idUs});
  }
});

Template.body.events({
  'submit #form'(event, instance) {
    // increment the counter when button is clicked
    event.preventDefault();
    var titulo=event.target.txt_titulo.value;
    var cont=event.target.txt_contenido.value;
    //console.log(titulo+" "+cont);
    var idar=Articulos.insert({titulo:titulo,contenido:cont});
    console.log(idar);
  },
  'click #eliminar'(e){
    Articulos.remove({_id:this._id});
  }
});

  Template.Articulos.events({
    'submit #form_coments'(event, instance) {
      // increment the counter when button is clicked
      event.preventDefault();
      var texto=event.target.txt_comentario.value;
      var idAr=this._id;
      var idUs=Meteor.userId();
      //console.log(Meteor.user().emails[0].address);
      console.log(Meteor.user());
      var idar=Comentarios.insert({idAr:idAr,idUs:idUs,texto:texto});

    },
  });
