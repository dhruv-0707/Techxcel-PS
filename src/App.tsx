import React from 'react';
import logo from '../images/C2C.png';
import { Code2, Bot, Sparkles, CheckCircle2, Award, Brain, Users, Shield, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header with Logo */}
      <header className="container mx-auto px-4 py-6">
        <div className="absolute top-6 right-8">
          <div className="flex items-center gap-2">
            <Code2 size={32} className="text-blue-600" />
            <img 
              src={logo} 
              alt="C2C Logo" 
              className="w-16 h-16 rounded-full border-2 border-blue-600 shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <Bot size={40} className="text-blue-600" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            TECHXCEL
          </h1>
          <Sparkles size={40} className="text-blue-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Brain className="text-blue-600" />
              Welcome to TECHXCEL!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Greetings from Code To Career (C2C)! The Placement and Training Cell is facing significant challenges due to the prevalence of poorly structured resumes among students. Many students struggle to create resumes that are ATS-friendly, professionally formatted, and authentic. This hackathon aims to address these challenges through innovative solutions!
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-blue-700 mb-2 flex items-center gap-2">
                <Users className="text-blue-600" />
                Team Guidelines
              </h3>
              <p className="text-gray-700">
                Teams should consist of 2-4 members. This hackathon is open to all MNIT students.
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
              <Award className="text-blue-600" />
              Problem Statement: Resume Builder
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Objective</h3>
                <p className="text-gray-700 mb-4">
                  Develop a user-centric solution that guides students through a step-by-step process to input their details and automatically generates high-quality, ATS-optimized resumes. The platform will incorporate robust verification mechanisms to ensure the authenticity of the information provided.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Key Features</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-blue-700 font-medium mb-2">1. Resume Automation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Streamlined form for entering academic and professional details</li>
                      <li>Automatic generation of ATS-friendly resumes</li>
                      <li>Job Description alignment capabilities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-blue-700 font-medium mb-2">2. Verification Module</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Support for uploading evidence (certificates, awards, etc.)</li>
                      <li>Validation system for educational qualifications and skills</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-blue-700 font-medium mb-2">3. Smart Features</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Real-time guidance and error-checking</li>
                      <li>Professional template options</li>
                      <li>Embedded resume writing tutorials</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Technology Stack</h3>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-gray-700">
                    Participants can choose any technology stack, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                    <li>Front-End: React, Angular, Vue.js</li>
                    <li>Back-End: Node.js, Django, Ruby on Rails</li>
                    <li>Database: MongoDB, PostgreSQL, MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Security */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  <Rocket className="text-blue-600" />
                  Expected Impact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This solution will address the issues of subpar and falsified resumes, empowering students to present themselves professionally while maintaining the integrity of their information. It will enhance employability outcomes and strengthen the institution's reputation in the job market.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-700 mb-2 flex items-center gap-2">
                  <Shield className="text-blue-600" />
                  Data Security Requirements
                </h3>
                <p className="text-gray-700">
                  Implementation of robust security measures is crucial for handling students' sensitive data, ensuring compliance with privacy and security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;