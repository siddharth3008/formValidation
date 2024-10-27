const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const otpContainer = document.getElementById('otpContainer');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const errorText = document.querySelectorAll('.error');

// Step 1: Send OTP
sendOtpBtn.addEventListener('click', () => {
    // Simulate sending OTP (in real scenarios, this would involve backend logic)
    alert('OTP has been sent to your email!');
    function generateOtp() {
        const otp = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
        console.log("Generated OTP:", otp);
        return otp;
    }
    
    // Call the function to generate and log the OTP
    generateOtp();
    

    // Show OTP input fields
    showOtpInputs();
    step1.style.display = 'none';
    step2.style.display = 'block';
});

// Step 2: Verify OTP
verifyOtpBtn.addEventListener('click', () => {
    let otp = '';
    const otpInputs = otpContainer.querySelectorAll('input');
    otpInputs.forEach(input => otp += input.value);

    // Check if OTP is correct (for demo, we'll assume OTP is '1234')
    if (otp === otp) {
        step2.style.display = 'none';
        step3.style.display = 'block';
    } else {
        errorText[0].innerText = 'Incorrect OTP. Please try again.';
    }
});

// Step 3: Reset Password
resetPasswordBtn.addEventListener('click', () => {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (newPassword === confirmPassword && newPassword.length >= 8) {
        alert('Password has been reset successfully!');
        window.location.href = 'index.html'; // Reload page after password reset
    } else {
        errorText[1].innerText = 'Passwords do not match or are too short!';
    }
});

// Function to show OTP input fields
function showOtpInputs() {
    otpContainer.innerHTML = ''; // Clear previous OTP inputs
    for (let i = 0; i < 4; i++) {
        const otpInput = document.createElement('input');
        otpInput.type = 'text';
        otpInput.maxLength = 1;
        otpInput.classList.add('otp-input'); // Add styling class
        otpContainer.appendChild(otpInput);

        // Automatically focus next input
        otpInput.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && i < 3) {
                otpContainer.children[i + 1].focus();
            }
        });
    }
}
