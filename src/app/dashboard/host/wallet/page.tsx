'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TotalEarningIcon,
  TotalTicketsIcon,
  TrendingDownIcon,
} from '@asset/icons';
import Card from '@components/Card';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { Table } from '@ui/Table';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
// import classNames from 'classnames';
import { useMemo, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import Motion from 'src/layout/motion';
import '../../(guest)/guest.css';
import { useWindowSize } from '@hook/useWindowSize';
import classNames from 'classnames';
import FilterDropDown from '@components/FilterDropDown';
import { columns } from './columns';
import dummyData from '../../../../../dummyData.json';

function Page() {
  const [activeTab, setActiveTab] = useState('Claimed Fund');
  const [currentPage, setCurrentPage] = useState(8);
  const { width } = useWindowSize();
  const totalPages = 10;

  const memoizedData = useMemo(() => dummyData, []);
  const memoizedColumns = useMemo(() => columns, []);
  const table = useReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  return (
    <Motion>
      <Wrapper dashboard>
        <div className="w-full xl:w-[75%] gap-4 text-gray-600 grid sm:grid-cols-2 lg:grid-cols-3 py-4 xl:py-10">
          <Card className="min-h-40">
            <div>
              <BodyText>Avalaible Funds</BodyText>
              <Title dashboard>40,689</Title>
            </div>
          </Card>
          <Card className="min-h-40">
            <div className="flex justify-between">
              <div>
                <BodyText>Pending Funds</BodyText>
                <Title dashboard>0</Title>
              </div>
              <TotalTicketsIcon className="text-6xl" />
            </div>
            <div className="flex justify-end">
              <Button size="xsm" kinds="tertiary">
                Claim Funds
              </Button>
            </div>
          </Card>
          <Card className="min-h-40">
            <div className="flex justify-between">
              <div>
                <BodyText>Total Earnings</BodyText>
                <Title dashboard>40,689</Title>
              </div>
              <TotalEarningIcon className="text-6xl" />
            </div>
            <div className="flex items-center gap-1">
              <TrendingDownIcon />
              <div className="flex gap-1">
                <BodyText className="text-red-500">8.5%</BodyText>
                <BodyText>Down from yesterday</BodyText>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 border-b my-4">
          <BodyText
            className={classNames(
              'cursor-pointer pb-2 border-b-2 transition-colors text-p3',
              activeTab === 'Claimed Fund'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500'
            )}
            onClick={() => setActiveTab('Claimed Fund')}
          >
            Claimed Funds
          </BodyText>
          <BodyText
            className={classNames(
              'cursor-pointer pb-2 border-b-2 transition-colors text-p3',
              activeTab === 'Bank Account'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500'
            )}
            onClick={() => setActiveTab('Bank Account')}
          >
            Bank Account
          </BodyText>
        </div>
        <div className="flex items-center justify-between ">
          <BodyText className="text-p3 font-bold">Claimed Funds</BodyText>
          <FilterDropDown />
        </div>
        <Table table={table} />
        <div className="flex justify-center sm:justify-end px-4">
          <div
            style={{
              maxWidth: width < 650 ? '100px' : '356px',
            }}
            className="w-full"
          >
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
              previousLabel={
                <div className="flex items-center gap-2">
                  <ChevronLeftIcon />
                  <BodyText>Prev</BodyText>
                </div>
              }
              nextLabel={
                <div className="flex items-center gap-2">
                  <BodyText>Next</BodyText>
                  <ChevronRightIcon />
                </div>
              }
              className="pagination"
              pageItemClassName="pagination-item"
              pageLinkClassName="pagination-link"
              previousClassName="nav-link"
              nextClassName="nav-link"
            />
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
