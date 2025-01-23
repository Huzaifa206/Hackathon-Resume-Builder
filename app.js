document.addEventListener('DOMContentLoaded', function () {
    var generateResumeButton = document.getElementById('generateResume');
    var profilePictureInput = document.getElementById('profilePicture');
    var profileImage = document.getElementById('profileImage');
    if (generateResumeButton) {
        generateResumeButton.addEventListener('click', function () {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var education = document.getElementById('educationInput').value;
            var skills = document.getElementById('skillsInput').value;
            var experience = document.getElementById('experienceInput').value;
            var headerName = document.querySelector('.resume-column header h2');
            var headerEmail = document.querySelector('.resume-column header p');
            var educationSection = document.querySelector('.resume-column #education');
            var skillsSection = document.querySelector('.resume-column #skills');
            var experienceSection = document.querySelector('.resume-column #experience');
            if (headerName)
                headerName.textContent = name || 'Your Name';
            if (headerEmail)
                headerEmail.textContent = email ? "Contact: ".concat(email) : 'Contact: your.email@example.com';
            if (educationSection)
                educationSection.innerHTML = "<h2>Education</h2><p>".concat(education || 'Your Education Details', "</p>");
            if (skillsSection) {
                skillsSection.innerHTML = '<h2>Skills</h2>';
                var skillsList_1 = document.createElement('ul');
                if (skills) {
                    skills.split(',').forEach(function (skill) {
                        var listItem = document.createElement('li');
                        listItem.textContent = skill.trim();
                        skillsList_1.appendChild(listItem);
                    });
                }
                else {
                    skillsList_1.innerHTML = '<li>No skills added yet</li>';
                }
                skillsSection.appendChild(skillsList_1);
            }
            if (experienceSection)
                experienceSection.innerHTML = "<h2>Work Experience</h2><p>".concat(experience || 'Your Work Experience', "</p>");
        });
    }
    if (profilePictureInput && profileImage) {
        profilePictureInput.addEventListener('change', function () {
            var _a;
            var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    profileImage.src = reader_1.result;
                };
                reader_1.readAsDataURL(file);
            }
        });
    }
});
