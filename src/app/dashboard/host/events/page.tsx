'use client';

import { ChevronLeftIcon } from '@asset/icons';
import Card from '@components/Card';
import EventsSteps from '@components/dashboard/EventsSteps';
import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { ImageInput } from '@ui/ImageInput';
import { Input } from '@ui/Input';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React, { useState } from 'react';
import Motion from 'src/layout/motion';

function StepOne() {
  const [images, setImages] = useState<(string | File)[]>([]);

  const handleImageChange = (selectedImages: (string | File)[]) => {
    // Custom logic on image selection
    setImages(selectedImages);
  };

  return (
    <Card className="2xl:p-10 overflow-x-hidden">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
        <div>
          <Title dashboard>Gathering Details</Title>
          <BodyText>Fill in the details about your gathering</BodyText>
        </div>
        <Button
          kinds="tertiary"
          size="lg"
          className="!bg-transparent !text-gray-600 border !border-gray-600"
        >
          Save Progress
        </Button>
      </div>
      <div className="space-y-6 py-6">
        <div className="w-full flex flex-col xl:flex-row gap-4">
          <Input className="flex-1" label="Title" />
          <Input className="flex-1" label="Type" />
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-4">
          <Input className="flex-1" label="Date" />
          <Input className="flex-1" label="Door Opens" />
          <Input className="flex-1" label="Program Starts" />
        </div>
        <div className="w-full text-gray-400 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col xl:flex-row gap-4">
            <BodyText className="pr-1 md:pr-10">
              Approval <br />
              Preference{' '}
            </BodyText>
            <div className="border border-gray-300 rounded-md p-4">
              <Checkbox type="radio" label="Automatic Approvals" />
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <Checkbox type="radio" label="Manual Approval " />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <BodyText className="pr-4">
              Program
              <br />
              Visibility
            </BodyText>
            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="Private" />
            </div>
            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="Public" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between gap-4">
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
        </div>
      </div>
    </Card>
  );
}

function Events() {
  return (
    <Motion>
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2">
          <ChevronLeftIcon />
          <BodyText>Back</BodyText>
        </div>
        <Title dashboard>Create Events</Title>
        <EventsSteps step={1} />
        <StepOne />
      </Wrapper>
    </Motion>
  );
}

export default Events;
