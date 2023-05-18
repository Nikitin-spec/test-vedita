document.addEventListener('DOMContentLoaded', () => {
 
  // Кнопка по которой происходит клик
  let callBackButton = document.getElementById('callback-button');
 
  // Модальное окно, которое необходимо открыть
  let modal1 = document.getElementById('modal-1');
 
  // Кнопка "закрыть" внутри модального окна
  let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
 
  callBackButton.onclick = function () {
    modal1.classList.add('modal_active');
  }
 
  closeButton.onclick = function () {
    modal1.classList.remove('modal_active');
  }
  modal1.onmousedown = function (e) {
  let target = e.target;
  let modalContent = modal1.getElementsByClassName('modal__content')[0];
  if (e.target.closest('.' + modalContent.className) === null) {
    this.classList.remove('modal_active');
  }
};
});

function message () {
    let tel_message=document.getElementById('tel-message').value;
    let str_telnumber=tel_message.match(/[0-9()-]/g); 
    if(str_telnumber!=null) {
   

    let modal1 = document.getElementById('modal-1');
    let closebutton = document.getElementById('closebutton_modal');
    let modal_text = document.getElementById('text-modal');
    let name_connection = document.getElementById('name_connection');
    let tel_message_input=document.getElementById('tel_message');
    let text_modal_massage=document.getElementById('text-modal-massage');
    let tel_message_text=document.getElementById('tel-message');
    
    
    if (closebutton.classList[0]="modal__send-button") {
        
   
    
    closebutton.textContent = "ОК";
    closebutton.classList.remove=("modal__send-button");
    closebutton.classList.add=("modal__send-button-ok");
    modal_text.style.display='block';
    name_connection.style.display='none';
    tel_message_text.style.display='none';
    text_modal_massage.style.display='none';
    
    
    closebutton.id="text-modal-ok";
    }
    
    let button_ok=document.getElementById("text-modal-ok");
    
    button_ok.onclick = function() {
       modal1.classList.remove('modal_active');
      
       
       
    }
    }
     else {
          
          alert ("Введите номер телефона");
           
       }


    
    

    
}