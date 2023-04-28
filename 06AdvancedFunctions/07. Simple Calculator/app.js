function calculator() {

    let selector1;
    let selector2;
    let result;

    return {
        init: (sel1, sel2, res) => {
            selector1 = document.querySelector(sel1);
            selector2 = document.querySelector(sel2);
            result = document.querySelector(res);
        },

        add: () => {
            result.value = Number(selector1.value) + Number(selector2.value);
        },

        subtract: () => {
            result.value = Number(selector1.value) - Number(selector2.value);
        }
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





