let errors = [];
let form = document.getElementById('formid');
let btn = document.getElementById('btn');
let forget=document.getElementById('forget');

// Prevent default form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    errors = [];
    
    // Fetch values of username and password on each submit
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    // Validate username length
    if (user.length < 3) {
        errors.push('Username must be at least 3 characters');
    }

    // Validate password length
    if (pass.length < 8) {
        errors.push('Password must be at least 8 characters');
    }

    // Display errors or success message
    const errorDiv = document.querySelector('.error');
    if (errors.length > 0) {
        errorDiv.innerHTML = `<h2 style="color: red; font-weight: bold;">${errors.join('<br>')}</h2>`;
    } else {
        errorDiv.innerHTML = `<h2 style="color: green; font-weight: bold;">Form Submitted Successfully</h2>`;
        forget.style.display = "none";
        
    }
});

// Optional: To clear error messages on button click if needed
btn.addEventListener('click', (e) => {
    document.querySelector('.error').innerHTML = ''; // Clear errors on each click
});
btn.addEventListener('dblclick',(e)=>{
    window.location.reload();
    console.log('hhh')
});

