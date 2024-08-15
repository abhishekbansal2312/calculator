let output = document.querySelector("#output"); // Display the result
let buttons = document.querySelectorAll(".btn"); // Get all buttons
let result = ""; // Store the expression
let count = 0; // Count the number of parentheses
buttons.forEach((button) => {
  // Add event listener to each button
  button.addEventListener("click", function () {
    // Handle button click event
    if (button.id === "C") {
      // Clear the expression and output
      result = ""; // Clear the result
      output.value = result; // Clear the output
      count = 0; // Reset the count
    } else if (button.id === "CE") {
      // Clear the last character in the expression
      result = result.slice(0, -1); // Remove the last character from the expression
      output.value = result; // Update the output
    } else if (button.id === "=") {
      // Evaluate the expression
      try {
        // Try to evaluate the expression
        result = eval(result.replace(/x/g, "*")); // Replace x with *
        output.value = result; // Update the output with the result
        result = ""; // Clear the result after evaluation
      } catch (error) {
        // Handle the error if any
        output.value = "Error"; // Display error message on the output
        result = ""; // Clear result on error
      }
    } else if (button.id === "()") {
      // Add parentheses
      result += count % 2 == 0 ? "(" : ")"; // Add opening or closing parentheses
      output.value = result; // Update the output with the expression
      count++; // Increment
    } else {
      // Append the button value to the expression
      let lastChar = result.slice(-1); // Get the last character in the expression
      if ("/*.-+%".includes(lastChar) && "/*-.+%".includes(button.id)) {  
        // Prevent consecutive operators
        result = result.slice(0, -1) + button.id; // Replace the last operator with the new operator
      } else {
        // Append the button value to the expression if not an operator
        result += button.id; // Append the button value to the expression
      }
      output.value = result; // Update the output with the expression
    }
  });
});
