// IMPORTING FORM AND RESUME-DISPLAY FROM HTML TO TYPESCRIPT:-
var form = document.getElementById('dynamic-resume-form');
var resumeDisplayElement = document.getElementById('dynamic-resume-display');
// HANDLING FORM SUBMISSION:-
form.addEventListener('submit', function (event) {
    event.preventDefault(); // TO PREVENT PAGE RELOADING
    // COLLECTION OF INPUT VALUES
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // GENERATION OF CONTENT OF DYNAMIC RESUME
    var dynamicResumeHTML = "\n    <h2><b>Dynamic Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Mobile:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // DISPLAY OF GENERATED RESUME
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = dynamicResumeHTML;
    }
    else {
        console.error('Some of the elements is missing');
    }
});
