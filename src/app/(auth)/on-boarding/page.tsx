import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import React from 'react';
import GuestIcon from 'src/assets/icons/GuestIcon';
import HostIcon from 'src/assets/icons/HostIcon';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Wrapper>
      <div className="mt-10 space-y-8">
        <div className="py-4 space-y-20 max-w-md">
          <div className="space-y-4">
            <Title className="!text-orange-800">Hostgada</Title>
            <BodyText>
              Welcome aboard! To get started, let us <br /> know how you’ll be
              using the app
            </BodyText>
          </div>
          <div className="flex flex-col gap-6">
            <Link href={Pages.hostSignUp}>
              <div className="bg-gray-100 rounded-md w-full">
                <div className="flex gap-4 p-6">
                  <HostIcon className="h-20 w-20" />
                  <div className="space-y-1">
                    <BodyText className="!font-semibold">Host</BodyText>
                    <BodyText className="!text-gray-400">
                      Organise, get visibility and make money while doing what
                      you love
                    </BodyText>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={Pages.signup}>
              <div className="bg-gray-100 rounded-md w-full">
                <div className="flex gap-4 p-6">
                  <GuestIcon className="h-20 w-20" />
                  <div className="space-y-1">
                    <BodyText className="!font-semibold">Guest</BodyText>
                    <BodyText className="!text-gray-400">
                      Discover, connect, enjoy unforgettable events tailored
                      just for you.
                    </BodyText>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 pt-8">
            <BodyText className="text-gray-400">Having an account?</BodyText>
            <Link href={Pages.signin}>
              <BodyText className="!font-semibold text-orange-700">
                Sign In
              </BodyText>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
