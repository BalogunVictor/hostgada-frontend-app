'use client';

import { EmptyEventIcon } from '@asset/icons';
import Card from '@components/Card';
import Inventory from '@components/dashboard/Inventory';
import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Motion from 'src/layout/motion';

function Host() {
  const EmptyEventCard = () => {
    return (
      <div className="w-full">
        <Card className="p-8">
          <BodyText className="!text-h4">Your Next Event</BodyText>
          <div className="flex items-center gap-8 pt-10">
            <EmptyEventIcon className="w-56 h-40" />
            <div className="space-y-4 max-w-96">
              <Title dashboard>No Events Yet</Title>
              <BodyText>
                Start hosting and bring your ideas to life! Click the button
                below to create your first event and begin your journey as a
                top-rated host.
              </BodyText>
              <Button size="lg" kinds="tertiary">
                Create New Event
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <Motion>
      <Wrapper dashboard>
        <Title dashboard>Dashboard</Title>
        <div className="w-full">
          <div className="w-full space-y-4">
            <Inventory />
            <section>
              <EmptyEventCard />
            </section>
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Host;
