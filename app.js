/* ================================================================
   Space4Climate — Intelligence Dashboard  (v3 — Full Documents)
   ================================================================ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const uid = () => 'id_' + Math.random().toString(36).slice(2, 10);

function hashColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return `hsl(${((h % 360) + 360) % 360}, 55%, 48%)`;
}
function initials(name) { return name.split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2); }
function formatDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''; }
function shortDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''; }
function relativeTime(s) {
  const m = Math.floor((Date.now() - new Date(s).getTime()) / 60000);
  if (m < 1) return 'Just now'; if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return d < 7 ? `${d}d ago` : formatDate(s);
}

// ════════════════════════════════════════════════════════════════
//  ALL DATA — From Discord + MoMs + Board Meeting + Who's Who
// ════════════════════════════════════════════════════════════════

const PEOPLE_DATA = [
  // ─── CORE TEAM ───
  {
    id: 'p_jim', name: 'Jim Volp', role: 'Founder & Co-Lead',
    board: 'core', timezone: 'UTC+1', location: 'Germany', status: 'active',
    skills: ['Leadership', 'Strategy', 'Partnerships', 'Board Governance', 'Operations', 'Space Industry'],
    bio: 'Head of Operations New Space at Media Broadcast Satellite. Former Governing Member of ISU, Director of Edu Relations for WSW, NPoC → Regional Coordinator → co-Chair of SGAC. Organised 1st ESA Student Outreach Program, 1st Space Generation Congress, 1st IAF Young Professionals Program. In IAF Committees CLIODN, CIA, KMTC, SOP, ACCESS Africa + MECA.',
    notes: 'Core founder. Facilitated the Joint Board Meeting on Apr 25. Believes in dual-leadership for volunteering. Traveled to SF Jul 23-28 with Advaith.',
    quotes: [
      { text: 'I strongly believe in DUAL-leadership for volunteering!!!', date: '2026-07-16' },
      { text: 'At Space4Climate.org we\'re about to break through on a massive scale. We have possibilities lined up with SpaceBuzz, the Brazilian, European and Nigerian Space Agencies.', date: '2026-07-07' },
      { text: 'What we need: people who can take the lead. People driven to leave their mark on the world and the space industry.', date: '2026-07-07' },
      { text: 'I hate to have single-point-failures.', date: '2026-07-03' },
      { text: 'The project stands at a pivotal "big opportunity" phase.', date: '2026-04-25', context: 'Board Meeting' },
    ],
    actionItems: [
      { text: 'Finalize volunteer role assignments (dual-leadership model)', status: 'in-progress', due: '2026-07-20', source: 'Promised to Amara on Jul 16' },
      { text: 'Review Amanda\'s Canva pitchdeck', status: 'in-progress', due: '2026-07-30', source: 'Acknowledged Jun 30' },
      { text: 'Review ESA Earth Action Info Day video for funding leads', status: 'todo', due: '', source: 'Action Items (May 11)' },
      { text: 'San Francisco pitching tour (YC Startup School)', status: 'todo', due: '2026-07-26', source: 'Action Items (Jun 7)' },
      { text: 'SF trip — meet space, climate, and VC entities', status: 'done', due: '2026-07-28', source: 'Announced Jul 4' },
      { text: 'Refine Mission Statement re: "focus on girls" wording', status: 'todo', due: '', source: 'MoMs Apr 25 — Action Item' },
      { text: 'Fix website: session booking & PayPal donation modules', status: 'todo', due: '', source: 'MoMs Apr 25 — Immediate' },
      { text: 'Kigali promo pack (Event postponed to a date not yet known)', status: 'done', due: '', source: 'MoMs Apr 25 / Update: Postponed' },
      { text: 'Beta-test Space module (2-3 online test runs)', status: 'todo', due: '', source: 'MoMs Apr 25 — Immediate' },
      { text: 'Setup Discord for volunteer community', status: 'done', due: '2026-04-25', source: 'MoMs Apr 25 — Immediate (done)' },
      { text: 'Register as Dutch ANBI non-profit (notary → CoC)', status: 'todo', due: '', source: 'MoMs Apr 25 — Immediate' },
      { text: 'Open bank account for organization', status: 'todo', due: '', source: 'Board Meeting Roadmap' },
      { text: 'Schedule biannual Board update meeting', status: 'todo', due: '', source: 'MoMs Apr 25 — Upcoming' },
      { text: 'Finish Climate module before end of June', status: 'todo', due: '2026-06-30', source: 'Board Meeting Roadmap' },
      { text: 'Cross-train online facilitators (from core team first)', status: 'todo', due: '', source: 'Board Meeting Roadmap' },
      { text: 'Draft roles: social media, ops, marketing, fundraising, partnerships', status: 'in-progress', due: '', source: 'Board Meeting Roadmap' },
      { text: 'Create sponsorship package', status: 'todo', due: '', source: 'Board Meeting Roadmap' },
      { text: 'SpaceBuzz partnership follow-up', status: 'todo', due: '', source: 'Discord Jul 7' },
      { text: 'Onboard Anagha — assign role', status: 'todo', due: '', source: 'Joined server Jul 4' },
    ],
    personalTimeline: [
      { date: '2026-04-25', text: 'Facilitated Joint Board Meeting (1h 25m). Presented Project Info pack. Defined 6-month goal: world-class, repeatable, measurable workshop delivery.' },
      { date: '2026-06-29', text: 'Shared Project_Info.pdf (3.19 MB) for team review. Introduced Lisa Vitaris as Honorary Board.' },
      { date: '2026-07-03', text: 'Apologized for delayed pitchdeck review — "my work is killing me." Requested channel sharing.' },
      { date: '2026-07-04', text: 'Called for help finding SF contacts: space, climate, VC.' },
      { date: '2026-07-07', text: 'Defined S4C mission: facilitators + teacher marketing. Two key needs.' },
      { date: '2026-07-09', text: 'Shared UN EO course milestone: 1,000+ enrolments, 110 countries.' },
      { date: '2026-07-16', text: 'Dual-leadership model announced. Promised role overview.' },
      { date: '2026-07-23', text: 'SF trip begins with Advaith.' },
      { date: '2026-07-28', text: 'SF trip ends.' },
    ],
    connections: [
      { to: 'Advaith', reason: 'Co-leading S4C, SF trip together' },
      { to: 'Amanda Savita Alexander', reason: 'Pitchdeck, external engagement' },
      { to: 'Joshua', reason: 'UNIVAST bootcamp, Nigeria region' },
      { to: 'Lisa Vitaris', reason: 'Honorary Board member' },
      { to: 'Barbara Ryan', reason: 'Honorary Board member' },
      { to: 'Marc Heppener', reason: 'Board of Advisors, met at Board Meeting' },
      { to: 'Danilo Sakay', reason: 'AEB / Brazilian Space Agency link' },
    ]
  },
  {
    id: 'p_advaith', name: 'Advaith', role: 'Co-Lead & Technical',
    board: 'core', timezone: 'UTC+5:30', location: 'India', status: 'active',
    skills: ['Technology', 'Strategy', 'Y Combinator', 'Networking'],
    bio: '', notes: 'Traveled to SF with Jim. Involved in Y Combinator activities and pitch meetings.',
    quotes: [],
    actionItems: [
      { text: 'SF trip networking with Jim', status: 'done', due: '2026-07-28', source: 'Jul 4' },
      { text: 'Continue Y Combinator engagement', status: 'in-progress', due: '', source: 'Amanda Jun 29' },
    ],
    personalTimeline: [
      { date: '2026-06-29', text: 'Mentioned by Amanda as meeting people in SF / Y Combinator.' },
      { date: '2026-07-23', text: 'Flew to San Francisco with Jim.' },
      { date: '2026-07-28', text: 'SF trip ends.' },
    ],
    connections: [{ to: 'Jim Volp', reason: 'Co-leading S4C, SF trip' }, { to: 'Amanda Savita Alexander', reason: 'Pitchdeck' }]
  },
  {
    id: 'p_amanda', name: 'Amanda Savita Alexander', role: 'Lead — Sponsorships & External Engagement',
    board: 'core', timezone: 'UTC+10', location: 'Australia', status: 'active',
    skills: ['Sponsorships', 'Proposals & Grants', 'MOUs', 'Pitch Decks', 'Canva', 'LinkedIn Outreach'],
    bio: '', notes: 'Exceptionally matching skills. Created Canva pitchdeck. Applied for ASDA Board Observer (not selected). Proactive with SF logistics.',
    quotes: [
      { text: 'Happy to take on a general Lead, Sponsorships & External Engagement role, and then split that with others as things progress.', date: '2026-06-29' },
      { text: 'I\'ve made you a pitch deck with info from there, the google drive and the websites.', date: '2026-06-30' },
      { text: 'I did mention in the interview I\'d be interested in learning how to structure a board, avoid mission creep, and scaling.', date: '2026-07-04' },
      { text: 'Unfortunately I didn\'t get the space board observer mentorship position.', date: '2026-07-09' },
    ],
    actionItems: [
      { text: 'Lead Sponsorships & External Engagement', status: 'in-progress', due: '', source: 'Self-volunteered Jun 29' },
      { text: 'Created Canva pitchdeck', status: 'done', due: '2026-06-30', source: 'Completed Jun 30' },
      { text: 'Share S4C on LinkedIn & forward to California contacts', status: 'in-progress', due: '', source: 'Jul 7' },
      { text: 'Share with JustSpace Alliance Slack (S4C email)', status: 'in-progress', due: '', source: 'Jul 8' },
      { text: 'Found Builders Night at SF Commons', status: 'done', due: '2026-07-08', source: 'Shared Jul 8' },
      { text: 'ASDA Board Observer application', status: 'blocked', due: '2026-07-09', source: 'Not selected' },
    ],
    personalTimeline: [
      { date: '2026-06-29', text: 'Volunteered as External Engagement Lead.' },
      { date: '2026-06-30', text: 'Created Canva pitchdeck.' },
      { date: '2026-07-04', text: 'Shared ASDA interview insights.' },
      { date: '2026-07-08', text: 'Found Builders Night. Offered JustSpace Alliance outreach.' },
      { date: '2026-07-09', text: 'ASDA Board Observer — not selected.' },
    ],
    connections: [{ to: 'Jim Volp', reason: 'Pitchdeck, engagement lead' }, { to: 'Lisa Vitaris', reason: 'Both in Australia' }]
  },
  {
    id: 'p_joshua', name: 'Joshua', role: 'GDev — Africa Region Liaison',
    board: 'core', timezone: 'UTC+1', location: 'Nigeria', status: 'active',
    skills: ['Community Outreach', 'Space Education', 'UNIVAST Network'],
    bio: '', notes: 'Connected with UNIVAST. Key bridge to African partnerships.',
    quotes: [
      { text: 'I was wondering if there\'s anything you would like me to do for Space4Climate at the event since they have very similar goals with us.', date: '2026-07-07' },
    ],
    actionItems: [
      { text: 'Attend UNIVAST bootcamp (August)', status: 'todo', due: '2026-08-31', source: 'Jul 7' },
      { text: 'Provide feedback on UNIVAST programme to Jim', status: 'todo', due: '2026-08-31', source: 'Jim requested' },
      { text: 'Explore Nigerian Space Agency collaboration', status: 'todo', due: '', source: 'Jim mentioned Jul 7' },
    ],
    personalTimeline: [
      { date: '2026-07-07', text: 'Reported UNIVAST bootcamp. Offered to represent S4C.' },
    ],
    connections: [{ to: 'Jim Volp', reason: 'UNIVAST coordination, Africa region' }]
  },
  {
    id: 'p_renad', name: 'Renad Baomar', role: 'Volunteer',
    board: 'core', timezone: 'UTC+3', location: '', status: 'active',
    skills: ['Engagement', 'Team Support'], bio: '', notes: 'Recently joined. Supportive and encouraging.',
    quotes: [{ text: 'I will join !!', date: '2026-07-09' }],
    actionItems: [{ text: 'Get assigned a volunteer role', status: 'todo', due: '', source: 'Jim to assign' }],
    personalTimeline: [{ date: '2026-07-09', text: 'Confirmed joining. Encouraged Amanda.' }],
    connections: [{ to: 'Jim Volp', reason: 'Volunteer onboarding' }]
  },
  {
    id: 'p_amara', name: 'Amara', role: 'Volunteer — Leadership Interest',
    board: 'core', timezone: '', location: '', status: 'active',
    skills: ['Leadership', 'Volunteering'], bio: '', notes: 'Proactively asked about roles. Put healthy pressure on Jim.',
    quotes: [{ text: 'Any info on the leadership/volunteer roles? If you\'ve selected already, let me know if there\'s anything else open to help.', date: '2026-07-15' }],
    actionItems: [{ text: 'Get assigned leadership/volunteer role', status: 'todo', due: '', source: 'Jul 15' }],
    personalTimeline: [{ date: '2026-07-15', text: 'Asked about open roles. Jim confirmed acceptance.' }],
    connections: [{ to: 'Jim Volp', reason: 'Volunteer role assignment' }]
  },
  {
    id: 'p_norbert', name: 'Norbert (nobby_muzila)', role: 'Team Member',
    board: 'core', timezone: '', location: '', status: 'active',
    skills: [], bio: '',
    notes: 'Active online member. Listed as participant in MoMs (Apr 25 Board Meeting).',
    quotes: [], actionItems: [{ text: 'Get assigned a specific role', status: 'todo', due: '', source: 'Present at Board Meeting' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_anagha', name: 'Anagha', role: 'New Member',
    board: 'core', timezone: '', location: '', status: 'away',
    skills: [], bio: '', notes: 'Joined server Jul 4. Pending onboarding.',
    quotes: [], actionItems: [{ text: 'Get onboarded and assigned role', status: 'todo', due: '', source: 'Joined Jul 4' }],
    personalTimeline: [{ date: '2026-07-04', text: 'Joined Space4Climate server.' }],
    connections: []
  },

  // ─── HONORARY BOARD ───
  {
    id: 'p_barbara', name: 'Barbara Ryan', role: 'Honorary Board — Executive Director, WGIC',
    board: 'honorary', timezone: '', location: 'USA', status: 'active',
    skills: ['Earth Observation', 'Open Data Policy', 'GEO/CEOS', 'Geospatial Industry', 'International Policy'],
    bio: 'Executive Director, World Geospatial Industry Council (WGIC). Former Director of WMO Space Programme. Secretariat Director of GEO in Geneva. Associate Director for Geography at USGS. Chair of CEOS. Oversaw making millions of satellite images freely available. Honorary doctorate from SUNY Cortland. Geospatial World Forum Hall of Fame. NASA/Interior Pecora Award.',
    notes: 'Serves on boards of Azimuth1, D4DInsights, Ecological Sequestration Trust, ICES, ISRSE, and the Jane Goodall Institute.',
    quotes: [], actionItems: [{ text: 'Support strategic advocacy for S4C', status: 'in-progress', due: '', source: 'Honorary Board member' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Honorary Board member in Who\'s Who document.' }],
    connections: [{ to: 'Jim Volp', reason: 'Honorary Board member' }, { to: 'Mazlan Othman', reason: 'Fellow Honorary Board' }]
  },
  {
    id: 'p_mazlan', name: 'Mazlan Othman', role: 'Honorary Board — Emeritus Professor, UKM',
    board: 'honorary', timezone: 'UTC+8', location: 'Malaysia', status: 'active',
    skills: ['Astrophysics', 'Space Policy', 'UNOOSA', 'Space Agency Leadership'],
    bio: 'Emerita Professor, Malaysia\'s first astrophysicist. Director General of Angkasa (Malaysian National Space Agency). Director of UN Office for Outer Space Affairs (UNOOSA) 2007-2014. Pioneered Malaysia\'s participation in space exploration. Built astrophysics curriculum at national university.',
    notes: '', quotes: [],
    actionItems: [{ text: 'Provide strategic guidance to S4C', status: 'in-progress', due: '', source: 'Honorary Board' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Honorary Board member.' }],
    connections: [{ to: 'Jim Volp', reason: 'Honorary Board' }, { to: 'Barbara Ryan', reason: 'Fellow Honorary Board' }]
  },
  {
    id: 'p_jeanne', name: 'Jeanne Holm', role: 'Honorary Board — Deputy Mayor, City of L.A.',
    board: 'honorary', timezone: 'UTC-8', location: 'Los Angeles, USA', status: 'active',
    skills: ['Open Data', 'Civic Innovation', 'NASA', 'Education', 'Public-Private Partnerships'],
    bio: 'Deputy Mayor for Budget and Innovation at City of Los Angeles. Chief Knowledge Architect at NASA. Evangelist for open data at the U.S. White House (Data.gov). Senior consultant with World Bank. Fellow of UN International Academy of Astronautics. Over 130 publications. NASA Exceptional Service Medal (twice), top 50 Women in Tech.',
    notes: '', quotes: [],
    actionItems: [{ text: 'Provide strategic guidance to S4C', status: 'in-progress', due: '', source: 'Honorary Board' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Honorary Board member.' }],
    connections: [{ to: 'Jim Volp', reason: 'Honorary Board' }]
  },
  {
    id: 'p_lisa', name: 'Lisa Vitaris', role: 'Honorary Board — CEO, Indo-Pacific Space',
    board: 'honorary', timezone: 'UTC+10', location: 'Australia', status: 'active',
    skills: ['Space Industry', 'Marketing', 'Indo-Pacific', 'Board Governance', 'IAC/AIAA', 'Sustainability'],
    bio: 'CEO & Founder of Indo-Pacific Space. Strategic Advisor for AIAA. Former Interim CEO of SIAA. Director of IAC 2025 Sydney (7,400 delegates, AUD $42M impact). Presented at UN COPUOS, COP30. Board member of Engineers Australia (140,000 members). Founder of 10 Pieces (sustainability). EngExec, GAICD, MBA.',
    notes: 'Described by Jim as "a real powerhouse in Australia." Tasked with strategic advocacy at AIAA.',
    quotes: [],
    actionItems: [
      { text: 'Strategic advocacy: mention S4C during AIAA conversations', status: 'in-progress', due: '', source: 'MoMs Apr 25 — Ongoing' },
      { text: 'Continue serving as Honorary Board advisor', status: 'in-progress', due: '', source: 'Ongoing' },
    ],
    personalTimeline: [
      { date: '2026-04-25', text: 'Participated in Joint Board Meeting. Tasked with AIAA advocacy.' },
      { date: '2026-06-29', text: 'Introduced by Jim as Honorary Board to the Discord community.' },
    ],
    connections: [{ to: 'Jim Volp', reason: 'Honorary Board, AIAA advocacy' }, { to: 'Amanda Savita Alexander', reason: 'Both in Australia' }]
  },

  // ─── BOARD OF ADVISORS ───
  {
    id: 'p_lily', name: 'Lily Asongfac', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: 'Africa', status: 'active',
    skills: ['TEDx Speaker', 'IAF ESL Awardee', 'TechWomen Fellow', 'SGAC NPoC', 'UNOOSA Space4Women', 'STEAM Education in Africa'],
    bio: '5+ years in Space Industry. TEDx Speaker. IAF ESL Awardee. TechWomen Fellow \'23. SGAC NPoC CM. UNOOSA Space4Women. Let\'s talk Outreach & Space STEAM Education in Africa.',
    notes: '', quotes: [], actionItems: [], personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors member.' }], connections: []
  },
  {
    id: 'p_samer', name: 'Samer Bou Abdo', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['Aerospace Engineering', 'Propulsion & Energetics', 'CFD', 'Combustion', 'Applied Mechanics'],
    bio: 'Aerospace Engineer specializing in Propulsion & Energetics, CFD, Combustion, Applied Mechanics.',
    notes: 'Participated in the Joint Board Meeting on Apr 25.', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed to unknown date)', status: 'done', due: '', source: 'MoMs Apr 25 — All members' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_gulin', name: 'Gülin Dede', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['PhD', 'Tech Executive', 'Programme Coordination', 'Consulting'],
    bio: 'PhD, MSc, Tech Executive. Programme Coordinator. Consultant.', notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_jessica', name: 'Jessica D\'Urbano', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['Space Medicine', 'Occupational Medicine', 'ESA Citizen Scientist', 'NASA GeneLab', 'UNOOSA/WHO', 'IAF SEOC'],
    bio: 'M.D. Occupational Med Resident. Space Med Researcher. Air Medical Doctor. ESA Citizen Scientist. NASA GeneLab Multi-Omics AWG Co-Lead. UNOOSA and WHO Space & Global Health CV Taskforce. IAF SEOC Member.',
    notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_janine', name: 'Janine Geijsen', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['TEDx Speaker', 'Innovation & Transition Leadership', 'Creativity'],
    bio: 'TEDx Speaker. Leader of Innovation & Transition. Creativity pusher.', notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_bernard', name: 'Bernard Foing', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: 'Europe', status: 'active',
    skills: ['Moon/Mars Exploration', 'Space Renaissance', 'EuroSpaceHub', 'Art/Music/Space', 'Training Astronaut'],
    bio: 'President Space Renaissance Int\'l. CEO LUNEX EuroMoonMars Earth Space Innovation. EuroSpaceHub. Prof at Riga/Leiden/NUAA/BIT. Training astronaut. Producer, ArtMoonMars, Musician.',
    notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_cameron', name: 'Cameron Farrar-Frank', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['IT Asset Management', 'Global ITAM Leadership', 'Allianz'],
    bio: 'Head of IT Asset Management at Allianz. Global ITAM Leader.', notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_sona', name: 'Sona Guliyeva', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['PhD Researcher', 'Earth Observation', 'Space', 'Top 100 Women in Aerospace'],
    bio: 'PhD Researcher in Earth Observation & Space. #3 in Top 100 Women in Aerospace & Aviation 2025.',
    notes: 'Participated in Joint Board Meeting on Apr 25.', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_marc', name: 'Marc Heppener', role: 'Board of Advisors',
    board: 'advisors', timezone: 'UTC+1', location: 'Europe', status: 'active',
    skills: ['Entrepreneurship', 'Former ESA Chief Scientist', 'Robotic & Human Exploration'],
    bio: 'Entrepreneur at Entrespatiaux. Former Chief Scientist for Robotic and Human Exploration at ESA.',
    notes: 'Participated in Joint Board Meeting on Apr 25.', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board Advisor, ex-ESA' }]
  },
  {
    id: 'p_alex', name: 'Alex Karl', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['ISS Operations', 'Planetary Defense', 'Public Education & Outreach', 'SpaceKind'],
    bio: 'ISS Operations. Planetary Defense. Public Education & Outreach. SpaceKind.',
    notes: 'Participated in Joint Board Meeting on Apr 25 (listed as "Alex" in MoMs).', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_yankit', name: 'Yankit Kukreja', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['Navigation', 'ISU MSS 25-26'],
    bio: 'Navigating Officer. MSS 25-26 at International Space University.', notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_agnieszka', name: 'Agnieszka Lukaszczyk', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: 'Europe', status: 'active',
    skills: ['PhD', 'Space Security', 'Earth Observation', 'Strategic Thinking', 'Executive Leadership'],
    bio: 'PhD. Experienced executive specialising in Space Security, Earth Observation and Strategic Thinking.',
    notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_milica', name: 'Milica Milošev', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: ['Econnects Association', 'Marketing', 'MDPI'],
    bio: 'Econnects Association. Marketing Specialist at MDPI.',
    notes: 'Participated in Joint Board Meeting on Apr 25 (listed as "Milica" in MoMs).', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_temidayo', name: 'Temidayo Oniosun', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: 'Nigeria / MIT', status: 'active',
    skills: ['PhD', 'MIT Media Lab Research Affiliate'],
    bio: 'Ph.D. Research Affiliate at MIT Media Lab.', notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_rani', name: 'Rani Masele', role: 'Board of Advisors',
    board: 'advisors', timezone: '', location: 'Africa', status: 'active',
    skills: ['ALX Ambassador', 'Youth Space Ambassador', 'CS Student', 'Youth Mapper President', 'Empower Her Founder'],
    bio: 'ALX Ambassador. Youth Space Ambassador. CS undergraduate. Youth Mapper President. Founder of Empower Her. Stella Event and Promotion.',
    notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_danilo', name: 'Danilo Sakay', role: 'Board of Advisors',
    board: 'advisors', timezone: 'UTC-3', location: 'Brazil', status: 'active',
    skills: ['PhD', 'AEB (Brazilian Space Agency)', 'Strategic Intelligence', 'New Business'],
    bio: 'Ph.D. Technologist at AEB (Brazilian Space Agency). Strategic Intelligence and New Business Advisor.',
    notes: 'Key link to AEB partnership. AEB is already a supporter and looking for content providers.', quotes: [],
    actionItems: [{ text: 'Help develop next steps with Brazilian Space Agency / AEB', status: 'in-progress', due: '', source: 'Board Meeting Roadmap' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors. AEB identified as key partnership.' }],
    connections: [{ to: 'Jim Volp', reason: 'AEB partnership link' }]
  },
  {
    id: 'p_rick', name: 'Rick Tumlinson', role: 'Board of Advisors',
    board: 'advisors', timezone: 'UTC-6', location: 'USA', status: 'active',
    skills: ['SpaceFund Founder', 'NewSpace Revolution', 'Keynote Speaker', 'Author', 'Thought Leader'],
    bio: 'Founder-Chair of SpaceFund. EarthLight, New Worlds, Space Cowboy Ball. NewSpace Revolution. Author: "Why Space? The Purpose of People."',
    notes: '', quotes: [], actionItems: [],
    personalTimeline: [{ date: '2026-04-25', text: 'Listed as Board of Advisors.' }], connections: []
  },
  {
    id: 'p_koray', name: 'Koray Soğancı', role: 'Board of Advisors',
    board: 'advisors', timezone: 'UTC+3', location: 'Turkey', status: 'active',
    skills: ['Teaching', 'Translation', 'Ethereum/Blockchain'],
    bio: 'Teacher / Translator / Senior Advisor at ethereum.com.tr.',
    notes: 'Participated in Joint Board Meeting on Apr 25 (listed as "Koray" in MoMs).', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
  {
    id: 'p_kate', name: 'Kate', role: 'Board Meeting Participant',
    board: 'advisors', timezone: '', location: '', status: 'active',
    skills: [], bio: '',
    notes: 'Listed as participant in the Apr 25 Joint Board Meeting. No further details in the documents.', quotes: [],
    actionItems: [{ text: 'Provide contacts in Rwanda/Kigali (Event postponed)', status: 'done', due: '', source: 'MoMs Apr 25' }],
    personalTimeline: [{ date: '2026-04-25', text: 'Participated in Joint Board Meeting.' }],
    connections: [{ to: 'Jim Volp', reason: 'Board meeting participant' }]
  },
];

// ─── MEETINGS DATA ───
const MEETINGS = [
  {
    id: 'mtg_board_apr25',
    title: 'Joint Board Meeting — Apr 25, 2026',
    date: '2026-04-25',
    time: '07:59 AM UTC',
    duration: '1h 25m',
    facilitator: 'Jim Volp',
    participants: ['Alex', 'Kate', 'Koray', 'Lisa', 'Marc', 'Norbert', 'Milica', 'Samer', 'Sona'],
    sections: [
      {
        title: '1. Vision & Strategic Alignment',
        points: [
          'Project at a pivotal "big opportunity" phase.',
          'Mission refinement: move from "supporting girls" to concrete implementation through facilitator training and partnerships.',
          'Six-Month Goal: achieve world-class, repeatable, and measurable delivery of online workshops.',
          'Reaching ESA education programme-comparable numbers = good success metric. ~1 billion children globally as potential audience.',
        ]
      },
      {
        title: '2. Practical Operations & Innovation',
        points: [
          'Scalability through AI: leverage YouTube automated subtitling for multi-language access.',
          'Educational flexibility: extracurricular sessions or agency partnerships (e.g. Brazilian Space Agency).',
          'Communication upgrade: transitioning from Slack to Discord.',
          'Non-profit registration: Dutch ANBI first, then potential US 501(c)(3).',
          'Website: fix session booking and PayPal donation modules immediately.',
        ]
      },
      {
        title: '3. The "Kigali Opportunity" (GLOC2026) — POSTPONED',
        points: [
          'GLOC2026 in Kigali, Rwanda = HUGE opportunity to formalise partnerships. *UPDATE: Postponed to a date not yet known (starting June).*',
          'Create promotional "pack": QR code stickers, micro-brochure business cards, 1/3 A4 leaflets.',
          'Leverage AIAA sponsorship for high-level industry conversations.',
          'Partner networking with AIAA, World Space Week, WIA for "top-down" endorsements from ESA, NASA, CNSA.',
        ]
      },
      {
        title: '4. Board Meeting Strategy Questions',
        points: [
          'Pros/cons of 3rd film-making module? Does it add enough value?',
          'Pros/cons of free YouTube / MOOC content?',
          'Fair pricing model viability? How to handle schools that can\'t charge parents?',
          'Realistic sponsor tier levels and naming? Ethical exclusions?',
          'Most suitable legal form/structure and country?',
          'Risk of legal issues from replicating Climate Fresk concept?',
        ]
      },
      {
        title: '5. Roadmap — Concrete Steps',
        points: [
          'Do 2-3 online test runs of Space module before Kigali (Note: Event postponed).',
          'Finish Climate module before end of June.',
          'Develop next steps with Brazilian Space Agency.',
          'Review + update website. Find booking tool.',
          'Cross-train online facilitators (core team first).',
          'Draft roles: social media, ops, marketing, fundraising, partnerships.',
          'Create teams + management structure + weekly 1-hour telecons.',
          'Create sponsorship package. Create promotional material.',
          'Register organisation: notary → Chamber of Commerce. Open bank account.',
        ]
      },
    ],
    actionItems: [
      { text: 'Refine Mission Statement re: "focus on girls" and diversity', responsible: 'Jim Volp', deadline: 'Upcoming' },
      { text: 'Fix session booking & PayPal on website', responsible: 'Jim Volp', deadline: 'Immediate' },
      { text: 'Create Kigali promo pack (QR, stickers, micro-brochure, leaflet) — CANCELLED (Event Postponed)', responsible: 'Jim Volp', deadline: 'Postponed' },
      { text: 'Provide contacts in Rwanda/Kigali for outreach — CANCELLED (Event Postponed)', responsible: 'All', deadline: 'Postponed' },
      { text: 'Mention S4C during AIAA conversations (strategic advocacy)', responsible: 'Lisa + All', deadline: 'Ongoing' },
      { text: 'Transition communication to Discord', responsible: 'Jim Volp', deadline: 'Immediate (Done)' },
      { text: 'Register as Dutch ANBI non-profit', responsible: 'Jim Volp', deadline: 'Immediate' },
      { text: 'Schedule biannual Board update meeting', responsible: 'Jim Volp', deadline: 'Upcoming' },
    ]
  }
];

// ─── TASKS ───
const DEFAULT_TASKS = [
  { id: uid(), title: 'SF Trip — Pitching & Meetings', description: 'Meet EO entities (Planet, Spire) & Tech Philanthropies in SF during YC Startup School.', assignee: 'Jim Volp', coLead: 'Advaith', priority: 'critical', status: 'todo', dueDate: '2026-07-28', category: 'events', created: '2026-06-07' },
  { id: uid(), title: 'Website Proofreading', description: 'Finalise the new website (www.space4climate.org), mainly proofread.', assignee: '', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'content', created: '2026-05-11' },
  { id: uid(), title: 'Review ESA Video', description: 'Find Clement Albergel\'s presentation in ESA Earth Action Info Day video to look for relevant info for funding.', assignee: 'Jim Volp', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'partnerships', created: '2026-05-11' },
  { id: uid(), title: 'Review GDocs Concept Folder', description: 'Explore the GoogleDocs repository (concept folder). Request access from Jim.', assignee: '', coLead: '', priority: 'low', status: 'todo', dueDate: '', category: 'general', created: '2026-05-11' },
  { id: uid(), title: 'Finalize & Distribute Pitchdeck', description: 'Review Amanda\'s Canva pitchdeck, get team feedback.', assignee: 'Amanda Savita Alexander', coLead: 'Jim Volp', priority: 'high', status: 'in-progress', dueDate: '2026-07-30', category: 'content', created: '2026-06-30' },
  { id: uid(), title: 'UNIVAST Bootcamp — Represent S4C', description: 'Joshua attends in August. Provide feedback. Explore Nigerian Space Agency collaboration.', assignee: 'Joshua', coLead: '', priority: 'high', status: 'todo', dueDate: '2026-08-31', category: 'partnerships', created: '2026-07-07' },
  { id: uid(), title: 'LinkedIn & California Outreach', description: 'Share S4C on LinkedIn. Forward to California contacts. JustSpace Alliance Slack.', assignee: 'Amanda Savita Alexander', coLead: '', priority: 'medium', status: 'in-progress', dueDate: '', category: 'outreach', created: '2026-07-07' },
  { id: uid(), title: 'Assign Volunteer Roles (Dual-Leadership)', description: 'Create overview. Assign Amara, Renad, Anagha, Norbert. Jim promised this.', assignee: 'Jim Volp', coLead: '', priority: 'critical', status: 'in-progress', dueDate: '2026-07-20', category: 'operations', created: '2026-07-16' },
  { id: uid(), title: 'Recruit & Train Workshop Facilitators', description: 'Find people to facilitate online workshops for kids 10-15. Cross-train from core team.', assignee: '', coLead: '', priority: 'high', status: 'todo', dueDate: '', category: 'operations', created: '2026-04-25' },
  { id: uid(), title: 'Teacher Marketing Campaign', description: 'Marketing plan to convince teachers to sign up classrooms.', assignee: '', coLead: '', priority: 'high', status: 'todo', dueDate: '', category: 'outreach', created: '2026-07-07' },
  { id: uid(), title: 'Fix Website — Booking & PayPal', description: 'Fix session booking and PayPal donation modules. Critical.', assignee: 'Jim Volp', coLead: '', priority: 'critical', status: 'todo', dueDate: '', category: 'tech', created: '2026-04-25' },
  { id: uid(), title: 'Dutch ANBI Non-Profit Registration', description: 'Register via notary → Chamber of Commerce. Tax benefits. Then pursue US 501(c)(3).', assignee: 'Jim Volp', coLead: '', priority: 'high', status: 'todo', dueDate: '', category: 'operations', created: '2026-04-25' },
  { id: uid(), title: 'Beta-Test Space Module (2-3 runs)', description: 'Online test runs to ensure delivery-ready (formerly before Kigali).', assignee: 'Jim Volp', coLead: '', priority: 'high', status: 'todo', dueDate: '', category: 'content', created: '2026-04-25' },
  { id: uid(), title: 'Finish Climate Module', description: 'Complete the Climate Fresk-style module.', assignee: 'Jim Volp', coLead: '', priority: 'high', status: 'todo', dueDate: '2026-06-30', category: 'content', created: '2026-04-25' },
  { id: uid(), title: 'Kigali GLOC2026 Promo Pack', description: 'Event postponed to a date not yet known (starting June). Task cancelled.', assignee: 'Jim Volp', coLead: '', priority: 'high', status: 'done', dueDate: '', category: 'content', created: '2026-04-25' },
  { id: uid(), title: 'Refine Mission Statement', description: 'Update wording re: "focus on girls" and diversity per board feedback.', assignee: 'Jim Volp', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'general', created: '2026-04-25' },
  { id: uid(), title: 'Setup Discord Community', description: 'Transition from Slack/WhatsApp to Discord for volunteer engagement.', assignee: 'Jim Volp', coLead: '', priority: 'high', status: 'done', dueDate: '2026-04-25', category: 'tech', created: '2026-04-25' },
  { id: uid(), title: 'Create Sponsorship Package', description: 'Sponsors tell their story. Supporters / Partners / Sponsors tiers.', assignee: '', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'partnerships', created: '2026-04-25' },
  { id: uid(), title: 'Open Bank Account', description: 'Required after ANBI registration.', assignee: 'Jim Volp', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'operations', created: '2026-04-25' },
  { id: uid(), title: 'Schedule Biannual Board Meeting', description: '6-month update cycle with Board of Advisors.', assignee: 'Jim Volp', coLead: '', priority: 'medium', status: 'todo', dueDate: '', category: 'operations', created: '2026-04-25' },
  { id: uid(), title: 'Develop AEB (Brazilian Space Agency) Next Steps', description: 'AEB looking for content providers after GLOBE defunding. Perfect match.', assignee: 'Danilo Sakay', coLead: 'Jim Volp', priority: 'medium', status: 'in-progress', dueDate: '', category: 'partnerships', created: '2026-04-25' },
  { id: uid(), title: 'AIAA Strategic Advocacy', description: 'Mention S4C during AIAA industry conversations.', assignee: 'Lisa Vitaris', coLead: '', priority: 'medium', status: 'in-progress', dueDate: '', category: 'partnerships', created: '2026-04-25' },
  { id: uid(), title: 'Proposals, Grants & MOUs Review', description: 'Ongoing review. Divide by timezone and availability.', assignee: 'Amanda Savita Alexander', coLead: '', priority: 'medium', status: 'in-progress', dueDate: '', category: 'general', created: '2026-06-29' },
];

const DEFAULT_EVENTS = [
  { id: uid(), title: 'Joint Board Meeting', date: '2026-04-25', time: '07:59', person: 'Jim Volp', color: 'purple' },
  { id: uid(), title: 'Builders Night — SF Commons', date: '2026-07-27', time: '18:00', person: 'Jim Volp', color: 'blue' },
  { id: uid(), title: 'SF Trip Ends', date: '2026-07-28', time: '', person: 'Jim Volp', color: 'green' },
  { id: uid(), title: 'UNIVAST Bootcamp', date: '2026-08-01', time: '', person: 'Joshua', color: 'purple' },
  { id: uid(), title: 'Pitchdeck Review Deadline', date: '2026-07-30', time: '', person: 'Amanda Savita Alexander', color: 'red' },
];

const PARTNERSHIPS = [
  { name: 'AEB — Brazilian Space Agency', desc: 'Already a supporter. Looking for content providers (after GLOBE defunding). Danilo Sakay is the link.', color: '#3fb950', status: 'Active' },
  { name: 'SpaceBuzz', desc: 'Immersive space education programme partnership.', color: '#58a6ff', status: 'Potential' },
  { name: 'European Space Agency (ESA)', desc: 'Educational programme partnership discussions. Reaching ESA education numbers = success metric.', color: '#bc8cff', status: 'Potential' },
  { name: 'Nigerian Space Agency', desc: 'Nigeria/Uganda region. Joshua\'s UNIVAST connection.', color: '#f778ba', status: 'Potential' },
  { name: 'AIAA', desc: 'Existing sponsorship. Lisa to mention S4C in AIAA conversations.', color: '#58a6ff', status: 'Active' },
  { name: 'World Space Week', desc: 'Impressive recent numbers. Platform for content delivery.', color: '#d29922', status: 'Active' },
  { name: 'UNIVAST', desc: 'African space education bootcamp. Joshua attending August.', color: '#d29922', status: 'Potential' },
  { name: 'EC Education for Climate Coalition', desc: '1000s of climate educators. Many from Turkey.', color: '#56d9a0', status: 'Potential' },
  { name: 'JustSpace Alliance', desc: 'Amanda sharing via Slack.', color: '#58a6ff', status: 'Potential' },
  { name: 'GLOBE Programme', desc: 'AEB looking for content after GLOBE defunding.', color: '#f85149', status: 'Context' },
];

const TIMELINE_EVENTS = [
  { date: '2026-04-25', title: 'Joint Board Meeting held', person: 'Jim Volp', desc: '1h 25m meeting with 10 participants. Set 6-month goal: world-class repeatable workshop delivery. Discussed Kigali (Note: Kigali event later postponed to an unknown date starting June), AI localisation, Discord transition, ANBI registration.', quote: 'The project stands at a pivotal "big opportunity" phase.' },
  { date: '2026-04-25', title: 'Discord transition decided', person: 'Jim Volp', desc: 'Board decided to move from Slack/WhatsApp to Discord for better volunteer engagement.', quote: '' },
  { date: '2026-04-25', title: 'AEB partnership confirmed', person: 'Danilo Sakay', desc: 'Brazilian Space Agency already a supporter, looking for content providers after GLOBE defunding.', quote: '' },
  { date: '2026-05-11', title: 'Action Items listed', person: 'Jim Volp', desc: 'Requested help with website proofreading, ESA video review, and opened GDocs repository.', quote: '' },
  { date: '2026-06-07', title: 'SF Pitch Tour Announced', person: 'Jim Volp', desc: 'Planned visits to EO companies and foundations during YC Startup School.', quote: 'The San Francisco Bay Area is an ideal region to seek financial support.' },
  { date: '2026-06-29', title: 'Amanda volunteers as External Engagement Lead', person: 'Amanda Savita Alexander', desc: 'Offered to lead proposals, grants, MOUs.', quote: 'Happy to take on a general Lead, Sponsorships & External Engagement role.' },
  { date: '2026-06-29', title: 'Project_Info.pdf shared', person: 'Jim Volp', desc: 'Full slidedeck shared. Lisa Vitaris introduced as Honorary Board.', quote: '' },
  { date: '2026-06-30', title: 'Canva Pitchdeck created', person: 'Amanda Savita Alexander', desc: 'Built from Project_Info.pdf, Google Drive, and websites.', quote: '' },
  { date: '2026-07-04', title: 'SF Trip networking call', person: 'Jim Volp', desc: 'Requested contacts in space, climate, VC for Jul 23-28.', quote: '' },
  { date: '2026-07-07', title: 'UNIVAST bootcamp discovered', person: 'Joshua', desc: 'Space & climate bootcamp at Joshua\'s university in Nigeria, August.', quote: '' },
  { date: '2026-07-07', title: 'S4C mission & needs defined', person: 'Jim Volp', desc: 'Facilitators + teacher marketing. Two key needs for global rollout.', quote: 'What we need: people who can take the lead.' },
  { date: '2026-07-08', title: 'Builders Night found', person: 'Amanda Savita Alexander', desc: 'SF Commons co-working event for Jul 27.', quote: '' },
  { date: '2026-07-09', title: 'ASDA Board Observer result', person: 'Amanda Savita Alexander', desc: 'Not selected for Australian Space Diversity Alliance position.', quote: '' },
  { date: '2026-07-09', title: 'Renad joins the team', person: 'Renad Baomar', desc: 'Confirmed participation.', quote: 'I will join !!' },
  { date: '2026-07-15', title: 'Amara asks about roles', person: 'Amara', desc: 'Inquired about open leadership positions.', quote: '' },
  { date: '2026-07-16', title: 'Dual-leadership model announced', person: 'Jim Volp', desc: 'Accepts all volunteer requests. Dual-leadership emphasized.', quote: 'I strongly believe in DUAL-leadership for volunteering!!!' },
  { date: '2026-07-23', title: 'SF Trip begins', person: 'Jim Volp', desc: 'Jim and Advaith fly to San Francisco.', quote: '' },
  { date: '2026-07-28', title: 'SF Trip ends', person: 'Jim Volp', desc: 'Last day in San Francisco.', quote: '' },
  { date: '2026-08-01', title: 'UNIVAST Bootcamp begins', person: 'Joshua', desc: 'Joshua represents S4C at the bootcamp.', quote: '' },
];

const ACTIVITY_FEED = [
  { person: 'Jim Volp', text: 'Facilitated Joint Board Meeting. Set 6-month goals. 10 participants.', time: '2026-04-25T09:24:00' },
  { person: 'Jim Volp', text: 'Requested help with website and ESA video review in #action_items.', time: '2026-05-11T11:58:00' },
  { person: 'Jim Volp', text: 'Announced SF pitch trip to target EO companies and Philanthropies.', time: '2026-06-07T09:50:00' },
  { person: 'Jim Volp', text: 'Dual-leadership model announced. Promised role overview.', time: '2026-07-16T16:50:00' },
  { person: 'Amara', text: 'Asked about open leadership/volunteer roles.', time: '2026-07-15T02:32:00' },
  { person: 'Amanda Savita Alexander', text: 'ASDA Board Observer — not selected.', time: '2026-07-09T02:57:00' },
  { person: 'Amanda Savita Alexander', text: 'Found Builders Night at SF Commons for Jim & Advaith.', time: '2026-07-08T03:34:00' },
  { person: 'Joshua', text: 'UNIVAST bootcamp at his university in August.', time: '2026-07-07T10:10:00' },
  { person: 'Jim Volp', text: 'Defined S4C needs: workshop facilitators + teacher marketing.', time: '2026-07-07T22:31:00' },
  { person: 'Amanda Savita Alexander', text: 'Created Canva pitchdeck.', time: '2026-06-30T06:00:00' },
  { person: 'Jim Volp', text: 'Shared Project_Info.pdf for team review.', time: '2026-06-29T09:00:00' },
  { person: 'Renad Baomar', text: 'Confirmed joining. Encouraged Amanda.', time: '2026-07-09T19:25:00' },
];

// ════════════════════════════════════════════════════════════════
//  STATE & PERSISTENCE
// ════════════════════════════════════════════════════════════════
const STORAGE_KEY = 'S4C_TWIN_V3';
function loadState() { try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : null; } catch { return null; } }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify({ people: STATE.people, tasks: STATE.tasks, events: STATE.events, checkedActions: STATE.checkedActions })); }

const saved = loadState();
const STATE = {
  people: saved?.people || PEOPLE_DATA,
  tasks: saved?.tasks || DEFAULT_TASKS,
  events: saved?.events || DEFAULT_EVENTS,
  checkedActions: saved?.checkedActions || {},
  activeTab: 'twin',
  taskFilter: 'all',
  plannerWeekOffset: 0,
  searchQuery: '',
  boardFilter: 'all',
  isAdmin: false,
  adminUser: '',
};

// ================================================================
//  ADMIN AUTHENTICATION
// ================================================================
const ADMIN_USERS = {
  'Jim Volp': 's4c2026!',
  'Norbert': 's4c2026!',
};

function attemptLogin(name, pass) {
  if (ADMIN_USERS[name] && ADMIN_USERS[name] === pass) {
    STATE.isAdmin = true;
    STATE.adminUser = name;
    updateAdminUI();
    closeModal('modalLogin');
    toast(`Welcome, ${name}! Admin access granted.`, 'success');
    return true;
  }
  return false;
}

function logout() {
  STATE.isAdmin = false;
  STATE.adminUser = '';
  updateAdminUI();
  toast('Logged out. View-only mode.', 'info');
}

function updateAdminUI() {
  const btn = $('#btnLogin');
  if (STATE.isAdmin) {
    btn.textContent = `\uD83D\uDD13 ${STATE.adminUser}`;
    btn.classList.add('logged-in');
    btn.onclick = logout;
  } else {
    btn.textContent = '\uD83D\uDD12 View Only';
    btn.classList.remove('logged-in');
    btn.onclick = () => openModal('modalLogin');
  }
  // Show/hide admin-only buttons
  $$('.admin-only').forEach(el => {
    el.style.display = STATE.isAdmin ? '' : 'none';
  });
}

// ════════════════════════════════════════════════════════════════
//  THEME / CLOCK / UTILS
// ════════════════════════════════════════════════════════════════
function initTheme() { document.documentElement.setAttribute('data-theme', localStorage.getItem('S4C_THEME') || 'dark'); }
function toggleTheme() { const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); localStorage.setItem('S4C_THEME', n); drawNetwork(); }
function updateClock() { const el = $('#liveDateTime'); if (!el) return; const now = new Date(); el.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + '  •  ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); }
function toast(msg, type = 'success') { const el = document.createElement('div'); el.className = `toast ${type}`; el.textContent = msg; $('#toastContainer').appendChild(el); setTimeout(() => { el.classList.add('removing'); setTimeout(() => el.remove(), 300); }, 3000); }
function openModal(id) { $(`#${id}`).classList.add('open'); }
function closeModal(id) { $(`#${id}`).classList.remove('open'); }
function switchTab(name) {
  STATE.activeTab = name;
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  $$('.tab-panel').forEach(p => { p.classList.remove('active'); p.style.animation = 'none'; });
  const panel = $(`#panel-${name}`);
  if (panel) { panel.classList.add('active'); void panel.offsetWidth; panel.style.animation = ''; }
  if (name === 'twin') setTimeout(drawNetwork, 100);
}

// ════════════════════════════════════════════════════════════════
//  RENDER: CONNECTION NETWORK
// ════════════════════════════════════════════════════════════════
function renderNetworkNodes() {
  const grid = $('#networkNodes');
  let people = STATE.people.filter(p => (p.connections || []).length > 0 || p.board === 'core');
  if (STATE.searchQuery) {
    const q = STATE.searchQuery.toLowerCase();
    people = people.filter(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));
  }
  grid.innerHTML = people.map(p => {
    const tc = STATE.tasks.filter(t => t.assignee === p.name || t.coLead === p.name).length;
    return `<div class="net-node" data-name="${p.name}" onclick="scrollToTwin('${p.id}')">
      <div class="net-node-avatar" style="background:${hashColor(p.name)}" id="node-${p.id}">${initials(p.name)}<span class="net-node-status ${p.status}"></span></div>
      <div class="net-node-name">${p.name.split(' ')[0]}</div>
      <div class="net-node-tasks">${tc || '—'}</div>
    </div>`;
  }).join('');
}

function drawNetwork() {
  const canvas = $('#networkCanvas'); if (!canvas) return;
  const container = canvas.parentElement; const rect = container.getBoundingClientRect();
  canvas.width = rect.width; canvas.height = rect.height;
  const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  ctx.strokeStyle = isDark ? 'rgba(88,166,255,0.07)' : 'rgba(9,105,218,0.05)'; ctx.lineWidth = 1.5;
  const nodeMap = {};
  $$('.net-node-avatar').forEach(n => {
    const r = n.getBoundingClientRect(); const name = n.closest('.net-node')?.dataset.name;
    if (name) nodeMap[name] = { x: r.left - rect.left + r.width / 2, y: r.top - rect.top + r.height / 2 };
  });
  STATE.people.forEach(p => {
    if (!p.connections) return; const from = nodeMap[p.name]; if (!from) return;
    p.connections.forEach(c => { const to = nodeMap[c.to]; if (!to) return; ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.quadraticCurveTo((from.x + to.x) / 2, (from.y + to.y) / 2 - 18, to.x, to.y); ctx.stroke(); });
  });
}
function scrollToTwin(id) { const el = document.querySelector(`[data-twin-id="${id}"]`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

// ════════════════════════════════════════════════════════════════
//  RENDER: DIGITAL TWIN CARDS
// ════════════════════════════════════════════════════════════════
function renderTwinGrid() {
  let people = STATE.people;
  const bf = STATE.boardFilter;
  if (bf !== 'all') people = people.filter(p => p.board === bf);
  if (STATE.searchQuery) {
    const q = STATE.searchQuery.toLowerCase();
    people = people.filter(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || (p.bio || '').toLowerCase().includes(q) || (p.skills || []).some(s => s.toLowerCase().includes(q)) || (p.quotes || []).some(qo => qo.text.toLowerCase().includes(q)) || (p.actionItems || []).some(a => a.text.toLowerCase().includes(q)));
  }

  // Board filter buttons
  const filterHtml = `<div class="filter-chips" style="margin-bottom:var(--space-lg)">
    <button class="chip chip-filter ${bf === 'all' ? 'active' : ''}" onclick="setBoardFilter('all')">All (${STATE.people.length})</button>
    <button class="chip chip-filter ${bf === 'core' ? 'active' : ''}" onclick="setBoardFilter('core')">Core Team (${STATE.people.filter(p=>p.board==='core').length})</button>
    <button class="chip chip-filter ${bf === 'honorary' ? 'active' : ''}" onclick="setBoardFilter('honorary')">Honorary Board (${STATE.people.filter(p=>p.board==='honorary').length})</button>
    <button class="chip chip-filter ${bf === 'advisors' ? 'active' : ''}" onclick="setBoardFilter('advisors')">Board of Advisors (${STATE.people.filter(p=>p.board==='advisors').length})</button>
  </div>`;

  const cardsHtml = people.map((p, idx) => {
    const personTasks = STATE.tasks.filter(t => t.assignee === p.name || t.coLead === p.name);
    const totalActions = (p.actionItems || []).length;
    const doneActions = (p.actionItems || []).filter((a, i) => a.status === 'done' || STATE.checkedActions[p.id + '_' + i]).length;
    const boardLabel = { core: 'chip-green', honorary: 'chip-purple', advisors: 'chip-blue' }[p.board] || 'chip-muted';
    const boardName = { core: 'Core Team', honorary: 'Honorary Board', advisors: 'Board of Advisors' }[p.board] || '';

    return `<div class="twin-card glass" data-twin-id="${p.id}" style="animation-delay:${idx * 40}ms">
      <div class="twin-card-header">
        <div class="tc-avatar" style="background:${hashColor(p.name)}">${initials(p.name)}<span class="status-ring ${p.status}"></span></div>
        <div class="tc-info">
          <div class="tc-name">${p.name} <span class="chip ${boardLabel}" style="font-size:0.58rem;vertical-align:middle">${boardName}</span></div>
          <div class="tc-role">${p.role}</div>
          <div class="tc-meta-row">
            ${p.timezone ? `<span class="tc-meta-item">🕐 ${p.timezone}</span>` : ''}
            ${p.location ? `<span class="tc-meta-item">📍 ${p.location}</span>` : ''}
            ${personTasks.length ? `<span class="tc-meta-item">📋 ${personTasks.length} tasks</span>` : ''}
            ${totalActions ? `<span class="tc-meta-item">✅ ${doneActions}/${totalActions}</span>` : ''}
          </div>
        </div>
      </div>

      ${p.bio ? `<div class="twin-section"><div class="twin-section-label"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>Bio</div><div class="quote-item" style="border-left-color:var(--clr-accent-2);font-style:normal">${p.bio}</div></div>` : ''}

      ${(p.quotes?.length) ? `<div class="twin-section"><div class="twin-section-label"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 3.997 1 5.43v3.14c0 1.433.993 2.675 2.43 2.906a41.1 41.1 0 0 0 1.906.272A3.007 3.007 0 0 0 8 14.37V17a.75.75 0 0 0 1.28.53l3.954-3.954a.5.5 0 0 1 .354-.147c.68-.013 1.356-.048 2.027-.104 1.424-.232 2.385-1.465 2.385-2.883V5.43c0-1.433-.993-2.675-2.43-2.906A41.483 41.483 0 0 0 10 2Z" clip-rule="evenodd"/></svg>What they said</div><div class="quote-list">${p.quotes.slice(0, 3).map(q => `<div class="quote-item">${q.text}<span class="quote-date">${shortDate(q.date)}${q.context ? ` · ${q.context}` : ''}</span></div>`).join('')}${p.quotes.length > 3 ? `<div style="font-size:0.68rem;color:var(--clr-text-dim);text-align:center;padding:4px">+${p.quotes.length - 3} more</div>` : ''}</div></div>` : ''}

      ${(p.actionItems?.length) ? `<div class="twin-section"><div class="twin-section-label"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg>Action items</div><div class="action-list">${p.actionItems.map((a, ai) => { const k = p.id + '_' + ai; const chk = a.status === 'done' || STATE.checkedActions[k]; const st = chk ? 'done' : a.status; return `<div class="action-item ${chk ? 'done' : ''}"><div class="action-check ${chk ? 'checked' : ''}" onclick="toggleAction('${p.id}',${ai},event)"></div><div class="action-text">${a.text}${a.due ? `<span style="display:block;font-size:0.62rem;color:var(--clr-text-dim);font-family:var(--ff-mono);margin-top:2px">Due: ${shortDate(a.due)}</span>` : ''}${a.source ? `<span style="display:block;font-size:0.6rem;color:var(--clr-text-dim);font-style:italic">↳ ${a.source}</span>` : ''}</div><span class="action-status ${st}">${st.replace('-',' ')}</span></div>`; }).join('')}</div></div>` : ''}

      ${(p.connections?.length) ? `<div class="twin-section"><div class="twin-section-label"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"/></svg>Connected with</div><div class="conn-list">${p.connections.map(c => `<div class="conn-chip" title="${c.reason}"><span class="conn-chip-avatar" style="background:${hashColor(c.to)}">${initials(c.to)}</span>${c.to.split(' ')[0]}<span class="conn-chip-reason">${c.reason.length > 28 ? c.reason.slice(0, 26) + '…' : c.reason}</span></div>`).join('')}</div></div>` : ''}

      ${(p.personalTimeline?.length) ? `<div class="twin-section"><div class="twin-section-label"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"/></svg>Timeline</div><div class="mini-timeline">${p.personalTimeline.slice(-4).reverse().map(t => `<div class="mini-tl-item"><div class="mini-tl-date">${shortDate(t.date)}</div><div class="mini-tl-text">${t.text}</div></div>`).join('')}</div></div>` : ''}

      <div class="twin-card-footer">
        <div class="tc-skills">${(p.skills || []).slice(0, 4).map(s => `<span class="chip chip-skill">${s}</span>`).join('')}${(p.skills || []).length > 4 ? `<span class="chip chip-muted">+${p.skills.length - 4}</span>` : ''}</div>
        <div class="tc-actions"><button class="btn btn-sm btn-ghost" onclick="editPerson('${p.id}')">Edit</button></div>
      </div>
    </div>`;
  }).join('');

  // Meeting section
  const meetingsHtml = `<div style="grid-column:1/-1;margin-top:var(--space-lg)">
    <h2 style="font-family:var(--ff-display);font-size:1.3rem;font-weight:700;margin-bottom:var(--space-lg)">📋 Minutes of Meetings</h2>
    ${MEETINGS.map(mtg => `
    <div class="card glass" style="margin-bottom:var(--space-xl)">
      <div class="card-header" style="flex-wrap:wrap;gap:var(--space-sm)">
        <h2>${mtg.title}</h2>
        <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
          <span class="chip chip-purple">${mtg.time}</span>
          <span class="chip chip-blue">${mtg.duration}</span>
          <span class="chip chip-green">Facilitator: ${mtg.facilitator}</span>
        </div>
      </div>
      <div style="font-size:0.78rem;color:var(--clr-text-muted);margin-bottom:var(--space-md)"><strong>Participants:</strong> ${mtg.participants.join(', ')}</div>
      ${mtg.sections.map(s => `
        <div style="margin-bottom:var(--space-lg)">
          <h3 style="font-size:0.92rem;font-weight:700;margin-bottom:var(--space-sm);color:var(--clr-accent-2)">${s.title}</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:6px">
            ${s.points.map(pt => `<li style="font-size:0.8rem;color:var(--clr-text-muted);padding:6px 10px;background:var(--clr-surface);border-radius:6px;border-left:3px solid var(--clr-accent)">✦ ${pt}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
      <div style="margin-top:var(--space-md);padding-top:var(--space-md);border-top:1px solid var(--clr-border)">
        <h3 style="font-size:0.92rem;font-weight:700;margin-bottom:var(--space-md);color:var(--clr-warning)">⚡ Action Items from Meeting</h3>
        <div class="action-list">
          ${mtg.actionItems.map(a => `
            <div class="action-item">
              <div class="action-text" style="flex:1">${a.text}<span style="display:block;font-size:0.62rem;color:var(--clr-text-dim);margin-top:2px;font-style:italic">→ ${a.responsible}</span></div>
              <span class="action-status ${a.deadline === 'Immediate (Done)' ? 'done' : a.deadline === 'Ongoing' ? 'in-progress' : 'todo'}">${a.deadline}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `).join('')}
  </div>`;

  $('#twinGrid').innerHTML = filterHtml + cardsHtml + meetingsHtml;
}

function setBoardFilter(f) { STATE.boardFilter = f; renderTwinGrid(); }
function toggleAction(pid, ai, e) { e.stopPropagation(); STATE.checkedActions[pid + '_' + ai] = !STATE.checkedActions[pid + '_' + ai]; saveState(); renderTwinGrid(); renderKPIs(); }

// ════════════════════════════════════════════════════════════════
//  RENDER: OVERVIEW
// ════════════════════════════════════════════════════════════════
function renderKPIs() {
  const tp = STATE.people.length, ap = STATE.people.filter(p => p.status === 'active').length;
  const tt = STATE.tasks.length, dt = STATE.tasks.filter(t => t.status === 'done').length;
  const ip = STATE.tasks.filter(t => t.status === 'in-progress').length;
  const od = STATE.tasks.filter(t => t.dueDate && t.status !== 'done' && new Date(t.dueDate) < new Date()).length;
  const ta = STATE.people.reduce((s, p) => s + (p.actionItems || []).length, 0);
  const da = STATE.people.reduce((s, p) => s + (p.actionItems || []).filter((a, i) => a.status === 'done' || STATE.checkedActions[p.id + '_' + i]).length, 0);
  $('#kpiGrid').innerHTML = `
    <div class="kpi-card glass"><div class="kpi-label">Team + Boards</div><div class="kpi-value">${tp}</div><div class="kpi-sub">${ap} active</div></div>
    <div class="kpi-card glass"><div class="kpi-label">Total Tasks</div><div class="kpi-value">${tt}</div><div class="kpi-sub">${ip} in progress</div></div>
    <div class="kpi-card glass"><div class="kpi-label">Tasks Done</div><div class="kpi-value">${dt}</div><div class="kpi-sub">${tt ? Math.round(dt / tt * 100) : 0}%</div></div>
    <div class="kpi-card glass"><div class="kpi-label">Overdue</div><div class="kpi-value">${od}</div><div class="kpi-sub">${od ? '⚠ Attention' : '✓ On track'}</div></div>
    <div class="kpi-card glass"><div class="kpi-label">Action Items</div><div class="kpi-value">${da}/${ta}</div><div class="kpi-sub">${ta ? Math.round(da / ta * 100) : 0}% done</div></div>
    <div class="kpi-card glass"><div class="kpi-label">Partnerships</div><div class="kpi-value">${PARTNERSHIPS.length}</div><div class="kpi-sub">Active & potential</div></div>`;
}

function renderActivityFeed() {
  const sorted = [...ACTIVITY_FEED].sort((a, b) => new Date(b.time) - new Date(a.time));
  $('#activityFeed').innerHTML = sorted.map((item, i) => `<li style="animation-delay:${i * 50}ms"><div class="af-avatar" style="background:${hashColor(item.person)}">${initials(item.person)}</div><div class="af-body"><div class="af-name">${item.person}</div><div class="af-text">${item.text}</div><div class="af-time">${relativeTime(item.time)}</div></div></li>`).join('');
}

function renderPartnerships() {
  $('#partnershipList').innerHTML = PARTNERSHIPS.map(p => `<div class="partner-card"><div class="partner-icon" style="background:${p.color}18;color:${p.color}">${p.name[0]}</div><div class="partner-info"><h4>${p.name} <span class="chip ${p.status === 'Active' ? 'chip-green' : p.status === 'Context' ? 'chip-muted' : 'chip-orange'}" style="font-size:0.58rem">${p.status}</span></h4><p>${p.desc}</p></div></div>`).join('');
}

// ════════════════════════════════════════════════════════════════
//  RENDER: TASKS
// ════════════════════════════════════════════════════════════════
function renderTasks() {
  const filter = STATE.taskFilter;
  const q = STATE.searchQuery.toLowerCase();
  const cols = [{ key: 'todo', label: 'To Do', cls: 'task-col-todo' }, { key: 'in-progress', label: 'In Progress', cls: 'task-col-progress' }, { key: 'done', label: 'Done', cls: 'task-col-done' }];
  const cc = { general: 'chip-muted', outreach: 'chip-blue', content: 'chip-purple', partnerships: 'chip-green', operations: 'chip-orange', tech: 'chip-blue', events: 'chip-red' };
  $('#taskBoard').innerHTML = cols.map(col => {
    let tasks = STATE.tasks.filter(t => t.status === col.key);
    if (filter !== 'all' && filter !== col.key) return '';
    if (q) {
      tasks = tasks.filter(t => (t.title || '').toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q) || (t.assignee || '').toLowerCase().includes(q) || (t.coLead || '').toLowerCase().includes(q));
    }
    return `<div class="task-column ${col.cls}"><div class="task-column-header"><h3>${col.label}</h3><span class="count">${tasks.length}</span></div>${tasks.map(t => { const od = t.dueDate && t.status !== 'done' && new Date(t.dueDate) < new Date(); return `<div class="task-card glass"><div class="tc-header"><div class="tc-title">${t.title}</div><div class="tc-priority ${t.priority}"></div></div>${t.description ? `<div class="tc-desc">${t.description.length > 100 ? t.description.slice(0, 100) + '…' : t.description}</div>` : ''}<div class="tc-category"><span class="chip ${cc[t.category] || 'chip-muted'}">${t.category}</span></div><div class="tc-footer"><div class="tc-assignees">${t.assignee ? `<div class="tc-assignee-avatar" style="background:${hashColor(t.assignee)}" title="${t.assignee}">${initials(t.assignee)}</div>` : ''}${t.coLead ? `<div class="tc-assignee-avatar" style="background:${hashColor(t.coLead)};margin-left:-6px" title="${t.coLead}">${initials(t.coLead)}</div>` : ''}${!t.assignee && !t.coLead ? '<span style="font-size:0.68rem;color:var(--clr-text-dim)">Unassigned</span>' : ''}</div><div style="display:flex;align-items:center;gap:6px">${t.dueDate ? `<span class="tc-due ${od ? 'overdue' : ''}">${od ? '⚠ ' : ''}${shortDate(t.dueDate)}</span>` : ''}<div class="tc-actions"><button title="Edit" onclick="editTask('${t.id}')"><svg viewBox="0 0 20 20" fill="currentColor"><path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"/></svg></button><button title="Delete" onclick="deleteTask('${t.id}')"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd"/></svg></button></div></div></div></div>`; }).join('')}${tasks.length === 0 ? '<div class="empty-state"><p>No tasks</p></div>' : ''}</div>`;
  }).join('');
  $('#taskBoard').style.gridTemplateColumns = filter !== 'all' ? '1fr' : 'repeat(3, 1fr)';
}

// ════════════════════════════════════════════════════════════════
//  RENDER: PLANNER
// ════════════════════════════════════════════════════════════════
function getWeekDays(off) { const n = new Date(); const s = new Date(n); s.setDate(n.getDate() - n.getDay() + 1 + off * 7); return Array.from({ length: 7 }, (_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return d; }); }
function renderPlanner() {
  const days = getWeekDays(STATE.plannerWeekOffset);
  $('#plannerWeekLabel').textContent = days[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' — ' + days[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const today = new Date().toISOString().slice(0, 10);
  const dn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  $('#plannerGrid').innerHTML = days.map((d, i) => {
    const ds = d.toISOString().slice(0, 10);
    return `<div class="planner-day glass ${ds === today ? 'today' : ''}"><div class="planner-day-header"><span class="planner-day-name">${dn[i]}</span><span class="planner-day-num">${d.getDate()}</span></div><div class="planner-events">${STATE.events.filter(e => e.date === ds).map(e => `<div class="planner-event ${e.color}" onclick="editPlannerEvent('${e.id}')"><div class="pe-title">${e.title}</div>${e.time ? `<div class="pe-time">🕐 ${e.time}</div>` : ''}${e.person ? `<div class="pe-person">👤 ${e.person}</div>` : ''}</div>`).join('')}${STATE.tasks.filter(t => t.dueDate === ds).map(t => `<div class="planner-event ${t.status === 'done' ? 'green' : 'orange'}"><div class="pe-title">📋 ${t.title}</div><div class="pe-person">${t.assignee || 'Unassigned'}</div></div>`).join('')}</div><div class="planner-day-add"><button onclick="addPlannerEventForDate('${ds}')">+ Add</button></div></div>`;
  }).join('');
}

// ════════════════════════════════════════════════════════════════
//  RENDER: TIMELINE
// ════════════════════════════════════════════════════════════════
function renderTimeline(fp = 'all') {
  let ev = [...TIMELINE_EVENTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (fp !== 'all') ev = ev.filter(e => e.person === fp);
  const q = STATE.searchQuery.toLowerCase();
  if (q) {
    ev = ev.filter(e => (e.title || '').toLowerCase().includes(q) || (e.desc || '').toLowerCase().includes(q) || (e.quote || '').toLowerCase().includes(q) || (e.person || '').toLowerCase().includes(q));
  }
  const up = [...new Set(TIMELINE_EVENTS.map(e => e.person))];
  $('#timelineFilterChips').innerHTML = `<button class="chip chip-filter ${fp === 'all' ? 'active' : ''}" data-tl-filter="all">All</button>${up.map(n => `<button class="chip chip-filter ${fp === n ? 'active' : ''}" data-tl-filter="${n}">${n.split(' ')[0]}</button>`).join('')}`;
  $$('[data-tl-filter]').forEach(b => b.addEventListener('click', () => renderTimeline(b.dataset.tlFilter)));
  $('#timelineList').innerHTML = ev.map((item, i) => `<div class="timeline-item" style="animation-delay:${i * 40}ms"><div class="timeline-date">${formatDate(item.date)}</div><div class="timeline-content glass"><h4>${item.title}</h4><p>${item.desc}</p>${item.quote ? `<div class="tl-quote">"${item.quote}"</div>` : ''}<span class="tl-person"><span style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:${hashColor(item.person)};color:#fff;font-size:0.55rem;align-items:center;justify-content:center;font-weight:700">${initials(item.person)}</span>${item.person}</span></div></div>`).join('');
}

// ════════════════════════════════════════════════════════════════
//  CRUD
// ════════════════════════════════════════════════════════════════
function populateDropdowns() {
  const opts = STATE.people.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
  ['taskAssignee', 'taskCoLead', 'plannerEventPerson'].forEach(id => { const s = $(`#${id}`); if (!s) return; const f = s.options[0].outerHTML; s.innerHTML = f + opts; });
}

function editPerson(id) {
  if (!STATE.isAdmin) { toast('Admin login required to edit.', 'error'); return; }
  const p = STATE.people.find(x => x.id === id); if (!p) return;
  $('#personEditId').value = p.id; $('#personName').value = p.name; $('#personRole').value = p.role;
  $('#personTimezone').value = p.timezone || ''; $('#personLocation').value = p.location || '';
  $('#personStatus').value = p.status; $('#personSkills').value = (p.skills || []).join(', ');
  $('#personNotes').value = p.notes || ''; $('#modalPersonTitle').textContent = `Edit — ${p.name}`;
  openModal('modalPerson');
}
function handlePersonSubmit(e) {
  e.preventDefault();
  if (!STATE.isAdmin) { toast('Admin login required.', 'error'); return; }
  const eid = $('#personEditId').value;
  const d = { name: $('#personName').value.trim(), role: $('#personRole').value.trim(), timezone: $('#personTimezone').value, location: $('#personLocation').value.trim(), status: $('#personStatus').value, skills: $('#personSkills').value.split(',').map(s => s.trim()).filter(Boolean), notes: $('#personNotes').value.trim() };
  if (eid) { const i = STATE.people.findIndex(p => p.id === eid); if (i >= 0) STATE.people[i] = { ...STATE.people[i], ...d }; toast(`Updated ${d.name}`); }
  else { STATE.people.push({ id: uid(), board: 'core', ...d, bio: '', quotes: [], actionItems: [], personalTimeline: [], connections: [] }); toast(`Added ${d.name}`); }
  closeModal('modalPerson'); saveState(); renderAll();
}

function editTask(id) {
  if (!STATE.isAdmin) { toast('Admin login required to edit tasks.', 'error'); return; }
  const t = STATE.tasks.find(x => x.id === id); if (!t) return;
  populateDropdowns(); $('#taskEditId').value = t.id; $('#taskTitle').value = t.title;
  $('#taskDescription').value = t.description || ''; $('#taskAssignee').value = t.assignee || '';
  $('#taskCoLead').value = t.coLead || ''; $('#taskPriority').value = t.priority;
  $('#taskStatus').value = t.status; $('#taskDueDate').value = t.dueDate || '';
  $('#taskCategory').value = t.category || 'general'; $('#modalTaskTitle').textContent = `Edit — ${t.title}`;
  openModal('modalTask');
}
function deleteTask(id) {
  if (!STATE.isAdmin) { toast('Admin login required to delete tasks.', 'error'); return; }
  if (!confirm('Delete?')) return; STATE.tasks = STATE.tasks.filter(t => t.id !== id); saveState(); renderAll(); toast('Deleted', 'info');
}
function handleTaskSubmit(e) {
  e.preventDefault();
  if (!STATE.isAdmin) { toast('Admin login required.', 'error'); return; }
  const eid = $('#taskEditId').value;
  const d = { title: $('#taskTitle').value.trim(), description: $('#taskDescription').value.trim(), assignee: $('#taskAssignee').value, coLead: $('#taskCoLead').value, priority: $('#taskPriority').value, status: $('#taskStatus').value, dueDate: $('#taskDueDate').value, category: $('#taskCategory').value };
  if (eid) { const i = STATE.tasks.findIndex(t => t.id === eid); if (i >= 0) STATE.tasks[i] = { ...STATE.tasks[i], ...d }; toast('Updated'); }
  else { STATE.tasks.push({ id: uid(), ...d, created: new Date().toISOString().slice(0, 10) }); toast('Created'); }
  closeModal('modalTask'); saveState(); renderAll();
}

function addPlannerEventForDate(ds) { populateDropdowns(); $('#formPlanner').reset(); $('#plannerEventEditId').value = ''; $('#plannerEventDate').value = ds; openModal('modalPlanner'); }
function editPlannerEvent(id) { const e = STATE.events.find(x => x.id === id); if (!e) return; populateDropdowns(); $('#plannerEventEditId').value = e.id; $('#plannerEventTitle').value = e.title; $('#plannerEventDate').value = e.date; $('#plannerEventTime').value = e.time || ''; $('#plannerEventPerson').value = e.person || ''; $('#plannerEventColor').value = e.color || 'blue'; openModal('modalPlanner'); }
function handlePlannerSubmit(e) {
  e.preventDefault();
  const eid = $('#plannerEventEditId').value;
  const d = { title: $('#plannerEventTitle').value.trim(), date: $('#plannerEventDate').value, time: $('#plannerEventTime').value, person: $('#plannerEventPerson').value, color: $('#plannerEventColor').value };
  if (eid) { const i = STATE.events.findIndex(ev => ev.id === eid); if (i >= 0) STATE.events[i] = { ...STATE.events[i], ...d }; toast('Updated'); }
  else { STATE.events.push({ id: uid(), ...d }); toast('Added'); }
  closeModal('modalPlanner'); saveState(); renderPlanner();
}

// ════════════════════════════════════════════════════════════════
//  RENDER ALL & INIT
// ════════════════════════════════════════════════════════════════
function renderAll() { renderNetworkNodes(); renderTwinGrid(); renderKPIs(); renderActivityFeed(); renderPartnerships(); renderTasks(); renderPlanner(); renderTimeline(); setTimeout(drawNetwork, 150); updateAdminUI(); }

document.addEventListener('DOMContentLoaded', () => {
  initTheme(); updateClock(); setInterval(updateClock, 30000); renderAll();
  $$('.tab').forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));
  $('#btnThemeToggle').addEventListener('click', toggleTheme);
  $('#btnLogin').addEventListener('click', () => openModal('modalLogin'));
  $('#formLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#loginName').value;
    const pass = $('#loginPass').value;
    if (!attemptLogin(name, pass)) {
      $('#loginError').style.display = 'block';
      setTimeout(() => { $('#loginError').style.display = 'none'; }, 3000);
    }
  });
  const addPersonBtn = $('#btnAddPerson');
  if (addPersonBtn) addPersonBtn.addEventListener('click', () => {
    if (!STATE.isAdmin) { toast('Admin login required to add people.', 'error'); return; }
    $('#formPerson').reset(); $('#personEditId').value = ''; $('#modalPersonTitle').textContent = 'Add Team Member'; openModal('modalPerson');
  });
  $('#formPerson').addEventListener('submit', handlePersonSubmit);
  const addTaskBtn = $('#btnAddTask');
  if (addTaskBtn) addTaskBtn.addEventListener('click', () => {
    if (!STATE.isAdmin) { toast('Admin login required to add tasks.', 'error'); return; }
    $('#formTask').reset(); $('#taskEditId').value = ''; $('#modalTaskTitle').textContent = 'New Task'; populateDropdowns(); openModal('modalTask');
  });
  $('#formTask').addEventListener('submit', handleTaskSubmit);
  const bpe = $('#btnAddPlannerEvent'); if (bpe) bpe.addEventListener('click', () => {
    if (!STATE.isAdmin) { toast('Admin login required.', 'error'); return; }
    populateDropdowns(); $('#formPlanner').reset(); $('#plannerEventEditId').value = ''; openModal('modalPlanner');
  });
  $('#formPlanner').addEventListener('submit', handlePlannerSubmit);
  $('#plannerPrev').addEventListener('click', () => { STATE.plannerWeekOffset--; renderPlanner(); });
  $('#plannerNext').addEventListener('click', () => { STATE.plannerWeekOffset++; renderPlanner(); });
  $$('.chip-filter[data-filter]').forEach(c => c.addEventListener('click', () => { $$('.chip-filter[data-filter]').forEach(x => x.classList.remove('active')); c.classList.add('active'); STATE.taskFilter = c.dataset.filter; renderTasks(); }));
  $$('[data-close]').forEach(b => b.addEventListener('click', () => closeModal(b.dataset.close)));
  $$('[data-close-flyout]').forEach(b => b.addEventListener('click', () => closeModal(b.dataset.closeFlyout)));
  $$('.modal-overlay, .flyout-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); }));
  $('#globalSearch').addEventListener('input', e => { 
    STATE.searchQuery = e.target.value; 
    renderNetworkNodes();
    renderTwinGrid();
    renderTasks();
    renderTimeline();
    setTimeout(drawNetwork, 50);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.modal-overlay.open, .flyout-overlay.open').forEach(m => closeModal(m.id)); });
  window.addEventListener('resize', () => { if (STATE.activeTab === 'twin') drawNetwork(); });
});
