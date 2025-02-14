$(function () {
    $(".video-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 968,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              }
            },
           
          ]
      });


    $(".reviews-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
         
        ]
      });

    $('.questions-accardion__btn').on('click', function(){
            $(this).next().slideToggle(500); 
        });


})


    window.addEventListener('DOMContentLoaded', () => {


            const menu = document.querySelector('.menu');
            const mobile = document.querySelector('.nav-icon');

            mobile.addEventListener('click', function(){
                this.classList.toggle('nav-icon--active');
                menu.classList.toggle('nav--active');

            });
            //Находим ссылки внутри мобильной навигации
            const navLinks = document.querySelectorAll('.menu__list a');

            //Обходим ссылки методом forEach
            navLinks.forEach(function (item) {
              //Для каждой ссылки добавляем прослушку по событию "Клик"
              item.addEventListener('click', function () {
                mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
                menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
            
              });
            });



          const questionsBtn = document.querySelectorAll('.questions-accardion__btn');

          questionsBtn.forEach(item => {
            item.addEventListener('click', () => {
              item.classList.toggle('open')
            })
          })


          
          const btn = document.querySelector('.btnUp');

          btn.addEventListener('click', ()=>{
              window.scrollTo({
                  top: 0, 
                  behavior: 'smooth' 
      
                  });
              });


          function up() {
            window.addEventListener('scroll', () => {
                if(window.scrollY > 690){
                btn.classList.add('btnUp-visible');
                }else{
                btn.classList.remove('btnUp-visible');
                }
            })
              }

          up();

          const header = document.querySelector(".header-box");

          if (header) {
            window.addEventListener("scroll", () => {
              if (window.scrollY > 10) {
                header.classList.add("header-bg");
              } else {
                header.classList.remove("header-bg");
              }
            });
          }


        // Маска для Инпута
        var element = document.getElementById('input-mask');
        var element1 = document.getElementById('input-mask1');
        var element2 = document.getElementById('input-mask2');
        
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };

        if(element){
            var mask = IMask(element, maskOptions);
        }
        if(element1){
            var mask1 = IMask(element1, maskOptions);
        }
        if(element1){
            var mask2 = IMask(element2, maskOptions);
        }
  
        const modalBtn = document.querySelectorAll('.btn-click');
        const modal = document.querySelector('.modal');
        const modalCloseBtn = document.querySelector('.modal__close');
    
    
    
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show-modal');
                modal.classList.remove('hide-modal');
                document.body.style.overflow = 'hidden';
            })
        });
    
        modalCloseBtn.addEventListener('click', ()=>{
                modal.classList.add('hide-modal');
                modal.classList.remove('show-modal');
                document.body.style.overflow = '';
        });
    
        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide-modal');
                modal.classList.remove('show-modal');
                document.body.style.overflow = '';
            }
        });
    
        document.addEventListener('keydown', (e)=>{
            if(e.code == 'Escape' && modal.classList.contains('show-modal')){
                modal.classList.add('hide-modal');
                modal.classList.remove('show-modal');
                document.body.style.overflow = '';
            }
        })
    



})


