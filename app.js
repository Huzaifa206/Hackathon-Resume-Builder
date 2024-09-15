var _a;
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsSection = document.getElementById('skills');
    toggleSkillsButton.addEventListener('click', function () {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
});
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('educationInput').value;
    var skills = document.getElementById('skillsInput').value;
    var experience = document.getElementById('experienceInput').value;
    document.querySelector('header h1').textContent = name;
    document.querySelector('header p').textContent = "Contact: ".concat(email);
    document.getElementById('education').textContent = education;
    document.getElementById('skills').innerHTML = "<h2>Skills</h2><ul><li>".concat(skills, "</li></ul>");
    document.getElementById('experience').textContent = experience;
});
document.querySelectorAll('section').forEach(function (section) {
    section.contentEditable = 'true';
});
