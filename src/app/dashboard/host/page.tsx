'use client';

import { WalletIcon } from '@asset/icons';
import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React from 'react';
import Layout from 'src/layout';

function Host() {
  return (
    <Layout>
      <Wrapper>
        <div className="mt-10">
          <div className="flex items-center gap-6">
            <div className="shawdow-xl space-y-4 max-w-md">
              <div className="flex justify-between">
                <BodyText>Wallet Balance</BodyText>
                <WalletIcon />
              </div>
              <Title>$89,000</Title>
            </div>
            <Button>Top Up Wallet</Button>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Host;
