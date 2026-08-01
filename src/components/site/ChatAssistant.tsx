import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { company } from "@/lib/site";
import { Button } from "@/components/ui/button";

type Msg = { role: "bot" | "user"; text: string };

const welcome: Msg = {
  role: "bot",
  text: "Hi! I'm Verse, the 3D Printopia studio assistant. Ask me about pricing, delivery or a custom idea — or pick a shortcut below.",
};

const quick = [
  {
    label: "What does a custom figurine cost?",
    reply:
      "Single-person figurines start at ₹2,799 after our 20% studio discount, couples from ₹3,999 and pet miniatures from ₹1,999. Final pricing depends on height, detail and finish — you always get a firm quote before we start.",
  },
  {
    label: "How long does delivery take?",
    reply:
      "Most personalised pieces ship in 8–14 working days. Keychains and nameplates go out in 3–5 days. We deliver across India with insured, tracked courier partners.",
  },
  {
    label: "How do I send my photos?",
    reply:
      "WhatsApp is easiest — send 6–10 clear photos (front, both profiles, three-quarter and a full-body shot) and our designers reply within two working hours.",
  },
  {
    label: "Do you do bulk corporate orders?",
    reply:
      "Yes — from 25 to 5,000 units, with brand-matched colours, logo geometry, individual name engraving, gift boxing and multi-address dispatch.",
  },
];

function replyFor(text: string) {
  const t = text.toLowerCase();
  const hit = quick.find((q) =>
    q.label
      .toLowerCase()
      .split(" ")
      .filter((w) => w.length > 4)
      .some((w) => t.includes(w.replace(/[^a-z]/g, ""))),
  );
  if (hit) return hit.reply;
  if (/price|cost|rate|budget/.test(t)) return quick[0].reply;
  if (/deliver|ship|time|days/.test(t)) return quick[1].reply;
  if (/photo|image|picture|upload/.test(t)) return quick[2].reply;
  if (/bulk|corporate|company|office/.test(t)) return quick[3].reply;
  return `Great question! A designer can answer that properly in a minute — message us on WhatsApp at ${company.phone} or call the studio, and we'll come back with options and a quote.`;
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([welcome]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ block: "end" });
      inputRef.current?.focus();
    }
  }, [open, msgs]);

  const send = (text: string) => {
    const clean = text.trim().slice(0, 400);
    if (!clean) return;
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    window.setTimeout(
      () => setMsgs((m) => [...m, { role: "bot", text: replyFor(clean) }]),
      450,
    );
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with the 3D Printopia studio assistant"
          className="glass fixed bottom-24 right-4 z-50 flex h-[26rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border shadow-lift"
        >
          <div className="flex items-center gap-3 border-b bg-card/60 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/12 text-primary">
              <Bot className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-bold text-ink">Ask Verse</p>
              <p className="truncate text-[11px] text-muted-foreground">
                Studio assistant · replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground"
                    : "max-w-[90%] text-sm leading-relaxed text-foreground"
                }
              >
                {m.text}
              </div>
            ))}

            {msgs.length <= 1 && (
              <div className="grid gap-2 pt-1">
                {quick.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => send(q.label)}
                    className="rounded-2xl border bg-card/70 px-3 py-2 text-left text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t bg-card/60 px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={400}
              placeholder="Type your question…"
              aria-label="Message the studio assistant"
              className="min-w-0 flex-1 rounded-xl border bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" size="icon" variant="hero" aria-label="Send message">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close studio assistant" : "Open studio assistant"}
        className="glass fixed bottom-5 right-4 z-50 grid h-12 w-12 place-items-center rounded-full text-primary shadow-lift transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </button>
    </>
  );
}
