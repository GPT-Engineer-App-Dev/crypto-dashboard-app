import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Trades = () => {
  return (
    <div className="space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Trade History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Cryptocurrency</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Value</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2023-04-15</TableCell>
            <TableCell>Bitcoin (BTC)</TableCell>
            <TableCell>0.5 BTC</TableCell>
            <TableCell>$29,150.00</TableCell>
            <TableCell>$14,575.00</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-14</TableCell>
            <TableCell>Ethereum (ETH)</TableCell>
            <TableCell>2.5 ETH</TableCell>
            <TableCell>$1,885.75</TableCell>
            <TableCell>$4,714.38</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-13</TableCell>
            <TableCell>Cardano (ADA)</TableCell>
            <TableCell>1000 ADA</TableCell>
            <TableCell>$0.3820</TableCell>
            <TableCell>$382.00</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-12</TableCell>
            <TableCell>Ripple (XRP)</TableCell>
            <TableCell>500 XRP</TableCell>
            <TableCell>$0.5230</TableCell>
            <TableCell>$261.50</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Trades;