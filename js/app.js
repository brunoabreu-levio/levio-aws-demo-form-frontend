document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {
        personalInfo: {
            firstName: document.getElementById('FirstName').value,
            lastName: document.getElementById('LastName').value
        },
        professionalInfo: {
            companyName: document.getElementById('CompanyName').value,
            contact: {
                email: document.getElementById('Email').value,
                phone: "4181112223"
            }
        },
        isPersonalInfoConsented: true
    };

    fetch('https://4q0xg0vhxh.execute-api.us-west-2.amazonaws.com/PROD/person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Success');
            } else {
                console.error('Fail: ', response.status);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
