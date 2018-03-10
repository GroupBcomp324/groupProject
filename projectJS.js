var notOfAge = "You must be 21 years of age to drink. No drink specials available.";

function checkAge() {
var elDrink = document.getElementById('ageChoice2').checked;
if (elDrink === true){
    $('#results').append(notOfAge);
}

};

document.getElementById('submitButton').onclick = checkAge;

function clearResults2() {
    $(function() {
        $('p#results').empty();
        $('[type="checkbox"]').each(function() {
        this.checked = false;
    });
        $('[type="date"]').val('');
        $('[type="radio"]').each(function() {
    this.checked = false;
    });
    $('#submitButton').show();
});};
document.getElementById('resetButton').onclick = clearResults2;




//*********************
function showDeals1() {
    $(function(){
    $('p#show-week').toggle();
   

});};

function showDeals2() {
    $(function(){
    $('p#show-popular').toggle();
});};

function showDeals3() {
    $(function(){
    $('p#show-best').toggle();
});};

function showDeals4() {
    $(function(){
    $('p#show-staff').toggle();

});};

document.getElementById('week').onclick = showDeals1;
document.getElementById('popular').onclick = showDeals2;
document.getElementById('best').onclick = showDeals3;
document.getElementById('staff').onclick = showDeals4;



var Foodrecommend1 = "Flacoís Tacos is what we recommend, here is the address 1116 20 West Granville, check http://flacostacosonline.com/ for detial";

function checkFood(){
    var FoodChoice = document.getElementById('activityChoice1').checked;
if (FoodChoice === true )
{
    $('#results').append(Foodrecommend1);
    }   

};




var Foodrecommend2 = "Veranda Restaurant & Coffee, it gives 10% off to loyola student"

function checkLoyolaStudent(){
        var StudentChoice = document.getElementById('studentChoice1').checked;

        if (StudentChoice === true )
            if(FoodChoice === true )

            {
                {

             $('#results').append(Foodrecommend2);
             $('#results').append(Foodrecommend1);
                    }
            }
};





var Eventrecommend1 = "Menís Volleyball vs Ball State. ";
var Eventrecommend2 = "Loyola Fine Arts Exibition ";


function checkevent(){
var eventChoice = document.getElementById('activityChoice3').checked;
var dateChoice = document.getElementById('date').checked;
 
 $('#results').append("here is check event");

if (eventChoice === true )
{

    $('#results').append(Eventrecommend2);

    if (dateChoice === 2018-05-03)
    {
    $('#results').append(Eventrecommend1);
        }
    }   
$('#submitButton').hide();

}


var count=0;
var re=new Array("Flaco抯 Tacos",
	"Veranda Restaurant & Coffee",
	"Veranda Restaurant & Coffee ， 10% off for student",
	"Volleyball vs Ball State 7:00 pm Gentile Arena",
	"In/Motion Dance Film Festival 7:30 pm Newhart Family Theatre",
	"not recommend");
function submitButtonClick(){
	 $('#results').empty();
	 if(document.getElementById('activityChoice1').checked){
		 if(document.getElementById('studentChoice1').checked)
			$('#results').append(re[2]);
		 else
			$('#results').append(re[0]);
		return ;
	 }
	 if(document.getElementById('activityChoice3').checked){
		if(document.getElementById(' date ').value==="2018-05-28") {
			 $('#results').append(re[3]);
			 return ;
		}
		if(document.getElementById(' date ').value==="2018-06-03") {
			 $('#results').append(re[4]);
			 return ;
		}
		$('#results').append(re[5]);
		return ;
	 }
	 if(document.getElementById('activityChoice2').checked){
		 if(document.getElementById('ageChoice1').checked)
		 {
			 if(Math.random()*10>5)
			 	$('#results').append(re[0]);
			else
				$('#results').append(re[1]);
			return ;
		 }
	 }
	 $('#results').append(re[5]);
}
document.getElementById('submitButton').onclick = submitButtonClick;




