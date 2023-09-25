const placesList = document.getElementById('places_list');

const li = document.createElement("li");
li.innerText = 'pahartoli bon';


placesList.appendChild(li);

//section add 

const mainContent = document.getElementById('main_content');



const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'my Food List'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 =document.createElement('li') 
li1.innerText = 'biryani'

ul.appendChild(li1);
const li2 =document.createElement('li') 
li2.innerText = 'borhani'

ul.appendChild(li2);
const li3 =document.createElement('li') 
li3.innerText = 'salad'

ul.appendChild(li3);
const li4 =document.createElement('li') 
li4.innerText = 'sorbot'

ul.appendChild(li4);
section.appendChild(ul)
mainContent.appendChild(section)


const sectionDress = document.createElement('section')
sectionDress.innerHTML = ` 
    <h1>My dress section</h1>
    <ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>genji</li>
    </ul>
`

mainContent.appendChild(sectionDress);