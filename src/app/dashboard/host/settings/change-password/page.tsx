'use client';

import { PhotoIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { Button } from '@ui/Button';
import { PasswordInput } from '@ui/PasswordInput';
import { Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Motion from 'src/layout/motion';

function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <Motion>
      <Wrapper dashboard>
        <Title dashboard>Profile Settings</Title>
        <div className="flex flex-col lg:flex-row gap-10 pt-4">
          <div className="w-52 h-36 bg-gray-100 rounded-md p-4 flex items-center justify-center relative">
            <div className="relative cursor-pointer" onClick={handleImageClick}>
              <Image
                className="w-24 h-24 rounded-full object-cover"
                src={landingPage || selectedImage}
                alt="profile image"
                width={96}
                height={96}
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                <PhotoIcon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="w-[280px] xl:w-[450px] text-gray-500 space-y-6">
            <PasswordInput className="w-full mr-4" label="New Password" />
            <PasswordInput
              className="w-full mr-4"
              label="Confirm New Password"
            />
            <Button size="lg">Continue</Button>
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
