'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
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
            <div className="mb-6">
              <a 
                href="/" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </a>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <p className="text-xl text-gray-600 mb-8">
              These Terms of Service ("Terms") govern your use of the Renocount service and website operated by Chris-Craft Oy.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing and using Renocount, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-700 mb-4">
                  Renocount is an AI-powered WhatsApp assistant that helps construction teams manage:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Task assignments and tracking</li>
                  <li>Time logging and attendance</li>
                  <li>Photo documentation</li>
                  <li>Progress reporting</li>
                  <li>Team communication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  As a user of Renocount, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Use the service only for legitimate construction management purposes</li>
                  <li>Respect the privacy and rights of other users</li>
                  <li>Not attempt to reverse engineer or compromise the service</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. WhatsApp Integration</h2>
                <p className="text-gray-700 mb-4">
                  Renocount operates through WhatsApp Business API. By using our service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You acknowledge that WhatsApp's terms of service also apply</li>
                  <li>You consent to receiving automated messages from our AI assistant</li>
                  <li>You understand that message delivery depends on WhatsApp's infrastructure</li>
                  <li>You can opt out of automated messages at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data and Privacy</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
                <p className="text-gray-700 mb-4">
                  We strive to provide reliable service, but:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We do not guarantee 100% uptime</li>
                  <li>Maintenance may occasionally interrupt service</li>
                  <li>Third-party dependencies (WhatsApp, internet) may affect availability</li>
                  <li>We will provide reasonable notice for planned maintenance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Renocount is provided "as is" without warranties</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid for the service</li>
                  <li>Users are responsible for backing up their own data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The Renocount service and its original content, features, and functionality are and will remain the exclusive property of Chris-Craft Oy. 
                  The service is protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access immediately, without prior notice, for any reason, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Breach of these Terms</li>
                  <li>Misuse of the service</li>
                  <li>Non-payment of fees (if applicable)</li>
                  <li>Legal or regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be interpreted and governed by the laws of Finland. 
                  Any disputes shall be resolved in the courts of Helsinki, Finland.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes 
                  via email or through the service. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> hello@renocount.com</p>
                  <p><strong>Company:</strong> Chris-Craft Oy</p>
                  <p><strong>Address:</strong> Albertinkatu 22-24 E 64, 00120 Helsinki</p>
                  <p><strong>VAT:</strong> 3137559-3</p>
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