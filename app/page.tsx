export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-6 pb-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--primary)] mb-6">
            What would life look like without shame, guilt, anger or failure?
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl">
            I know what that weight feels like. I’ve learned how to get 
            past it.
          </p>
        </div>
      </section>

      {/* What I Do Section */}
      <section>
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            What I do
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            I talk to people and share my experience with getting past the 
            junk I carried around for way too long, and I help others do the 
            same. Simple, honest, and straightforward. I’ve been there. It 
            sucks. But it doesn’t have to mess up your life today.
          </p>
          <p className="text-[var(--text-muted)] text-lg">
            It’s not magic. It’s understanding yourself and learning how to 
            make the changes you want to see. No judgment, no lectures, just 
            real life issues.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)]">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card min-h-[140px]">
            <p className="text-sm font-semibold text-[var(--primary)] mb-2">1. Reach out</p>
            <p className="text-[var(--text-muted)]">Send a short message. No commitment, no pressure. Just say what’s on your mind.</p>
          </div>
          <div className="card min-h-[140px]">
            <p className="text-sm font-semibold text-[var(--primary)] mb-2">2. Find a time</p>
            <p className="text-[var(--text-muted)]">We’ll set a time that works for you. I usually reply within a day or two.</p>
          </div>
          <div className="card min-h-[140px]">
            <p className="text-sm font-semibold text-[var(--primary)] mb-2">3. A phone call</p>
            <p className="text-[var(--text-muted)]">We talk. Usually about an hour, sometimes it takes less. Some things get meaningfully moving in the right direction and some things get resolved.</p>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="max-w-3xl">
        <p className="text-lg text-[var(--text-muted)] mb-6">
          When you’re ready, send me a message.
        </p>
        <a href="/contact" className="primary inline-block">
          Send a message
        </a>
      </section>
    </div>
  );
}
