export default function About() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Who I Am</h1>
        <p className="text-lg text-[var(--text-muted)]">
          I’m Titus. I’ve spent most of my life working with my hands: automotive, 
          diesel, hydraulics, construction, HVAC and refrigeration. I’m usually 
          the guy people call when something’s broken. Over time I’ve also become 
          the guy they call when the problem isn’t something a wrench fixes.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Why I do this</h2>
        <p className="text-[var(--text-muted)]">
          I’ve been through my own share of messes: anger, regret, relationships 
          that fell apart, and the weight of things I couldn’t undo. I know what 
          it’s like to feel stuck and not know how to move forward.
        </p>
        <p className="text-[var(--text-muted)] mt-3">
          That’s why I do this work. I may not have all of the answers, but 
          I’ve learned a few things that actually help. If you’re trying to 
          get past something that’s been holding you back, shoot me a 
          message and let’s get started.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-3">What to expect</h2>
        <p className="text-[var(--text-muted)]">
          We talk about what’s going on. Then we find out what’s 
          underneath it, the thing actually causing the trouble, and we deal 
          with that. It’s not about learning to live with your past or your 
          fears. It’s about getting rid of them, or letting them go. And 
          you can.
        </p>
        <p className="text-[var(--text-muted)] mt-3">
          Sometimes 20 minutes is all it takes. Sometimes it’s an hour. 
          While you likely won’t fix your whole life in one conversation, 
          things will move.
        </p>
      </div>
    </div>
  );
}
