let t = [];
let P1 = [];
let P2 = [];

let a;
let b;
let c;
let d;

let P10;
let P20;

let dt = 0.1;
let tMax = 200;

let grafik;

function setup() {
  createCanvas(400, 400);
  P10 = createInput("20");
  P10.position(20, 410);
  P20 = createInput("40");
  P20.position(100, 410);
  a = createSlider(0.1,2,0.4,0.01);
  a.position(20, 450);
  b = 0.01;
  c = 0.1;
  d = 0.5;
  let p = createP('kondisi awal')
  p.style ('fontsize','14px');
  p.position(20, 380);
  let q = createP('Parameter')
  q.style ('fontsize','14px');
  q.position(20, 420);
  solve();
  grafik = new Chart(this, config);
  
  P10.changed(solve);
  P20.changed(solve);
  a.changed(solve);
}
function draw() {
  grafik.update()
}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  let iterNum = int(tMax / dt);
  for  (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt * as * P1[i]-dt*b* P1[i]*P2[i];
    P2[i+1] = P2[i] + dt * c * P1[i+1]*P2[i]- dt*d*P2[i];
    t[i+1] = round((i + 1) * dt,3);
  }
}