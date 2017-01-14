window.onload = function (event) {

    var content;

    if (event.target.forms.cadaster) {
        event.target.forms.cadaster.parentElement.style.display = "none";
    }

    function setElementClass(elements, element) {
        if (elements.indexOf(element) < 0) {
            elements.push(element);
            var classElement = animateElements.classNameElement[animateElements.elements.indexOf(element.tagName.toLowerCase())];
            element.className = element.className + ' ' + classElement;
        }
    }

    animateElements = {
        elements: ['h1', 'hr', 'div'],
        classNameElement: ['fadeInDown', 'bounceInDown', 'bounceInDown']
    };

    var elements = [];

    content = document.getElementsByClassName('content')[0];

    for (iElement in content.children) {
        var element = content.children[iElement];
        if (element.classList && element.classList.contains('animated')) {
            if (animateElements.elements.indexOf(element.tagName.toLowerCase()) >= 0) setElementClass(elements, element);
        }
    }
};

/* Defining elements actions events */
var buttonLogin = document.getElementById("button-login");
/* end*/


// actions calls
buttonLogin.onclick = function (event) {
    event.preventDefault();
};
