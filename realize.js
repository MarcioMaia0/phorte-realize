window.onload = function(){
  var Theme = Realize.run();
  Theme.addPlugin('iframe figura video podcast sanfona objetiva multipla');
  Theme.addGroup('Formatação',function(group){
    
    group.addResource('Tópico phorte',function(resource){
      resource.addEditor('Texto',function(field){
        field.shortcode('TEXT');
      });
      resource.build(`<div class="box1 mb-5 p-3 realize-recurso">
        <div class="row">
          <div class="col-12 col-sm-auto col-md-auto col-lg-auto col-xl-auto"><img class="aspas mb-3" src="assets/img/citacao.png"></div>
          <div class="col E-TOPICO">
            [TEXT]
          </div>
        </div>
      </div>`);
    });
    
  });
  Theme.init();
  //Theme.download();
};