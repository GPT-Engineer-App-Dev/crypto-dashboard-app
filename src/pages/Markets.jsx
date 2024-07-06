import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Markets = () => {
  return (
    <div className="space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Market Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MarketCard name="Bitcoin" symbol="BTC" price="29,192.45" change="+3.2%" />
        <MarketCard name="Ethereum" symbol="ETH" price="1,890.32" change="-1.8%" />
        <MarketCard name="Cardano" symbol="ADA" price="0.3845" change="+5.4%" />
        <MarketCard name="Ripple" symbol="XRP" price="0.5230" change="+2.1%" />
        <MarketCard name="Dogecoin" symbol="DOGE" price="0.0782" change="-0.5%" />
        <MarketCard name="Polkadot" symbol="DOT" price="6.23" change="+1.7%" />
      </div>
    </div>
  );
};

const MarketCard = ({ name, symbol, price, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name} ({symbol})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${price}</div>
        <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change} in 24h
        </p>
      </CardContent>
    </Card>
  );
};

export default Markets;