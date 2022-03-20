import { shuffle } from "./util";

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
  placement: number;
};

export function getPersonalStatsToday(): Partial<PersonalStats> {
  return {
    timeSpent: "9h 12min",
    placement: 1,
    timeSpentPlugging: "2min",
    firstArrival: "7:34",
    latestLeave: "14:21",
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
    .map((name) => ({ name, self: name === self }));
  shuffle(people);
  return people;
}
