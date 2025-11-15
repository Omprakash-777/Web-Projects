let stack = [];


function push() {
  let element = document.getElementById("element").value;
  if (element === "") {
    document.getElementById("message").innerText = "Please enter a value!";
    return;
  }
  stack.push(element);
  document.getElementById("message").innerText = `${element} pushed to stack`;
  document.getElementById("element").value = "";

  display();
}


function pop() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty!";
    return;
  }
  let removed = stack.pop();
  document.getElementById("message").innerText = `${removed} popped from stack`;
  display();
}


function peek() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty!";
    return;
  }
  let top = stack[stack.length - 1];
  document.getElementById("message").innerText = `Top element: ${top}`;

  display();
}


function display() {
  let stackList = document.getElementById("stack");
  stackList.innerHTML = "";
  for (let i = stack.length - 1; i >= 0; i--) {
    let li = document.createElement("li");
    li.innerText = stack[i];
    stackList.appendChild(li);
  }
}
