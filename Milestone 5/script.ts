
// IMPORTING FORM AND RESUME-DISPLAY FROM HTML TO TYPESCRIPT:-

const form = document.getElementById('resume-form') as HTMLFormElement;

const resumeDisplayElement = document.getElementById('shareable-dynamic-resume-display') as HTMLDivElement;

const shareableLinkBox = document.getElementById('shareable-link-box') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;

const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;


// HANDLING FORM SUBMISSION:-

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // TO PREVENT PAGE RELOADING

// COLLECTION OF INPUT VALUES

    const username = (document.getElementById('username') as HTMLInputElement).value;

    const name = (document.getElementById('name') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

// TO SAVE FORM DATA IN LOCALSTORAGE BY USING USERNAME AS THE KEY

    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));  //THIS WILL SAVE THE DATA LOCALLY


// GENERATION OF CONTENT OF DYNAMIC RESUME

    const shareableResumeHTML = `
    <h2><b>Shareable Resume</b></h2>

    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Mobile:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Work Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

// DISPLAY OF GENERATED RESUME

    resumeDisplayElement.innerHTML = shareableResumeHTML;

// GENERATING A SHAREABLE URL BASED ON USERNAME

    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    
// SHAREABLE LINK DISPLAY

    shareableLinkBox.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

});

// TO HANDLE PDF DOWNLOADING

    downloadPdfButton.addEventListener('click', () => {
    window.print(); // THIS OPENS THE PRINT DIALOG AND ENABLES THE USER TO SAVE AS PDF
});

//PRE-FILLING FORM WITH URL BASED ON USERNAME

    window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');

        if (username) {
            // AUTO-FILL FORM IF THE DATA IS FOUND ON LOCAL STORAGE
            const savedResumeData = localStorage.getItem(username);

            if (savedResumeData) {
                const resumeData = JSON.parse(savedResumeData);

                (document.getElementById('username') as HTMLInputElement).value = username;
                (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
                (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
                (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
                (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
                (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
                (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
            }
        }
    });













