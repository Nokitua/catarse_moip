App.views.MoipForm.addChild('PaymentSlip', _.extend({
  el: '#payment_type_boleto_section',

  events: {
    'click input#build_boleto' : 'onBuildBoletoClick',
    'click .link_content a' : 'onContentClick',
    'keyup #user_document_payment_slip' : 'onUserDocumentKeyup'
  },

  activate: function(options){
    this.moipForm = this.parent;
  },

  onBuildBoletoClick: function(e){
    var that = this;
    e.preventDefault();
    that.moipForm.loader.show();

    // Get token and send payment
    that.moipForm.getMoipToken(function(){
      var settings = {
        "Forma":"BoletoBancario"
      }
      MoipWidget(settings);
    });
  }
}, App.views.MoipForm.UserDocument));
