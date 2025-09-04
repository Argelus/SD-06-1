// Type your code below this line!
const listado =require('readline');

function FriendList(){
    this.nombres = []
}
const rl= listado.createInterface({
    input: process.stdin,
    output: process.stdout
})

const amigos= new FriendList()

rl.question("¿Cuántos amigos vas a listar?",(num) => {
    const count = parseInt(num)
    let i = 0

function askName(){
    if (i < count){
        rl.question(`Ingresa el nombre ${i +1}: `, (name) => {
            amigos.nombres.push(name);
            i++;
            askName()
        })
    } else {
    console.log(amigos.nombres)
    rl.close()
}
}
askName()
})    
    // Type your code above this line!


