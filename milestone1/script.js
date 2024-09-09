var _a;
(_a = document.getElementById('form-of-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // TYPE ASSERTION
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skill');
    var experienceElement = document.getElementById('experience');
    if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var experience = experienceElement.value;
        // MY RRESUME RESULT
        var resumeResult = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name_1, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "<p>\n\n        <h3>Skill</h3>\n        <p>").concat(skill, "<p>\n\n       <h3>Experience</h3>\n       <p>").concat(experience, "<p>\n    ");
        var resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
        }
        else {
            console.error('the resume result elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
