var target;
function Menu(options) { //открывает список
    var elem = options.elem;

    elem.onclick = function (event) {
        if (event.target.closest('.title')) { // это исходный элемент, на котором произошло событие
                                              // возвращает ближайший родительский элемент или сам элемент
            elem.classList.toggle('open'); //если класса open нет, добавляет его, если есть – удаляет.
        }

    };

    var elem2 = options.elem2; //записывает в поле
    elem2.onclick = function (event) {
       target = event.target;
       // alert(target.innerText);
        //console.log(document.getElementById('homes'));//текст в поле
       // console.log (target.innerText);//что выбрали

        //document.getElementById('home').value = target.innerText;
        VT.getEl('input[type="text"]').value = target.innerText;

    }
}

function NewLis() { //меняет значение

    for (var i = 0; i < getHomeNames().length; i++){
        var newLi = document.createElement('li');
        newLi.innerHTML = getHomeNames()[i];
        homes.appendChild(newLi);
    }

}

function SaveForms() {
    //target.innerText = document.getElementById('home').value;
    target.innerText = VT.getEl('input[type="text"]').value;




    if (!VT.getEl('input[type="text"]').value) {
        //document.getElementById("form").style.border = "1px solid red";

        VT.addClass('#form', 'error1');
        // VT.addClass('input[type="button"]', 'error1');
        // document.getElementById("form").className = document.getElementById("form").className + " error";
       //alert(document.getElementsByClassName('error')[0].value);
       // document.getElementsByClassName('error').firstChild.className = document.getElementsByClassName('error').firstChild.className + " error";


    }
}
function validForm() {
        // document.getElementById("form").style = "";
        // document.getElementById("form").className = document.getElementById("form").className.replace(" error", "");
        VT.removeClass('#form', 'error1');
        // VT.removeClass('input[type="button"]', 'error1');
}
