const positions = {
  takbir: {
    title: "Takbir (Start of Prayer)",
    arabic: "اللّٰهُ أَكْبَر",
    translit: "Allāhu Akbar",
    meaning: "Allah is the Greatest.",
    image: "images/takbir.jpg"
  },
  ruku: {
    title: "Rukū‘ (Bowing)",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    translit: "Subḥāna rabbiyal-‘aẓīm",
    meaning: "Glory be to my Lord, the Most Great.",
    image: "images/ruku.jpg"
  },
  standing: {
    title: "Standing after Rukū‘",
    arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
    translit: "Rabbana wa laka al-ḥamd",
    meaning: "Our Lord, to You belongs all praise.",
    image: "images/takbir.jpg"
  },
  sujood: {
    title: "Sujūd (Prostration)",
    arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
    translit: "Subḥāna rabbiyal-a‘lā",
    meaning: "Glory be to my Lord, the Most High.",
    image: "images/sujood.webp"
  },
  sitting: {
    title: "Sitting Between Sujoods",
    arabic: "رَبِّ اغْفِرْ لِي",
    translit: "Rabbighfir lī",
    meaning: "My Lord, forgive me.",
    image: "images/sitting.ppm"
  },
  tasleem: {
    title: "Taslīm (End of Prayer)",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ",
    translit: "As-salāmu ‘alaykum wa raḥmatullāh",
    meaning: "Peace and mercy of Allah be upon you.",
    image: "images/tasleem.jpeg"
  }
};

function showPosition(key) {
  const pos = positions[key];
  document.getElementById('positionTitle').textContent = pos.title;
  document.getElementById('arabicText').textContent = pos.arabic;
  document.getElementById('translitText').textContent = pos.translit;
  document.getElementById('meaningText').textContent = pos.meaning;
  document.getElementById('positionImage').src = pos.image;
}