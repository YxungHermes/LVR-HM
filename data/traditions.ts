export type TraditionOption = {
  key: string;
  label: string;
};

export type TraditionCategory = {
  label: string;
  options: TraditionOption[];
};

export const TRADITION_CATEGORIES: TraditionCategory[] = [
  {
    label: "Most Popular in NYC",
    options: [
      { key: "jewish", label: "Jewish Wedding" },
      { key: "hindu", label: "Hindu Wedding (Vedic)" },
      { key: "christian_catholic", label: "Christian Wedding — Catholic" },
      { key: "chinese", label: "Chinese Wedding (Tea Ceremony)" },
      { key: "american_traditional", label: "American Wedding (Traditional/Non-religious)" },
      { key: "muslim", label: "Muslim Wedding (Nikah/Walima)" },
    ],
  },
  {
    label: "Weddings — Religious / Cultural",
    options: [
      { key: "hindu", label: "Hindu Wedding (Vedic)" },
      { key: "sikh", label: "Sikh Wedding (Anand Karaj)" },
      { key: "muslim", label: "Muslim Wedding (Nikah/Walima)" },
      { key: "jewish", label: "Jewish Wedding" },
      { key: "christian_catholic", label: "Christian Wedding — Catholic" },
      { key: "christian_orthodox", label: "Christian Wedding — Orthodox" },
      { key: "christian_protestant", label: "Christian Wedding — Protestant" },
      { key: "buddhist", label: "Buddhist Wedding" },
      { key: "shinto", label: "Japanese Shinto Wedding" },
      { key: "korean", label: "Korean Wedding (Paebaek)" },
      { key: "chinese", label: "Chinese Wedding (Tea Ceremony)" },
      { key: "vietnamese", label: "Vietnamese Wedding" },
      { key: "filipino", label: "Filipino Wedding (Cord & Veil)" },
      { key: "persian", label: "Persian Wedding (Sofreh Aghd / Aroosi)" },
      { key: "greek_orthodox", label: "Greek Orthodox Wedding" },
      { key: "ethiopian_erit", label: "Ethiopian/Eritrean Wedding" },
      { key: "nigerian", label: "Nigerian Wedding" },
      { key: "ghanaian", label: "Ghanaian Wedding" },
      { key: "moroccan", label: "Moroccan Wedding" },
      { key: "american_traditional", label: "American Wedding (Traditional/Non-religious)" },
      { key: "civil_city_hall", label: "Civil Ceremony / City Hall" },
    ],
  },
  {
    label: "Wedding Week / Related Events",
    options: [
      { key: "mehndi", label: "Mehndi" },
      { key: "sangeet", label: "Sangeet" },
      { key: "engagement_party", label: "Engagement Party" },
      { key: "vow_renewal", label: "Vow Renewal" },
      { key: "proposal", label: "Proposal" },
    ],
  },
  {
    label: "Non-Wedding Celebrations",
    options: [
      { key: "bar_bat_mitzvah", label: "Bar/Bat Mitzvah" },
      { key: "quinceanera", label: "Quinceañera" },
      { key: "sweet_16", label: "Sweet 16" },
      { key: "other_event", label: "Other Celebration" },
    ],
  },
];

export const SPECIAL_CHOICES: TraditionOption[] = [
  { key: "multicultural_interfaith", label: "Multicultural / Interfaith" },
  { key: "other", label: "Other / Describe" },
];

// Helper to map key to label
export function getTraditionLabel(key: string): string {
  for (const category of TRADITION_CATEGORIES) {
    const found = category.options.find(opt => opt.key === key);
    if (found) return found.label;
  }
  const special = SPECIAL_CHOICES.find(opt => opt.key === key);
  return special?.label || key;
}
