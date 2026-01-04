'use client';

import { useState, useEffect } from 'react';

interface Field {
    name: string;
    type: string;
    label: string;
    required?: boolean;
    options?: string[];
}

interface ServiceConfig {
    title: string;
    fields: Field[];
}

interface QuoteFormProps {
    serviceConfig: ServiceConfig;
    service: string;
}

export default function QuoteForm({ serviceConfig, service }: QuoteFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!serviceConfig) {
            window.location.href = '/services';
        }
    }, [service, serviceConfig]);

    if (!serviceConfig) {
        return <div>Service not found</div>;
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceType = service || 'Service';

        try {
            // Prepare form data for Formspree
            const submitData = new FormData();
            
            // Add service type and timestamp
            submitData.append('service', serviceType);
            submitData.append('submitted_at', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
            
            // Add all form fields
            Object.entries(formData).forEach(([key, value]) => {
                submitData.append(key, value);
            });

            // Send to Formspree
            const response = await fetch('https://formspree.io/f/xykzwzny', {
                method: 'POST',
                body: submitData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // Parse response
            const result = await response.json();

            // Check if submission was successful
            if (response.ok && result.ok !== false) {
                // Redirect to success page
                window.location.href = '/quote-success';
            } else {
                // Handle Formspree errors
                const errorMessage = result.errors 
                    ? result.errors.map((err: any) => err.message).join(', ')
                    : 'Failed to send quote request';
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            const errorMsg = error instanceof Error ? error.message : 'Unknown error occurred';
            alert(`There was an error submitting your request: ${errorMsg}\n\nPlease try again or contact us directly at info@techstudio.co.in`);
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <h1 className="hero-title">Get Quote for {serviceConfig.title}</h1>
                    <h2 className="hero-subtitle">Tell us about your project and we'll get back to you within 24 hours</h2>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="quote-form-container">
                        <div className="form-intro">
                            <h3>📋 Project Details</h3>
                            <p>Fill in the details below to help us understand your requirements better. All fields marked with * are required.</p>
                        </div>
                        <form onSubmit={handleFormSubmit} className="service-form">
                            {serviceConfig.fields.map(field => (
                                <div key={field.name} className="form-group">
                                    <label htmlFor={field.name} className="form-label">
                                        {field.label}
                                        {field.required && <span className="required">*</span>}
                                    </label>
                                    {field.type === 'select' ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            className="form-input form-select"
                                            value={formData[field.name] || ''}
                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                        >
                                            <option value="">Select an option</option>
                                            {field.options?.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            className="form-input form-textarea"
                                            value={formData[field.name] || ''}
                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            className="form-input"
                                            value={formData[field.name] || ''}
                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                                    <span>{isSubmitting ? '⏳' : '→'}</span>
                                </button>
                                <a href="/services" className="btn btn-secondary">
                                    <span>←</span>
                                    <span>Back to Services</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
