
var name = "Ajinkya";
var formattedHeaderName = HTMLheaderName.replace("%data%", name);


var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

var bio = {
	"name" : formattedHeaderName,
	"age" : 25,
	"role" : formattedRole,
	"contact" : "ajawchat@indiana.edu",
	"welcome" : "Hi, welcome to my personal website"
}


var work ={};
work.position = "Teaching Assistant";
work.employer = "Indiana University Bloomington";
work.months = 10;


var education ={
    "schools": [
        {
            "name": "Indiana University Bloomington",
            "years": 2,
            "city": "Bloomington, US"
        },
        {
        	"name": "University of Pune",
            "years": 4,
            "city": "Pune, India"	
        }
    ]
};


var projects = {
	"Data Analytics":[
		{
			"name": "Movie Recommendation System",
			"link": "",
			"Description": ""		
		},
		{
			"name": "Data Mining",
			"link": "",
			"Description": ""		
		}


	],

	"Android":[
		{
			"name": "targeted ads",
			"link": "",
			"Description": ""			
		}

	]


}



$("#main").append(work["position"]);
$("#main").append(education.name);

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.age);
$("#header").append(bio.contact);
$("#header").append(bio.welcome);


