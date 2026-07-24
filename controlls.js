

// CLICK EVENTS


const clearNavOption = () => {
    navOptions.forEach((option) => {
        option.classList.remove('active');
    })
}
const clearDropMenu = () => {

    document.querySelectorAll('.drop-menu').forEach((menu) => {
        menu.classList.remove('active');
    })
}

//NAVIGATION click 👆
const navOptions = document.querySelectorAll('.nav-menu>li>a');
navOptions.forEach((option) => {
    option.addEventListener('click', () => {
        //clearify
        if (option.classList.contains('drop-toggle') && option.classList.contains('active')) {
            option.classList.remove('active');
            clearDropMenu();
            return;
        }
        clearNavOption();
        clearDropMenu();


        //adding 
        option.classList.add('active');

        if (option.classList.contains('drop-toggle')) {
            const dropMenu = option.nextElementSibling;
            dropMenu.classList.add('active');
        }
    })
})

//OUTSIZE CLICK 🚀👆
document.addEventListener('click', (event) => {
    if (!document.querySelector('.nav-menu').contains(event.target)) {
        clearNavOption();
        clearDropMenu();
    }
})

//'dropMenu' OPTION CLICK 📃👆
const dropMenus = document.querySelectorAll('.drop-menu');
const dropOptions = document.querySelectorAll('.drop-menu a');

const clearDropOption = () => {
    document.querySelectorAll('.drop-menu.active a').forEach(option => {
        option.classList.remove('active');
    })
}

var algorithm = '';
dropOptions.forEach((option) => {
    option.addEventListener('click', () => {
        //clearify
        clearDropOption();
        clearDropMenu();
        clearNavOption();

        //adding
        option.classList.add('active');

        if (document.querySelector('#algo').contains(option)) {
            let text = option.innerText;
            algorithm = text.split(' ')[0];
            visualizeBtn.innerText = `Visualize ${algorithm}`;
        }
    })
})


//========== GUIDE TOGGLE ⏬⏬

const guide = document.querySelector('.guide');
const guideToggle = document.querySelector('.guide-toggle');
guideToggle.addEventListener('click', () => {
    guide.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    if (!guideToggle.contains(e.target))
        guide.classList.remove('active');

})



// ============== BUTTONS INTERATION 🟡👆 ==================

const clearPathBtn = document.querySelector('#clear-path');
const clearBoardBtn = document.querySelector('#clear-board');
const speedOptions = document.querySelectorAll('#speed .drop-menu a');

const fast_AnimateDelay = 7;
const normal_AnimateDelay = 10;
const slow_AnimateDelay = 50;
let delay = normal_AnimateDelay;

speedOptions.forEach((option) => {
    option.addEventListener('click', () => {
        let pickedSpeed = option.innerText;
        if (pickedSpeed === 'Fast') delay = fast_AnimateDelay;
        else if (pickedSpeed === 'Normal') delay = normal_AnimateDelay;
        else delay = slow_AnimateDelay;
    })
})


clearPathBtn.addEventListener('click', clearPath);
clearBoardBtn.addEventListener('click', clearBoard);
let wallToAnimate;