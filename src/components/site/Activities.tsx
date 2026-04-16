import { gymData } from "@/data/gym";

export function Activities() {
  const featuredActivities = gymData.activities.slice(0, 6);

  return (
    <section
      id="actividades"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-sm">{gymData.activitiesSection.eyebrow}</p>
        <h2 className="max-w-3xl text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {gymData.activitiesSection.title}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base">{gymData.activitiesSection.description}</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredActivities.map((activity) => (
          <article key={activity.name} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.9)]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-300">{activity.focus}</p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-white">{activity.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">{activity.description}</p>
            <span className="mt-4 inline-flex rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-100">
              {gymData.activitiesSection.levelLabel}: {activity.level}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
