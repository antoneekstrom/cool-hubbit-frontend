import { CardHeader } from "../src/components/Card";
import { List, ListItem } from "../src/components/List";
import { ObjectInfoCard } from "../src/components/ObjectInfoCard";
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
      <div className="px-4 pt-12 flex flex-col gap-12 w-screen max-w-screen-lg">
        <section>
          <header>
            <CardHeader title="HOM BRE" subtitle="Dina siffror för idag." />
          </header>
          <ObjectInfoCard obj={personalStatsToday} />
        </section>
        <section>
          <CardHeader
            title="I HUBBEN"
            subtitle={
              <span>
                Just nu är det{" "}
                <span className="font-bold">{people.length} </span>
                person{people.length != 1 ? "er" : ""} i hubben.
              </span>
            }
          />
          <List>
            {people.map(({ name, self }, i) => (
              <ListItem>
                <div
                  className={`${
                    self ? "bg-turqoise-10" : "bg-white"
                  } w-full h-full flex flex-row justify-between`}>
                  <span
                    className={`text-lg font-semibold ${
                      self ? "text-turqoise-70" : ""
                    }`}>
                    {name}
                  </span>
                  <span className="">Since 07:59 (8h 2min)</span>
                </div>
              </ListItem>
            ))}
          </List>
        </section>
      </div>
    </div>
  );
}
