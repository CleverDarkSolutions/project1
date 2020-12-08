let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 10000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
})

controls = new THREE.OrbitControls(camera, renderer.domElement);

const amLight = new THREE.AmbientLight(0xFFFFFF,1);
scene.add(amLight);

const pointLight = new THREE.PointLight( 0xFFFFFF, 9, 10);
pointLight.position.set( 0, 0, 0 );
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight(0xFF00FF, 0.2);
//scene.add(directionalLight);

const geometryMain = new THREE.BoxGeometry(1500,700,1500);
const cubeMaterialsMain = 
[
new THREE.MeshLambertMaterial({color: 0xDC143C, side: THREE.DoubleSide}),
new THREE.MeshLambertMaterial({color: 0xF0FFFF, side: THREE.DoubleSide}),
new THREE.MeshLambertMaterial({color: 0x6495ED, side: THREE.DoubleSide}),
new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('floor.jpg'), side: THREE.DoubleSide}),
new THREE.MeshLambertMaterial({color: 0xC3C3C3, side: THREE.DoubleSide}),
new THREE.MeshLambertMaterial({color: 0xFFFF00, side: THREE.DoubleSide}),
];
const materialMain = new THREE.MeshFaceMaterial(cubeMaterialsMain);
const externalCube = new THREE.Mesh(geometryMain,materialMain);
scene.add(externalCube);

scene.background = new THREE.Color(0xC4C4C4);
camera.position.z = 20;
// cube
const geometry1 = new THREE.CubeGeometry(10,10,10);
const material1 = new THREE.MeshPhongMaterial({color: 0x00FF00, side: THREE.DoubleSide});
const cube = new THREE.Mesh(geometry1,material1);
scene.add(cube);

//cone

const geometry2 = new THREE.ConeGeometry(5,20,32);
const material2 = new THREE.MeshPhongMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const cone = new THREE.Mesh(geometry2,material2);
scene.add(cone);
cone.position.set(20,5,20);

const geometry3 = new THREE.PlaneGeometry(100,100,64);
const material3 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('logo.png'), side: THREE.DoubleSide});
const plane = new THREE.Mesh(geometry3,material3);
scene.add(plane);
plane.position.set(100,100,10);

const dotGeometry = new THREE.SphereGeometry(4);
const dotMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const dot = new THREE.Mesh(dotGeometry,dotMaterial);
scene.add(dot);

dot.position.set(5,10,5);

let update = function (){
    
};

let render = function (){
    renderer.render(scene,camera)
};

let mainLoop = function (){
    requestAnimationFrame(mainLoop);

    update();
    render();
}

mainLoop();