import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  projectType: z.string().min(1, "Select what you'd like made"),
  budget: z.string().min(1, "Select a budget range"),
  deliveryDate: z.string().optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const fieldBase =
  "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-hidden transition-shadow focus:ring-2 focus:ring-ring";

export function QuoteForm({
  title = "Request a free quote",
  intro = "Share your idea and reference photos. Our design team replies within 2 working hours.",
  compact = false,
}: {
  title?: string;
  intro?: string;
  compact?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      setFiles([]);
      toast.success("Thank you! Your enquiry is in. We'll reply within 2 working hours.");
    }, 700);
  };

  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1.5 text-xs font-medium text-destructive">{errors[name]}</p>
    ) : null;

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-soft md:p-8">
      <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{intro}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="qf-name" className="text-xs font-semibold text-ink">
              Full name*
            </label>
            <input id="qf-name" name="name" maxLength={100} className={`${fieldBase} mt-1.5`} placeholder="Krishna Gujre" />
            <Err name="name" />
          </div>
          <div>
            <label htmlFor="qf-phone" className="text-xs font-semibold text-ink">
              Phone / WhatsApp*
            </label>
            <input id="qf-phone" name="phone" maxLength={20} className={`${fieldBase} mt-1.5`} placeholder="+91 90000 00000" />
            <Err name="phone" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="qf-email" className="text-xs font-semibold text-ink">
              Email*
            </label>
            <input id="qf-email" name="email" type="email" maxLength={255} className={`${fieldBase} mt-1.5`} placeholder="you@email.com" />
            <Err name="email" />
          </div>
          <div>
            <label htmlFor="qf-type" className="text-xs font-semibold text-ink">
              What would you like made?*
            </label>
            <select id="qf-type" name="projectType" defaultValue="" className={`${fieldBase} mt-1.5`}>
              <option value="" disabled>
                Select an option
              </option>
              <option>Personalised human figurine</option>
              <option>Couple statue / wedding topper</option>
              <option>Pet miniature</option>
              <option>Anime / gaming collectible</option>
              <option>Kids toy or action figure</option>
              <option>Vehicle scale model</option>
              <option>Corporate gifting (bulk)</option>
              <option>Home decor / nameplate / keychain</option>
            </select>
            <Err name="projectType" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="qf-budget" className="text-xs font-semibold text-ink">
              Budget*
            </label>
            <select id="qf-budget" name="budget" defaultValue="" className={`${fieldBase} mt-1.5`}>
              <option value="" disabled>
                Select a range
              </option>
              <option>Under ₹2,000</option>
              <option>₹2,000 – ₹5,000</option>
              <option>₹5,000 – ₹10,000</option>
              <option>₹10,000 – ₹25,000</option>
              <option>₹25,000+ / bulk order</option>
            </select>
            <Err name="budget" />
          </div>
          <div>
            <label htmlFor="qf-date" className="text-xs font-semibold text-ink">
              Needed by
            </label>
            <input id="qf-date" name="deliveryDate" type="date" className={`${fieldBase} mt-1.5`} />
          </div>
        </div>

        <div>
          <label htmlFor="qf-message" className="text-xs font-semibold text-ink">
            Tell us about it*
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={compact ? 3 : 4}
            maxLength={1000}
            className={`${fieldBase} mt-1.5 resize-none`}
            placeholder="Two people, wedding outfits, 15 cm tall, needed before 20th December…"
          />
          <Err name="message" />
        </div>

        <div>
          <label className="text-xs font-semibold text-ink">Reference images</label>
          <label
            htmlFor="qf-files"
            className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Upload className="h-4 w-4" />
            {files.length ? `${files.length} file(s) selected` : "Upload photos (JPG, PNG, STL · max 10)"}
          </label>
          <input
            id="qf-files"
            type="file"
            multiple
            accept="image/*,.stl,.obj"
            className="sr-only"
            onChange={(e) =>
              setFiles(Array.from(e.target.files ?? []).slice(0, 10).map((f) => f.name))
            }
          />
          {files.length > 0 && (
            <p className="mt-2 truncate text-xs text-muted-foreground">{files.join(", ")}</p>
          )}
        </div>

        <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
          {sending ? "Sending…" : "Send my enquiry"}
        </Button>
        <p className="text-center text-[11px] text-muted-foreground">
          We reply within 2 working hours. Your details are never shared.
        </p>
      </form>
    </div>
  );
}
