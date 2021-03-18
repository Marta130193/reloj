window.onload = function() {
    setInterval(getTime, 1000);
};
// window.onload= function (){
// 	cargarImagen()};

function getTime(){
	const secondHand = document.querySelector('.secHand');
	const minuteHand = document.querySelector('.minHand');
	const hourHand = document.querySelector('.hourHand');

	const now = new Date();
   
	/** segundos */
  	const segundos = now.getSeconds();
  	const secondsDegrees = ((segundos / 60) * 360) + 90;
  
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		secondHand.style.transition = 'none';
	} else if (secondsDegrees >= 91) {
		secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
	}  
   	/** minutos */
  	const minutos = now.getMinutes();
  	const minutesDegrees = ((minutos / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** horas */
  	const horas = now.getHours();
  	const hoursDegrees = ((horas / 12) * 360) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}



// function cargarImagen(){
// 	ahora=new Date();
// 	hora=ahora.getHours();
// 	if(hora<8){
// 	imagen= URL("./img/nube2.png");
// 	}
	
// 	else if (hora>7 && hora<12){
// 	imagen="./img/luna.png";
// 	}
// 	document.images["reloj"].src=imagen;
// 	}


