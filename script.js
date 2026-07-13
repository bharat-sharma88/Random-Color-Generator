let colorBox = document.querySelector(".color-box");
let colorCode = document.querySelector("#colorCode");
let generateBtn = document.querySelector("#generateBtn");
let copyIcon = document.querySelector("i");

let getRandomColor = () => {
    let character = "0123456789ABCDEF";
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexCode += character[randomIndex];
    }
    return hexCode;
}

generateBtn.addEventListener("click", () => {
    let colors = getRandomColor();
    colorBox.style.backgroundColor = colors;
    colorCode.innerText = colors;
});

colorCode.addEventListener("click", () => {
    copyIcon.classList.remove("hide");
    navigator.clipboard.writeText(colorCode.innerText);
    setTimeout(() => {
        copyIcon.classList.add("hide");
    }, 1000);
});

