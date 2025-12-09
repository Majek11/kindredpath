'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { FaBaby, FaUserMd, FaNotesMedical, FaCheck, FaChevronLeft, FaChevronRight, FaSnowflake } from 'react-icons/fa';
import Image from 'next/image';

export default function Booking() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const services = [
        { id: 'ivf', title: 'IVF Consultation', icon: <FaBaby /> },
        { id: 'iui', title: 'IUI Consultation', icon: <FaUserMd /> },
        { id: 'general', title: 'General Checkup', icon: <FaNotesMedical /> },
        { id: 'cryo', title: 'Cryopreservation', icon: <FaSnowflake /> },
    ];

    const doctors = [
        { id: 'dr-mitchell', name: 'Dr. Grace Mitchell', role: 'Medical Director' },
        { id: 'dr-thompson', name: 'Dr. Michael Thompson', role: 'Senior Embryologist' },
        { id: 'dr-harris', name: 'Dr. Olivia Harris', role: 'Fertility Specialist' },
    ];

    const team = [
        { name: "Dr. Grace Mitchell", role: "Medical Director", image: "/doctor-1.png" },
        { name: "Dr. Michael Thompson", role: "Senior Embryologist", image: "/doctor-2.png" },
        { name: "Dr. Olivia Harris", role: "Fertility Specialist", image: "/doctor-3.png" },
    ];

    const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '04:30 PM'];

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const updateForm = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const renderStep1 = () => (
        <div className={styles.grid}>
            {services.map((service) => (
                <div
                    key={service.id}
                    className={`${styles.optionCard} ${formData.service === service.title ? styles.selected : ''}`}
                    onClick={() => updateForm('service', service.title)}
                >
                    <div className={styles.optionIcon}>{service.icon}</div>
                    <div className={styles.optionTitle}>{service.title}</div>
                </div>
            ))}
        </div>
    );

    const renderStep2 = () => (
        <div className={styles.grid}>
            {doctors.map((doctor) => (
                <div
                    key={doctor.id}
                    className={`${styles.optionCard} ${formData.doctor === doctor.name ? styles.selected : ''}`}
                    onClick={() => updateForm('doctor', doctor.name)}
                >
                    <div className={styles.optionIcon}><FaUserMd /></div>
                    <div className={styles.optionTitle}>{doctor.name}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{doctor.role}</div>
                </div>
            ))}
        </div>
    );

    const renderStep3 = () => (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <button className={styles.backBtn}><FaChevronLeft /></button>
                <span className={styles.monthTitle}>December 2025</span>
                <button className={styles.backBtn}><FaChevronRight /></button>
            </div>
            <div className={styles.calendarGrid}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <div
                        key={day}
                        className={`${styles.day} ${formData.date === `Dec ${day}` ? styles.selected : ''}`}
                        onClick={() => updateForm('date', `Dec ${day}`)}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {formData.date && (
                <div className={styles.timeSlots}>
                    {timeSlots.map(time => (
                        <div
                            key={time}
                            className={`${styles.timeSlot} ${formData.time === time ? styles.selected : ''}`}
                            onClick={() => updateForm('time', time)}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const renderStep4 = () => (
        <div className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                    type="text"
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    placeholder="John Doe"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                    type="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    placeholder="john@example.com"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                    type="tel"
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Additional Notes</label>
                <textarea
                    className={styles.textarea}
                    value={formData.notes}
                    onChange={(e) => updateForm('notes', e.target.value)}
                    placeholder="Any specific concerns or questions..."
                />
            </div>
        </div>
    );

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        Book Your <span className={styles.highlight}>Appointment</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Take the first step towards your dream. Schedule a consultation with our experts today.
                    </p>
                </div>
            </section>

            <div className={styles.bookingContainer}>
                <div className={styles.sidebar}>
                    <ul className={styles.steps}>
                        <li className={`${styles.step} ${step === 1 ? styles.active : ''} ${step > 1 ? styles.completed : ''}`}>
                            <div className={styles.stepNumber}>{step > 1 ? <FaCheck /> : '1'}</div>
                            <span>Service Selection</span>
                        </li>
                        <li className={`${styles.step} ${step === 2 ? styles.active : ''} ${step > 2 ? styles.completed : ''}`}>
                            <div className={styles.stepNumber}>{step > 2 ? <FaCheck /> : '2'}</div>
                            <span>Choose Specialist</span>
                        </li>
                        <li className={`${styles.step} ${step === 3 ? styles.active : ''} ${step > 3 ? styles.completed : ''}`}>
                            <div className={styles.stepNumber}>{step > 3 ? <FaCheck /> : '3'}</div>
                            <span>Date & Time</span>
                        </li>
                        <li className={`${styles.step} ${step === 4 ? styles.active : ''} ${step > 4 ? styles.completed : ''}`}>
                            <div className={styles.stepNumber}>{step > 4 ? <FaCheck /> : '4'}</div>
                            <span>Your Details</span>
                        </li>
                    </ul>

                    <div className={styles.summary}>
                        <h4>Booking Summary</h4>
                        <div className={styles.summaryItem}>
                            <span>Service:</span>
                            <span>{formData.service || '-'}</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Doctor:</span>
                            <span>{formData.doctor || '-'}</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Date:</span>
                            <span>{formData.date ? `${formData.date}, ${formData.time}` : '-'}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.stepTitle}>
                        {step === 1 && 'Select a Service'}
                        {step === 2 && 'Choose a Specialist'}
                        {step === 3 && 'Select Date & Time'}
                        {step === 4 && 'Your Details'}
                    </h2>

                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}

                    <div className={styles.buttons}>
                        <button
                            className={styles.backBtn}
                            onClick={handleBack}
                            disabled={step === 1}
                            style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                        >
                            Back
                        </button>
                        <button
                            className={styles.nextBtn}
                            onClick={handleNext}
                            disabled={
                                (step === 1 && !formData.service) ||
                                (step === 2 && !formData.doctor) ||
                                (step === 3 && (!formData.date || !formData.time))
                            }
                        >
                            {step === 4 ? 'Confirm Booking' : 'Next Step'}
                        </button>
                    </div>
                </div>
            </div>

            <section className={styles.teamSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.faqTitle}>Common Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What makes Kindredpath different?</h3>
                            <p className={styles.faqAnswer}>We combine cutting-edge technology with a deeply personal approach. Every patient gets a customized treatment plan and a dedicated care team.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What are your success rates?</h3>
                            <p className={styles.faqAnswer}>Our success rates are consistently above the national average. We are transparent about our data and will discuss your specific chances of success during your consultation.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Do you offer financial counseling?</h3>
                            <p className={styles.faqAnswer}>Yes, we have dedicated financial counselors who can help you understand your insurance coverage and explore financing options.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How long does the process take?</h3>
                            <p className={styles.faqAnswer}>The timeline varies depending on the treatment. An IVF cycle typically takes about 4-6 weeks, while other treatments may be shorter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
