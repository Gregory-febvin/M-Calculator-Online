const modal		= document.getElementById("modal")
				, button	=	document.getElementById("monstre")
				, close		=	document.getElementById("close");

button.addEventListener("click", () => modal.style.display = "block");

close.addEventListener("click", () => modal.style.display = "none");

for (const element of document.querySelectorAll(".img_monstre")) {
	element.addEventListener('click', (event) => {
		modal.style.display = "none" 
	})
  }


							const modal_talent		= document.getElementById("modal_talent")
											, button_talent	=	document.getElementById("talent")
											, close_talent		=	document.getElementById("close_talent")
											, button_selec_talent = document.getElementsByClassName("img_talent");

							button_talent.addEventListener("click", () => modal_talent.style.display = "block");

							close_talent.addEventListener("click", () => modal_talent.style.display = "none");



							for (const element of document.querySelectorAll(".img_monstre")) {
								element.addEventListener('click', (event) => {
									modal_monstre.style.display = "none" 
								})
							}

																	const modal_arme		= document.getElementById("modal_arme")
																	, button_arme	=	document.getElementById("arme")
																	, close_arme		=	document.getElementById("close_arme")
																	, button_selec_arme = document.getElementsByClassName("img_arme");

																	button_arme.addEventListener("click", () => modal_arme.style.display = "block");

																	close_arme.addEventListener("click", () => modal_arme.style.display = "none");



																	for (const element of document.querySelectorAll(".img_arme")) {
																	element.addEventListener('click', (event) => {
																	modal_arme.style.display = "none" 
																	})
																	}












 function talent(form1, name) {
	var elements = document.getElementsByClassName("img_talent") ;
	var num_talent = form1;
	console.log(form1);
	/*alert("Vous avez choisie : " + form1);*/
	alert("Vous avez choisie : " + name);
	}


				function monstre(form2, name) {
					var elements = document.getElementsByClassName("img_monstre") ;
					var num_monstre = form2;
					console.log(form2);
					/*alert("Vous avez choisie : " + form2);*/
					alert("Vous avez choisie : " + name);
					}


											function arme(form3, name) {
												var elements = document.getElementsByClassName("img_arme") ;
												var num_arme = form3;
												console.log(form3);
												/*alert("Vous avez choisie : " + form3);*/
												alert("Vous avez choisie : " + name);
												}




	/* $arr = array('ok' => $talents);
        alert($talents);
        $data = json_encode($arr)
*/