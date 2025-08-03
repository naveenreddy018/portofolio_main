import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Name can only contain letters and spaces';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    if (email.length > 100) return 'Email must be less than 100 characters';
    return '';
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) return 'Subject is required';
    if (subject.trim().length < 5) return 'Subject must be at least 5 characters';
    if (subject.trim().length > 100) return 'Subject must be less than 100 characters';
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    };
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation
    if (touched[name]) {
      const newErrors = { ...errors };
      switch (name) {
        case 'name':
          newErrors.name = validateName(value);
          break;
        case 'email':
          newErrors.email = validateEmail(value);
          break;
        case 'subject':
          newErrors.subject = validateSubject(value);
          break;
        case 'message':
          newErrors.message = validateMessage(value);
          break;
        default:
          break;
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    // Validate on blur
    const newErrors = { ...errors };
    switch (name) {
      case 'name':
        newErrors.name = validateName(formData[name]);
        break;
      case 'email':
        newErrors.email = validateEmail(formData[name]);
        break;
      case 'subject':
        newErrors.subject = validateSubject(formData[name]);
        break;
      case 'message':
        newErrors.message = validateMessage(formData[name]);
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous submit errors
    setSubmitError('');
    
    // Validate all fields
    const formErrors = validateForm();
    const hasErrors = Object.values(formErrors).some(error => error !== '');
    
    if (hasErrors) {
      setErrors(formErrors);
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = {
        to: 'naveenreddy310744@gmail.com', // Your email address
        from: formData.email.trim(),
        fromName: formData.name.trim(),
        subject: `Contact Form: ${formData.subject.trim()}`,
        message: formData.message.trim(),
        timestamp: new Date().toLocaleString(),
        userInfo: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          submittedAt: new Date().toISOString()
        }
      };

      // Email template for you to receive
      const emailBody = `
        New Contact Form Submission
        ========================
        
        From: ${emailData.fromName} (${emailData.from})
        Subject: ${formData.subject.trim()}
        Submitted: ${emailData.timestamp}
        
        Message:
        ${emailData.message}
        
        ========================
        This message was sent from your contact form.
      `;

      // Method 1: Using EmailJS (Recommended)
      // First, you need to sign up at https://www.emailjs.com/
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials
      
      const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: {
            to_email: 'naveenreddy310744@gmail.com',
            from_name: emailData.fromName,
            from_email: emailData.from,
            subject: emailData.subject,
            message: emailData.message,
            reply_to: emailData.from
          }
        })
      });

      // Method 2: Using Formspree (Alternative)
      // Sign up at https://formspree.io/ and replace 'YOUR_FORM_ID' with your actual Formspree form ID
      /*
      const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: emailData.fromName,
          email: emailData.from,
          subject: emailData.subject,
          message: emailData.message,
          _replyto: emailData.from,
          _subject: `Contact Form: ${emailData.subject}`
        })
      });
      */

      // Method 3: Using your own backend API
      // Replace '/api/send-email' with your actual backend endpoint
      /*
      const backendResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });
      */

      // For demo purposes, simulate successful email sending
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate success
          console.log('Email would be sent to: naveenreddy310744@gmail.com');
          console.log('Email content:', emailBody);
          resolve({ success: true });
        }, 1500);
      });
      
      // Success - show success message
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to send email. Please try again or contact directly at naveenreddy310744@gmail.com.');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitError(''), 5000);
    }
  };

  // Check if form is valid and ready to submit
  const isFormValid = () => {
    const hasAllFields = formData.name && formData.email && formData.subject && formData.message;
    const hasNoErrors = Object.values(errors).every(error => error === '');
    return hasAllFields && hasNoErrors;
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000'
    }}>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      {/* Header */}
      <div className="bg-dark text-white py-5 shadow-sm">
        <div className="container py-4">
          <h1 className="display-5 fw-bold text-white">Contact Us</h1>
          <p className="lead text-light mt-2">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-lg border-0 bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-4">
                <h2 className="h3 fw-bold text-white mb-4">Get in Touch</h2>
                
                <div className="mb-4">
                  <div className="d-flex align-items-start">
                    <div 
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#1976d2',
                        borderRadius: '50%'
                      }}
                    >
                      <i className="fas fa-envelope text-white fs-5"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold text-white">Email</h3>
                      <p className="text-light mb-1">naveenreddy310744@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-start">
                    <div 
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%'
                      }}
                    >
                      <i className="fas fa-phone text-white fs-5"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold text-white">Phone</h3>
                      <p className="text-light mb-1">7893467045</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <hr className="my-4 border-secondary" />
                <h3 className="h5 fw-semibold text-white mb-3">Follow Us</h3>
                <div className="d-flex gap-2">
                
                  <a 
                    href="https://x.com/NaveenR74800738" 
                    className="btn btn-info rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kommidinaveen/" 
                    className="btn rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: '40px', height: '40px', backgroundColor: '#0077b5' }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <i className="fas fa-comments text-primary fs-3 me-3"></i>
                  <h2 className="h3 fw-bold text-white mb-0">Send us a Message</h2>
                </div>

                {submitted && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <div>
                      <strong>Success!</strong> Your message has been sent to naveenreddy310744@gmail.com. We'll get back to you soon!
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <div>
                      <strong>Error!</strong> {submitError}
                    </div>
                  </div>
                )}

                <div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-medium text-white">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-lg bg-dark text-white border-secondary ${
                          errors.name && touched.name ? 'is-invalid' : 
                          !errors.name && touched.name && formData.name ? 'is-valid' : ''
                        }`}
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        style={{
                          borderRadius: '0.5rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback d-block">
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.name}
                        </div>
                      )}
                      {!errors.name && touched.name && formData.name && (
                        <div className="valid-feedback d-block">
                          <i className="fas fa-check-circle me-1"></i>
                          Looks good!
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-medium text-white">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control form-control-lg bg-dark text-white border-secondary ${
                          errors.email && touched.email ? 'is-invalid' : 
                          !errors.email && touched.email && formData.email ? 'is-valid' : ''
                        }`}
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        style={{
                          borderRadius: '0.5rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback d-block">
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.email}
                        </div>
                      )}
                      {!errors.email && touched.email && formData.email && (
                        <div className="valid-feedback d-block">
                          <i className="fas fa-check-circle me-1"></i>
                          Looks good!
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-medium text-white">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg bg-dark text-white border-secondary ${
                        errors.subject && touched.subject ? 'is-invalid' : 
                        !errors.subject && touched.subject && formData.subject ? 'is-valid' : ''
                      }`}
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="How can we help you?"
                      style={{
                        borderRadius: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {errors.subject && touched.subject && (
                      <div className="invalid-feedback d-block">
                        <i className="fas fa-exclamation-circle me-1"></i>
                        {errors.subject}
                      </div>
                    )}
                    {!errors.subject && touched.subject && formData.subject && (
                      <div className="valid-feedback d-block">
                        <i className="fas fa-check-circle me-1"></i>
                        Looks good!
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-medium text-white">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control bg-dark text-white border-secondary ${
                        errors.message && touched.message ? 'is-invalid' : 
                        !errors.message && touched.message && formData.message ? 'is-valid' : ''
                      }`}
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us more about your inquiry..."
                      style={{
                        borderRadius: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <div className="d-flex justify-content-between align-items-start mt-1">
                      <div>
                        {errors.message && touched.message && (
                          <div className="invalid-feedback d-block">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.message}
                          </div>
                        )}
                        {!errors.message && touched.message && formData.message && (
                          <div className="valid-feedback d-block">
                            <i className="fas fa-check-circle me-1"></i>
                            Looks good!
                          </div>
                        )}
                      </div>
                      <small className="text-muted">
                        {formData.message.length}/1000
                      </small>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isFormValid()}
                    className="btn btn-lg w-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: !isFormValid() || isSubmitting
                        ? 'linear-gradient(45deg, #6c757d, #5a6268)' 
                        : 'linear-gradient(45deg, #28a745, #20c997)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.8 : 1,
                      cursor: isSubmitting || !isFormValid() ? 'not-allowed' : 'pointer',
                      transform: isSubmitting ? 'scale(0.98)' : 'scale(1)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div 
                          className="spinner-border spinner-border-sm me-2" 
                          role="status"
                          style={{ width: '1.25rem', height: '1.25rem' }}
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending Message...
                      </>
                    ) : !isFormValid() ? (
                      <>
                        <i className="fas fa-edit me-2"></i>
                        submitted
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Form Status Information */}
                  <div className="mt-3">
                    <small className="text-muted d-flex align-items-center justify-content-center">
                      <i className="fas fa-info-circle me-1"></i>
                      {isFormValid() ? 
                        'Form is ready to submit' : 
                        'Please fill all fields correctly to enable sending'
                      }
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-lg border-0 bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-4">
                <h2 className="h3 fw-bold text-white mb-4">Find Us</h2>
                <div 
                  className="d-flex align-items-center justify-content-center text-center"
                  style={{
                    backgroundColor: '#333333',
                    borderRadius: '0.5rem',
                    height: '16rem'
                  }}
                >
                  <div>
                    <i className="fas fa-map-marker-alt text-light mb-3" style={{ fontSize: '3rem' }}></i>
                    <p className="text-light mb-1">Interactive map would be embedded here</p>
                    <p className="small text-light">Contact us for location details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}