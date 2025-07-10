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
