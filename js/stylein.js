const sections = document.querySelectorAll('section');
for (const section of sections) {
    // console.log(section);
    section.style.border ='2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'gray';
};

// const placesContainers = document.getElementById('places_container');
// placesContainer.style.backgroundColor = 'blue';


const placesContainer = document.getElementById('places_container');

placesContainer.classList.add('text-center');
placesContainer.classList.remove('large_text')