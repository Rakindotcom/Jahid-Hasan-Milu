import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, Eye, EyeOff, ArrowLeft, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Auth, 2: Package Selection, 3: Payment
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    password: ''
  });

  const packages = [
    {
      id: 'webinar',
      name: "Webinar Package",
      price: 280,
      originalPrice: 500,
      features: [
        "2-day live program",
        "Essential worksheets",
        "Lifetime recorded access",
        "Productivity Circle membership"
      ]
    },
    {
      id: 'basic',
      name: "Basic Package",
      price: 470,
      originalPrice: 800,
      popular: true,
      features: [
        "30+ recorded classes",
        "Complete worksheets",
        "Lifetime recorded access",
        "Productivity Circle membership",
        "Monthly Q&A sessions"
      ]
    },
    {
      id: 'complete',
      name: "Complete Package",
      price: 1800,
      originalPrice: 3000,
      features: [
        "8-week live program",
        "16 live sessions",
        "30+ recorded classes",
        "Muhasaba App (6 months)",
        "Personal tracking",
        "1-on-1 coaching session"
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      toast.success('Login successful!');
      setStep(2);
    } else {
      // Handle signup
      if (!formData.fullName || !formData.email || !formData.whatsapp) {
        toast.error('Please fill in all required fields');
        return;
      }
      toast.success('Account created successfully!');
      setStep(2);
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    toast.success('Google login successful!');
    setStep(2);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setStep(3);
  };

  const handlePayment = (method) => {
    // Handle payment processing
    toast.success(`Payment initiated via ${method}`);
    // Redirect to dashboard after successful payment
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className="h-screen bg-dark flex flex-col overflow-hidden">
      {/* Compact Header */}
      <div className="flex-shrink-0 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300">
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </Link>
          
          {/* Step Indicator - Compact */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                  step >= stepNum ? 'bg-indigo-500 text-white' : 'bg-blue-800 text-blue-300'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-8 h-0.5 mx-1 ${
                    step > stepNum ? 'bg-indigo-500' : 'bg-blue-800'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 pb-4">
        <div className="w-full max-w-6xl">

          {/* Step 1: Authentication - Compact */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                  {isLogin ? 'Welcome Back' : 'Join the Transformation'}
                </h1>
                <p className="text-blue-200 text-sm">
                  {isLogin ? 'Sign in to continue' : 'Start your Prophetic Productivity journey'}
                </p>
              </div>

              <div className="card-glass p-6">
                {/* Google Login */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full bg-blue-800 border border-blue-600 text-blue-100 py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mb-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm">Continue with Google</span>
                </button>

                <div className="relative mb-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blue-600"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-blue-800 text-blue-300 text-xs">or</span>
                  </div>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-3">
                  {!isLogin && (
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={16} />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2 bg-blue-800 border border-blue-600 text-white rounded-lg focus:outline-none focus:border-indigo-400 placeholder-blue-300 text-sm"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-4 py-2 bg-blue-800 border border-blue-600 text-white rounded-lg focus:outline-none focus:border-indigo-400 placeholder-blue-300 text-sm"
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={16} />
                      <input
                        type="tel"
                        name="whatsapp"
                        placeholder="WhatsApp Number"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2 bg-blue-800 border border-blue-600 text-white rounded-lg focus:outline-none focus:border-indigo-400 placeholder-blue-300 text-sm"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  {isLogin && (
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-9 py-2 bg-blue-800 border border-blue-600 text-white rounded-lg focus:outline-none focus:border-indigo-400 placeholder-blue-300 text-sm"
                        required={isLogin}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary py-2 rounded-lg font-semibold text-sm"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-xs"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Package Selection - Compact */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Choose Your Package</h2>
                <p className="text-blue-200 text-sm">Select the learning path that fits your needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      pkg.popular ? 'border-indigo-500 bg-indigo-500/10 scale-105' : 'border-blue-600 hover:border-indigo-400 bg-blue-800/50'
                    }`}
                    onClick={() => handlePackageSelect(pkg)}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-3">
                      <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-2xl font-bold text-white">{pkg.price}</span>
                        <span className="text-sm text-blue-200">BDT</span>
                        <span className="text-sm text-blue-400 line-through">{pkg.originalPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {pkg.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-xs text-blue-200">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-xs text-blue-300 text-center">
                          +{pkg.features.length - 4} more features
                        </li>
                      )}
                    </ul>

                    <button className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors duration-200 text-sm">
                      Select Package
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment - Compact */}
          {step === 3 && selectedPackage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Complete Enrollment</h2>
                <p className="text-blue-200 text-sm">Secure payment for {selectedPackage.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Order Summary */}
                <div className="card-glass p-4">
                  <h3 className="font-bold text-white mb-3 text-sm">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-blue-200">
                      <span>{selectedPackage.name}</span>
                      <span className="font-semibold text-white">{selectedPackage.price} BDT</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Discount</span>
                      <span>-{selectedPackage.originalPrice - selectedPackage.price} BDT</span>
                    </div>
                    <div className="border-t border-blue-600 pt-2 flex justify-between font-bold text-white">
                      <span>Total</span>
                      <span>{selectedPackage.price} BDT</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="card-glass p-4">
                  <h3 className="font-bold text-white mb-3 text-sm">Payment Method</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handlePayment('SSLCommerz')}
                      className="w-full border border-blue-600 rounded-lg p-3 hover:border-indigo-500 transition-colors duration-200 flex items-center space-x-3 bg-blue-800/50"
                    >
                      <CreditCard className="text-indigo-500" size={18} />
                      <div className="text-left">
                        <div className="font-semibold text-white text-sm">SSLCommerz</div>
                        <div className="text-xs text-blue-300">Cards, Mobile Banking</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handlePayment('Stripe')}
                      className="w-full border border-blue-600 rounded-lg p-3 hover:border-indigo-500 transition-colors duration-200 flex items-center space-x-3 bg-blue-800/50"
                    >
                      <CreditCard className="text-blue-500" size={18} />
                      <div className="text-left">
                        <div className="font-semibold text-white text-sm">Stripe</div>
                        <div className="text-xs text-blue-300">International Cards</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handlePayment('Manual')}
                      className="w-full border border-blue-600 rounded-lg p-3 hover:border-indigo-500 transition-colors duration-200 flex items-center space-x-3 bg-blue-800/50"
                    >
                      <Phone className="text-green-500" size={18} />
                      <div className="text-left">
                        <div className="font-semibold text-white text-sm">Manual Payment</div>
                        <div className="text-xs text-blue-300">Bank Transfer, bKash</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 mt-4 text-xs text-blue-300">
                <Shield size={14} className="text-green-500" />
                <span>Secure payment • 30-day money-back guarantee</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;