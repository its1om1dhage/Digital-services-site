import React from 'react';

const PricingFAQ = () => {
  const faqs = [
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! We can create custom packages tailored to your specific requirements. Contact us to discuss your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment terms can be discussed during consultation.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No hidden fees! The price you see includes everything mentioned in the package features.'
    },
    {
      question: 'What happens after the support period?',
      answer: 'You can purchase extended support or maintenance packages. We are always here to help you grow.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Common questions about our pricing and services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
