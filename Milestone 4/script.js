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
    var dynamicResumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Mobile:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // DISPLAY OF GENERATED RESUME
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = dynamicResumeHTML;
    }
    else {
        console.error('Some of the elements is missing');
    }
});
