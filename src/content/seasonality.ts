import type { SeasonMonth } from "./types";

/** Aegean averages. Crete and the Dodecanese run roughly two weeks warmer at
 *  each end of the season; the Ionian is calmer but more humid in high summer. */
export const SEASONALITY: SeasonMonth[] = [
  {
    month: "April",
    sea: "17°C",
    crowds: "Low",
    wind: "Variable",
    rates: "Low",
    note: "Beautiful on the mainland and in Crete. Many Cycladic hotels have not opened. Too cold for most people to swim.",
  },
  {
    month: "May",
    sea: "19°C",
    crowds: "Low",
    wind: "Light",
    rates: "Shoulder",
    note: "Wildflowers, empty archaeological sites and excellent light. The sea is bracing but swimmable by the end of the month.",
  },
  {
    month: "June",
    sea: "23°C",
    crowds: "Building",
    wind: "Light",
    rates: "High",
    note: "The best month of the year for a Greek honeymoon. Warm sea, long days, everything open, and the crowds have not fully arrived.",
  },
  {
    month: "July",
    sea: "25°C",
    crowds: "High",
    wind: "Strong meltemi",
    rates: "Peak",
    note: "Hot and busy. The meltemi cools the Aegean but cancels small boats. The Ionian is the calmer choice this month.",
  },
  {
    month: "August",
    sea: "26°C",
    crowds: "Peak",
    wind: "Strong meltemi",
    rates: "Peak",
    note: "The most expensive and most crowded month, with Greek holidays on top of international ones. Avoid 15 August on Tinos and Paros.",
  },
  {
    month: "September",
    sea: "25°C",
    crowds: "Easing",
    wind: "Easing",
    rates: "High",
    note: "The other best month. The sea is at its warmest, the wind drops, and by mid-month the crowds have gone home.",
  },
  {
    month: "October",
    sea: "23°C",
    crowds: "Low",
    wind: "Light",
    rates: "Shoulder",
    note: "Warm sea, cool evenings, first rain. Cycladic hotels start closing mid-month; Crete, the Dodecanese and the mainland carry on.",
  },
  {
    month: "November",
    sea: "20°C",
    crowds: "Low",
    wind: "Variable",
    rates: "Low",
    note: "Mainland and Crete only. Athens, Nafplio and Chania are lovely; the islands have largely shut.",
  },
];
