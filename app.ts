document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkills')!;
    const skillsSection = document.getElementById('skills')!;

    toggleSkillsButton.addEventListener('click', () => {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
});
document.getElementById('generateResume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('educationInput') as HTMLInputElement).value;
    const skills = (document.getElementById('skillsInput') as HTMLInputElement).value;
    const experience = (document.getElementById('experienceInput') as HTMLInputElement).value;

    document.querySelector('header h1')!.textContent = name;
    document.querySelector('header p')!.textContent = `Contact: ${email}`;
    document.getElementById('education')!.textContent = education;
    document.getElementById('skills')!.innerHTML = `<h2>Skills</h2><ul><li>${skills}</li></ul>`;
    document.getElementById('experience')!.textContent = experience;
});

document.querySelectorAll('section').forEach(section => {
    section.contentEditable = 'true';
});
