// TKN Studios — content data. Swap `src` values for real files in /public/photos.

export const CATS = ['All', 'Portraits', 'Fashion', 'Beauty', 'Editorial', 'Glamour'];

const raw = [
  { src: '/photos/p01.jpg', cat: 'Beauty',    title: 'Gilded',      year: '2024', location: 'TKN Studio, Lagos', mood: 'Warm · Radiant',    color: '#c9a24a', client: 'Studio Editorial' },
  { src: '/photos/p02.jpg', cat: 'Fashion',   title: 'Liquid Gold', year: '2024', location: 'TKN Studio, Lagos', mood: 'Bold · Regal',      color: '#b8955f', client: 'Private Commission' },
  { src: '/photos/p04.jpg', cat: 'Glamour',   title: 'Bronze Muse', year: '2024', location: 'TKN Studio, Lagos', mood: 'Sculpted · Rich',   color: '#8a4a2a', client: 'Studio Editorial' },
  { src: '/photos/p05.jpg', cat: 'Glamour',   title: 'Molten',      year: '2024', location: 'TKN Studio, Lagos', mood: 'Dramatic · Warm',   color: '#7a3a2a', client: 'Private Commission' },
  { src: '/photos/p06.jpg', cat: 'Fashion',   title: 'Seafoam',     year: '2024', location: 'TKN Studio, Lagos', mood: 'Airy · Elegant',    color: '#6aa090', client: 'Studio Editorial' },
  { src: '/photos/p07.jpg', cat: 'Editorial', title: 'Tailored',    year: '2024', location: 'TKN Studio, Lagos', mood: 'Confident · Clean', color: '#3a4a6b', client: 'Brand Campaign' },
  { src: '/photos/p08.jpg', cat: 'Portraits', title: 'Presence',    year: '2024', location: 'TKN Studio, Lagos', mood: 'Quiet · Assured',   color: '#6b5a4a', client: 'Private Commission' },
  { src: '/photos/p09.jpg', cat: 'Portraits', title: 'Quiet Power', year: '2024', location: 'TKN Studio, Lagos', mood: 'Still · Strong',    color: '#7a6a5a', client: 'Private Commission' },
  { src: '/photos/p10.jpg', cat: 'Beauty',    title: 'Radiance',    year: '2024', location: 'TKN Studio, Lagos', mood: 'Glowing · Soft',    color: '#a9702f', client: 'Studio Editorial' },
  { src: '/photos/p11.jpg', cat: 'Beauty',    title: 'Glow',        year: '2024', location: 'TKN Studio, Lagos', mood: 'Warm · Intimate',   color: '#b5532a', client: 'Private Commission' },
  { src: '/photos/p12.jpg', cat: 'Editorial', title: 'Form',        year: '2024', location: 'TKN Studio, Lagos', mood: 'Graphic · Poised',  color: '#5a5a6b', client: 'Brand Campaign' },
  { src: '/photos/p13.jpg', cat: 'Editorial', title: 'Line',        year: '2024', location: 'TKN Studio, Lagos', mood: 'Minimal · Sharp',   color: '#4a5a5a', client: 'Brand Campaign' },
  { src: '/photos/p14.jpg', cat: 'Portraits', title: 'Gaze',        year: '2024', location: 'TKN Studio, Lagos', mood: 'Direct · Honest',   color: '#6b4a4a', client: 'Private Commission' },
  { src: '/photos/p15.jpg', cat: 'Glamour',   title: 'Opulence',    year: '2024', location: 'TKN Studio, Lagos', mood: 'Luxe · Warm',       color: '#8a6a3a', client: 'Studio Editorial' },
  { src: '/photos/p16.jpg', cat: 'Portraits', title: 'Stillness',   year: '2024', location: 'TKN Studio, Lagos', mood: 'Calm · Tender',     color: '#5a6a6a', client: 'Private Commission' },
  { src: '/photos/p17.jpg', cat: 'Beauty',    title: 'Crimson',     year: '2024', location: 'TKN Studio, Lagos', mood: 'Iconic · Bold',     color: '#9b3b3a', client: 'Studio Editorial' },
];

export const PHOTOS = raw.map((p, i) => ({
  ...p,
  num: String(i + 1).padStart(2, '0'),
  desc: `${p.title} — a ${p.mood.toLowerCase()} study in ${p.cat.toLowerCase()}, made in the TKN studio where light is shaped slowly and colour is graded with intent. One frame from a larger sitting.`,
}));

export const FILMS = [
  { src: '/photos/p06.jpg', title: 'The Vows',        type: 'Wedding Film', duration: '4:12', year: '2024' },
  { src: '/photos/p02.jpg', title: 'Gilded — Motion', type: 'Fashion Film', duration: '1:48', year: '2024' },
  { src: '/photos/p07.jpg', title: 'Founders',        type: 'Brand Film',   duration: '2:30', year: '2024' },
  { src: '/photos/p17.jpg', title: 'Crimson',         type: 'Beauty Film',  duration: '0:58', year: '2024' },
  { src: '/photos/p11.jpg', title: 'Golden Hour',     type: 'Short Cinema', duration: '3:20', year: '2023' },
  { src: '/photos/p15.jpg', title: 'The Launch',      type: 'Event Film',   duration: '2:05', year: '2024' },
];

export const SERVICES = [
  { no: '01', title: 'Portrait Sessions',   body: 'Studio and location portraiture — individuals, couples and families. Single-light drama or soft natural warmth.', meta: 'Studio · 1–2 hrs' },
  { no: '02', title: 'Fashion & Editorial', body: 'Lookbooks, campaigns and editorial stories. Art direction, styling collaboration and a graded, cohesive set.', meta: 'Half / full day' },
  { no: '03', title: 'Beauty',              body: 'Close, luminous beauty work — skin, colour and detail rendered with a retoucher’s eye.', meta: 'Studio · half day' },
  { no: '04', title: 'Weddings & Events',   body: 'Documentary coverage that stays out of the way — the real moments, honestly kept, beautifully finished.', meta: 'Full day + film' },
  { no: '05', title: 'Cinematic Films',     body: 'Brand films, fashion motion and wedding cinema — shot and edited in-house with a filmic grade.', meta: 'By project' },
  { no: '06', title: 'Brand & Commercial',  body: 'Founder portraits, product and identity imagery built to scale consistently across a company.', meta: 'Retainer / project' },
];

export const STEPS = [
  { num: '01', title: 'Conversation', body: 'We start with your story, references and the feeling you want the images to carry.' },
  { num: '02', title: 'Direction',    body: 'Concept, styling, location and light — planned so the shoot day runs calm and unhurried.' },
  { num: '03', title: 'The Shoot',    body: 'On set we let the subject settle. The real photograph usually lives between the poses.' },
  { num: '04', title: 'The Edit',     body: 'Careful selection, colour grading and retouching — delivered as a finished gallery or film.' },
];

export const NAV = [
  ['Work', 'wall'], ['Gallery', 'galleries'], ['Films', 'films'],
  ['Studio', 'studio'], ['Services', 'services'], ['Contact', 'contact'],
];
