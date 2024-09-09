document.getElementById('form-of-resume')?.addEventListener('submit', function(event){
    event.preventDefault();

    // Type Assertion
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skill = skillElement.value;
        const experience = experienceElement.value;

        // Profile pic editing elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "" ;

        // Resume Result
        const resumeResult = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile picture" class="profile-picture">` : ""}
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Skill</h3>
            <p id="edit-skills" class="editable">${skill}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
        `;

        const resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement){
            resumeResultElement.innerHTML = resumeResult;
            makeContentEditable();  
        }
    } else {
        console.error('One or more input elements are missing');
    }
});


function makeContentEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing', 'input');

                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}