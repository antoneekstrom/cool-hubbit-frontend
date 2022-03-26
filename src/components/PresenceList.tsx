import { Person } from "../model";
import { CardHeader } from "./Card";
import { List, ListItem } from "./List";

export function PresenceList({ people }: { people: Person[] }) {
  return (
    <section>
      <CardHeader
        title="I HUBBEN"
        subtitle={
          <span>
            Just nu är det{" "}
            <span className="font-bold text-turqoise-70">{people.length} </span>
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
  );
}
