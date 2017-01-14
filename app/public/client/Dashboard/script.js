;(function () {
    var activateButtonToValidate = function () {
        var button = document.getElementById("button-validate-cpf");

        button.addEventListener('click', onClickButtonValidateDashboard);

        window.onclick = function () {
            if (button.classList.contains("activated")) {
                button.classList.remove("activated");
            }
        };

        function onClickButtonValidateDashboard (event) {
            event.preventDefault();
            event.stopPropagation();
            if (!button.classList.contains("activated")) {
                button.classList.add("activated")
            }

            loadBar = document.getElementById("loadBar");

            loadBar.addEventListener('transitionend', function () {
                this.className = "load-bar-loaded";
                button.classList.remove("activated");
            });

            setFormLoadingClass();
            setLoadBarClass();

            function setFormLoadingClass () {
                document.getElementById("validateCPF").className = "loading";
            }

            function setLoadBarClass () {
                loadBar.className = "load-bar";
            }

            window.setTimeout(function () {
                document.getElementById("validateCPF").className = "loaded";
            }, 3000);
        }
    };

    var setInputWithJustNumberWhenChanged = function () {
        document.getElementById('cpf').addEventListener('change', function () {
            setInputWithJustNumbers(this);
        });
    };

    function getOnlyNumbersCharacters (string) {
        newString = "";
        string.split('').forEach(function (character) {
            if (parseInt(character) || character == "0") {
                newString += character;
            }
        });

        return newString;
    }

    function setInputWithJustNumbers (input) {
        input.value = getOnlyNumbersCharacters(input.value);
    }

    activateButtonToValidate();
    setInputWithJustNumberWhenChanged();
})();
