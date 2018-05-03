$(document).ready(function(){
	
	
	$.ajax({ 
    type:"GET", // GET = requesting data
    url:"https://api.meetup.com/Bursa-I-O-Bulusmalari/events?&sign=true&photo-host=public&page=20", 
    success: function(data) { 
    	upcoming=data['data'].shift();
    	//console.log(upcoming);
    	$('.meetup').html('En yakin etkinlik <a href="'+upcoming.link+'">'+upcoming.name+'</a> '+ moment(upcoming.local_date).format('Do MMMM dddd YYYY')+' tarihinde saat '+upcoming.local_time+' da '+upcoming.venue.name+' mekanında yapılacaktır.');
    },
    dataType: 'jsonp',
  });
});