//Google analytics

  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-29443704-1']);
	  _gaq.push(['_trackPageview']);
	
	  (function() {
	    var ga = document.createElement('script'); 
	    ga.type = 'text/javascript'; 
	    ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; 
	    s.parentNode.insertBefore(ga, s);
	  })();
/***********************************************************************/

//Facebook
(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) 
	  	return;
	  	
	  js = d.createElement(s); 
	  js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

/**********************************************************************/
	
//google plus 
	(function() {
	    var po = document.createElement('script'); 
	    po.type = 'text/javascript'; 
	    po.async = true;
	    po.src = 'https://apis.google.com/js/plusone.js';
	    var s = document.getElementsByTagName('script')[0]; 
	    s.parentNode.insertBefore(po, s);
  	})();
	
/***********************************************************************/

//twitter
!function(d,s,id){
	var js,
		fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src="//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}}(document,"script","twitter-wjs");
