'use client';

import { DoubleQuotesIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { reviewResponsive } from '@components/BreakPoints';
import Card from '@components/Card';
import FilterDropDown from '@components/FilterDropDown';
import ScrollsButton from '@components/ScrollsButton';
import StarRating from '@components/StarRating';
import { Input } from '@ui/Input';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Motion from 'src/layout/motion';

const reviews = [
  {
    id: 1,
    name: 'David Cath',
    image: landingPage,
    review:
      'Can you tell me a bit more about the type of review? Is it a general positive review, feedback on a project, or something specific to their work or collaboration?',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    image: landingPage,
    review:
      'Can you tell me a bit more about the type of review? Is it a general positive review, feedback on a project, or something specific to their work or collaboration?',
    rating: 4,
  },
  {
    id: 3,
    name: 'John Smith',
    image: landingPage,
    review: 'Very professional and great to work with. Highly satisfied.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Doe',
    image: landingPage,
    review: 'Good work, but there’s room for improvement in communication.',
    rating: 3,
  },
  {
    id: 5,
    name: 'Michael Brown',
    image: landingPage,
    review: 'Exceeded expectations! Great attention to detail.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Michael Brown',
    image: landingPage,
    review: 'Exceeded expectations! Great attention to detail.',
    rating: 5,
  },
];

function Page() {
  const carouselRef = useRef<any>(null);

  const handleLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <Motion>
      <Wrapper dashboard>
        <div>
          <Title dashboard>Ratings</Title>
          <Card className="max-w-[359px] space-y-1">
            <BodyText>
              You are a <span className="text-orange-500">5 star</span> host
            </BodyText>
            <StarRating ratingValue={5} readOnly />
            <BodyText className="pt-10 text-sm w-[80%] text-gray-500">
              This metric is based on your audience reviews{' '}
            </BodyText>
          </Card>
          <div className="flex items-center justify-between py-6">
            <Title dashboard>Revised</Title>
            <div className="flex items-center gap-4">
              <FilterDropDown />
              <ScrollsButton
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
              />
            </div>
          </div>
          <Carousel
            responsive={reviewResponsive}
            infinite
            removeArrowOnDeviceType={[
              'tablet',
              'mobile',
              'desktop',
              'superLargeDesktop',
            ]}
            ref={carouselRef}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-[320px] h-[290px] my-4">
                <Card className="h-full text-gray-700 flex flex-col justify-between p-4 ">
                  <div className="space-y-10">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          src={review.image}
                          alt="image"
                          className="rounded-full h-7 w-7"
                        />
                        <BodyText className="text-p2">{review.name}</BodyText>
                      </div>
                      <DoubleQuotesIcon className="text-3xl " />
                    </div>
                    <BodyText>{review.review}</BodyText>
                  </div>
                  <Input label="Respond" className="mt-auto" />
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
