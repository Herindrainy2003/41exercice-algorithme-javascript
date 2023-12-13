let work_time = 30 * 60
let repos_time = 5 * 60 
let is_tart = false
let miniteur


let work  = document.getElementById('work')
let repos = document.getElementById('repos')
let start_btn = document.getElementById('start_btn')
let pause_btn = document.getElementById('pause_btn')
let restart_btn = document.getElementById('restart_btn')

start_btn.addEventListener('click' , start_muniteur)
pause_btn.addEventListener('click' , pause_muniteur)
restart_btn.addEventListener('click' , restart_muniteur)


function start_muniteur(){
    if(!is_tart){
        is_tart = true
        miniteur = setInterval(lancer_muniteur , 1000)
    }
}

function restart_muniteur(){
    clearInterval(miniteur)
    is_tart = false
    work_time = 30 * 60
    repos_time = 5 * 60
    afficher_minuteur(work_time , work)
    afficher_minuteur(repos_time , repos)
    
}

function lancer_muniteur(){
    if(work_time > 0){
        work_time--
        afficher_minuteur(work_time , work)
    }else if(repos_time < 0){
        repos_time--
        afficher_minuteur(repos_time , repos)
    }else{

    }
}

function afficher_minuteur(time , display){
    let munites = Math.floor(time / 60)
    let secondes = time % 60
  secondes = (secondes < 10 ? `0${secondes}` : secondes)
  display.textContent = `${munites} : ${secondes}`
}

function pause_muniteur(){
    clearInterval(miniteur)
    is_tart = false
}

