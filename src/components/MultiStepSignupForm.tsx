
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Check, Loader2 } from 'lucide-react';

type FormStep = 'details' | 'otp' | 'success';

interface UserData {
  name: string;
  email: string;
  topic_of_interest: string;
}

const MultiStepSignupForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('details');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    topic_of_interest: ''
  });
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.topic_of_interest) return;
    
    setIsLoading(true);
    try {
      // Send user data to backend
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('topic_of_interest', userData.topic_of_interest);

      const response = await fetch('/subscribe', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Simulate sending OTP after successful subscription
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCurrentStep('otp');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // For demo purposes, continue to OTP step
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep('otp');
    }
    setIsLoading(false);
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
    console.log('OTP resent to:', userData.email);
  };

  return (
    <div className="max-w-md mx-auto space-y-8">
      {/* Step 1: User Details */}
      {currentStep === 'details' && (
        <div className="form-card p-6 animate-fade-in">
          <form onSubmit={handleDetailsSubmit} className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-xl font-instrument-serif font-semibold text-white text-center">
                Ready to Get On Board?
              </h2>
              <p className="text-sm font-instrument-serif font-light text-gray-300 text-center">
                Join 300,000+ professionals who trust NewsMe
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Full name"
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="h-10 text-sm font-instrument-serif bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400"
                required
              />
              
              <Input
                type="email"
                placeholder="Professional email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className="h-10 text-sm font-instrument-serif bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400"
                required
              />
              
              <Input
                type="text"
                placeholder="Topic of interest"
                value={userData.topic_of_interest}
                onChange={(e) => setUserData({...userData, topic_of_interest: e.target.value})}
                className="h-10 text-sm font-instrument-serif bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400"
                required
              />
              
              <Button
                type="submit"
                disabled={isLoading || !userData.name || !userData.email || !userData.topic_of_interest}
                className="w-full h-10 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-instrument-serif font-semibold tracking-wide transition-all duration-300 uppercase shadow-lg shadow-electric-cyan-500/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Getting you ready...
                  </>
                ) : (
                  'Get On Board'
                )}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Step 2: OTP Verification */}
      {currentStep === 'otp' && (
        <div className="form-card p-6 animate-slide-up">
          <form onSubmit={handleOTPSubmit} className="space-y-5">
            <div className="space-y-3">
              <h3 className="text-xl font-instrument-serif font-semibold text-white text-center">
                Verify Your Access
              </h3>
              <p className="text-sm text-gray-400 text-center">
                We've sent a secure code to <span className="text-electric-cyan-400">{userData.email}</span>
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup className="gap-4">
                    <InputOTPSlot index={0} className="otp-input-minimal" />
                    <InputOTPSlot index={1} className="otp-input-minimal" />
                    <InputOTPSlot index={2} className="otp-input-minimal" />
                    <InputOTPSlot index={3} className="otp-input-minimal" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || otp.length !== 4}
                className="w-full h-10 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-instrument-serif font-semibold tracking-wide transition-all duration-300 uppercase shadow-lg shadow-electric-cyan-500/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Activating account...
                  </>
                ) : (
                  'Activate Account'
                )}
              </Button>
              
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isLoading}
                className="w-full text-gray-400 hover:text-electric-cyan-400 text-sm font-instrument-serif underline-animation transition-colors duration-300"
              >
                Resend verification code
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Success */}
      {currentStep === 'success' && (
        <div className="form-card p-6 animate-slide-up text-center">
          <div className="space-y-5">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-instrument-serif font-semibold text-white">
                Welcome Aboard, {userData.name}!
              </h3>
              <p className="text-sm font-instrument-serif text-gray-300">
                You're now part of NewsMe's intelligence network. Your first briefing arrives tomorrow at 7 AM.
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-xs text-gray-400">
                Focused on <span className="text-electric-cyan-400">{userData.topic_of_interest}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepSignupForm;
