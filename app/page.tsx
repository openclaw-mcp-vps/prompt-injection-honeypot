export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/30">
          AI SECURITY
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Detect Prompt Injection Attempts{" "}
          <span className="text-[#58a6ff]">in Production</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor every AI app input for injection patterns. Log threats, trigger real-time alerts, and ship safer AI products — without changing your stack.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-xs text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["ML Detection", "Pattern-based injection scoring"],
            ["Real-time Alerts", "Webhook & email notifications"],
            ["SDK Ready", "Drop-in for any AI stack"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/50 rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">PRO</div>
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to secure your AI app.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Up to 500k requests/mo",
              "ML injection pattern detection",
              "Real-time webhook & email alerts",
              "Searchable threat log dashboard",
              "SDK for Node, Python, REST",
              "Threat intelligence reports",
              "Priority support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What is a prompt injection attack?",
              "A prompt injection attack is when a malicious user crafts input designed to override your AI system's instructions — causing it to leak data, bypass safety filters, or behave unexpectedly. Our tool detects these patterns before they cause harm."
            ],
            [
              "How does the detection work?",
              "We use ML-based pattern scoring trained on thousands of known injection techniques. Each request gets a threat score. High-risk inputs trigger instant alerts via webhook or email so you can act fast."
            ],
            [
              "How do I integrate it into my app?",
              "Drop in our SDK (Node.js, Python, or plain REST) and wrap your AI input handler. Setup takes under 5 minutes. Your existing stack stays unchanged."
            ]
          ].map(([q, a]) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] ml-4">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Prompt Injection Honeypot. All rights reserved.
      </footer>
    </main>
  );
}
