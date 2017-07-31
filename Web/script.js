
function addPlayer() {
	alert('michel');
}

function addPlayer(event){
	let pseudo = event.data.pseudo;
    let bonus = event.data.bonus;
    let pret = event.data.pret;
	let contentHtml = '<div class="infoAdversaire"><div class="advNom">'+pseudo+'</div><div class="advBonus"><div class="advFleche">/\</div><div class="advCarte">Carte</div><div class="advFleche">\/</div></div><div class="advPret">'+pret+'</div></div>';
	$(".infoAdversaires").append( contentHtml );
}
function deletePlayer(event){
	let pseudo = event.data.pseudo;
	$(".infoAdversaire")[0].remove();
//	$(".infoAdversaire").css( "border", "3px solid red" );
}

function deletePv(event){
	let nbPv = event.data.nbPv;
	/*
	console.log($(".degats"));
	console.log($(".degat"));
	console.log($(".degat")[0]);
	//prepend
	*/
	$(".degat")[0].remove();
}

function addPv(event){
	let nbPv = event.data.nbPv;
	let htmlContent = '<div class="degat">1</div>';
	$(".degats").prepend(htmlContent);

}

	

$(document).ready(function() {
	var name = 'Michel';
	var bonus = 'Explostion,freinAMain';
	var pret = true;
	//$(".addPlayer").click({pseudo: "Bobby", bonus: "1,2,3", pret: true}, cool_function);
	$(".addPlayer").click({pseudo: name, bonus: bonus, pret: pret}, addPlayer);
	$(".deletePlayer").click({pseudo: name}, deletePlayer);
	$(".deletePv").click({nbPv: 2}, deletePv);
	$(".addPv").click({nbPv: 2}, addPv);

	
});

