const clock = document.getElementById('clock');
// const clock = document.qureyselector('#clock")
setInterval (function()  {
 let date = new Date ();
 clock.innerHTML = date.toLocaleTimeString();

}, 1000);
