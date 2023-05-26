function getpilihanComputer() {
	const comp = Math.random();
if (comp <0.34)return"gajah";

if (comp >=0.34 && comp <0.67) return"orang";
	return"semut";

	}
	function gethasil(comp,player){

//menentukan rules
if (player == comp)return  "draw"
if( player=="gajah")return(comp =="orang")?'win': 'lose';
if (player=="orang")return(comp == "semut")? "win" : "lose";
 if (player=="semut")return(comp == "gajah")? "win" :"lose";
	
}

function putar(){
	const imgKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah','semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
if (new Date().getTime()-waktuMulai > 1000){
	clearInterval;
	return
}
imgKomputer.setAttribute('src',''+ gambar[i++] + '.png');
if (i == gambar.length) i=0;

},100)}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
pil.addEventListener('click', function()
{
const pilihancomputer = getpilihanComputer();
const pilihanplayer = pil.className;
const hasil = gethasil(pilihancomputer,pilihanplayer);
putar();

//tunggu putar
setTimeout( function(){
const pilComputer = document.querySelector('.img-komputer');
pilComputer.setAttribute('src', ''+ pilihancomputer +'.png');

const info= document.querySelector('.info');
info.innerHTML=hasil;
// Tambahkan skor
const playerSkor = document.querySelector('.sekor');
const komputerSkor = document.querySelector('.skor');
let playerScore = parseInt(playerSkor.innerHTML);
let komputerScore = parseInt(komputerSkor.innerHTML);

if (hasil === 'win') {
	playerScore++;
} else if (hasil === 'lose') {
	komputerScore++;
}

playerSkor.innerHTML = playerScore;
komputerSkor.innerHTML = komputerScore;
},1000);
});
});






// const pgajah = document.querySelector('.gajah');
// pgajah.addEventListener('click',function(){
// const pilihancomputer = getpilihanComputer();
// const pilihanplayer = pgajah.className;
// const hasil = gethasil(pilihancomputer,pilihanplayer);
 

// const pilComputer = document.querySelector('.img-komputer');
// pilComputer.setAttribute('src', ''+ pilihancomputer +'.png');

// const info= document.querySelector('.info');
// info.innerHTML=hasil;
// });

// const porang = document.querySelector('.orang');
// porang.addEventListener('click',function(){
// const pilihancomputer = getpilihanComputer();
// const pilihanplayer = porang.className;
// const hasil = gethasil(pilihancomputer,pilihanplayer);
 

// const pilComputer = document.querySelector('.img-komputer');
// pilComputer.setAttribute('src', ''+ pilihancomputer +'.png');

// const info= document.querySelector('.info');
// info.innerHTML=hasil;
// });

// const psemut = document.querySelector('.semut');
// psemut.addEventListener('click',function(){
// const pilihancomputer = getpilihanComputer();
// const pilihanplayer = psemut.className;
// const hasil = gethasil(pilihancomputer,pilihanplayer);
 

// const pilComputer = document.querySelector('.img-komputer');
// pilComputer.setAttribute('src', ''+ pilihancomputer +'.png');

// const info= document.querySelector('.info');
// info.innerHTML=hasil;
// });