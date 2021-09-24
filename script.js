function activateFunc(event) {
    var newActiveClass = "#" + (event.id) + "";
    document.querySelector("#bottomNav .activated").classList.remove("activated");
    document.querySelector(newActiveClass).classList.add("activated");
}


function partMenuFunc(e) {
    var pedMenu = ".pedMenu #" + (e.id) + "";
    var pedItems = "#pedItems #" + (e.id) + "";


    document.querySelector(".pedMenu .black_gray").classList.remove("black_gray");
    document.querySelector(pedMenu).classList.add("black_gray");

    document.querySelector("#pedItems .activated_part").classList.remove("activated_part");
    document.querySelector(pedItems).classList.add("activated_part");

}





function dataProductionLogic(ev) {
    var mystate = ev;
    window.history.pushState({ mystate }, "", ev);

    homeAppoinmnt(ev);

}




function homeAppoinmnt(push) {

    if (push === "home") {
        // sending back to home 
        document.querySelector(".commonPageClass.activeNow").classList.remove("activeNow");
        document.getElementById("foreignPages").classList.remove("slide");
        document.getElementById("homePage").classList.add("activeNow");
        document.getElementById("homePage").classList.add("slideBack");


    }




    else {
        // fetching data 
        document.querySelector(".commonPageClass.activeNow").classList.remove("activeNow");
        document.getElementById("foreignPages").classList.add("activeNow");
        document.getElementById("foreignPages").classList.add("slide");


        $.ajax({
            url: push + ".html",
            context: document.body
        }).done(function (data) {
            $("#foreignPages").html(data);
        });
    }

}






window.addEventListener('popstate', e => {

    homeAppoinmnt(e.state.mystate);
    console.log(e.state.mystate);
    history.replaceState({ mystate: null }, '', './');


});
