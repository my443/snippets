document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    console.log(target);
    console.log(text);
    e.target.click();
}, false);


// with 100 times
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    console.log(target);
    console.log(text);
    e.target.click();

    multipleClick(e.target);

}, false);


function multipleClick(target){
    for (i=0;i<=100;i++){
    target.click();
    }


////////////////////////////////////////////////
document.addEventListener('click', function(e) {
    var timesToRun = 100;
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    //console.log(target);
    //console.log(text);
    multipleClick(e.target);
    
}, false);

function multipleClick(target){
    for (i=0;i<=100;i++){
    setInterval(function(){target.click();}, 1000);
    }
}