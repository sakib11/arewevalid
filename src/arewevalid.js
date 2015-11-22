;(function( $ ){

  $.fn.areweValid = function( options ) {  

    /*Create some defaults, extending them with any options that were provided*/
    var settings = $.extend( {
      'rqMsg'              : "It's required",
      'maxMsg'             : "It's too long",
      'minMsg'             : "It's too short",
      'numMsg'             : "Please type a valid number",
      'emailMsg'           : "Please type a valid email",
      'urlMsg'             : "Please type a valid web url",
      'max'                :  15,
      'min'                :  7,
      'disableButton'      : true,
    }, options);
    
    
    var main = {
        
       isset     : function(el){
                      if(typeof(el) != "undefined" && el !== null)
                      {
                        return true;
                      }
                      else
                      {
                        return false;
                      }
                  }, /*end isset*/ 

        checkLen   : function(el){
                      return el.val().length;
                  }, /*end checkLen*/

        testRq    : function(el){
                      getRq = el.data('required');
                      if(this.isset(getRq) && getRq === true)
                      {
                        return true;
                      }
                      else if(this.isset(getRq) && getRq === false)
                      {
                        return false;
                      }
                      else if(!this.isset(getRq))
                      {
                        return false;
                      }                  
                  }, /*end checkRq*/

        createMsg  : function(el,clname,msg){
                      el.next('span').remove();
                      el.after('<span class="shake ev '+clname+'"><span>').next('span').text(msg);                 
                  }, /*end createMsg*/

        checkReq   : function(elem){
                       that = this;
                       elem.each(function(){
                           var getrqmsg = $(this).data('rqmsg');
                           var rqmsg;
                           if(that.isset(getrqmsg)){
                               rqmsg = getrqmsg;
                           }
                           else
                           {
                               rqmsg = settings.rqMsg;
                           }                         

                          $(this).on('keyup',function(){
                            
                             if((that.checkLen($(this)) === 0) && (that.testRq($(this))))
                             {
                                 that.createMsg($(this),'rq',rqmsg); 
                             }
                             else
                             {
                               $(this).next('span.rq').remove();
                             }                      
 
                         });
                       });
                  },  /*end checkRq*/

        checkMaxMin: function(elem){
                      that = this;
                      elem.each(function(){
                        var dataMax = $(this).data('max');
                        var dataMaxValue;                    
                        if(that.isset(dataMax))
                        {
                           dataMaxValue = Number(dataMax);
                        }else{
                           dataMaxValue = settings.max; 
                        }
                        
                        var dataMin = $(this).data('min');
                        var dataMinValue;
                        if(that.isset(dataMin))
                        {
                           dataMinValue = Number(dataMin);
                        }else{
                           dataMinValue = settings.min;
                        }
                        
                        var getminmsg = $(this).data('minmsg');
                        var minmsg;
                        if(that.isset(getminmsg)){
                           minmsg = getminmsg;
                        }
                        else
                        {
                           minmsg = settings.minMsg;
                        }

                        var getmaxmsg = $(this).data('maxmsg');
                        var maxmsg;
                        if(that.isset(getmaxmsg)){
                           maxmsg = getmaxmsg;
                        }
                        else
                        {
                           maxmsg = settings.maxMsg;
                        }                         

                        $(this).on('keyup',function(){
                          if(that.checkLen($(this)) > dataMaxValue)
                          {
                            that.createMsg($(this),'maxmin',maxmsg);  
                          }
                          else if(that.checkLen($(this)) < dataMinValue && that.checkLen($(this)) > 0)/*ch*/
                          {
                            that.createMsg($(this),'maxmin',minmsg);
                          }
                          else
                          {
                            $(this).next('span.maxmin').remove();
                          }

                        });
                      }); 
                  }, /*end checkMaxMin*/
                        
        checkNum    : function(elem){
                       that = this;
                       elem.each(function(){
                         var getnummsg = $(this).data('nummsg');
                         var nummsg;
                         if(that.isset(getnummsg)){
                             nummsg = getnummsg;
                         }
                         else
                         {
                             nummsg = settings.numMsg;
                         }                         

                         $(this).on('keyup',function(){
                             getVal = $(this).val();
                             isPositiveInteger = function(s){
                                return /^\d+$/.test(s);
                             };

                             if(!isPositiveInteger(getVal) && that.checkLen($(this)) > 0)
                             {
                               that.createMsg($(this),'num',nummsg);
                             }
                             else
                             {
                               $(this).next('span.num').remove();
                             }

                         });
                       });
                  }, /*end checkNum*/
                         
        checkEmail  : function(elem){
                       that = this;
                       elem.each(function(){
                         var getemailmsg = $(this).data('emailmsg');
                         var emailmsg;
                         if(that.isset(getemailmsg)){
                             emailmsg = getemailmsg;
                         }
                         else
                         {
                             emailmsg = settings.emailMsg;
                         }                        

                         $(this).on('keyup',function(){
                            getVal = $(this).val();
                            validateEmail = function(email) {
                              var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                              return re.test(email);
                            };

                            if(!validateEmail(getVal) && that.checkLen($(this)) > 0)
                            {
                              that.createMsg($(this),'email',emailmsg);
                            }
                            else
                            {
                               $(this).next('span.email').remove();
                            }
                         });
                       });
                  },/*end checkEmail*/

                         

          checkUrl  : function(elem){
                         that = this;
                         elem.each(function(){
                           var geturlmsg = $(this).data('urlmsg');
                           var urlmsg;
                           if(that.isset(geturlmsg)){
                               urlmsg = geturlmsg;
                           }
                           else
                           {
                               urlmsg = settings.urlMsg;
                           }                          

                           $(this).on('keyup',function(){
                              getVal = $(this).val();
                              validateUrl = function(url) {
                                var rg = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;
                                return rg.test(url);
                              };

                              if(!validateUrl(getVal) && that.checkLen($(this)) > 0)
                              {
                                that.createMsg($(this),'url',urlmsg);
                              }
                              else
                              {
                                 $(this).next('span.url').remove();
                              }
                           });
                         });
                    }
    }; /*end main object*/
                           
    return this.each(function() {        
      easyInput     = $(this).find('input').filter("input[data-enable='yes']"); 
      allButEmailUrl = easyInput.not("input[data-type='email'],input[data-type='url']"); 
      numInput      = easyInput.filter("input[data-type='number']");
      emailInput      = easyInput.filter("input[data-type='email']");
      urlInput      = easyInput.filter("input[data-type='url']");

      main.checkReq(easyInput);
      main.checkMaxMin(allButEmailUrl);
      main.checkNum(numInput);
      main.checkEmail(emailInput);
      main.checkUrl(urlInput);
      
      if(settings.disableButton === true){
        easyInput.on('keyup',function(){
          if($(this).parent().find('span').length === 0){      
            $(this).parent().find('input[type="submit"]').prop('disabled', false);
          }else{
            /*for ok state*/
            $(this).parent().find('input[type="submit"]').prop('disabled', true);
          }
        });
      }
    
    
    }); /*end this.each*/
        
  };
})( jQuery );