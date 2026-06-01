// ============ CONTACT FORM HANDLING ============
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            serviceType: document.getElementById('serviceType').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Validate form
        if (!validateContactForm(formData)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        submitBtn.disabled = true;

        try {
            // Since this is a static site, we'll simulate sending
            // In production, you'd send to a backend or use a service like FormSubmit
            await simulateFormSubmission(formData);

            // Show success message
            showFormMessage('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
            contactForm.reset();
        } catch (error) {
            showFormMessage('error', 'Error sending message. Please try again later or use the Google Form.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ============ VALIDATE CONTACT FORM ============
function validateContactForm(data) {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('error', 'Please enter a valid email address.');
        return false;
    }

    // Validate phone if provided
    if (data.phone && data.phone.length < 10) {
        showFormMessage('error', 'Please enter a valid phone number.');
        return false;
    }

    // Validate message
    if (data.message.length < 10) {
        showFormMessage('error', 'Message must be at least 10 characters long.');
        return false;
    }

    // Validate service type
    if (!data.serviceType) {
        showFormMessage('error', 'Please select a service type.');
        return false;
    }

    return true;
}

// ============ SHOW FORM MESSAGE ============
function showFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    formMessage.innerHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show mt-3" role="alert">
            <i class="fas ${icon} me-2"></i>
            <strong>${type === 'success' ? 'Success!' : 'Error!'}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Auto-dismiss success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            const alert = formMessage.querySelector('.alert');
            if (alert) {
                alert.remove();
            }
        }, 5000);
    }
}

// ============ SIMULATE FORM SUBMISSION ============
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Log form data for debugging
            console.log('Form submitted with data:', data);

            // Save to localStorage as backup
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(data);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

            // In production, send to your backend here
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })

            resolve();
        }, 1500);
    });
}

// ============ CONTACT FORM ENHANCEMENT ============
document.addEventListener('DOMContentLoaded', () => {
    // Add input validation on blur
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const maxChars = 5000;
        
        messageTextarea.addEventListener('input', () => {
            const remaining = maxChars - messageTextarea.value.length;
            const helperText = document.querySelector('.message-counter') || 
                document.createElement('small');
            helperText.className = 'message-counter text-muted d-block mt-2';
            helperText.textContent = `${remaining} characters remaining`;
            
            if (!document.querySelector('.message-counter')) {
                messageTextarea.parentElement.appendChild(helperText);
            }

            // Disable submit if message is empty
            const submitBtn = document.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = messageTextarea.value.trim().length === 0;
            }
        });

        // Trigger initial check
        messageTextarea.dispatchEvent(new Event('input'));
    }
});

// ============ VALIDATE INDIVIDUAL INPUT ============
function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (input.id === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        errorMessage = 'Invalid email format';
    } else if (input.id === 'phone' && value) {
        isValid = value.length >= 10;
        errorMessage = 'Phone must be at least 10 characters';
    } else if (input.id === 'fullName' && !value) {
        isValid = false;
        errorMessage = 'Full name is required';
    } else if (input.id === 'serviceType' && !value) {
        isValid = false;
        errorMessage = 'Please select a service';
    }

    // Add validation feedback
    if (value && !isValid) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
        let feedback = input.parentElement.querySelector('.invalid-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            input.parentElement.appendChild(feedback);
        }
        feedback.textContent = errorMessage;
    } else if (value && isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
}

// ============ GOOGLE FORM LINK UPDATE ============
function updateGoogleFormLink(formLink) {
    const googleFormBtn = document.querySelector('a[href*="forms.gle"]');
    if (googleFormBtn) {
        googleFormBtn.href = formLink;
    }
}

// Example: updateGoogleFormLink('https://forms.gle/YOUR-ACTUAL-LINK');

console.log('✓ Contact script loaded successfully');
