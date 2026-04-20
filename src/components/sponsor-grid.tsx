import Image from "next/image";

import { sponsorBadges } from "@/data/site-content";

type SponsorGridProps = {
  compact?: boolean;
};

export function SponsorGrid({ compact = false }: SponsorGridProps) {
  return (
    <div className={compact ? "sponsor-grid sponsor-grid--compact" : "sponsor-grid"}>
      {sponsorBadges.map((badge) => (
        <article key={badge.title} className="sponsor-card">
          <div className="sponsor-card__image">
            <Image alt={badge.alt} height={270} src={badge.image} width={200} />
          </div>
          <div className="stack-sm">
            <h3>{badge.title}</h3>
            <p>{badge.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
