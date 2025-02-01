import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { WordLimit } from '@ui/WordLimit';
import { MdOutlineFileDownload } from 'react-icons/md';

interface GuestDashboardPayload {
  claimId: string;
  purpose: string;
  dateClaimed: string;
  amount: string;
}

const columnHelper = createColumnHelper<GuestDashboardPayload>();

export const columns = [
  columnHelper.accessor('claimId', {
    header: 'Clamed ID',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('purpose', {
    header: 'Purpose',
    cell: (info) => <span>{WordLimit(100, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('dateClaimed', {
    header: 'Date Claimed',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.display({
    header: 'Status',
    id: 'actions',
    cell: () => {
      return (
        <div className="flex items-center">
          <Button kinds="tertiary" className="hidden md:block">
            Download
          </Button>
          <MdOutlineFileDownload className="block md:hidden text-xl" />
        </div>
      );
    },
  }),
];
