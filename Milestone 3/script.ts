
// IMPORTING FORM AND RESUME-DISPLAY FROM HTML TO TYPESCRIPT:-

const form = document.getElementById('dynamic-resume-form') as HTMLFormElement;

const resumeDisplayElement = document.getElementById('dynamic-resume-display') as HTMLDivElement;


// HANDLING FORM SUBMISSION:-

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // TO PREVENT PAGE RELOADING

// COLLECTION OF INPUT VALUES
    const name = (document.getElementById('name') as HTMLInputElement).value

    const email = (document.getElementById('email') as HTMLInputElement).value

    const phone = (document.getElementById('phone') as HTMLInputElement).value

    const education = (document.getElementById('education') as HTMLInputElement).value

    const experience = (document.getElementById('experience') as HTMLInputElement).value

    const skills = (document.getElementById('skills') as HTMLInputElement).value

// GENERATION OF CONTENT OF DYNAMIC RESUME

    const dynamicResumeHTML = `
    <h2><b>Dynamic Resume</b></h2>

    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Mobile:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

// DISPLAY OF GENERATED RESUME

    if(resumeDisplayElement){
         resumeDisplayElement.innerHTML = dynamicResumeHTML;
    } else {
          console.error('Some of the elements is missing')
    }
});











