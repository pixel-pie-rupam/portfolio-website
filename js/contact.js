// ============ CONTACT FORM HANDLING ============
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            serviceType: document.getElementById('serviceType').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        if (!validateContactForm(formData)) return;
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        submitBtn.disabled = true;
        try {
            await simulateFormSubmission(formData);
            showFormMessage('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
            contactForm.reset();
        } catch (error) {
            showFormMessage('error', 'Error sending message. Please try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('error', 'Please enter a valid email address.');
        return false;
    }
    if (data.message.length < 10) {
        showFormMessage('error', 'Message must be at least 10 characters long.');
        return false;
    }
    return true;
}

function showFormMessage(type, message) {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    formMessage.innerHTML = `<div class="alert ${alertClass} alert-dismissible fade show mt-3" role="alert"><i class="fas ${icon} me-2"></i><strong>${type === 'success' ? 'Success!' : 'Error!'}</strong> ${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`;
}

function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(data);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            resolve();
        }, 1500);
    });
}

console.log('✓ Contact script loaded successfully');