(function () {

    'use strict' ;

    printDuplicatedNumbers(10, 11, 28, 10, 37, 42, 10, 28);



    function printDuplicatedNumbers() {
        let num;
        for (let i = 0; i < arguments.length; i++) {
            num = arguments[i];
            amountDuplicated(num);

        }

        function amountDuplicated(num) {
            let numOfDuplicated = 0;
            for (let j = 0; j < num.length; j++) {
                if (num === arguments[j]) {
                    numOfDuplicated++;
                }
            }
            if (numOfDuplicated > 1) {
                console.log(num + ' - ' + numOfDuplicated)
            }
        }



    }

}());
