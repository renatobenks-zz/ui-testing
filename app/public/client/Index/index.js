window.onload = function (event) {

    if (event.target.forms.cadaster) {
        event.target.forms.cadaster.parentElement.style.display = "none";
    }

    var content = document.getElementsByClassName('content')[0];

    function setElementClass(elements, element) {
        if (elements.indexOf(element) < 0) {
            elements.push(element);
            var classElement = animateElements.classNameElement[animateElements.elements.indexOf(element.tagName.toLowerCase())];
            element.className = element.className + ' ' + classElement;
        }
    }

    animateElements = {
        elements: ['h1', 'hr'],
        classNameElement: ['fadeInDown', 'bounceInDown']
    };

    var elements = [];

    for (iElement in content.children) {
        var element = content.children[iElement];
        if (element.classList && element.classList.contains('animated')) {
            if (animateElements.elements.indexOf(element.tagName.toLowerCase()) >= 0) setElementClass(elements, element);
        }
    }
};
