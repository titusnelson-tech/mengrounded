"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xrpgzbyl";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: "New message from mengrounded.com",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Get In Touch</h1>
        <p className="text-lg text-[var(--text-muted)]">
          Send me a message and let’s schedule a phone call, or text if 
          you prefer.
        </p>
      </div>

      {status === "sent" ? (
        <div className="card">
          <h2 className="text-xl font-semibold mb-3">Message sent</h2>
          <p className="text-[var(--text-muted)]">
            Thanks for reaching out. I’ll get back to you within a day or two.
          </p>
        </div>
      ) : (
        <div className="card">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                required
                className="input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                className="input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                className="input"
                placeholder="Call or text, your choice."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What’s going on?</label>
              <textarea
                className="input min-h-[160px]"
                placeholder="Tell me what you’re dealing with..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="primary w-full" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-sm text-center">
                Something went wrong sending that. Try again in a minute, or 
                email me directly at titus.nelson@gmail.com.
              </p>
            )}
          </form>
        </div>
      )}

      <div className="text-center space-y-1">
        <p className="text-sm text-[var(--text-muted)]">
          I usually reply within a day or two.
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          If you’re in crisis, call or text 988.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Support the work</h2>
        <p className="text-[var(--text-muted)]">
          If a conversation helps, you can send a donation to support the work. 
          Only if it’s worth it to you. No pressure.
        </p>
        <a
          href="https://www.paypal.me/mengrounded"
          target="_blank"
          rel="noopener noreferrer"
          className="primary inline-block mt-4"
        >
          Send a Donation
        </a>
      </div>
    </div>
  );
}
