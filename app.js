let peoples = []
const peoplesDiv = document.querySelector('.people-container')
const people = JSON.parse(localStorage.getItem('user'))
peoples.push(people)
if(peoples.length == 0){
    peoples.push(people)
}else if(peoples.length > 0){
    showRandomPeople(peoples)
}

function createRandomPeople(){
    fetch('https://randomuser.me/api/?results=10').then((results)=>{
        return results.json()
    }).then((data)=>{
        peoples.push(data.results)
        showRandomPeople(peoples)
        localStorage.setItem('user', JSON.stringify(data.results))
    }).catch((err)=>{
        if(err)throw err
    })
}

function showRandomPeople([user]){
    user.forEach(people => {
        const root = document.createElement('div')
        const name = document.createElement('h2')
        const email = document.createElement('h3')
        const adress = document.createElement('h3')
        const img = document.createElement('img')
        name.innerHTML = people.name.first + ' ' + people.name.last
        email.innerHTML = people.email
        adress.innerHTML = people.location.country
        img.src = people.picture.large
        root.appendChild(name)
        root.appendChild(email)
        root.appendChild(adress)
        root.appendChild(img)
        peoplesDiv.appendChild(root)
    });{

    }
}