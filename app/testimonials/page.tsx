export default function Testimonials() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">What People Say</h1>
        <p className="text-lg text-[var(--text-muted)]">
          Here’s what a few men have said after talking with me.
        </p>
      </div>

      <div className="space-y-6">
        <div className="card">
          <p className="text-lg mb-4">
            “Titus helped me see things I’d been avoiding for years. He didn’t try to 
            fix me or tell me what to do. He just listened and gave me straight answers 
            when I asked for them.”
          </p>
          <p className="text-sm text-[var(--text-muted)]">Mark R.</p>
        </div>

        <div className="card">
          <p className="text-lg mb-4">
            “I was carrying a lot of guilt and anger. Talking with Titus helped me 
            start letting some of that go. He’s easy to talk to and doesn’t judge.”
          </p>
          <p className="text-sm text-[var(--text-muted)]">Derek T.</p>
        </div>

        <div className="card">
          <p className="text-lg mb-4">
            “He’s the kind of guy you can be real with. No fluff, no lectures. Just 
            honest conversation that actually helped.”
          </p>
          <p className="text-sm text-[var(--text-muted)]">James K.</p>
        </div>
      </div>
    </div>
  );
}