import { SITE } from "./site";

const B = SITE.assets.base;

/**
 * Every URL here has been checked against the live media library.
 * Photographer credits are preserved in the filenames.
 * Local paths are used for images that act as an LCP hero.
 */
export const IMAGES = {
  santoriniCaldera: "/images/my-honeymoon-santorini.jpg",
  santoriniIslandView: "/images/my-honeymoon-santorini-island-view.jpg",
  plannerPortrait: "/images/my-honeymoon-santorini-door.jpg",

  santoriniChurch: `${B}/my-honeymoon-santorini-church.jpg`,
  santoriniDomes: `${B}/my-Honeymoon-Santorini-3.jpg`,
  santoriniIsland: `${B}/my-honeymoon-santorini-island.jpg`,
  santoriniView: `${B}/my-honeymoon-santorini-view.jpg`,
  santoriniBlue: `${B}/my-honeymoon-santorini-blue.jpg`,
  aegeanWindow: `${B}/my-honeymoon-aegean-window.jpg`,
  aegeanSailing: `${B}/my-honeymoon-aegean-sailing.jpg`,
  amenities: `${B}/my-honeymoon-special-amenities-1.jpg`,
  tinosPyrgos: `${B}/Tinos_PyrgosVillage_7392_YSkoulas.jpg`,

  corfu: `${B}/my-Honeymoon-Corfu-Copyright-SMourelatou.jpg`,
  corfuAchilleion: `${B}/my-Honeymoon-Corfu-Achilleion-Copyright-SMourelatou.jpg`,
  corfuOldTown: `${B}/my-Honeymoon-Ionian-islands-Corfu-Old-town-copyright-MMitzithropoulos.jpg`,
  kefaloniaMyrtos: `${B}/my-Honeymoon-Kefalonia-Myrtos-copyright-KKouzouni.jpg`,
  lefkadaPortoKatsiki: `${B}/my-Honeymoon-Lefkada-Porto-Katsiki-copyright-GFilippini.jpg`,

  chios: `${B}/my-Honeymoon-Chios-Copyright-GFIlippini.jpg`,
  chiosPyrgi: `${B}/my-Honeymoon-Chios-Pyrgi-Copyright-GFIlippini.jpg`,
  samosBeach: `${B}/my-Honeymoon-Samos-Beach-Copyright-DRozaki.jpg`,
  ikaria: `${B}/my-Honeymoon-Ikaria-Copyright-DRozaki.jpg`,
  limnosMyrina: `${B}/my-Honeymoon-Limnos-Myrina-Copyright-KVergas.jpg`,

  athensLuxury: `${B}/my-Honeymoon-Athens-Luxury-copyright-KKouzouni.jpg`,
  athensWine: `${B}/my-Honeymoon-Athens-Wine-copyright-KKouzouni.jpg`,
  athensWineTwo: `${B}/my-Honeymoon-Athens-Wine-copyright-KKouzouni2.jpg`,
  athensGastronomy: `${B}/my-Honeymoon-Athens-Gastronomy-copyright-KKouzouni7.jpg`,

  gastronomy: `${B}/my-Honeymoon-Gastronomy-copyright-SMourelatou.jpg`,
  creteWine: `${B}/my-Honeymoon-Crete-Rethymnon-Wine-Copyright-E-Fili..jpg`,

  stock1: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-15.jpg`,
  stock2: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-12.jpg`,
  stock3: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-13.jpg`,
  stock4: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-24.jpg`,
  stock5: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-19.jpg`,

  /** Hub-page heroes. Kept separate so a hub never silently shares an island hero. */
  heroes: {
    home: "/images/my-honeymoon-santorini.jpg",
    destinations: `${B}/my-honeymoon-santorini-island.jpg`,
    itineraries: `${B}/my-honeymoon-aegean-sailing.jpg`,
    experiences: `${B}/my-Honeymoon-Gastronomy-copyright-SMourelatou.jpg`,
    guides: `${B}/my-honeymoon-aegean-window.jpg`,
    journal: `${B}/my-Honeymoon-Chios-Pyrgi-Copyright-GFIlippini.jpg`,
    faq: `${B}/my-honeymoon-santorini-view.jpg`,
    audiences: `${B}/my-Honeymoon-Corfu-Copyright-SMourelatou.jpg`,
    stories: `${B}/my-honeymoon-special-amenities-1.jpg`,
    press: `${B}/my-Honeymoon-Athens-Luxury-copyright-KKouzouni.jpg`,
    about: "/images/my-honeymoon-santorini-island-view.jpg",
    brochure: `${B}/haute-stock-photo-membership-santorini-blue-collection-final-15.jpg`,
    quiz: `${B}/my-honeymoon-santorini-blue.jpg`,
  },
} as const;
