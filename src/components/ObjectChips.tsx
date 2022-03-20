import { Card, CardInnerPadding } from "./Card";

export type ObjectInfoCardProps = {
  obj: Record<string, string | number>;
};

export function ObjectChips({ obj }: ObjectInfoCardProps) {
  const infos = Object.entries(obj).map(([label, value]) => ({ label, value }));
  return (
    <div>
      <div className="grid gap-y-4 gap-x-4 grid-cols-2 md:grid-cols-3">
        {infos.map((info) => (
          <Chip key={info.label + info.value} {...info} />
        ))}
      </div>
    </div>
  );
}

export type InfoChipProps = {
  label: string;
  value: string | number;
};

export function Chip({ label, value }: InfoChipProps) {
  return (
    <Card>
      <CardInnerPadding>
        <div className="flex flex-col gap-y-2">
          <span className="uppercase font-semibold leading-none">{label}</span>
          <span className="leading-none">{value}</span>
        </div>
      </CardInnerPadding>
    </Card>
  );
}
