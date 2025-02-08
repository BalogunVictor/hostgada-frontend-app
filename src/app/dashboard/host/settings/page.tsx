'use client';

import { Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React from 'react';
import Motion from 'src/layout/motion';

function page() {
  return (
    <Motion>
      <Wrapper dashboard>
        <Title>Profile Settings</Title>
      </Wrapper>
    </Motion>
  );
}

export default page;
