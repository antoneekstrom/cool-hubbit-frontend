import { CardHeader, Card, CardInnerPadding } from "./Card";
import { ListItem } from "./List";

export function GroupPresenceList({}) {
  return (
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
  );
}
