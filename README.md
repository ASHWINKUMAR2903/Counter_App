# Counter_App
## Date: 10.05.25
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Character Counter</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h2>Enter your message -></h2>
        <textarea id="message" rows="6" maxlength="100" placeholder="Type your message here..."></textarea>
        <p id="counter">0 / 100 characters</p>
    </div>
</body>
</html>
```
## CSS Code:
```
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: rgb(139, 240, 247);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    width: 350px;
    text-align: center;
}

textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #ccc;
    resize: none;
    transition: border-color 0.3s;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);
}

textarea:focus {
    border-color: #edf63b;
    outline: none;
}

#counter {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
    transition: color 0.3s;
}
```
## Javacript code
```
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 100;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength} / ${maxLength} characters`;

    if (currentLength > maxLength) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#333";
    }
});
```
## Output:
![image](https://github.com/user-attachments/assets/07b98e8a-630e-4b3d-87ed-2f4f3434d952)

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
