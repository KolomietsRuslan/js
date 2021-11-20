const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

/*document.body.insertAdjacentHTML('beforeEnd',
`<div class="clock">
    <div class="hour">
        <div class="hr" id="hr"></div>
    </div>
    <div class="min">
        <div class="mn" id="mn"></div>
    </div>
    <div class="sec">
        <div class="sc" id="sc"></div>
    </div>
</div>`
);*/

setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})