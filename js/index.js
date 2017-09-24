$(function() {
//the provided data
var job = {
	"headline": "Gridium Front-end Developer",
	"essentials": {
		"locations": "denver",
        "employment": EmploymentType().Permanent, 
		"startdate": (new Date()).getTime(),
		"companysize": CompanySize().TenToTwenty, 
		"teamsize": { "min": 1, "max": 6 },       
	},
	"methodology": {
		"codereviews": true,						
		"prototyping": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().CircleCI,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,		
		"versioncontrol": VersionControlSystem().Git,				
		"issuetracker": IssueTrackers().Tikkit,						
		"standups": true,
		"quickstart": true,
		"commitondayone": true,
	},
	"specs": {
		"workload": 1.0,
		"workweek": 40,
        "schedule": ScheduleOptions().Flexible,						
        "remote": RemoteWorking().Required,							
        "pto": PTO().Unlimited							
	},
	"profile": {
		"newfeatures": 50,
		"clientsupport": 9,
		"documentation": 10,
		"maintenance": 30,
		"meetings": 1,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().MacOSX, OperationSystems().CentOS],		
		"computer": MachineType().Laptop,									
	},
	"technologies": {
        "css3": Level().Good,															
        "html5": Level().Good,
        "javascript": Level().Good,
        "node": Level().Good,
        "rest": Level().Good,
        "uiux": Level().Familiar,
        "design": Level().Familiar,
        "testing": {
            "oneof": {
                "junit": Level().Good,
                "mocha": Level().Good,
                "jasmine": Level().Good,
                "selenium": Level().Good,
            }
        },
        "framework": {
            "oneof": {
                "react": Level().Familiar,
                "vue": Level().Familiar,
                "angular": Level().Familiar,
            }
        },
        "boardgames": Level().Familiar,
    },
	"other": [
        "we love technology",
        "we solve interesting problems"
	]
};

//storing jobs key values for styling
var jobelements = [];

$.each(job, function (key,val) {	
	jobelements.push(key);
});


//Essentials
var esselements = [];

$.each(job.essentials, function (key,val) {	
	esselements.push(key);
});

//Methodology
var methodelements = [];

$.each(job.methodology, function (key,val) {	
	methodelements.push(key);
});

//Specs
var specelements = [];

$.each(job.specs, function (key,val) {	
	specelements.push(key);
});

//Profile
var profileelements = [];

$.each(job.profile, function (key,val) {	
	profileelements.push(key);
});

//Equipment
var equipelements = [];

$.each(job.equipment, function (key,val) {	
	equipelements.push(key);
});

//Technology
var techelements = [];

$.each(job.technologies, function (key,val) {	
	techelements.push(key);
});

//Others
var othelements = [];

$.each(job.other, function (key,val) {	
	othelements.push(val);
});

//tech.testing
var techarr = [];

$.each(job.technologies.testing.oneof, function (key,val) {	
	techarr.push(key);
});

//tech.framwrk
var framearr = [];

$.each(job.technologies.framework.oneof, function (key,val) {	
	framearr.push(key);
});

//storing options for checkboxes,dropdowns,radio and slider
var emptype = [];
$.each(EmploymentType().all, function (key,val) {	
	emptype.push(val);
});

var explvl = [];
$.each(ExperienceLevels().all, function (key,val) {	
	explvl.push(val);
});

var compsiz = [];
$.each(CompanySize().all, function (key,val) {	
	compsiz.push(val);
});

var vercontrol = [];
$.each(VersionControlSystem().all, function (key,val) {	
	vercontrol.push(val);
});

var itrack = [];
$.each(IssueTrackers().all, function (key,val) {	
	itrack.push(val);
});

var bldserv = [];
$.each(BuildServers().all, function (key,val) {	
	bldserv.push(val);
});

var codeatool = [];
$.each(CodeAnalysisTools().all, function (key,val) {	
	codeatool.push(val);
});

var krepos = [];
$.each(KnowledgeRepos().all, function (key,val) {	
	krepos.push(val);
});

var trvopt = [];
$.each(TravelOptions().all, function (key,val) {	
	trvopt.push(val);
});

var schopt = [];
$.each(ScheduleOptions().all, function (key,val) {	
	schopt.push(val);
});

var rmtwrk = [];
$.each(RemoteWorking().all, function (key,val) {	
	rmtwrk.push(val);
});

var relpkg = [];
$.each(RelocationPackages().all, function (key,val) {	
	relpkg.push(val);
});

var opsys = [];
$.each(OperationSystems().all, function (key,val) {	
	opsys.push(val);
});

var mctype = [];
$.each(MachineType().all, function (key,val) {	
	mctype.push(val);
});

var lvl = [];
$.each(Level().all, function (key,val) {	
	lvl.push(val);
});

var trtype = [];
$.each(TrainingType().all, function (key,val) {	
	trtype.push(val);
});

var varpto = [];
$.each(PTO().all, function (key,val) {	
	varpto.push(val);
});

//adding heading to the parameters
$("#idheadline").append("<h2>"+job.headline+"</h2>");
$("#idessentials").append("<h2>"+jobelements[1]+"</h2>");
$("#idmethodology").append("<h2>"+jobelements[2]+"</h2>");
$("#idspecs").append("<h2>"+jobelements[3]+"</h2>");
$("#idprofile").append("<h2>"+jobelements[4]+"</h2>");
$("#idequipment").append("<h2>"+jobelements[5]+"</h2>");
$("#idtech").append("<h2>"+jobelements[6]+"</h2>");
$("#idother").append("<h2>"+jobelements[7]+"</h2>");

//adding subheadings & values and assigning them to the corresponding category
$.each(esselements, function (i,j) {
	$("<div />")
     .attr("id", "ess"+j)
     .appendTo("#idessentials");
});

//
$("#esslocations").append('<h3>'+esselements[0]+'</h3>');
$("#esslocations").append('<p>'+job.essentials.locations+'</p>')

//adding selection boxes
$("#essemployment").append('<h3>'+esselements[1]+'</h3>');
var emptopt = [];

$("#essemployment").append('<select id="emptsel">'+'</select>');
$.each(emptype, function (i,j) {
emptopt[i] = $('<option value="'+emptype[i]+'">'+emptype[i]+'</option>');
$('#emptsel').append(emptopt[i]);
});

//converting date to readable format
var strtdate = new Date(job.essentials.startdate);
strtdate=($.datepicker.formatDate('dd M yy', new Date()));

$("#essstartdate").append('<h3>'+esselements[2]+'</h3>');
$("#essstartdate").append('<p>'+strtdate+'</p>');

//
$("#esscompanysize").append('<h3>'+esselements[3]+'</h3>');
var compopt = [];

$("#esscompanysize").append('<select id="compsel">'+'</select>');
$.each(compsiz, function (i,j) {
compopt[i] = $('<option value="'+compsiz[i]+'">'+compsiz[i]+'</option>');
$('#compsel').append(compopt[i]);
});

//adding slider for range of selections
$("#essteamsize").append('<h3>'+esselements[4]+'</h3>');
$("#essteamsize").append('<div id="esstdisp"></div>');
$("#essteamsize").append('<div id="esstslider"></div>');

var labelArr = ["1","2","3","4","5","6"];
var initialValue=job.essentials.teamsize.min, min=job.essentials.teamsize.min, max=job.essentials.teamsize.max;

$("#esstdisp").text(labelArr[0]);
	
$("#esstslider").slider({
    value:initialValue,
    min: min,
    max: max,
    step: 1,
    slide: function( event, ui ) {
        $("#esstdisp").text(labelArr[ui.value-1]);
	}
});

//
$.each(methodelements, function (i,j) {	
	$("<div />")
     .attr("id", "mid"+j)
     .appendTo("#idmethodology");
});

//setting value to Yes when data is True
$("#midcodereviews").append("<h3>"+methodelements[0]+"</h3>");
if (job.methodology.codereviews == true){
	$("#midcodereviews").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midcodereviews").append("<p>"+"No"+"</p>");	
}

$("#midprototyping").append("<h3>"+methodelements[1]+"</h3>");
if (job.methodology.prototyping == true){
	$("#midprototyping").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midprototyping").append("<p>"+"No"+"</p>");	
}

$("#midfailfast").append("<h3>"+methodelements[2]+"</h3>");
if (job.methodology.failfast == true){
	$("#midfailfast").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midfailfast").append("<p>"+"No"+"</p>");	
}

$("#midunittests").append("<h3>"+methodelements[3]+"</h3>");
if (job.methodology.unittests == true){
	$("#midunittests").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midunittests").append("<p>"+"No"+"</p>");	
}

$("#midintegrationtests").append("<h3>"+methodelements[4]+"</h3>");
if (job.methodology.integrationtests == true){
	$("#midintegrationtests").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midintegrationtests").append("<p>"+"No"+"</p>");	
}

//
$("#midbuildserver").append("<h3>"+methodelements[5]+"</h3>");

var bsopt = [];

$("#midbuildserver").append('<select id="bssel">'+'</select>');
$.each(bldserv, function (i,j) {
bsopt[i] = $('<option value="'+bldserv[i]+'">'+bldserv[i]+'</option>');
$('#bssel').append(bsopt[i]);
});

//setting up radio buttons
$("#midstaticcodeanalysis").append("<h3>"+methodelements[6]+"</h3>");
$("#midstaticcodeanalysis").append('<div id="codeasys"></div>');
$("<input type='radio' />")
     .attr("id", "stcode1")
     .attr("name", "stcode")
	 .attr("value", codeatool[0])
     .appendTo("#codeasys");
	 
$("#codeasys").append('<label for="stcode">'+codeatool[0]+'</label></br>');
$("<input type='radio' />")
     .attr("id", "stcode2")
     .attr("name", "stcode")
	 .attr("value", codeatool[1])
     .appendTo("#codeasys");
	 
$("#codeasys").append('<label for="stcode">'+codeatool[1]+'</label>');

//dynamically adding values to the selections
$("#midversioncontrol").append("<h3>"+methodelements[7]+"</h3>");
var veropt = [];

$("#midversioncontrol").append('<select id="versel">'+'</select>');
$.each(vercontrol, function (i,j) {
veropt[i] = $('<option value="'+vercontrol[i]+'">'+vercontrol[i]+'</option>');
$('#versel').append(veropt[i]);
});

//
$("#midissuetracker").append("<h3>"+methodelements[8]+"</h3>");
var iopt = [];

$("#midissuetracker").append('<select id="isel">'+'</select>');
$.each(itrack, function (i,j) {
iopt[i] = $('<option value="'+itrack[i]+'">'+itrack[i]+'</option>');
$('#isel').append(iopt[i]);
});

$("#midstandups").append("<h3>"+methodelements[9]+"</h3>");
if (job.methodology.standups == true){
	$("#midstandups").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midstandups").append("<p>"+"No"+"</p>");	
}

$("#midquickstart").append("<h3>"+methodelements[10]+"</h3>");
if (job.methodology.quickstart == true){
	$("#midquickstart").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midquickstart").append("<p>"+"No"+"</p>");	
}

$("#midcommitondayone").append("<h3>"+methodelements[11]+"</h3>");
if (job.methodology.commitondayone == true){
	$("#midcommitondayone").append("<p>"+"Yes"+"</p>");	
} else{
	$("#midcommitondayone").append("<p>"+"No"+"</p>");	
}

$.each(specelements, function (i,j) {	
	$("<div />")
     .attr("id", "spec"+j)
     .appendTo("#idspecs");
});

//
$("#specworkload").append("<h3>"+specelements[0]+"</h3>");
$("#specworkload").append("<p>"+job.specs.workload+"</p>");

//
$("#specworkweek").append("<h3>"+specelements[1]+"</h3>");
$("#specworkweek").append("<p>"+job.specs.workweek+"</p>");

//
$("#specschedule").append("<h3>"+specelements[2]+"</h3>");
$("#specschedule").append('<div id="specsel"></div>');
$("<input type='radio' />")
     .attr("id", "speccode1")
     .attr("name", "speccode")
	 .attr("value", schopt[0])
     .appendTo("#specsel");
	 
$("#specsel").append('<label for="speccode">'+schopt[0]+'</label></br>');
$("<input type='radio' />")
     .attr("id", "stcode2")
     .attr("name", "speccode")
	 .attr("value", schopt[1])
     .appendTo("#specsel");
	 
$("#specsel").append('<label for="speccode">'+schopt[1]+'</label></br>');

//
$("#specremote").append("<h3>"+specelements[3]+"</h3>");
$("#specremote").append('<div id="remsel"></div>');
$("<input type='radio' />")
     .attr("id", "remcode1")
     .attr("name", "remcode")
	 .attr("value", rmtwrk[0])
     .appendTo("#remsel");
	 
$("#remsel").append('<label for="remcode">'+rmtwrk[0]+'</label></br>');
$("<input type='radio' />")
     .attr("id", "remcode2")
     .attr("name", "remcode")
	 .attr("value", rmtwrk[1])
     .appendTo("#remsel");
	 
$("#remsel").append('<label for="remcode">'+rmtwrk[1]+'</label></br>');
$("<input type='radio' />")
     .attr("id", "remcode3")
     .attr("name", "remcode")
	 .attr("value", rmtwrk[2])
     .appendTo("#remsel");
	 
$("#remsel").append('<label for="remcode">'+rmtwrk[2]+'</label></br>');

//
$("#specpto").append("<h3>"+specelements[4]+"</h3>");
$("#specpto").append('<div id="ptosel"></div>');
$("<input type='radio' />")
     .attr("id", "ptocode1")
     .attr("name", "ptocode")
	 .attr("value", varpto[0])
     .appendTo("#ptosel");
	 
$("#ptosel").append('<label for="ptocode">'+varpto[0]+'</label></br>');
$("<input type='radio' />")
     .attr("id", "ptocode2")
     .attr("name", "ptocode")
	 .attr("value", varpto[1])
     .appendTo("#ptosel");
	 
$("#ptosel").append('<label for="ptocode">'+varpto[1]+'</label></br>');


//
$.each(profileelements, function (i,j) {	
	$("<div />")
     .attr("id", "p"+j)
     .appendTo("#idprofile");
});

//
$("#pnewfeatures").append("<h3>"+profileelements[0]+"</h3>");
$("#pnewfeatures").append("<p>"+job.profile.newfeatures+"</p>");

//
$("#pclientsupport").append("<h3>"+profileelements[1]+"</h3>");
$("#pclientsupport").append("<p>"+job.profile.clientsupport+"</p>");

//
$("#pdocumentation").append("<h3>"+profileelements[2]+"</h3>");
$("#pdocumentation").append("<p>"+job.profile.documentation+"</p>");

//
$("#pmaintenance").append("<h3>"+profileelements[3]+"</h3>");
$("#pmaintenance").append("<p>"+job.profile.maintenance+"</p>");

//
$("#pmeetings").append("<h3>"+profileelements[4]+"</h3>");
$("#pmeetings").append("<p>"+job.profile.meetings+"</p>");

//
$.each(equipelements, function (i,j) {	
	$("<div />")
     .attr("id", "eq"+j)
     .appendTo("#idequipment");
});

//adding checkboxes and values dynamically
$("#eqoperatingsystem").append("<h3>"+equipelements[0]+"</h3>");
$("#eqoperatingsystem").append("<p>"+opsys[0]+","+opsys[1]+"</p>");

$("#eqcomputer").append("<h3>"+equipelements[1]+"</h3>");
$("#eqcomputer").append('<div id="mcsel"></div>');
$("<input type='checkbox' />")
     .attr("id", "mc1")
     .attr("name", "mccode")
	 .attr("value", mctype[0])
     .appendTo("#mcsel");
	 
$("#mcsel").append('<label for="mccode">'+mctype[0]+'</label></br>');
$("<input type='checkbox' />")
     .attr("id", "mc2")
     .attr("name", "mccode")
	 .attr("value", mctype[1])
     .appendTo("#mcsel");
	 
$("#mcsel").append('<label for="mccode">'+mctype[1]+'</label></br>');

//
$.each(techelements, function (i,j) {	
	$("<div />")
     .attr("id", "t"+j)
     .appendTo("#idtech");
});

//adding sliders the correct data in the form
$("#tcss3").append("<h3>"+techelements[0]+"</h3>");
$("#tcss3").append('<div class="lvldisp"></div>');
$("#tcss3").append('<div class="lvlslider"></div>');


$("#thtml5").append("<h3>"+techelements[1]+"</h3>");
$("#thtml5").append('<div class="lvldisp"></div>');
$("#thtml5").append('<div class="lvlslider"></div>');

$("#tjavascript").append("<h3>"+techelements[2]+"</h3>");
$("#tjavascript").append('<div class="lvldisp"></div>');
$("#tjavascript").append('<div class="lvlslider"></div>');

$("#tnode").append("<h3>"+techelements[3]+"</h3>");
$("#tnode").append('<div class="lvldisp"></div>');
$("#tnode").append('<div class="lvlslider"></div>');

$("#trest").append("<h3>"+techelements[4]+"</h3>");
$("#trest").append('<div class="lvldisp"></div>');
$("#trest").append('<div class="lvlslider"></div>');

$("#tuiux").append("<h3>"+techelements[5]+"</h3>");
$("#tuiux").append('<div class="lvldisp"></div>');
$("#tuiux").append('<div class="lvlslider"></div>');

$("#tdesign").append("<h3>"+techelements[6]+"</h3>");
$("#tdesign").append('<div class="lvldisp"></div>');
$("#tdesign").append('<div class="lvlslider"></div>');

$("#ttesting").append("<h3>"+techelements[7]+"</h3>");

$("#ttesting").append("<h4>"+techarr[0]+"</h4>");
$("#ttesting").append('<div class="lvlonedisp"></div>');
$("#ttesting").append('<div class="lvloneslider"></div>');

$("#ttesting").append("<h4>"+techarr[1]+"</h4>");
$("#ttesting").append('<div class="lvlonedisp"></div>');
$("#ttesting").append('<div class="lvloneslider"></div>');

$("#ttesting").append("<h4>"+techarr[2]+"</h4>");
$("#ttesting").append('<div class="lvlonedisp"></div>');
$("#ttesting").append('<div class="lvloneslider"></div>');

$("#ttesting").append("<h4>"+techarr[3]+"</h4>");
$("#ttesting").append('<div class="lvlonedisp"></div>');
$("#ttesting").append('<div class="lvloneslider"></div>');

$("#tframework").append("<h3>"+techelements[8]+"</h3>");

$("#tframework").append("<h4>"+framearr[0]+"</h4>");
$("#tframework").append('<div class="lvlonedisp"></div>');
$("#tframework").append('<div class="lvloneslider"></div>');

$("#tframework").append("<h4>"+framearr[1]+"</h4>");
$("#tframework").append('<div class="lvlonedisp"></div>');
$("#tframework").append('<div class="lvloneslider"></div>');

$("#tframework").append("<h4>"+framearr[2]+"</h4>");
$("#tframework").append('<div class="lvlonedisp"></div>');
$("#tframework").append('<div class="lvloneslider"></div>');

$("#tboardgames").append("<h3>"+techelements[9]+"</h3>");
$("#tboardgames").append('<div class="lvldisp"></div>');
$("#tboardgames").append('<div class="lvlslider"></div>');

var lvllen = lvl.length;
var initialValue=1, min=0, max=lvllen-1;

$(".lvldisp").append("<p>"+lvl[0]+"</p>");
$(".lvldisp").append("<p>"+lvl[1]+"</p>");
$(".lvldisp").append("<p>"+lvl[2]+"</p>");
	
$(".lvlslider").slider({
    value:initialValue,
    min: min,
    max: max,
    step: 1,
});

$(".lvlonedisp").append("<p>"+lvl[0]+"</p>");
$(".lvlonedisp").append("<p>"+lvl[1]+"</p>");
$(".lvlonedisp").append("<p>"+lvl[2]+"</p>");
	
$(".lvloneslider").slider({
    value:initialValue,
    min: min,
    max: max,
    step: 1,
});

$.each(othelements, function (i,j) {	
	$("#idother").append("<p>"+j+"</p>");
});

//collapse and open main headings

$("#idessentials > div").children().hide();
$("#idmethodology > div").children().hide();
$("#idspecs > div").children().hide();
$("#idprofile > div").children().hide();
$("#idequipment > div").children().hide();
$("#idtech > div").children().hide();
$("#idother").children('p').hide();

$("#idessentials h2").click(function() {
	$('html, body').animate({
        scrollTop: $("#idessentials h2").offset().top
    }, 1000);
	$("#idessentials > div").children().toggle(50);
	$("#idmethodology > div").children().hide();
	$("#idspecs > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idtech > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idmethodology h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idmethodology h2").offset().top
    }, 1000);
	$("#idmethodology > div").children().toggle(50);
	$("#idessentials > div").children().hide();
	$("#idspecs > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idtech > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idspecs h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idspecs h2").offset().top
    }, 1000);
	$("#idspecs > div").children().toggle(50);
	$("#idessentials > div").children().hide();
	$("#idmethodology > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idtech > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idprofile h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idprofile h2").offset().top
    }, 1000);
	$("#idprofile > div").children().toggle(50);
	$("#idessentials > div").children().hide();
	$("#idmethodology > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idtech > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idequipment h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idequipment h2").offset().top
    }, 1000);
	$("#idequipment > div").children().toggle(50);
	$("#idessentials > div").children().hide();
	$("#idmethodology > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idtech > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idtech h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idtech h2").offset().top
    }, 1000);
	$("#idtech > div").children().toggle(50);
	$("#idessentials > div").children().hide();
	$("#idmethodology > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idother").children('p').hide();
});

$("#idother h2").click(function(){
	$('html, body').animate({
        scrollTop: $("#idother h2").offset().top
    }, 1000);
	$("#idother").children('p').toggle(50);
	$("#idessentials > div").children().hide();
	$("#idmethodology > div").children().hide();
	$("#idprofile > div").children().hide();
	$("#idequipment > div").children().hide();
	$("#idtech > div").children().hide();
});



//Given functions
function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git", "BitBucket"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen", "ESLint"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki", "Confluence"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function PTO() { return enumerate("Accrued", "Unlimited") }

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };

});
