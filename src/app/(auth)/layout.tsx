'use client';

import { Wrapper } from '@ui/Wrapper';
import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import { AuthResponsive } from 'src/components/BreakPoints';
import 'react-multi-carousel/lib/styles.css';
import Motion from 'src/layout/motion';
import { useWindowSize } from 'src/hooks/useWindowSize';

function Layout({ children }: { children: ReactNode }) {
  const { width } = useWindowSize();
  const largeScreen = 1000;
  return (
    <Motion>
      <Wrapper>
        <div className="flex min-h-screen">
          {width > largeScreen ? (
            <div className="w-1/2 min-h-full m-auto">
              <Wrapper>
                <Carousel
                  responsive={AuthResponsive}
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  showDots
                  containerClass="carousel"
                  removeArrowOnDeviceType={[
                    'tablet',
                    'mobile',
                    'desktop',
                    'smallDestop',
                    'superLargeDesktop',
                  ]}
                >
                  <div
                    className="w-[100%] h-[800px] bg-cover bg-center m-0 p-4 flex flex-col justify-between"
                    style={{
                      backgroundImage: "url('/landingPage.webp')",
                      borderRadius: 20,
                    }}
                  />
                  <div
                    className="w-[100%] h-[800px] bg-cover bg-center m-0 p-4 flex flex-col justify-between"
                    style={{
                      backgroundImage: "url('/landingPage.webp')",
                      borderRadius: 20,
                    }}
                  />
                  <div
                    className="w-[100%]  h-[800px] bg-cover bg-center m-0 p-4 flex flex-col justify-between"
                    style={{
                      backgroundImage: "url('/landingPage.webp')",
                      borderRadius: 20,
                    }}
                  />
                </Carousel>
              </Wrapper>
            </div>
          ) : null}

          <main className="flex-1 bg-white min-h-full">{children}</main>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Layout;
