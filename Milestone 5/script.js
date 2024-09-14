// IMPORTING FORM AND RESUME-DISPLAY FROM HTML TO TYPESCRIPT:-
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('shareable-dynamic-resume-display');
var shareableLinkBox = document.getElementById('shareable-link-box');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// HANDLING FORM SUBMISSION:-
form.addEventListener('submit', function (event) {
    event.preventDefault(); // TO PREVENT PAGE RELOADING
    // COLLECTION OF INPUT VALUES
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // TO SAVE FORM DATA IN LOCALSTORAGE BY USING USERNAME AS THE KEY
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //THIS WILL SAVE THE DATA LOCALLY
    // GENERATION OF CONTENT OF DYNAMIC RESUME
    var shareableResumeHTML = "\n    <h2><b>Shareable Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Mobile:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // DISPLAY OF GENERATED RESUME
    resumeDisplayElement.innerHTML = shareableResumeHTML;
    // GENERATING A SHAREABLE URL BASED ON USERNAME
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // SHAREABLE LINK DISPLAY
    shareableLinkBox.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// TO HANDLE PDF DOWNLOADING
downloadPdfButton.addEventListener('click', function () {
    window.print(); // THIS OPENS THE PRINT DIALOG AND ENABLES THE USER TO SAVE AS PDF
});
//PRE-FILLING FORM WITH URL BASED ON USERNAME
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // AUTO-FILL FORM IF THE DATA IS FOUND ON LOCAL STORAGE
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
