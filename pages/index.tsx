/**
 * Fisher-yates shuffle
 * @param array the array to shuffle
 */
function shuffle<T>(array: T[]) {
  var currentIndex = array.length,
    temporaryValue: T,
    randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

type Person = {
  name: string;
  groups?: string[];
  self?: boolean;
};

function getPeople(self?: string): Person[] {
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

export async function getStaticProps() {
  return {
    props: {
      people: getPeople("HOM BRE"),
    },
  };
}

export default function Index({
  people,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <div className="flex w-full justify-center">
      <div className="px-4 pt-12 flex flex-col gap-12 w-screen max-w-screen-lg">
        <section>
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-snug">HOM BRE</h1>
            <p className="text-md leading-none">Dina siffror för idag.</p>
          </div>
          <div className="bg-white w-full min-h-[10rem] rounded-xl p-6 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col">
              <span className="uppercase font-semibold leading-normal">
                Tid spenderad:
              </span>
              <span className="leading-none">9h 12min</span>
            </div>
            <div className="flex flex-col">
              <span className="uppercase font-semibold leading-normal">
                Placering:
              </span>
              <span className="leading-none">1</span>
            </div>
            <div className="flex flex-col">
              <span className="uppercase font-semibold leading-normal">
                Tid pluggning:
              </span>
              <span className="leading-none">2min</span>
            </div>
            <div className="flex flex-col">
              <span className="uppercase font-semibold leading-normal">
                Första ankomst:
              </span>
              <span className="leading-none">7:34</span>
            </div>
            <div className="flex flex-col">
              <span className="uppercase font-semibold leading-normal">
                Gick senast:
              </span>
              <span className="leading-none">14:21</span>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-snug">I HUBBEN</h1>
            <p className="text-md leading-none">
              Just nu är det <span className="font-bold">{people.length} </span>
              person{people.length != 1 ? "er" : ""} i hubben.
            </p>
          </div>
          <ol className="flex flex-col gap-2">
            {people.map(({ name, self }, i) => (
              <li
                key={i + name}
                className={`${
                  self ? "bg-turqoise-10" : "bg-white"
                } w-full rounded-xl py-2 px-6 flex flex-row justify-between`}>
                <span
                  className={`text-lg font-semibold ${
                    self ? "text-turqoise-70" : ""
                  }`}>
                  {name}
                </span>
                <span className="">Since 07:59 (8h 2min)</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
