// Creates an object that keeps track of values:
const Calculator = {
    // Displays "0" on the screen:
    Display_Value: '0',
    // Holds the 1st operand for any expressions; set to "NULL" for now:
    First_Operand: null,
    // Checks whether or not the 2nd operand has been input:
    Wait_Second_Operand: false,
    // Holds the operator; set to "NULL" for now:
    operator: null
};

// Modifies values each time a button is pressed:
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    /* If Second_Operand === TRUE, Display_Value is set to the key that was clicked */
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        /* Overwrites Display_Value if its current value is "0":
        otherwise, the presseed digit is added onto it: */
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles the decimal point:
function Input_Decimal(dot) {
    /* Ensures that accidentially clicking the decimal point doesn't cause bugs in the operation: */
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// This section handles operators:
function Handle_Operator(Next_Operator) {
    // Destructuring three properties from the "Calculator" object:
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);
    /* Pressing an operator key converts the currently displayed number ("Display_Value") into a type=number, storing the result in Calculator.First_Operand (if it doesn't already exist): */
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculaton[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculaton = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// Updates the screen with the contents of Display_Value:
Update_Display();
// Monitoring of button clicks:
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // The "target" variable is an object representing the clicked element:
    const { target } = event;
    // If the clicked element isn't a "button", exit the ():
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operators')) {
        Handle_Operator(target.value);
        Update_Display();
         return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
         return;
    }

    // Ensures that AC clears the Calculator's displayed numbers:
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
         return;
    }

    Input_Digit(target.value);
    Update_Display();
})