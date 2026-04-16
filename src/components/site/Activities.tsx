import { gymData } from "@/data/gym";

export function Activities() {
  const featuredActivities = gymData.activities.slice(0, 6);

  return (
    <section
      id="actividades"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm">
          {gymData.activitiesSection.eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {gymData.activitiesSection.title}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          {gymData.activitiesSection.description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredActivities.map((activity) => (
          <article
            key={activity.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/90">
              {activity.focus}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{activity.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{activity.description}</p>
            <span className="mt-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-200">
              {gymData.activitiesSection.levelLabel}: {activity.level}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
