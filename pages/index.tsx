import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardHeader, CardInnerPadding } from "../src/components/Card";
import ItLogo from "../src/components/ItLogo";
import { List, ListItem } from "../src/components/List";
import { ObjectChips } from "../src/components/ObjectChips";
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
  
  const statTitles: Record<string, string> = {
    timeSpent: "Tid spenderad",
    timeSpentPlugging: "Tid pluggning",
    firstArrival: "Första ankomst",
    latestLeave: "Lämnade senast",
    sessionTime: "Sessionstid",
    placement: "Placering",
  };

  return (
    <div className="flex w-full justify-center">
      <div className="px-4 pt-8 flex flex-col gap-12 w-screen max-w-screen-lg">
        <header className="flex flex-row gap-6 place-items-center">
          <ItLogo />
          <h1 className="font-sans text-2xl font-semibold">Hubb<span className="text-turqoise-70">IT</span></h1>
        </header>
        <section>
          <header>
            <CardHeader title="HOM BRE" subtitle="Dina siffror för idag." />
          </header>
          <ObjectChips
            obj={Object.fromEntries(
              Object.entries(personalStatsToday).map(([key, value]) => [
                statTitles[key],
                value,
              ])
            )}
          />
        </section>
        <section>
          <CardHeader
            title="I HUBBEN"
            subtitle={
              <span>
                Just nu är det{" "}
                <span className="font-bold text-turqoise-70">
                  {people.length}{" "}
                </span>
                person{people.length != 1 ? "er" : ""} i hubben.
              </span>
            }
          />
          <List>
            {people.map(({ name, self, groups }, i) => (
              <ListItem
                key={name + self + i}
                subtext={
                  <span className="flex flex-row items-center justify-center gap-4">
                    {self && (
                      <div className="hidden sm:flex flex-row items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <span>(8h 12min)</span>
                  </span>
                }
                selected={self}>
                {name}{" "}
                {groups?.map((group) => (
                  <img src={`${group}.png`} />
                ))}
              </ListItem>
            ))}
          </List>
        </section>
        <section>
          <CardHeader
            title="GRUPPER"
            subtitle="Vilka kommittéer/grupper som är i hubben, som du kan prata med om det är något som du undrar gällande deras ansvarsområden."
          />
          <ul className="grid gap-4 grid-cols-2">
            {[
              {
                group: "digIT",
                people: ["HOM BRE", "simpen", "Ide", "BAMF"],
              },
              {
                group: "styrIT",
                people: ["Sponken", "hoidi"],
              },
              {
                group: "sexIT",
                people: ["Ping", "Gubbe", "Krizzly", "Haren", "Jonte"],
              },
            ].map(({ group, people }) => (
              <li key={group} className="flex flex-col gap-2">
                <Card
                  style={{
                    "background-image": `url("${group}banner.png")`,
                    "background-position": "center",
                    "background-size": "cover",
                  }}>
                  <CardInnerPadding>
                    <h1 className="text-xl font-bold text-turqoise-70 h-[4rem]"></h1>
                  </CardInnerPadding>
                </Card>
                {people.map((name) => (
                  <div>
                    <div className="hidden md:block">
                      <ListItem
                        key={name}
                        selected={name === "HOM BRE"}
                        subtext="(4h 3min)">
                        {name}
                      </ListItem>
                    </div>
                    <div className="md:hidden block">
                      <ListItem key={name} selected={name === "HOM BRE"}>
                        {name}
                      </ListItem>
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <CardHeader title="GRAF" subtitle="Look at this graph." />
          <Card>
            <div className="grid place-items-center min-h-[10rem] md:min-h-[30rem]">
              <Graph />
            </div>
          </Card>
        </section>
        <section>
          <CardHeader
            title="ENHETER"
            subtitle="De enheter som du har registrat med hubbIT."
          />
          <Card>
            <div className="grid place-items-center min-h-[10rem] md:min-h-[30rem]"></div>
          </Card>
        </section>
        <div className="h-[10rem]"></div>
      </div>
    </div>
  );
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
            <stop offset="5%" stopColor="#1298A1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1298A1" stopOpacity={0} />
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
