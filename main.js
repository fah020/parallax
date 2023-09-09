const birds = document.querySelectorAll('.header__birds')
const wolf = document.querySelector('.header__wolf')


window.addEventListener('scroll',() =>{
    console.log(this.scrollY);

    birds.forEach((bird) => {
        bird.style.transform = `translateX(${this.scrollY}px)`

        wolf.style.transform = `translate(${this.scrollY}px)`
    });
})