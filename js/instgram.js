$(document).ready(function(){
	
	var userFeed = new Instafeed({
        get: 'tagged',
        tagName: 'bursaio',
        clientId: '490053ebc98f4867910b2bb0f0542fac',
        accessToken: '6175788897.ba4c844.bf9307fc80534c1a826c65b5d82bc2bd',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></li>'
    });
    userFeed.run();
});