(function($){
  resized = false;
  $(window).on("message", function(e){
    if( $.isNumeric( e.originalEvent.data ) ){
      $('#myIframe').css({'height': (e.originalEvent.data + 30) + 'px','visibility':'visible'});
    }
  });
  $(window).resize(function(){
    resized = true;
  });
  setInterval(function(){
    if(resized){
      resized = false;
      $('#myIframe').attr('style','');
      $('#myIframe')[0].contentWindow.postMessage('getHeight','*');
    }
  },500);
})(jQuery);