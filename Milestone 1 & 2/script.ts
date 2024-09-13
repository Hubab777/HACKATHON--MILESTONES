
const toggledButton = document.getElementById('toggle-skills') as HTMLButtonElement;

const Skills = document.getElementById('skills') as HTMLElement;

toggledButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});
