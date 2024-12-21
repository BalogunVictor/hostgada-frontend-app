'use client';

import { CheckIcon, RadioIcon, VerifiedIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import Header from '@components/Header';
import { HeaderText } from '@ui/HeaderText';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Events from 'src/dummyEvents.json';
import Motion from 'src/layout/motion';
import StarIcon from '@asset/icons/StarIcon';
import { Button } from '@ui/Button';
import ScrollsButton from '@components/ScrollsButton';
import { useWindowSize } from 'src/hooks/useWindowSize';
import { useRef } from 'react';
import EventCard from '@components/EventCard';
import Link from 'next/link';
import { responsive } from '@components/BreakPoints';
import Carousel from 'react-multi-carousel';
import Pages from 'src/routes/page.routes';
import 'react-multi-carousel/lib/styles.css';
import Footer from '@components/Footer';
import specialFeatures from '../../../dummyFeatures.json';

interface EventProps {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  eventType: string;
  price: number;
  isSoldOut: boolean;
}

interface EventPageProps {
  params: { id: string };
}

export default function EventPage({ params }: EventPageProps) {
  const numericId = parseInt(params.id, 10);
  const FoundItem = Events.find((event: EventProps) => event.id === numericId);
  const { width } = useWindowSize();

  const carouselRef = useRef<any>(null);

  if (!FoundItem) {
    notFound();
  }

  // Handlers for Carousel
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
      <Header />
      <Wrapper className="sm:mt-8">
        <div className="flex flex-col md:flex-row gap-4 h-[414px]">
          {/* First Div */}
          <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-hidden">
            <Image
              src={landingPage}
              alt="Event image"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>

          {/* Second Div */}
          <div className="flex-1 flex flex-col space-y-4">
            <div className="w-full h-[200px] overflow-hidden">
              <Image
                src={landingPage}
                alt="Main image"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 w-full">
              <div className="w-1/2 h-[200px] overflow-hidden">
                <Image
                  src={landingPage}
                  alt="Sub image 1"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="w-1/2 h-[200px] overflow-hidden">
                <Image
                  src={landingPage}
                  alt="Sub image 2"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="flex-1">
            <HeaderText className="!max-w-full" header={FoundItem.title} />
            <BodyText>
              Event Type{' '}
              <span className="text-orange-700 font-semibold">
                Kitchen Party
              </span>
            </BodyText>
            <div className="border border-gray-300 rounded-xl my-8 p-4 space-y-4">
              <h1 className="text-h4 ">About Occasion</h1>
              <BodyText className="text-gray-500 ">
                Experience the best of French cuisine with Claudine’s seasonal,
                market-fresh, 4-course dinner served in beautiful china
                tableware. In her elegant apartment, you will enjoy a fish dish
                or a chicken breasts in creamy sauce along with seasonal
                vegetables ( or a vegetarian spinach and mushrooms
                parmentier...) French cheeses, and a decadent chocolate fondant
                for dessert along with seasonal fruit.
              </BodyText>
              <BodyText className="pt-4 text-gray-500">
                With 40 years of living in Montmartre, Claudine knows the area
                inside out and is excited to share its secrets with you. This
                intimate small-group experience, limited to a maximum of 5
                guests, gives you the chance to get to know your host, enjoy a
                delicious French meal, and learn about Montmartre.
              </BodyText>
              <div className="my-6">
                <h1 className="text-h4 my-4">Special Features</h1>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {specialFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-2">
                      <CheckIcon />
                      <BodyText>{feature.feature}</BodyText>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-8 space-y-4">
              <h1 className="text-h4 my-4">About Host</h1>
              <div className="flex items-center gap-4">
                <Image
                  src={landingPage}
                  alt="host image"
                  className="h-36 w-32 object-cover"
                />
                <div className="space-y-6">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BodyText className="!font-semibold">
                        Cathrine Sandra
                      </BodyText>
                      <VerifiedIcon className="text-sm" />
                    </div>
                    <div className="flex items-center gap-2">
                      <BodyText>Caterer</BodyText>
                      <div className="flex gap-1">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                  </div>
                  <Button size="sm" kinds="tertiary">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-300 !text-gray-600 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-center m-6">
              <h1 className="text-h4">Entry Pass Fee</h1>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <RadioIcon />
                  <BodyText className="text-p4 font-bold">#1,500,000</BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="sm:flex items-center justify-between mb-5 mt-10">
            <HeaderText header="Other experiences" />
            {width > 650 && (
              <ScrollsButton
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
              />
            )}
          </div>
          <hr className="text-gray-300 my-8" />
        </section>
      </Wrapper>
      <div className="mx-4 sm:ml-6 xl:ml-8">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={width < 650}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={[
            'tablet',
            'mobile',
            'desktop',
            'superLargeDesktop',
          ]}
        >
          {Events.map((event) => (
            <div key={event.id} className="w-[100%] sm:w-[90%] h-[430px]">
              <Link href={`${Pages.event}/${event.id}`}>
                <EventCard {...event} />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <footer>
        <Footer />
      </footer>
    </Motion>
  );
}
