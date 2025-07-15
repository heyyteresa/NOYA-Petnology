import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Heart, Smartphone, MapPin, Activity, Brain, FileText, Mail, Phone, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import images
import heroImage from './assets/image7.png'
import trackingImage from './assets/image15.png'

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && name) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
        setName('')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">NOYA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">Features</a>
              <a href="#monitoring" className="text-gray-700 hover:text-red-500 transition-colors">Monitoring</a>
              <a href="#subscribe" className="text-gray-700 hover:text-red-500 transition-colors">Subscribe</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                NOYA
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Bring your pet's well-being into the light with<br />
                <span className="text-red-500 font-semibold">every heartbeat,</span><br />
                <span className="text-orange-500 font-semibold">every habit,</span><br />
                <span className="text-yellow-500 font-semibold">every hello</span>
              </p>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                Learn More
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={heroImage} 
                alt="NOYA Pet Health Monitor" 
                className="max-w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Pet Health Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing comprehensive and accurate insights into pet's health and behavior metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Activity className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-xl">Real Time Health Data Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Continuously captures biometric and behavioral data to keep pet owners informed. 
                    Detect early signs of health issues, enabling timely intervention and preventative measures.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-xl">AI Smart Vet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    A personalized veterinary knowledge base that answers pet owners' questions — anytime, anywhere.
                    Get instant expert advice powered by advanced AI technology.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <FileText className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-xl">Consolidated AI Analysis Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Comprehensive health reports that provide detailed insights into your pet's well-being, 
                    trends, and recommendations for optimal care.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remote Monitoring Section */}
      <section id="monitoring" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Remote Monitoring & Interaction
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Three Features, Zero Distance — NOYA Revolutionizes Pet Parenting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-8 w-8 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Avatar</h3>
                    <p className="text-gray-600">
                      AI twin mirroring the pets' behavior on owner's phone. 
                      Experience a digital companion that reflects your pet's personality and habits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sound & Vibration</h3>
                    <p className="text-gray-600">
                      Seamless two-way communication messages flow between pets and parents in real time. 
                      Stay connected with your furry friend wherever you are.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">GPS Tracking</h3>
                    <p className="text-gray-600">
                      Knowing where your pet is any time. 
                      Advanced GPS technology ensures you never lose track of your beloved companion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={trackingImage} 
                alt="NOYA GPS Tracking" 
                className="max-w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Because pets deserve more than love
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              They <span className="text-red-400 font-bold">Deserve</span> NOYA
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest NOYA features, health tips, and exclusive offers. 
              Join our community of caring pet parents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Subscribe for Updates</CardTitle>
                <CardDescription className="text-gray-300">
                  Get the latest news about NOYA and exclusive early access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xeozjyep"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email" // 关键
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <textarea
                        id="message"
                        name="message" // 关键
                        placeholder="Your message"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 block w-full mt-2"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-2xl font-bold">NOYA</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing pet care with advanced health monitoring and AI-powered insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Real-time Health Monitoring</li>
                <li>AI Smart Vet</li>
                <li>GPS Tracking</li>
                <li>Behavioral Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                For more information about NOYA, please reach out to our team.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NOYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

