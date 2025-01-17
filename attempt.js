let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
let canvas = renderer.domElement;
canvas.style.position = "absolute";
canvas.style.top = "0px";
canvas.style.zIndex = "-1";
document.getElementsByClassName('wrapper')[0].appendChild(canvas);


window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width > 770) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    else{
        renderer.setSize(width, 1500);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
})

//const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 10;
camera.position.x = 10;
camera.position.y = 7;

scene.background = new THREE.Color(0x000000);

let welcomeText = document.createElement('div');
welcomeText.innerHTML += "Witaj na stronie gdańskiego Google Development Student Club.";
welcomeText.className = "welcomeText";
welcomeText.setAttribute("id", "welcomeText");
welcomeText.style.display = "none";
document.body.appendChild(welcomeText);

let mainContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
document.getElementById("mainContent").innerHTML = mainContent;

// TEXT FORMATTING //
//Nie mam pojęcia co tu sie dzieje ale znalazłem to sobie wziąłem i działa  
let textWrapper = document.querySelector('.welcomeText');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper3 = document.querySelector('.mainContent');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper2 = document.querySelector('#elementOne');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter spanOne'>$&</span>");

let textWrapper4 = document.querySelector('#elementTwo');
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter spanTwo'>$&</span>");

let textWrapper5 = document.querySelector('#elementThree');
textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter spanThree'>$&</span>");

let textWrapper6 = document.querySelector('#elementFour');
textWrapper6.innerHTML = textWrapper6.textContent.replace(/\S/g, "<span class='letter spanFour'>$&</span>");

function textAnimation3() {
    anime.timeline({
            loop: 1
        })
        .add({
            targets: '.mainContent .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 50 * (i + 1)
        })
}

function textAnimation2() {
    anime.timeline({
            loop: 1
        })
        .add({
            targets: '.navElement .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 50 * (i + 1)
        })
}


function textAnimation() {
    anime.timeline({
            loop: 1
        })
        .add({
            targets: '.welcomeText .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 43 * (i + 1)
        })
}

function hoverSelectedMenu(item) {
    // DO POPRAWY
    document.getElementById("elementOne").style.fontSize = "30";
    document.getElementById("elementTwo").style.fontSize = "30";
    document.getElementById("elementThree").style.fontSize = "30";
    document.getElementById("elementFour").style.fontSize = "30";
    document.getElementById(item).style.fontSize = "45";
}

//-----------------TEXT---------------------------

class contentObj {
    constructor(text, number) {
        this.text = text;
        this.number = number;
    }
};

let subPage1 = new contentObj("strona1", 1);
let subPage2 = new contentObj("strona2", 2);
let subPage3 = new contentObj(mainContent, 3);
let subPage4 = new contentObj("strona4", 4);
let currentPage = 0;

function loadPage(content) {
    if (currentPage != content.number) {
        document.getElementById("mainContent").style.display = "none";

        setTimeout(function () {
            document.getElementById("mainContent").innerHTML = content.text;
            textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            textAnimation3();
        }, 200);

        setTimeout(function () {
            document.getElementById("mainContent").style.display = "block";
        }, 300);

        currentPage = content.number;
    }

}

//-----------------CSS-PROPERTIES-BO-NIE-DZIAŁA---------------

document.getElementById("mainContent").className += " slideSideways";
document.getElementById("secondScene").className += " slideSideways";

//------------------------------------------------------------

let counter = 0;
let interval1;

function accelerate() {
    if (camera.position.z < 12.5) {
        counter++;
        camera.position.z += 0.0175;
    }
    if (camera.position.z > 12.4) {
        clearInterval(interval1);
    }
}

let testvar1 = 13;
let interval2;

function test() {
    document.querySelectorAll('.slideSideways').forEach(function (item) {
        if (testvar1 < 200) {
            let value = testvar1;
            item.style.left = value + "vw";
            testvar1 *= 1.01;
        } else {
            document.getElementById("secondScene").style.left = 13 + "vw";
            document.getElementById("mainContent").style.left = 13 + "vw";
            clearInterval(interval2);
        }

    })
}



let dotArray = [];

function addDots(n) {

    for (var j = 0; j < n; j++) {
        const dotGeometry = new THREE.SphereGeometry(0.01, 12, 12);
        const dotMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            side: THREE.DoubleSide
        });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        scene.add(dot);
        dotArray.push(dot);
        let randomNum1 = Math.random() * 20; // 25
        let randomNum2 = Math.random() * 15; // 10
        let randomNum3 = (Math.random() * 10) + 10;
        dot.position.set(randomNum1, randomNum2, randomNum3);
    }
}

function updateDots() {
    let array = dotArray;
    for (var i = 0; i < array.length; i++) {
        array[i].position.x += 0.01;
        array[i].position.y += 0.01;
        array[i].position.z -= 0.01;

        let randomNum1 = Math.random() * 15;
        let randomNum2 = Math.random() * 10;
        let randomNum3 = (Math.random() * 5) + 10;

        if (array[i].position.x > 20 || array[i].position.y > 15 || array[i].position.z < 0) {
            array[i].position.x = randomNum1;
            array[i].position.y = randomNum2;
            array[i].position.z = randomNum3;
        }
    }
}


//----TIMEOUTS--------------------------

setTimeout(function () {
    setTimeout(function () {
        document.getElementById("welcomeText").style.display = "block"
    }, 500); // zapobieganie przedwczesnemu zaladowaniu sie animacji
    textAnimation();
}, 100);

setTimeout(function () {
    interval1 = setInterval(function () {
        accelerate()
    }, 5);
    textAnimation2();
    textAnimation3();
    document.getElementById("welcomeText").style.display = "none";
}, 7000);

setTimeout(function () {
    document.getElementById("secondScene").style.display = "block";
    document.getElementById("mainContent").style.display = "block";
}, 7500);

setTimeout(function () {
    interval2 = setInterval(function () {
        test();
    }, 5);
}, 12000);
//--------------ONCLICKS------------

document.querySelectorAll('.spanOne').forEach(function (item) {
    item.addEventListener('click', function () {
        loadPage(subPage1);
        //       setInterval(function(){accelerate2(1)},10);
    })
})

document.querySelectorAll('.spanTwo').forEach(function (item) {
    item.addEventListener('click', function () {
        loadPage(subPage2);
    })
})

document.querySelectorAll('.spanThree').forEach(function (item) {
    item.addEventListener('click', function () {
        loadPage(subPage3);
    })
})

document.querySelectorAll('.spanFour').forEach(function (item) {
    item.addEventListener('click', function () {
        loadPage(subPage4);
    })
})

document.getElementById("elementOne").addEventListener("click", function () {
    hoverSelectedMenu("elementOne");
});

document.getElementById("elementTwo").addEventListener("click", function () {
    hoverSelectedMenu("elementTwo");
});

document.getElementById("elementThree").addEventListener("click", function () {
    hoverSelectedMenu("elementThree");
});

document.getElementById("elementFour").addEventListener("click", function () {
    hoverSelectedMenu("elementFour");
});

//------------------------------------------------

//if(document.querySelector('body').style.maxWidth == "")

let update = function () {
    updateDots();
};

let render = function () {
    renderer.render(scene, camera);
};

let mainLoop = function () {
    requestAnimationFrame(mainLoop);
    update();
    render();
}
addDots(1500);
mainLoop();