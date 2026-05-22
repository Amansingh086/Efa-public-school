import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import './App.css'

const navItems = ['Home', 'About', 'Academics', 'Faculty', 'Admissions', 'Events', 'Contact']

const stats = [
  { value: '330960', label: 'CBSE Affiliation' },
  { value: '10310905703', label: 'U-DISE Code' },
  { value: '1-8', label: 'Admission Classes' },
  { value: '4+', label: 'Learning Studios' },
]

const pillars = [
  {
    icon: Users,
    title: 'Individual Attention',
    text: 'Small class culture, mentoring, and personal guidance help every learner grow with confidence.',
  },
  {
    icon: Microscope,
    title: 'Hi-tech Classrooms',
    text: 'Technology enabled learning, audio-visual rooms, and interactive teaching make concepts easier to explore.',
  },
  {
    icon: Sparkles,
    title: 'Creative Expression',
    text: 'Music, art, clubs, houses, and competitions build social skills alongside academic discipline.',
  },
]

const programs = [
  'CBSE aligned academics',
  'Online education support',
  'Dedicated student care',
  'Counselling and mentoring',
  'Co-curricular activities',
  'Mandatory disclosures',
]

const activities = [
  'House competitions',
  'Art and music rooms',
  'Audio-visual laboratory',
  'Interactive learning',
  'Individual counselling',
  'Leadership habits',
]

const eventCards = [
  {
    image: '/events/event-1.jpg',
    tag: 'Celebration',
    date: 'Campus Event',
    title: 'Creative Arts & Cultural Day',
    text: 'Students express confidence through stage presence, colors, storytelling, and public speaking.',
  },
  {
    image: '/events/event-2.jpg',
    tag: 'Performance',
    date: 'Student Activity',
    title: 'Expression Through Music & Voice',
    text: 'Music, rhythm, and speaking activities help learners build focus, confidence, and teamwork.',
  },
  {
    image: '/events/event-3.jpg',
    tag: 'Community',
    date: 'School Update',
    title: 'News, Notices & School Highlights',
    text: 'Track important announcements, student achievements, and upcoming school programs at E.F.A.',
  },
]

const facultyMembers = [
  {
    name: 'Somaru Sir',
    subject: 'Maths Teacher',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNJ2DvuvS-aLGuO-FGpCRM199ZyiZcCUAF2bAjG=s680-w680-h510-rw',
    accent: 'from-teal-700 to-cyan-600',
    text: 'Makes mathematics practical, confident, and concept-driven for every learner.',
  },
  {
    name: 'Santosh Sir',
    subject: 'English Teacher',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN50Ky3dCf7QEatIcnqu4EyjvDBnlw7PCfHleU1=s680-w680-h510-rw',
    accent: 'from-[#d1495b] to-rose-500',
    text: 'Builds communication, reading fluency, grammar strength, and classroom confidence.',
  },
  {
    name: 'Chandrabhushan Sir',
    subject: 'Hindi Teacher',
    image: '/faculty/chandrabhushan-sir.jpg',
    accent: 'from-amber-500 to-orange-600',
    text: 'https://static.wixstatic.com/media/16d985_1257993d312b4bd6a37d51c19f56ae20~mv2.png/v1/fill/w_362,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/I%E2%80%99m%20an%20image%20title.png',
  },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 shadow-sm shadow-slate-950/5 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-white shadow-lg shadow-teal-900/20">
            <img className="h-full w-full object-cover" src="/events/event-3.jpg" alt="E.F.A. Public School logo" />
          </span>
          <span>
            <span className="block text-base font-black text-slate-950">E.F.A. Public School</span>
            <span className="block text-xs font-semibold text-teal-700">Paint Your Kid&apos;s Future</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#admissions"
          className="hidden items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-teal-800 lg:inline-flex"
        >
          Apply Now <ArrowRight size={16} />
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden"
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="ml-auto h-full w-full max-w-sm bg-white p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-black text-slate-950">Menu</span>
              <button
                type="button"
                aria-label="Close navigation"
                className="grid h-10 w-10 place-items-center rounded-md border border-slate-200"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-4 font-bold text-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {item} <ChevronRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const handleImageFallback = (event) => {
    event.currentTarget.src = '/events/event-3.jpg'
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[#f6f3ea] pt-24">
      <div className="absolute inset-x-0 top-0 h-36 bg-[#0f766e]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="reveal max-w-3xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-md border border-white/50 bg-white/80 px-3 py-2 text-sm font-bold text-teal-900 shadow-sm backdrop-blur">
            <ShieldCheck size={17} />
            CBSE affiliated school in Ramgarh, Kaimur
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] text-slate-950 sm:text-6xl lg:text-7xl">
            E.F.A. Public School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Cultivating excellence, ingenuity, and creativity through individual attention,
            interactive learning, and values-led education.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0f766e] px-6 py-4 font-black text-white shadow-xl shadow-teal-900/20 transition hover:-translate-y-1 hover:bg-[#115e59]"
            >
              Start Admission Enquiry <ArrowRight size={18} />
            </a>
            <a
              href="#academics"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-4 font-black text-slate-900 transition hover:-translate-y-1 hover:border-teal-700 hover:text-teal-800"
            >
              Explore Academics
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-1 relative">
          <div className="float-slow absolute -left-4 top-8 z-10 rounded-md bg-white p-4 shadow-2xl shadow-slate-950/15 sm:left-2">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-amber-100 text-amber-700">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">Lifelong learners</p>
                <p className="text-xs font-semibold text-slate-500">Tomorrow&apos;s leaders</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-slate-950 shadow-2xl shadow-slate-950/25">
            <img
              className="h-[520px] w-full object-cover opacity-90"
              src="/events/campus.jpg"
              alt="Aerial view of E.F.A. Public School campus"
              onError={handleImageFallback}
            />
          </div>
          <div className="absolute -bottom-5 right-4 grid w-40 gap-1 rounded-md bg-[#d1495b] p-4 text-white shadow-2xl sm:w-48">
            <span className="text-3xl font-black">1:1</span>
            <span className="text-sm font-bold">Guidance, counselling, and care</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="bg-slate-950 py-5 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-black text-amber-300">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-black uppercase text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Welcome to E.F.A."
          title="A school designed around each child&apos;s potential"
          text="EFA Public School is committed to nurturing inherent talent and creating learners with ethical values, curiosity, and leadership habits."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className={`reveal reveal-delay-${Math.min(index, 2)} rounded-md border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-slate-950/10`}
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-md bg-teal-100 text-teal-800">
                  <Icon size={27} />
                </div>
                <h3 className="text-xl font-black text-slate-950">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Academics() {
  return (
    <section id="academics" className="bg-[#f7faf8] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal overflow-hidden rounded-md">
          <img
            className="h-full min-h-[420px] w-full object-cover"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
            alt="Students collaborating on academics"
          />
        </div>
        <div className="reveal reveal-delay-1 flex flex-col justify-center">
          <p className="text-sm font-black uppercase text-teal-700">Academics</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Interactive learning with strong academic structure
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            The school promotes interactive learning instead of routine memorisation, supported by
            spacious classrooms, audio-visual aids, counselling, and co-curricular learning spaces.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {programs.map((program) => (
              <div key={program} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
                <CheckCircle2 className="shrink-0 text-teal-700" size={20} />
                <span className="font-bold text-slate-800">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Activities() {
  return (
    <section id="events" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Student Activities"
          title="A fuller school day, not just a timetable"
          text="Clubs, competitions, art, music, and house activities help students build confidence, social skills, and creative habits."
        />
        <div className="relative -mx-4 overflow-hidden border-y border-slate-200 bg-slate-50 py-5">
          <div className="marquee-track flex w-max gap-4 px-4">
            {[...activities, ...activities].map((activity, index) => (
              <span
                key={`${activity}-${index}`}
                className="inline-flex min-w-52 items-center justify-center rounded-md bg-white px-6 py-4 text-center font-black text-slate-800 shadow-sm"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {eventCards.map((event, index) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-md bg-slate-950 shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-950/20"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src={event.image}
                  alt={event.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-xs font-black text-slate-950 backdrop-blur">
                  {index === 0 ? <CalendarDays size={15} /> : index === 1 ? <BookOpen size={15} /> : <Users size={15} />}
                  {event.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="mb-2 inline-flex rounded-md bg-amber-300 px-3 py-1 text-xs font-black uppercase text-slate-950">
                    {event.date}
                  </p>
                  <h3 className="text-2xl font-black leading-tight text-white">{event.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="leading-7 text-slate-300">{event.text}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-300 transition group-hover:gap-3"
                >
                  Know More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faculty() {
  const handleFacultyFallback = (event) => {
    event.currentTarget.src = '/events/campus.jpg'
  }

  return (
    <section id="faculty" className="bg-[#f7faf8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Faculty"
          title="Teachers who shape confident learners"
          text="Meet the dedicated faculty members of E.F.A. Public School, guiding students with subject expertise, care, and classroom discipline."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {facultyMembers.map((teacher, index) => (
            <article
              key={teacher.name}
              className={`reveal reveal-delay-${Math.min(index, 2)} group overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-950/15`}
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={teacher.image}
                  alt={`${teacher.name}, ${teacher.subject} at E.F.A. Public School`}
                  onError={handleFacultyFallback}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-md bg-gradient-to-r ${teacher.accent} px-3 py-2 text-xs font-black uppercase text-white shadow-lg`}
                >
                  Faculty
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black">{teacher.name}</h3>
                  <p className="mt-1 font-bold text-amber-200">{teacher.subject}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="leading-7 text-slate-600">{teacher.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-black uppercase text-teal-700">E.F.A. Public School</span>
                  <GraduationCap className="text-slate-400 transition group-hover:text-teal-700" size={22} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  return (
    <section id="admissions" className="bg-[#0f766e] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-amber-200">Admissions</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
            New student enquiries for Classes 1 to 8
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-teal-50">
            Connect with the admissions office for eligibility, documents, fee details, and campus
            visit guidance. The school&apos;s focus is on a partnership between teachers and parents.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+918969464191"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 font-black text-teal-800 transition hover:-translate-y-1"
            >
              <Phone size={18} /> Call Admissions
            </a>
            <a
              href="mailto:info@efapublicschool.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              <Mail size={18} /> Email School
            </a>
          </div>
        </div>
        <div className="rounded-md bg-white p-6 text-slate-950 shadow-2xl shadow-teal-950/20">
          <h3 className="text-2xl font-black">Admission Desk</h3>
          <div className="mt-6 grid gap-4">
            {['Submit enquiry', 'Meet the counsellor', 'Confirm documents', 'Begin orientation'].map(
              (step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-md bg-slate-50 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-amber-100 font-black text-amber-700">
                    {index + 1}
                  </span>
                  <span className="font-bold">{step}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-black">E.F.A. Public School</h2>
          <p className="mt-3 max-w-md leading-7 text-slate-300">
            Jangalchhera, Mahuar, Sahuka P.O, Ramgarh, Bihar 821110
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [Phone, 'Main School', '+91-7654265055'],
            [Phone, 'Admissions', '+91-8969464191'],
            [Mail, 'Email', 'info@efapublicschool.com'],
          ].map(([Icon, label, value]) => (
            <div key={label} className="rounded-md border border-white/10 bg-white/5 p-4">
              <Icon className="mb-4 text-amber-300" size={22} />
              <p className="text-sm font-bold text-slate-400">{label}</p>
              <p className="mt-1 break-words font-black">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 E.F.A. Public School. Redesigned concept interface.</span>
        <span className="inline-flex items-center gap-2">
          <MapPin size={16} /> Ramgarh, Kaimur
        </span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Academics />
        <Faculty />
        <Activities />
        <Admissions />
      </main>
      <Contact />
    </>
  )
}

export default App
