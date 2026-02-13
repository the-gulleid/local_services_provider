import { motion } from 'framer-motion';
import { Shield, Users, Heart, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            We Connect You With <span className="text-primary">Trusted Professionals</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            ServiLink is dedicated to simplifying your life by providing a seamless platform to find, book, and rate local service providers. Our mission is to build trust and community through quality service.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
                        <p className="text-gray-600 dark:text-gray-400">Our core values drive everything we do.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield size={40} />, title: "Trust & Safety", desc: "Every provider is vetted to ensure your safety and satisfaction." },
                            { icon: <Users size={40} />, title: "Community Focused", desc: "We support local businesses and help them grow." },
                            { icon: <Heart size={40} />, title: "Customer First", desc: "Your experience is our top priority, 24/7 support." },
                            { icon: <Award size={40} />, title: "Quality Assurance", desc: "We maintain high standards for all listed services." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-20 bg-gray-900 text-white rounded-t-[3rem]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
                    <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Join thousands of satisfied customers and professionals today.</p>
                    <div className="flex gap-4 justify-center">
                        <a href="/register" className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-colors">Join Now</a>
                        <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors backdrop-blur-sm">Browse Services</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
