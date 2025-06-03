
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Check, Loader2 } from 'lucide-react';

type FormStep = 'email' | 'topics' | 'otp' | 'success';

const MultiStepSignupForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('email');
  const [email, setEmail] = useState('');
  const [topics, setTopics] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setCurrentStep('topics');
  };

  const handleTopicsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topics) return;
    
    setIsLoading(true);
    // Simulate sending OTP
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setCurrentStep('otp');
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4) return;
    
    setIsLoading(true);
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCurrentStep('success');
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    // Simulate resending OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('OTP resent to:', email);
  };

  return (
    <div className="max-w-lg mx-auto space-y-8">
      {/* Step 1: Email Input */}
      {currentStep === 'email' && (
        <div className="form-card p-8 animate-fade-in">
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-instrument-serif font-semibold text-white text-center">
                Stay informed. Stay ahead with NewsMe
              </h2>
              <p className="text-lg font-instrument-serif font-light text-gray-300 text-center">
                Get a quick 5-minute email summary of top global news. Delivered daily.
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg font-instrument-serif bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400"
                required
              />
              
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="w-full h-12 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-instrument-serif font-semibold tracking-wide glow-effect transition-all duration-300 uppercase"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Step 2: Topics Input */}
      {currentStep === 'topics' && (
        <div className="form-card p-8 animate-slide-up">
          <form onSubmit={handleTopicsSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-instrument-serif font-semibold text-white text-center">
                What topics are you interested in?
              </h3>
              <p className="text-sm text-gray-400 text-center">
                Help us personalize your newsletter experience
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="e.g., AI, Finance, World News, Science"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                className="h-12 text-lg font-instrument-serif bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400"
                required
              />
              
              <Button
                type="submit"
                disabled={isLoading || !topics}
                className="w-full h-12 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-instrument-serif font-semibold tracking-wide glow-effect transition-all duration-300 uppercase"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending verification...
                  </>
                ) : (
                  'Continue'
                )}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: OTP Verification */}
      {currentStep === 'otp' && (
        <div className="form-card p-8 animate-slide-up">
          <form onSubmit={handleOTPSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-instrument-serif font-semibold text-white text-center">
                Enter the 4-digit code
              </h3>
              <p className="text-sm text-gray-400 text-center">
                We just sent a verification code to <span className="text-electric-cyan-400">{email}</span>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="otp-input" />
                    <InputOTPSlot index={1} className="otp-input" />
                    <InputOTPSlot index={2} className="otp-input" />
                    <InputOTPSlot index={3} className="otp-input" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || otp.length !== 4}
                className="w-full h-12 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-instrument-serif font-semibold tracking-wide glow-effect transition-all duration-300 uppercase"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify & Join'
                )}
              </Button>
              
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isLoading}
                className="w-full text-gray-400 hover:text-electric-cyan-400 text-sm font-instrument-serif underline-animation transition-colors duration-300"
              >
                Resend OTP
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 4: Success */}
      {currentStep === 'success' && (
        <div className="form-card p-8 animate-slide-up text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-instrument-serif font-semibold text-white">
                You're all set!
              </h3>
              <p className="text-lg font-instrument-serif text-gray-300">
                Welcome to NewsMe. Expect your first newsletter tomorrow morning.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Interested in <span className="text-electric-cyan-400">{topics}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepSignupForm;
