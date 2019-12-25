
const buttonsPhoto = document.getElementById('buttons-photo');
const buttonActive = document.getElementsByClassName('fittrainer__button-active');
const photoSlide = document.getElementsByClassName('fittrainer__img');

buttonsPhoto.addEventListener('click', function (event) {
        let target = event.target.closest('button');
        let targetButton = event.target.closest('[data-id]');




        for (i = 0; i < buttonActive.length; i++) {
            buttonActive[i].classList.remove('fittrainer__button-active');
        };

        for (i = 0; i < photoSlide.length; i++) {

            if (photoSlide[i].dataset.id === targetButton.dataset.id) {

                photoSlide[i].classList.add('fittrainer__img-active')
            } else {
                photoSlide[i].classList.remove('fittrainer__img-active');
            }
        }




        target.classList.add('fittrainer__button-active');



    });

const buttonsRecepies = document.getElementById('recepies-buttons');

const buttonRecepiesActive = document.getElementsByClassName('recepies__button-active');
const recepiesSlide = document.getElementsByClassName('recepies__link');

buttonsRecepies.addEventListener('click', function (event) {
        let target = event.target.closest('button');
        let targetButton = event.target.closest('[data-id]');




        for (i = 0; i < buttonRecepiesActive.length ; i++) {
            buttonRecepiesActive[i].classList.remove('recepies__button-active');
        };

        for (i = 0; i < recepiesSlide.length; i++) {

            if  (targetButton.dataset.id < 2) {

                recepiesSlide[i].classList.add('recepies__link-active')
            } else if  (recepiesSlide[i].dataset.id === targetButton.dataset.id) {

                recepiesSlide[i].classList.add('recepies__link-active')
            } else {
                recepiesSlide[i].classList.remove('recepies__link-active');
            }
        }




        target.classList.add('recepies__button-active');



    });

const buttonMoreRecepies = document.getElementById('recepies-button-more');
const buttonAllRecepies = document.getElementById('recepies-button-all');

buttonMoreRecepies.addEventListener('click', function (event) {

    for (i = 0; i < buttonRecepiesActive.length ; i++) {
            buttonRecepiesActive[i].classList.remove('recepies__button-active');
        };
    
        for (i = 0; i < recepiesSlide.length; i++) {

            

                recepiesSlide[i].classList.add('recepies__link-active')
            
        };

    buttonAllRecepies.classList.add('recepies__button-active'); 
    buttonMoreRecepies.classList.add('recepies__more-inactive');
    });
