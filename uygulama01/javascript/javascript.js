var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});



// Sepet Sayı Artırma ve azaltma 


  
function artir(){
  var sonuc = document.getElementById("sonuc");
  sonuc.value = Number(sonuc.value) +1;
}

function azalt(){
  var sonuc=document.getElementById("sonuc");
  if(sonuc.value <= 0){
    alert("Sepetiniz Negatif Değer Alamaz\nKaçış İşareti");
  }else{
    sonuc.value=Number(sonuc.value)-1;
  } 
}

 js: flickity.pkgd.js
// Karşılaştırma Operatörleri
//  == İki Eşittir : Gerçek Eşitliği Gösterir 
//  != Eşit Değil  Farklı  <>
//  >=  Büyük Eşit
//  <=  Küçük Eşit