import { shuffle } from "./shuffle";

export type Duration = string;

export type Instant = string;

export type Person = {
  name: string;
  groups?: string[];
  self?: boolean;
};

export type PersonalStats = {
  timeSpent: Duration;
  timeSpentPlugging: Duration;
  firstArrival: Instant;
  latestLeave: Instant;
  sessionTime: Duration;
  placement: number;
};

export function getPersonalStatsToday(): Partial<PersonalStats> {
  return {
    timeSpent: "9h 12min",
    timeSpentPlugging: "2min",
    firstArrival: "7:34",
    latestLeave: "14:21",
    sessionTime: "2h 12min",
    placement: 1,
  };
}

export function getPeople(self?: string): Person[] {
  const people = [
    "Ide",
    "Liten",
    "HOM BRE",
    "Ping",
    "Simpen",
    "Snek",
    "BAMF",
    "plupp",
    "Sonic",
    "φ",
    "π",
  ]
    .filter(() => Math.random() > 0.5)
    .map((name) => {
      const groups = []
      if (Math.random() > 0.5) {
        groups.push("cat")
      }
      if (["HOM BRE", "Snek", "BAMF", "Ide"].includes(name)) {
        groups.push("digit")
      }
      return ({ name, self: name === self, groups })
    });
  shuffle(people);
  return people;
}
