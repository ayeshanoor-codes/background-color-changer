function RandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
       // console.log(color);
    }

    return color;// color variable return
}

document.getElementById("changeColorBtn").addEventListener("click", () => {
    let colorChange = RandomColor();  //call function
    document.body.style.backgroundColor = colorChange;//change background color
    document.getElementById("heading")
    document.body.style.color = colorChange;//change text color

});