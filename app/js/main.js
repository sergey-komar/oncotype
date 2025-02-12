$(function () {
    $(".video-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        
      });


    $(".reviews-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        
      });

    $('.questions-accardion__btn').on('click', function(){
            $(this).next().slideToggle(500); 
        });


})


    window.addEventListener('DOMContentLoaded', () => {
          const questionsBtn = document.querySelectorAll('.questions-accardion__btn');

          questionsBtn.forEach(item => {
            item.classList.toggle('open')
          });


          
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


