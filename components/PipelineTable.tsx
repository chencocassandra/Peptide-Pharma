import { LabeledVial } from "@/components/LabeledVial";
import { pipelineStages, programs, type Stage } from "@/lib/data";

const order: Stage[] = ["Discovery", "Preclinical", "Phase I", "Phase II"];

function filledThrough(stage: Stage) {
  return order.indexOf(stage);
}

export function PipelineTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="min-w-[720px] w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            <th className="px-5 py-3 font-medium">Program</th>
            <th className="px-5 py-3 font-medium">Modality</th>
            {pipelineStages.map((stage) => (
              <th key={stage} className="px-3 py-3 text-center font-medium">
                {stage}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => {
            const filled = filledThrough(program.stage);
            return (
              <tr key={program.id} className="border-b border-border last:border-0">
                <td className="px-5 py-4 align-top">
                  <div className="flex items-center gap-3">
                    <span className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                      <LabeledVial
                        src={program.image}
                        alt={program.alt}
                        name={program.id}
                        compact
                        sizes="64px"
                        className="aspect-square"
                      />
                    </span>
                    <span>
                      <p className="font-semibold tracking-tight">{program.id}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {program.indication}
                      </p>
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 align-top">
                  <p>{program.modality}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{program.type}</p>
                </td>
                {order.map((stage, i) => (
                  <td key={stage} className="px-3 py-4 text-center align-middle">
                    <span
                      className={`mx-auto block h-2 w-10 rounded-full ${
                        i <= filled ? "bg-primary" : "bg-border"
                      }`}
                      aria-hidden
                    />
                    {i === filled ? (
                      <span className="sr-only">{program.stage}</span>
                    ) : null}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
