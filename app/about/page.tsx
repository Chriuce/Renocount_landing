'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Renocount</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Company</h2>
                <p className="text-gray-700 mb-4">
                  Renocount is a construction site management solution developed by Chris-Craft Oy, 
                  a Finnish technology company specializing in innovative business automation solutions. 
                  We help construction teams streamline their operations through AI-powered WhatsApp integration.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Company Name:</strong> Chris-Craft Oy</p>
                      <p><strong>Business ID:</strong> 3137559-3</p>
                      <p><strong>Country:</strong> Finland</p>
                      <p><strong>Founded:</strong> 2023</p>
                    </div>
                    <div>
                      <p><strong>Address:</strong> Albertinkatu 22-24 E 64, 00120 Helsinki, Finland</p>
                      <p><strong>Phone:</strong> +358 40 018 5522</p>
                      <p><strong>Email:</strong> chris@chris-craft.net</p>
                      <p><strong>Website:</strong> www.renocount.com</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Service</h2>
                <p className="text-gray-700 mb-4">
                  Renocount provides an AI-powered WhatsApp assistant specifically designed for construction site management. 
                  Our service helps construction companies, contractors, and project managers coordinate their teams more effectively.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Do</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Task assignment and tracking through WhatsApp</li>
                  <li>Time logging and attendance management</li>
                  <li>Photo documentation and progress reporting</li>
                  <li>Team communication coordination</li>
                  <li>Project status updates and notifications</li>
                  <li>Integration with existing construction workflows</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use WhatsApp</h2>
                <p className="text-gray-700 mb-4">
                  We use WhatsApp Business API to provide legitimate business communication services to our construction industry clients:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Customer Service:</strong> Responding to inquiries about our construction management services</li>
                  <li><strong>Service Notifications:</strong> Sending updates about project status, task assignments, and deadlines</li>
                  <li><strong>Business Communication:</strong> Facilitating communication between construction managers and their teams</li>
                  <li><strong>Support:</strong> Providing technical support for our service users</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Important:</strong> We only send messages to users who have explicitly opted in to receive communications from us. 
                  All users can opt out at any time by replying "STOP" or blocking our number.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Customers</h2>
                <p className="text-gray-700 mb-4">
                  Our service is designed for legitimate construction businesses including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Construction companies and contractors</li>
                  <li>Project managers and site supervisors</li>
                  <li>Renovation and remodeling businesses</li>
                  <li>Infrastructure development companies</li>
                  <li>Subcontractors and specialized trades</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance & Legal</h2>
                <p className="text-gray-700 mb-4">
                  We are committed to full compliance with all applicable laws and regulations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>GDPR compliance for EU data protection</li>
                  <li>Finnish business law and regulations</li>
                  <li>WhatsApp Business Policy compliance</li>
                  <li>Meta Business Terms of Service</li>
                  <li>Industry-standard data security practices</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                    <p>Email: <a href="mailto:chris@chris-craft.net" className="text-primary-600">chris@chris-craft.net</a></p>
                    <p>Phone: <a href="tel:+358400185522" className="text-primary-600">+358 40 018 5522</a></p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal & Compliance</h3>
                    <p>For legal matters: <a href="mailto:legal@chris-craft.net" className="text-primary-600">legal@chris-craft.net</a></p>
                    <p>Data protection: <a href="mailto:privacy@chris-craft.net" className="text-primary-600">privacy@chris-craft.net</a></p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (EET/EEST)<br/>
                    <strong>Response Time:</strong> We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 