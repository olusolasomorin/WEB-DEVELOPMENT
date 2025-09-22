function createPersonalInfo() {
    const firstName = "Central";
    const lastName = "Cee";
    const age = 24;
    const isStudent = true;
    const favoriteColor = "red";
    
    // Calculate future age
    const futureAge = age + 5;
    
    // Create formatted display
    const personalInfo = `
        <div style="border: 2px solid ${favoriteColor}; padding: 15px; border-radius: 8px; background-color: #f9f9f9;">
            <h4 style="color: ${favoriteColor}; margin-top: 0;">Personal Information Card</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Current Age:</strong> ${age} years old</p>
            <p><strong>Student Status:</strong> ${isStudent ? 'Yes, I am a student' : 'No, I am not a student'}</p>
            <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
            <p><strong>In 5 years:</strong> I will be ${futureAge} years old</p>
            <p><strong>Fun Fact:</strong> My name has ${firstName.length + lastName.length} letters total!</p>
        </div>
    `;
    
    document.getElementById('exercise1-output').innerHTML = personalInfo;
}