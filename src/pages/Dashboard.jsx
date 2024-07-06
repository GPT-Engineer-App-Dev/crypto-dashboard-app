import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Dashboard = () => {
  return (
    <div className="space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Crypto Trading Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bitcoin (BTC)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$29,192.45</div>
            <p className="text-xs text-muted-foreground">+3.2% in 24h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ethereum (ETH)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,890.32</div>
            <p className="text-xs text-muted-foreground">-1.8% in 24h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cardano (ADA)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.3845</div>
            <p className="text-xs text-muted-foreground">+5.4% in 24h</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Trades</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Cryptocurrency</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2023-04-15</TableCell>
              <TableCell>Bitcoin (BTC)</TableCell>
              <TableCell>0.5 BTC</TableCell>
              <TableCell>$29,150.00</TableCell>
              <TableCell>$14,575.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-04-14</TableCell>
              <TableCell>Ethereum (ETH)</TableCell>
              <TableCell>2.5 ETH</TableCell>
              <TableCell>$1,885.75</TableCell>
              <TableCell>$4,714.38</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-04-13</TableCell>
              <TableCell>Cardano (ADA)</TableCell>
              <TableCell>1000 ADA</TableCell>
              <TableCell>$0.3820</TableCell>
              <TableCell>$382.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;