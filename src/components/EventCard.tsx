import { VerifiedIcon } from '@asset/icons';
import { Button } from '@ui/Button';
import { BodyText } from '@ui/Text';
import Image from 'next/image';
import React from 'react';
import LocationIcon from 'src/assets/icons/LocationIcon';
import classNames from 'classnames';

type EventCardProps = {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  eventType: string;
  price: number;
  isSoldOut: boolean;
  className?: string;
};

function EventCard({
  image,
  title,
  location,
  date,
  time,
  eventType,
  price,
  isSoldOut,
  className,
}: EventCardProps) {
  return (
    <div
      className={classNames(
        'w-full h-full bg-gray-100 rounded-md p-4',
        className
      )}
    >
      <Image
        src={image}
        className="rounded-md w-full"
        objectFit="cover"
        width={344}
        height={192}
        alt="event-image"
      />
      <div className="space-y-2 py-4">
        <div className="flex justify-between">
          <BodyText className="!font-semibold !text-p3 w-[85%]">
            {title}
          </BodyText>
          <VerifiedIcon />
        </div>
        <div className="flex items-center gap-2">
          <LocationIcon />
          <BodyText>{location}</BodyText>
        </div>
        <div className="flex items-center justify-between">
          <BodyText>
            {date} <span className="font-semibold px-1">{time}</span>
          </BodyText>
          <Button
            size="sm"
            kinds="tertiary"
            className="!text-black"
            disabled={isSoldOut}
          >
            {isSoldOut ? 'Sold out' : 'Buy now'}
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <BodyText>
            EventType <span className="font-semibold px-1">{eventType}</span>
          </BodyText>
          <span className="font-semibold">{`#${price.toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
