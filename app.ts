document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement | null;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
    const profileImage = document.getElementById('profileImage') as HTMLImageElement | null;

    if (generateResumeButton) {
        generateResumeButton.addEventListener('click', () => {
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const education = (document.getElementById('educationInput') as HTMLInputElement).value;
            const skills = (document.getElementById('skillsInput') as HTMLInputElement).value;
            const experience = (document.getElementById('experienceInput') as HTMLInputElement).value;

            const headerName = document.querySelector('.resume-column header h2') as HTMLElement | null;
            const headerEmail = document.querySelector('.resume-column header p') as HTMLElement | null;
            const educationSection = document.querySelector('.resume-column #education') as HTMLElement | null;
            const skillsSection = document.querySelector('.resume-column #skills') as HTMLElement | null;
            const experienceSection = document.querySelector('.resume-column #experience') as HTMLElement | null;

            if (headerName) headerName.textContent = name || 'Your Name';
            if (headerEmail) headerEmail.textContent = email ? `Contact: ${email}` : 'Contact: your.email@example.com';
            if (educationSection) educationSection.innerHTML = `<h2>Education</h2><p>${education || 'Your Education Details'}</p>`;
            if (skillsSection) {
                skillsSection.innerHTML = '<h2>Skills</h2>';
                const skillsList = document.createElement('ul');
                if (skills) {
                    skills.split(',').forEach(skill => {
                        const listItem = document.createElement('li');
                        listItem.textContent = skill.trim();
                        skillsList.appendChild(listItem);
                    });
                } else {
                    skillsList.innerHTML = '<li>No skills added yet</li>';
                }
                skillsSection.appendChild(skillsList);
            }
            if (experienceSection) experienceSection.innerHTML = `<h2>Work Experience</h2><p>${experience || 'Your Work Experience'}</p>`;
        });
    }

    if (profilePictureInput && profileImage) {
        profilePictureInput.addEventListener('change', () => {
            const file = profilePictureInput.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    profileImage.src = reader.result as string;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
