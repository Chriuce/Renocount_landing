'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <p className="text-xl text-gray-600 mb-8">
              This privacy policy explains how Renocount ("we", "our", or "us") collects and uses personal data when you visit our website or communicate with us via WhatsApp or email.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We only collect data that you voluntarily provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your name and contact details (email, phone number)</li>
                  <li>Company information when provided</li>
                  <li>Your messages or inquiries via WhatsApp, email, or contact forms</li>
                  <li>Optional: technical usage data via analytics (e.g., IP address, browser type, pages visited)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Why We Process Your Data</h2>
                <p className="text-gray-700 mb-4">
                  We process personal data to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Respond to your messages, inquiries, and service requests</li>
                  <li>Provide and improve our AI-powered WhatsApp assistant service</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Establish and maintain business relationships</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Legal Basis for Processing</h2>
                <p className="text-gray-700 mb-4">
                  We process your personal data based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Legitimate interest:</strong> To respond to inquiries and provide our services</li>
                  <li><strong>Consent:</strong> When you voluntarily provide information through forms or communications</li>
                  <li><strong>Contract performance:</strong> To fulfill our obligations when providing services</li>
                  <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Retention</h2>
                <p className="text-gray-700 mb-4">
                  Your data is stored securely using GDPR-compliant services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Vercel (website hosting, EU region)</li>
                  <li>WhatsApp Business API (Meta, GDPR-compliant)</li>
                  <li>Email services with appropriate data protection measures</li>
                </ul>
                <p className="text-gray-700">
                  We retain personal data only as long as necessary to fulfill the purposes outlined above, typically no longer than 3 years unless required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell or share your personal data with third parties, except:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>With service providers who help us operate our business (under strict data protection agreements)</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights Under GDPR</h2>
                <p className="text-gray-700 mb-4">
                  Under the EU General Data Protection Regulation (GDPR) and Finnish Data Protection Act (Tietosuojalaki), you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
                  <li><strong>Lodge a complaint:</strong> With the Finnish Data Protection Authority (Tietosuojavaltuutetun toimisto)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Analytics</h2>
                <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Ensure proper website functionality</li>
                  <li>Analyze website usage (anonymized data)</li>
                  <li>Improve user experience</li>
                </ul>
                <p className="text-gray-700">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> hello@renocount.com</p>
                  <p><strong>Data Controller:</strong> Renocount</p>
                  <p><strong>Representative:</strong> Christian Ahlström</p>
                  <p><strong>Address:</strong> [Your business address in Finland]</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 