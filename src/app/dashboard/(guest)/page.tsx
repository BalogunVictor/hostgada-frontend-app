'use client';

import { WalletIcon } from '@asset/icons';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { Table } from '@ui/Table';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React, { useMemo } from 'react';
import Layout from 'src/layout';
import { columns } from './columns';
import userHistory from '../../../../dummyUserHistory.json';

function Guest() {
  const data = useMemo(() => (!userHistory ? [] : [...userHistory]), []);

  const table = useReactTable({
    columns,
    data,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // getRowId: ({ id }) => id.toString(),
    // onRowSelectionChange: setRowSelection,
    // state: {
    //   rowSelection,
    // },
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <Layout>
      <Wrapper>
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-12">
            <div className="shadow-md rounded-xl p-4 space-y-4 w-96">
              <div className="flex items-center justify-between">
                <BodyText>Wallet Balance</BodyText>
                <WalletIcon className="text-6xl" />
              </div>
              <Title>$89,000</Title>
            </div>
            <Button size="lg">Top Up Wallet</Button>
          </div>
          <div className="space-y-6">
            <HeaderText header="Purchase History" />
            <Table table={table} />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Guest;
