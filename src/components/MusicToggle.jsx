import { useEffect, useState } from 'react';
import { toggleMute, isMuted, onMuteChange } from '../music.js';

export default function MusicToggle({ view }) {
  const [mute, setMute] = useState(isMuted());
  useEffect(() => onMuteChange(setMute), []);
  return (
    <button className="music-toggle" aria-label="Toggle music" onClick={() => setMute(toggleMute(view))}>
      <span className="note">♪</span>{mute ? 'Music off' : 'Music on'}
    </button>
  );
}
