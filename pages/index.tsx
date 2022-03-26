import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Card, CardHeader, CardInnerPadding } from "../src/components/Card";
import { DeviceList } from "../src/components/DeviceList";
import { GroupPresenceList } from "../src/components/GroupPresenceList";
import ItLogo from "../src/components/ItLogo";
import { List, ListItem } from "../src/components/List";
import { ObjectChips } from "../src/components/ObjectChips";
import { PersonalStats } from "../src/components/PersonalStats";
import { PresenceList } from "../src/components/PresenceList";
import { getPeople, getPersonalStatsToday } from "../src/model";

export async function getStaticProps() {
  return {
    props: {
      people: getPeople("HOM BRE"),
      personalStatsToday: getPersonalStatsToday(),
    },
  };
}

export default function Index({
  people,
  personalStatsToday,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <div className="flex w-full justify-center">
      <div className="px-4 pt-8 flex flex-col gap-12 w-screen max-w-screen-lg">
        <Header />
        <PersonalStats stats={personalStatsToday} />
        <PresenceList people={people} />
        <GroupPresenceList />
        <GraphSection />
        <DeviceList />
        <div className="h-[10rem]"></div>
      </div>
    </div>
  );
}

function Header() {
  return <header className="flex flex-row gap-6 place-items-center">
    <ItLogo />
    <h1 className="font-sans text-2xl font-semibold">
      Hubb<span className="text-turqoise-70">IT</span>
    </h1>
  </header>;
}

function GraphSection() {
  return <section>
    <CardHeader title="GRAF" subtitle="Look at this graph." />
    <Card>
      <div className="grid place-items-center min-h-[10rem] md:min-h-[30rem]">
        <Graph />
      </div>
    </Card>
  </section>;
}

function Graph() {
  const data = [
    { name: "7:00", time: 400, amt: 2400 },
    { name: "8:00", time: 300, amt: 2400 },
    { name: "9:00", time: 300, amt: 2400 },
    { name: "10:00", time: 200, amt: 2400 },
    { name: "11:00", time: 278, amt: 2400 },
    { name: "12:00", time: 189, amt: 2400 },
  ];

  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{ top: 25, right: 25, left: 25, bottom: 10 }}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#09cdda" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#09cdda" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="time"
          stroke="#1298A1"
          fillOpacity={1}
          fill="url(#color)"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
