var imageArray= [
    
"https://image.freepik.com/free-vector/grunge-style-halloween-background-with-bats-jack-o-lantern-and-owl_1048-3035.jpg",

"http://animations.fg-a.com/halloween-bgs/halloween-scary-scene.jpg",

"https://i.ytimg.com/vi/Ns91jtuPHZI/maxresdefault.jpg",
    
"http://shushi168.com/data/out/100/36813386-halloween.png",
    
"http://3.bp.blogspot.com/-H6s7acyspZs/VcN_II0NSMI/AAAAAAAABds/eeV2aRMAx4k/s1600/happy-halloween-clipart_3.gif",
    ];
var currentIndex = 0;

function renderImage () {
    if (currentIndex < 0) {
currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	currentIndex++;
	renderImage();
    
});
                    $('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var outputString = "Happy Halloween" + "!";
$("h1").html(outputString);

google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Frightfulness');
data.addRows([
  ['Me', 15],
  ['Evan', 20],
  ['Alec', 30],
  ['Colin', 35],
  ['Emma', 50]
]);

var chartWidth = $(window).width()*0.35;

// Set chart options
var options = {
	'title':'How Easily Scared my Cousins are by Horror Movies',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#FF9922',
    'colors': ['#9158B5'],
    'fontName': 'Calibri'
};


var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}

var video = document.createElement('iframe');
var contentBox = document.createElement('div')

function generatePageData(pageData){
    
  $(video).attr('src', 'https://www.youtube.com/embed/pJBRQQkT85s');
    $(contentBox).append(video);
    }


