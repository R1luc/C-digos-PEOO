function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }
function colorir(){
    let texto = document.getElementById("texto").value
    document.getElementById("resultado").innerHTML =
        `${texto.fontcolor(generateColor())}`
}