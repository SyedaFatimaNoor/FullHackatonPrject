document.getElementById('form-of-resume')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement){

        const name = nameElement.value
        const email = emailElement.value
        const phone = phoneElement.value
        const education = educationElement.value
        const skill = skillElement.value
        const experience = experienceElement.value 
    
    // MY RRESUME RESULT
    const resumeResult = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone Number:</strong> ${phone} </p>

        <h3>Education</h3>
        <p>${education}<p>

        <h3>Skill</h3>
        <p>${skill}<p>

       <h3>Experience</h3>
       <p>${experience}<p>
    `;

    const resumeResultElement = document.getElementById('resumeResult')
    if (resumeResultElement){
        resumeResultElement.innerHTML = resumeResult
    }else{
        console.error('the resume result elements are missing')
    }
}   else{
        console.error('one or more output elements are missing')
    }
})