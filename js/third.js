const main = document.getElementById('main-container')

const section = document.createElement('section');

section.innerHTML = `
    <h1>my dynamic section</h1>
    <p>Extra text added insert peragraph</p>
    <ul>
        <li>First item</li>
        <li>First item</li>
        <li>First item</li>
        <li>First item</li>
        <li>First item</li>
    </ul>
`
main.appendChild(section);