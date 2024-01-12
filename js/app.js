document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {
        firstName: document.getElementById('FirstName').value,
        lastName: document.getElementById('LastName').value,
        companyName: document.getElementById('CompanyName').value,
        email: document.getElementById('Email').value
    };

    fetch('https://12mky8kdpk.execute-api.us-west-2.amazonaws.com/Prod/demo/person', {
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
