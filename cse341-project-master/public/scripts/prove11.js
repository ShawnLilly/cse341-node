const heroList = document.getElementById('heroList');
const submit = document.getElementById('submit');
const inputH = document.getElementById('inputH');
const inputA = document.getElementById('inputA');
const socket = io();

const displayHeroList = avengers => {
    heroList.innerHTML = ''

    for (const a of avengers) {
        heroList.innerHTML += `<li>${a.name}</li>`
        heroList.innerHTML += `<li>${a.age}</li>`
    }

    socket.on('broadcast', function(data){
    let remove = data.avengers[data.avengers.length--];
    console.log(remove);

    heroList.innerHTML += `<li>${remove.name}</li>`
    heroList.innerHTML += `<li>${remove.age}</li>`
    });
}
fetch('/prove11/fetchAll')
    .then(res => res.json())
    .then(data => {
        displayHeroList(data.avengers)
    })
    .catch(console.error)


    
submit.onclick = () => {
    let data = {name: inputH.value}
    //let data2 = {age: inputA.value}
    fetch('/prove11/insert',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            //body: JSON.stringify(data2),
        })
        .then(res => res.json())
        .then(data => {
            displayHeroList(data.avengers);
            socket.emit("broadcast", data);
            //socket.emit("broadcast", data2);
            inputH.value = ''
            //inputA.value = ''
        })
        .catch(console.error)
} 