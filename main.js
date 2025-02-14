const dvd = document.getElementById('dvd');
let x_speed = 7;
let y_speed = 7;

function init(){
    dvd.style.position ='absolute';
    document.body.style.background= '#4d4d4d';
    update_color();
    setInterval(frame,5);
}

function update_color(){
    let color = Math.round(Math.random()*100);
    dvd.style.fill =`hsl(${color},100%,50%)`;
}

function handle_collision(){
    let dvd_height= dvd.offsetHeight;
    let dvd_width= dvd.offsetWidth;
    let dvd_top = dvd.offsetTop;
    let dvd_left = dvd.offsetLeft;

    let win_height= window.innerHeight;
    let win_width= window.innerWidth;

    if(dvd_left<=0 || dvd_left+dvd_width>=win_width){
         x_speed= -x_speed
         update_color()
    }

    if(dvd_top<=0 || dvd_top+dvd_height>=win_height){
        y_speed= -y_speed
        update_color()
   }

}

function frame(){
    handle_collision();
    dvd.style.top=dvd.offsetTop+y_speed
    dvd.style.left=dvd.offsetLeft+x_speed
}
init();