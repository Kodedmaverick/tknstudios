// TKN Studios — content data. Swap `src` values for real files in /public/photos.

export const CATS = ['All', 'Portraits', 'Fashion', 'Beauty', 'Editorial', 'Glamour'];
export const ART_CATS = ['All', 'Face Painting', 'Body Art', 'Makeup Art', 'Paintings'];

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

const art = [
  { src: '/photos/va01.jpg', title: 'Silver Strokes', mood: 'Graphic · Joyful',    color: '#3a4652', client: 'Face Painting' },
  { src: '/photos/va02.jpg', title: 'Gilded Bloom',   mood: 'Regal · Ornate',      color: '#7a5a2a', client: 'Face Painting' },
  { src: '/photos/va03.jpg', title: 'Cowrie Mark',    mood: 'Ancestral · Bold',    color: '#4a4038', client: 'Face Painting' },
  { src: '/photos/va04.jpg', title: 'Poured Colour',  mood: 'Fluid · Vivid',       color: '#8a5a2a', client: 'Face Painting' },
  { src: '/photos/va05.jpg', title: 'Bronze Tears',   mood: 'Dramatic · Dark',     color: '#6b4a1f', client: 'Face Painting' },
  { src: '/photos/va06.jpg', title: 'Gold Repose',    mood: 'Serene · Luxe',       color: '#1f4a55', client: 'Face Painting' },
  { src: '/photos/va07.jpg', title: 'Two Faces',      mood: 'Duality · Striking',  color: '#6b2530', client: 'Face Painting' },
  { src: '/photos/va08.jpg', title: 'Crystal Skin',   mood: 'Ethereal · Neon',     color: '#3a2a55', client: 'Makeup Art' },
  { src: '/photos/va09.jpg', title: 'Cobalt Profile', mood: 'Luminous · Deep',     color: '#2a2a6b', client: 'Body Art' },
  { src: '/photos/va11.jpg', title: 'Adire Markings', mood: 'Cultural · Radiant',  color: '#6b5a2a', client: 'Body Art' },
  { src: '/photos/fp01.jpg', title: 'Aqua Adorned', mood: 'Regal · Beaded',   color: '#2f6f70', client: 'Face Painting' },
  { src: '/photos/fp02.jpg', title: 'Neon Bloom',   mood: 'Vivid · Electric', color: '#9b3b3a', client: 'Face Painting' },
  { src: '/photos/fp03.jpg', title: 'White Marks',  mood: 'Joyful · Graphic', color: '#4a4a52', client: 'Face Painting' },
  { src: '/photos/fp04.jpg', title: 'Gilded Veil',  mood: 'Regal · Golden',   color: '#8a6a2a', client: 'Face Painting' },
  { src: '/photos/pt01.jpg', title: 'Meridian',         mood: 'Abstract · Cobalt', color: '#2a3a6b', client: 'Paintings' },
  { src: '/photos/pt02.jpg', title: 'Monochrome Bloom', mood: 'Graphic · Mono',   color: '#4a4a4a', client: 'Paintings' },
  { src: '/photos/pt03.jpg', title: 'Ivory Swirl',      mood: 'Golden · Kinetic', color: '#8a6a2a', client: 'Paintings' },
  { src: '/photos/pt04.jpg', title: 'Golden Orbit',     mood: 'Radiant · Warm',   color: '#7a5a2a', client: 'Paintings' },
  { src: '/photos/pt05.jpg', title: 'Ceremony',         mood: 'Cultural · Rich',  color: '#6b2a2a', client: 'Paintings' },
  { src: '/photos/pt06.jpg', title: 'Spectrum',         mood: 'Vivid · Rainbow',  color: '#3a6b6b', client: 'Paintings' },
  { src: '/photos/pt07.jpg', title: 'Duality',          mood: 'Blue · Red',       color: '#2a2a6b', client: 'Paintings' },
  { src: '/photos/pt08.jpg', title: 'Nightfall',        mood: 'Deep · Blue',      color: '#1f2a55', client: 'Paintings' },
  { src: '/photos/pt09.jpg', title: 'Ember Field',      mood: 'Fiery · Red',      color: '#7a2a2a', client: 'Paintings' },
  { src: '/photos/pt10.jpg', title: 'Terracotta Flow',  mood: 'Earthy · Warm',    color: '#8a4a2a', client: 'Paintings' },
  { src: '/photos/pt11.jpg', title: 'Cascade',          mood: 'Fluid · Green',    color: '#3a6b4a', client: 'Paintings' },
  { src: '/photos/pt12.jpg', title: 'Indigo Depth',     mood: 'Moody · Indigo',   color: '#2a3a5a', client: 'Paintings' },
  { src: '/photos/pt13.jpg', title: 'Crimson Drift',    mood: 'Red · Abstract',   color: '#7a2a3a', client: 'Paintings' },
  { src: '/photos/pt14.jpg', title: 'Verdant',          mood: 'Green · Organic',  color: '#3a5a3a', client: 'Paintings' },
  { src: '/photos/pt15.jpg', title: 'Gilded Muse',      mood: 'Golden · Figure',  color: '#8a6a2a', client: 'Paintings' },
  { src: '/photos/pt16.jpg', title: 'Ancestor',         mood: 'Cultural · Gold',  color: '#6b5a2a', client: 'Paintings' },
  { src: '/photos/pt17.jpg', title: 'Nova',             mood: 'Cosmic · Fiery',   color: '#6b2a3a', client: 'Paintings' },
  { src: '/photos/pt18.jpg', title: 'Rift',             mood: 'Blue · Fault',     color: '#2a3a6b', client: 'Paintings' },
  { src: '/photos/pt19.jpg', title: 'Chroma',           mood: 'Bold · Colour',    color: '#4a3a6b', client: 'Paintings' },
];

export const VISUAL_ART = art.map((p, i) => ({
  ...p,
  cat: 'Visual Art',
  year: '2025',
  location: p.client === 'Paintings' ? 'Original · Acrylic' : 'TKN Studio, Lagos',
  num: String(i + 1).padStart(2, '0'),
  desc: p.client === 'Paintings'
    ? `${p.title} — an original ${p.mood.toLowerCase()} work by TKN Studios, shown in situ.`
    : `${p.title} — visual art, ${p.mood.toLowerCase()}, conceived and shot at TKN Studio. Skin and colour as canvas.`,
}));

// Combined list used only for lightbox indexing (gallery + visual art).
export const ALL_IMAGES = [...PHOTOS, ...VISUAL_ART];

// Films are hosted on Cloudflare R2. .mov clips play in Safari/iOS; re-encode to mp4 for universal playback.
const VBASE = 'https://pub-25f54ab903ac4942ab8aa664c34f7be2.r2.dev/videos/';
const films = [
  { file: 'treasure%20blue%20home%20landscape(1).mov',    title: 'Treasure',           type: 'Cinematic Film', year: '2025', rotate: true },
  { file: 'OGE%20BRIDE%20PERSONAL.mp4',                   title: 'Oge — The Bride',    type: 'Wedding Film',   year: '2025' },
  { file: 'ODO%20HALIMAH%20BRIDE%20EDIT%202.mov',         title: 'Halimah — Odo',      type: 'Wedding Film',   year: '2025' },
  { file: 'HALIMAH%20BRIDE%20PERSONAL%20EDIT%203.mov',    title: 'Halimah — Personal', type: 'Bridal Film',    year: '2025' },
  { file: 'edo%20thelma%20.mov',                          title: 'Thelma — Edo',       type: 'Bridal Film',    year: '2025' },
  { file: 'shushu%20pink%20edit%20dec.mp4',               title: 'Shushu — Pink',      type: 'Fashion Film',   year: '2025' },
  { file: 'SHUSHU%20OJUDE%20OBA%20EDIT.mov',              title: 'Shushu — Ojude Oba', type: 'Cultural Film',  year: '2025' },
  { file: 'SHUSHU%20BOF%20EID%20PARTY%202.mov',           title: 'Shushu — Eid Party', type: 'Event Film',     year: '2025' },
  { file: 'RAYO%20%40%2016%20PERSONA%202.mov',            title: 'Rayo at 16',         type: 'Persona Film',   year: '2025' },
  { file: 'BOF%20PARTY%203.mov',                          title: 'BOF — The Party',    type: 'Event Film',     year: '2025' },
  { file: 'BOF%20FOUNDATION%20VIDEO.mov',                 title: 'BOF Foundation',     type: 'Brand Film',     year: '2025' },
  { file: 'copy_C5520809-7D07-414E-ACE9-4BBC51AEB0A7.mov', title: 'Studio Story I',    type: 'Short Cinema',   year: '2025' },
  { file: 'copy_24839763-5770-43F7-89F5-21D167EAC124.mov', title: 'Studio Story II',   type: 'Short Cinema',   year: '2025' },
  { file: '1214.mp4',                                     title: 'Frame 1214',         type: 'Short Cinema',   year: '2025' },
];
export const FILMS = films.map((f) => ({ ...f, src: VBASE + f.file }));

// mp4 films make the smoothest wall/preview textures across browsers.
export const WALL_VIDEOS = [FILMS[1], FILMS[5], FILMS[13]];

export const SERVICES = [
  { no: '01', title: 'Portrait Sessions',   body: 'Studio and location portraiture — individuals, couples and families. Single-light drama or soft natural warmth.', meta: 'Studio · 1–2 hrs' },
  { no: '02', title: 'Fashion & Editorial', body: 'Lookbooks, campaigns and editorial stories. Art direction, styling collaboration and a graded, cohesive set.', meta: 'Half / full day' },
  { no: '03', title: 'Beauty',              body: 'Close, luminous beauty work — skin, colour and detail rendered with a retoucher’s eye.', meta: 'Studio · half day' },
  { no: '04', title: 'Weddings & Events',   body: 'Documentary coverage that stays out of the way — the real moments, honestly kept, beautifully finished.', meta: 'Full day + film' },
  { no: '05', title: 'Cinematic Films',     body: 'Brand films, fashion motion and wedding cinema — shot and edited in-house with a filmic grade.', meta: 'By project' },
  { no: '06', title: 'Visual Art',          body: 'Face and body painting, makeup art and conceptual portraiture — the studio as gallery, the subject as artwork.', meta: 'By project' },
];

export const STEPS = [
  { num: '01', title: 'Conversation', body: 'We start with your story, references and the feeling you want the images to carry.' },
  { num: '02', title: 'Direction',    body: 'Concept, styling, location and light — planned so the shoot day runs calm and unhurried.' },
  { num: '03', title: 'The Shoot',    body: 'On set we let the subject settle. The real photograph usually lives between the poses.' },
  { num: '04', title: 'The Edit',     body: 'Careful selection, colour grading and retouching — delivered as a finished gallery or film.' },
];

export const NAV = [
  ['Work', 'wall'], ['Gallery', 'galleries'], ['Films', 'films'], ['Visual Art', 'visualart'],
  ['Studio', 'studio'], ['Services', 'services'], ['Contact', 'contact'],
];

// A short synthesized "swoosh" — no audio asset needed. Call on Enter.
export function playSwoosh() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = playSwoosh._ctx || (playSwoosh._ctx = new AC());
    if (ctx.state === 'suspended') ctx.resume();
    const t0 = ctx.currentTime, dur = 0.62, sr = ctx.sampleRate;
    const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 0.9;
    bp.frequency.setValueAtTime(320, t0);
    bp.frequency.exponentialRampToValueAtTime(4200, t0 + 0.26);
    bp.frequency.exponentialRampToValueAtTime(480, t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.3, t0 + 0.11);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
    src.start(t0); src.stop(t0 + dur);
  } catch (e) { /* no-op */ }
}
