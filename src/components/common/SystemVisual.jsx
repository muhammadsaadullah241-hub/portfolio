import { motion, useReducedMotion } from 'framer-motion'
import { Check, Search, Send, Sparkles } from 'lucide-react'

/**
 * SystemVisual — a warm, editorial "product card" mockup for a project.
 * White surface, green status/progress, rust labels and circular chip icons,
 * matching design.md. Variants:
 *   'chatbot' | 'leads' | 'booking' | 'schedule' | 'crm' | 'content'
 * Purely decorative (aria-hidden) — the card/modal supplies the label.
 */

const ease = [0.22, 1, 0.36, 1]

const TITLES = {
  chatbot: 'AI assistant',
  leads: 'Lead follow-up',
  booking: 'Smart booking',
  schedule: 'Bookings',
  crm: 'Lead pipeline',
  content: 'Content engine',
}

const STATUS = {
  chatbot: 'Live',
  leads: 'Done',
  booking: 'Live',
  schedule: 'Live',
  crm: 'Live',
  content: 'Done',
}

function WindowBar({ title, status }) {
  return (
    <div className="border-b border-line bg-paper px-3.5 pb-2 pt-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rust-tint text-rust">
          <Sparkles className="h-3 w-3" />
        </span>
        <span className="text-[11px] font-semibold text-ink">{title}</span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-moss">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-moss-tint">
            <Check className="h-2.5 w-2.5" />
          </span>
          {status}
        </span>
      </div>
      <div className="mt-2.5 h-[3px] w-full overflow-hidden rounded-full bg-cream-deep">
        <motion.div
          className="h-full rounded-full bg-moss"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
        />
      </div>
    </div>
  )
}

function Incoming({ children }) {
  return (
    <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-line bg-cream-deep px-3 py-2 text-[10px] leading-snug text-ink">
      {children}
    </div>
  )
}

function Outgoing({ children }) {
  return (
    <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-moss px-3 py-2 text-[10px] leading-snug text-white">
      {children}
    </div>
  )
}

function Kpi({ value, label }) {
  return (
    <div className="rounded-xl border border-line bg-paper px-2.5 py-2">
      <p className="text-[15px] font-bold leading-none text-ink sm:text-[17px]">{value}</p>
      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">{label}</p>
    </div>
  )
}

function Bar({ label, pct, delay = 0 }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[9px] text-muted">
        <span>{label}</span>
        <span className="font-semibold text-ink">{pct}%</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-cream-deep">
        <motion.div
          className="h-full rounded-full bg-rust"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease }}
        />
      </div>
    </div>
  )
}

/* ---------------------------- Variants ---------------------------- */

function ChatbotVisual({ client }) {
  const initial = (client.replace(/^(a|an|the)\s+/i, '').trim()[0] || 'A').toUpperCase()
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-line pb-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rust text-[10px] font-semibold text-cream">
          {initial}
        </span>
        <div className="leading-tight">
          <p className="text-[10px] font-semibold text-ink">{client}</p>
          <p className="flex items-center gap-1 text-[8px] text-muted">
            <span className="h-1 w-1 rounded-full bg-moss" /> replies in seconds
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-2 overflow-hidden">
        <Incoming>Hi! Custom cake for Saturday?</Incoming>
        <Outgoing>Of course — what size and flavour?</Outgoing>
        <Incoming>Medium, chocolate please</Incoming>

        <div className="max-w-[84%] rounded-xl border border-line bg-paper p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-rust">Order summary</p>
          <div className="mt-1.5 space-y-1 text-[9px] text-muted">
            <div className="flex justify-between">
              <span>Custom cake · Medium</span>
              <span className="font-semibold text-ink">$42</span>
            </div>
            <div className="flex justify-between">
              <span>Chocolate · Sat 2:00 PM</span>
              <span className="font-semibold text-ink">Pickup</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 rounded-md bg-moss py-1.5 text-[9px] font-semibold text-white">
            <Check className="h-3 w-3" /> Confirm order
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-pill border border-line bg-paper px-3 py-1.5">
        <span className="text-[9px] text-muted">Type a message…</span>
        <Send className="ml-auto h-3 w-3 text-rust" />
      </div>
    </div>
  )
}

function LeadsVisual() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        <Kpi value="180" label="Trials / mo" />
        <Kpi value="100%" label="Contacted" />
        <Kpi value="45%" label="Booked" />
      </div>

      <div className="space-y-2.5 rounded-xl border border-line bg-paper p-3">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-rust">Follow-up funnel</p>
        <Bar label="Lead captured" pct={100} />
        <Bar label="Nurtured" pct={78} delay={0.15} />
        <Bar label="Intro booked" pct={45} delay={0.3} />
      </div>

      <div className="mt-auto space-y-2">
        <Outgoing>Hi Sam — want me to book your free intro session?</Outgoing>
        <p className="pl-1 font-mono text-[8px] uppercase tracking-[0.12em] text-rust">
          Sent automatically in 45 seconds
        </p>
        <Incoming>Yes please — Thursday works great</Incoming>
      </div>
    </div>
  )
}

function BookingVisual() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const pattern = [
    [0, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 1, 0],
  ]
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-ink">March 2026</p>
        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-moss" /> Booked
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-sm border border-line bg-paper" /> Open
          </span>
        </div>
      </div>

      <div className="mt-3 grid flex-1 grid-cols-5 gap-1.5">
        {days.map((day, di) => (
          <div key={day} className="flex flex-col gap-1.5">
            <span className="text-center font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
              {day}
            </span>
            {pattern[di].map((filled, i) => (
              <motion.span
                key={i}
                className={`flex-1 rounded-sm border ${
                  filled ? 'border-moss/40 bg-moss/20' : 'border-line bg-paper'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: di * 0.05 + i * 0.03 }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-moss/30 bg-moss-tint px-3 py-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-moss text-white">
          <Check className="h-3 w-3" />
        </span>
        <p className="text-[9px] text-ink">
          Appointment confirmed · <span className="font-semibold">Tue 10:30 AM</span>
        </p>
      </div>
    </div>
  )
}

function ScheduleVisual() {
  const rows = [
    { time: '9:00', name: 'Marcus L.', status: 'Confirmed', tone: 'moss' },
    { time: '9:45', name: 'Dev P.', status: 'Reminder sent', tone: 'warm' },
    { time: '10:30', name: 'Sam R.', status: 'Confirmed', tone: 'moss' },
    { time: '11:15', name: 'Open slot', status: 'Off-peak offer', tone: 'hot' },
  ]
  const tones = {
    moss: 'bg-moss-tint text-moss',
    warm: 'bg-[#F6E3BF] text-[#8a6414]',
    hot: 'bg-rust-tint text-rust',
  }
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-ink">Today · bookings</p>
        <span className="rounded-pill border border-line bg-paper px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
          14 total
        </span>
      </div>

      <div className="mt-3 flex-1 space-y-1.5">
        {rows.map((row, i) => (
          <motion.div
            key={row.time}
            className="flex items-center gap-3 rounded-xl border border-line bg-paper px-3 py-2"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease }}
          >
            <span className="font-mono text-[9px] tabular-nums text-muted">{row.time}</span>
            <span className="text-[10px] font-medium text-ink">{row.name}</span>
            <span
              className={`ml-auto rounded-pill px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em] ${tones[row.tone]}`}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-cream-deep px-3 py-2">
        <p className="text-[9px] text-muted">Quiet hours filled</p>
        <p className="text-[11px] font-bold text-rust">+41%</p>
      </div>
    </div>
  )
}

function CrmVisual() {
  const columns = [
    { title: 'New', count: 4, cards: [{ name: 'J. Alvarez', meta: '$620k · Miami', score: '72' }] },
    { title: 'Qualified', count: 3, cards: [{ name: 'R. Chen', meta: '$780k · Brickell', score: '91' }] },
    { title: 'Viewing', count: 2, cards: [{ name: 'M. Okafor', meta: '$540k · Coral G.', score: '88' }] },
  ]
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2">
        <Search className="h-3 w-3 text-rust" />
        <p className="text-[10px] font-semibold text-ink">Lead pipeline</p>
        <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
          Auto-qualified 88%
        </span>
      </div>

      <div className="mt-3 grid flex-1 grid-cols-3 gap-2">
        {columns.map((col, ci) => (
          <div key={col.title} className="flex flex-col">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                {col.title}
              </span>
              <span className="text-[8px] text-muted">{col.count}</span>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {col.cards.map((card, i) => (
                <motion.div
                  key={card.name}
                  className="rounded-lg border border-line bg-paper p-2"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.1 + i * 0.05, ease }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-medium text-ink">{card.name}</span>
                    <span className="rounded-pill bg-rust-tint px-1.5 py-0.5 font-mono text-[7px] text-rust">
                      {card.score}
                    </span>
                  </div>
                  <p className="mt-1 text-[8px] text-muted">{card.meta}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-cream-deep px-3 py-2">
        <p className="text-[9px] text-muted">Agent hours saved</p>
        <p className="text-[11px] font-bold text-rust">15 hrs / week</p>
      </div>
    </div>
  )
}

function ContentVisual() {
  const tiles = [
    { tag: 'Seasonal', label: 'Autumn latte is back' },
    { tag: 'Offer', label: '2-for-1 before 10am' },
    { tag: 'Local', label: 'Meet our roaster' },
    { tag: 'Event', label: 'Live music Friday' },
    { tag: 'Menu', label: 'New pastry drop' },
    { tag: 'Review', label: 'Thanks, Seattle!' },
  ]
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-ink">Content calendar</p>
        <span className="rounded-pill border border-line bg-paper px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
          30 posts
        </span>
      </div>

      <div className="mt-3 grid flex-1 grid-cols-3 grid-rows-2 gap-1.5">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            className="flex flex-col justify-between overflow-hidden rounded-lg border border-line bg-gradient-to-br from-rust-tint to-cream p-1.5"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
          >
            <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-rust">
              {tile.tag}
            </span>
            <span className="text-[8px] leading-tight text-ink">{tile.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Kpi value="12.4k" label="Reach" />
        <Kpi value="3.9%" label="Engagement" />
        <Kpi value="2x" label="vs. before" />
      </div>
    </div>
  )
}

const VARIANTS = {
  chatbot: ChatbotVisual,
  leads: LeadsVisual,
  booking: BookingVisual,
  schedule: ScheduleVisual,
  crm: CrmVisual,
  content: ContentVisual,
}

export default function SystemVisual({ variant = 'chatbot', client = 'Your business', className = '' }) {
  const reduce = useReducedMotion()
  const Visual = VARIANTS[variant] ?? ChatbotVisual
  const title = TITLES[variant] ?? 'AI assistant'
  const status = STATUS[variant] ?? 'Live'

  return (
    <div
      aria-hidden="true"
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-card border border-line bg-paper shadow-card ${className}`}
    >
      <WindowBar title={title} status={status} />
      <div className="flex min-h-0 flex-1 bg-cream/50 p-3.5 sm:p-4">
        <motion.div
          className="flex h-full w-full flex-col"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <Visual client={client} />
        </motion.div>
      </div>
    </div>
  )
}
