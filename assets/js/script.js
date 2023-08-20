const calendar = document.querySelector('.calendar');

//const calendarIcon = document.querySelectorAll('.calendar-icon');
let boxOpened = document.querySelector('.box-opened');
let modalHidden = document.querySelector('.modal-hidden');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');
const modalContent = document.querySelector('.modal-content');
const modalButton = document.querySelector('.modal-button');



//operazioni di avvio

for(let i = 0; i < source.length; i++ ){
    //creamo una finestra per ogni uno di loro
    const box = creabox(i);
    calendar.innerHTML += box;
}




//eventi dinamici
let calendarBox = document.querySelectorAll('.calendarBox');
for (let i = 0; i < calendarBox.length; i++) {
    const boxclic = calendarBox[i];
    //rende cliccabile questo box
    boxclic.addEventListener('click', function() {
        boxclic.classList.add('box-opened'); 
        //riempire box
        modalContent.innerHTML= riempiBox(i);
       //apri modale
       openModel(i);
    });
}

modalButton.addEventListener('click',function(){
    closeModal();
    })

  //funzioni
  function creabox(i){
    const date = i + 1 ;
    const icon = source[i].icon;
    const title = source[i].title;
    return `
    <div class="calendarBox">
      <img class="calendar-icon" src="./assets/images/icons/${icon}.png" alt="${title}">
     <div class="calendar-date">${date}</div>
    </div>`;
}

function openModel(i){
   modal.classList.remove('modal-hidden');
}
function closeModal(){
    modal.classList.add('modal-hidden');

}
function riempiBox(i){
    const infoBox= source[i];
    //const text = source[i].text;
   // return`${source[i].url} ? '<img src="${url}" ' : '<div>${text}</div>'`
   if (infoBox.type === 'image') {
    return `<div class="calendar-box">

               <img src="assets/${infoBox.url}" alt="">
            </div>`;
} else if (infoBox.type === 'text') {
    return `<div class="calendar-box">
            
                <div class="calendar-date">${infoBox.text}</div>
            </div>`;
}

}
