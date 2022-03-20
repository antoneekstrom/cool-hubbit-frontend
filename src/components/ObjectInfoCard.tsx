import { Card, CardInnerPadding } from "./Card";

export type ObjectInfoCardProps = {
  obj: Record<string, string | number>;
};

export function ObjectInfoCard({ obj }: ObjectInfoCardProps) {
  const infos = Object.entries(obj).map(([label, value]) => ({ label, value }));
  return (
    <Card>
      <CardInnerPadding>
        <div className="grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {infos.map((info) => (
            <InfoChip key={info.label + info.value} {...info} />
          ))}
        </div>
      </CardInnerPadding>
    </Card>
  );
}

export type InfoChipProps = {
  label: string;
  value: string | number;
};

export function InfoChip({ label, value }: InfoChipProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="uppercase font-semibold leading-normal">{label}</span>
      <span className="leading-none">{value}</span>
    </div>
  );
}
