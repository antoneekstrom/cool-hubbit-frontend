import { PersonalStats } from "../model";
import { CardHeader } from "./Card";
import { ObjectChips } from "./ObjectChips";

type PersonalStatsProps = {
  stats: Partial<PersonalStats>;
};

export function PersonalStats({ stats }: PersonalStatsProps) {
  const statTitles: Record<string, string> = {
    timeSpent: "Tid spenderad",
    timeSpentPlugging: "Tid pluggning",
    firstArrival: "Första ankomst",
    latestLeave: "Lämnade senast",
    sessionTime: "Sessionstid",
    placement: "Placering",
  };

  return (
    <section>
      <header>
        <CardHeader title="HOM BRE" subtitle="Dina siffror för idag." />
      </header>
      <ObjectChips
        obj={Object.fromEntries(
          Object.entries(stats).map(([key, value]) => [statTitles[key], value])
        )}
      />
    </section>
  );
}
