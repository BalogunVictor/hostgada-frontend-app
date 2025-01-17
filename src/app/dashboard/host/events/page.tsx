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
import Switch from 'react-switch';

function StepOne({ onNext }: { onNext: () => void }) {
  const [images, setImages] = useState<(string | File)[]>([]);

  const handleImageChange = (selectedImages: (string | File)[]) => {
    setImages(selectedImages);
  };

  const handleSaveProgress = () => {
    console.log('StepOne data saved');
    onNext();
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
          onClick={handleSaveProgress}
        >
          Save Progress
        </Button>
      </div>
      <div className="space-y-6 py-6">
        {/* Inputs and controls */}
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

function StepTwo({ onNext }: { onNext: () => void }) {
  const [isFree, setIsFree] = useState(false);

  const handleSwitchChange = () => {
    setIsFree((prev) => !prev);
    console.log('Switch toggled:', !isFree);
  };

  const handleContinue = () => {
    console.log('StepTwo completed');
    onNext(); // Move to the next step or finalize
  };

  return (
    <Motion>
      <Card className="xl:p-10">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
          <div>
            <Title dashboard>Ticketing</Title>
            <BodyText>Fill in the details about your events</BodyText>
          </div>
          <Button
            kinds="tertiary"
            size="lg"
            className="!bg-transparent !text-gray-600 border !border-gray-600"
          >
            Save Progress
          </Button>
        </div>
        <div className="flex gap-2 text-gray-400 py-10 ">
          <Switch
            onChange={handleSwitchChange}
            checked={isFree}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor="#E8E8E8"
            onColor="#FE791B"
          />
          <BodyText>Free</BodyText>
        </div>
        {isFree ? (
          <Motion>
            <div className="w-full xl:w-[50%]">
              <Input
                label="Your hosting will be set to free and your event will be accessed freely"
                disabled
              />
            </div>
          </Motion>
        ) : (
          <div className="w-full xl:w-[60%] grid grid-cols-1 xl:grid-cols-2 gap-5">
            <Input label="Total Pass Available" />
            <Input label="Pricing" />
            <Input label="What does this ticket entail" />
            <Input label="Discounts (optional)" />
          </div>
        )}
        <Button className="mt-20 !px-20" onClick={handleContinue}>
          Continue
        </Button>
      </Card>
    </Motion>
  );
}

function Forms({ step, onNext }: { step: number; onNext: () => void }) {
  switch (step) {
    case 1:
      return <StepOne onNext={onNext} />;
    case 2:
      return <StepTwo onNext={onNext} />;
    default:
      return <StepOne onNext={onNext} />;
  }
}

function Events() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Motion>
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2 py-4">
          <ChevronLeftIcon />
          <BodyText>Back</BodyText>
        </div>
        <Title dashboard>Create Events</Title>
        <EventsSteps step={step} />
        {Forms({ step, onNext: handleNextStep })}
      </Wrapper>
    </Motion>
  );
}

export default Events;
