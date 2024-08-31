'use client';

import { useState } from 'react';
import { SignInFlow } from '../types';
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';

const AuthScreen = () => {
  const [signState, setSignState] = useState<SignInFlow>('signIn');
  return (
    <div className="bg-[#5C3B58] flex items-center justify-center h-full">
      <div className="md:h-auto md:w-[420px]">
        {signState === 'signIn' ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
};

export default AuthScreen;
