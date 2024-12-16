'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import FacebookIcon from 'src/assets/icons/FacebookIcon';
import GoogleIcon from 'src/assets/icons/GoogleIcon';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Motion>
      <Wrapper>
        <div className="mt-10 space-y-8">
          <div className="py-4">
            <Title>Welcome</Title>
            <BodyText>Start your journey with us here.</BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <Input label="Email Address" />
            <PasswordInput label="Password" />
            <Link href={Pages.homePage}>
              <Button className="!w-full !my-14">Sign in</Button>
            </Link>
            <div className="flex items-center gap-4">
              <hr className="bg-gray-300 flex-grow" />
              <BodyText className="text-gray-400">or sign in with</BodyText>
              <hr className="bg-gray-300 flex-grow" />
            </div>
            <div className="flex justify-center gap-6">
              <div className="border-2 border-gray-300 rounded-md px-10 py-4">
                <FacebookIcon />
              </div>
              <div className="border-2 border-gray-300 rounded-md px-10 py-4">
                <GoogleIcon />
              </div>
            </div>
            <div className="flex gap-4 pt-8">
              <BodyText className="text-gray-400">
                Don’t have an account?
              </BodyText>
              <Link href={Pages.onBoarding}>
                <BodyText className="!font-semibold text-orange-700">
                  Sign Up
                </BodyText>
              </Link>
            </div>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
