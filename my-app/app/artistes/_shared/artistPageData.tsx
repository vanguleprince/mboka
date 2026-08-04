import type { ReactNode } from "react";
import type { ArtistSlug } from "@/lib/types/artist";
import type {
  ArtistMerchItem,
  ArtistNewsItem,
  ArtistPromoBlock,
  ArtistSocialLinks,
  ArtistTrackItem,
} from "./ArtistPageTemplate";

interface ArtistPageData {
  slug: string;
  heroImage: string;
  heroAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  bioLead: ReactNode;
  bioExpanded: ReactNode;
  tagList: string[];
  tracks: ArtistTrackItem[];
  playableArtist: string;
  socialLinks: ArtistSocialLinks;
  newsTitle: string;
  newsItems: ArtistNewsItem[];
  merchDescription: string;
  merchItems: ArtistMerchItem[];
  promoBlock?: ArtistPromoBlock;
  mainClassName?: string;
  sectionRoundedClassName?: string;
  expandedMaxClassName?: string;
}

const bogoTracks: ArtistTrackItem[] = [
  { title: "Bogo - HENNESSY", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo1.mp3" },
  { title: "Bogo - WOLO PALATA", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo2.mp3" },
  { title: "Bogo - GENERATION GANG", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo3.mp3" },
  { title: "Bogo - MBONGO", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo4.mp3" },
  { title: "Bogo - MWANA MABE", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo5.mp3" },
  { title: "Bogo - AWA", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo6.mp3" },
  { title: "Bogo - NTABA MISATO", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo7.mp3" },
  { title: "Bogo - KIMPA VITA", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q", src: "/audios/bogo/bogo8.mp3" },
];

const bogoSocialLinks: ArtistSocialLinks = {
  spotify: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q",
  instagram: "https://www.instagram.com/bogothegoat.442?igsh=MTZ4ZjY4bmIxYzZlZA==",
  youtube: "https://www.youtube.com/@bogothegoat",
  tiktok: "https://www.tiktok.com/@bogothegoat?_r=1&_t=ZS-96T2bsD2cY1",
};

const bogoNewsItems: ArtistNewsItem[] = [
  {
    title: "EP en préparation",
    detail: "Bogo The Goat finalise actuellement un nouveau projet avec une direction plus ambitieuse et internationale.",
  },
  {
    title: "Nouveaux visuels",
    detail: "Plusieurs contenus visuels sont en production pour accompagner les prochains titres et renforcer son image artistique.",
  },
  {
    title: "Présence scénique",
    detail: "L'artiste prépare aussi de nouvelles apparitions live pour connecter encore plus fort avec son public.",
  },
];

const bogoMerchItems: ArtistMerchItem[] = [
  {
    name: "T-shirt Signature",
    description: "Coupe streetwear avec identité visuelle Bogo The Goat.",
    price: "25$",
  },
  {
    name: "Hoodie Black Drop",
    description: "Sweat premium pensé pour les sorties, les shows et le quotidien.",
    price: "45$",
  },
  {
    name: "Casquette Logo",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Mboka.",
    price: "20$",
  },
];

export const bogoPageData: ArtistPageData = {
  slug: "bogo",
  heroImage: "/imagepages/bogothegoat3.jpeg",
  heroAlt: "Bogo",
  heroTitle: "BOGO THE GOAT",
  heroSubtitle: "Rap urbain · Kinshasa",
  bioLead: (
    <p>
      <span className="font-semibold text-white">Bogo Thegoat</span>, de son vrai nom Kevin Lunzayila, né le 17 mai 1998, est un rappeur bilingue (français-lingala) originaire de la République Démocratique du Congo, basé à Ngaliema.
    </p>
  ),
  bioExpanded: (
    <>
      <p>
        Issu d&apos;une génération portée par la résilience et l&apos;ambition, il développe une identité artistique forte, mêlant les sonorités congolaises à l&apos;influence du rap américain. Son univers, à la fois authentique et moderne, se distingue par un flow maîtrisé, une énergie marquante et une attention particulière à l&apos;image, faisant de lui un artiste complet au croisement de la musique et de la culture urbaine.
      </p>
      <p>
        Fort de plus de 5 ans de carrière, Bogo Thegoat s&apos;impose progressivement sur la scène urbaine congolaise avec plus de 15 titres disponibles sur les plateformes de streaming, dont plusieurs accompagnés de visuels cumulant des milliers de vues.
      </p>
      <p>
        Sa régularité et sa capacité à connecter avec une audience jeune et engagée renforcent son positionnement et confirment son potentiel de croissance.
      </p>
      <p>
        Au-delà de la musique, il incarne une nouvelle génération d&apos;artistes capables de créer un univers cohérent entre son, image et influence, offrant ainsi de véritables opportunités de collaboration avec des marques en quête d&apos;authenticité et d&apos;impact culturel.
      </p>
      <p>
        Actuellement en préparation de nouveaux projets, dont un EP à venir, Bogo Thegoat ambitionne d&apos;élargir son audience à l&apos;international et de s&apos;inscrire durablement sur la scène musicale globale.
      </p>
    </>
  ),
  tagList: ["Rap urbain", "Kinshasa", "Live performer", "EP en preparation"],
  tracks: bogoTracks,
  playableArtist: "Bogo",
  socialLinks: bogoSocialLinks,
  newsTitle: "Les news de Bogo",
  newsItems: bogoNewsItems,
  merchDescription: "Une selection de pieces inspirees de l&apos;univers visuel de Bogo The Goat.",
  merchItems: bogoMerchItems,
  mainClassName: "relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 pb-40 text-white sm:px-8",
};

const c2bTracks: ArtistTrackItem[] = [
  { title: "MPIAKA (feat. Gaz Fabilouss)", duration: "2:56", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - MPIAKA & Gaz Fabilouss - Download - Tubidy.mp3" },
  { title: "Oa Nani (feat. Mobutu Satana)", duration: "3:32", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - Oa Nani & @MobutuSatanaOfficiel - Download - Tubidy.mp3" },
  { title: "OG (feat. SINS OFF)", duration: "3:32", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - OG & @SINS_OFF - Download - Tubidy.mp3" },
  { title: "TUKU TUKU (feat. Diesel Gucci)", duration: "3:25", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - TUKU TUKU & @DieselGucciofficiel - Download - Tubidy.mp3" },
  { title: "DIPLOME", duration: "2:46", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/DIPLOME [VISUALIZER 02] - Download - Tubidy.mp3" },
];

const c2bSocialLinks: ArtistSocialLinks = {
  spotify: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg",
  instagram: "https://www.instagram.com/c2b_officiel?igsh=MXZwbjVhcXNnZXp5cw==",
  youtube: "https://www.youtube.com/@C2BCramcity",
  tiktok: "https://www.tiktok.com/@modjalisi_officiel?_r=1&_t=ZS-96T2VO6GmRh",
};

const c2bNewsItems: ArtistNewsItem[] = [
  {
    title: "Nouvelle video disponible",
    detail: "La nouvelle video de C2B est en ligne sur YouTube. Va la decouvrir et partage autour de toi.",
  },
  {
    title: "Direction visuelle",
    detail: "Des contenus visuels sont en préparation pour accompagner les prochains singles de C2B.",
  },
  {
    title: "Scène & performances",
    detail: "L'artiste prépare de nouvelles apparitions live pour renforcer la connexion avec son public.",
  },
];

const c2bMerchItems: ArtistMerchItem[] = [
  {
    name: "T-shirt Signature C2B",
    description: "Coupe streetwear avec l'identité visuelle C2B.",
    price: "25$",
  },
  {
    name: "Hoodie Night Drop",
    description: "Sweat premium pensé pour les sorties, les shows et le quotidien.",
    price: "45$",
  },
  {
    name: "Casquette Logo",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Mboka.",
    price: "20$",
  },
];

const c2bPromoBlock: ArtistPromoBlock = {
  badge: "Nouvelle video",
  title: "C2B en tendance sur YouTube",
  detail: "Regarde la nouvelle video de C2B, laisse un commentaire et abonne-toi pour ne rien rater des prochaines sorties.",
  ctaText: "Voir la nouvelle video",
  ctaHref: "https://www.youtube.com/@C2BCramcity",
  thumbHref: "https://www.youtube.com/@C2BCramcity",
  thumbImage: "/imagepages/cdbpicture.png",
  thumbAlt: "Nouvelle video C2B",
  thumbLabel: "Watch now",
};

export const c2bPageData: ArtistPageData = {
  slug: "c2b",
  heroImage: "/imagepages/cdbpicture.png",
  heroAlt: "C2B",
  heroTitle: "C2B",
  heroSubtitle: "Rap urbain · Kinshasa",
  bioLead: (
    <>
      <p>
        Originaire de Kinshasa (RDC), entre Barumbu, Kinshasa et Ngaliema, <span className="font-semibold text-white">C2B</span> est un rappeur multilingue (francais, lingala, swahili, tshiluba) qui incarne une nouvelle generation d&apos;artistes africains prets a franchir les frontieres.
      </p>
      <p className="mt-3">Il est ne le 07/05/1997.</p>
    </>
  ),
  bioExpanded: (
    <>
      <p>
        Revele en 2019 avec le titre <span className="font-semibold text-white">&quot;Koli&quot;</span>, il impose rapidement une direction claire : creer une musique sans barrieres, enracinee dans la culture congolaise mais connectee aux standards internationaux.
      </p>
      <p>
        Entre rap, trap, afrobeat et drill, C2B construit un son hybride, moderne et identifiable des les premieres mesures. Inspire par des figures comme Migos, Deejay S ou Big Brown, il developpe un univers puissant : flow precis, energie brute, esthetique travaillee.
      </p>
      <p>
        Chaque sortie est pensee comme une experience, melant attitude, image et storytelling. Avec des titres comme <span className="font-semibold text-white">&quot;C&apos;est la vie&quot;</span>, <span className="font-semibold text-white">&quot;Makala&quot;</span> ou <span className="font-semibold text-white">&quot;O&apos;A Nani ?&quot;</span>, cumulant des milliers de vues, C2B s&apos;impose progressivement sur la scene urbaine congolaise tout en preparant son expansion a l&apos;international.
      </p>
      <p>
        Porte par une audience jeune, engagee et en pleine croissance, il avance avec une vision claire : passer de Kinshasa au monde.
      </p>
      <p>
        Actuellement en preparation de nouveaux projets, dont un EP, C2B accelere son ascension et se positionne comme l&apos;un des visages montants de la scene urbaine africaine.
      </p>
    </>
  ),
  tagList: ["Rap urbain", "Kinshasa", "Chaos maîtrisé", "Artiste complet"],
  tracks: c2bTracks,
  playableArtist: "C2B",
  socialLinks: c2bSocialLinks,
  newsTitle: "Les news de C2B",
  newsItems: c2bNewsItems,
  merchDescription: "Une selection de pieces inspirees de l&apos;univers visuel de C2B.",
  merchItems: c2bMerchItems,
  promoBlock: c2bPromoBlock,
};

const flackoTracks: ArtistTrackItem[] = [
  { title: "C'est fou ça (Prod by Offside)", duration: "2:50", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg", src: "/flacko/FLACKO - C'est fou ça (Prod by Offside) - Download - Tubidy.mp3" },
  { title: "HUSTLE (Goat Session)", duration: "2:38", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg", src: "/flacko/FLACKO - HUSTLE ( GOAT SESSION ) - Download - Tubidy.mp3" },
  { title: "MASSE", duration: "2:34", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg", src: "/flacko/FLACKO - MASSE (DIRECTED BY POPPINJEE) - Download - Tubidy.mp3" },
];

const flackoSocialLinks: ArtistSocialLinks = {
  spotify: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg",
  instagram: "https://www.instagram.com/bigflackocram?igsh=MXd5Z3Ztamh6MjQyMA==",
  youtube: "https://www.youtube.com/@BIGFLACKOCRAM",
  tiktok: "https://www.tiktok.com/@bigflackocram?_r=1&_t=ZS-96T2YFockBZ",
};

const flackoNewsItems: ArtistNewsItem[] = [
  {
    title: "Nouveau projet en cours",
    detail: "Flacko prépare un nouveau chapitre avec un son plus affirmé, mêlant rap mélodique et influences afro.",
  },
  {
    title: "Clip Sans Frein disponible",
    detail: "Son dernier clip est désormais disponible sur les plateformes et accumule des milliers de vues.",
  },
  {
    title: "Dates de showcase",
    detail: "Flacko prépare de nouvelles dates de showcase pour présenter ses titres en live à Goma et ailleurs.",
  },
];

const flackoMerchItems: ArtistMerchItem[] = [
  {
    name: "T-shirt Flacko Drop",
    description: "Coupe streetwear avec l'identité visuelle Flacko.",
    price: "25$",
  },
  {
    name: "Hoodie Goma Wave",
    description: "Sweat premium inspiré des nuits de Goma et de la scène urbaine.",
    price: "45$",
  },
  {
    name: "Casquette Melodic",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Flacko.",
    price: "20$",
  },
];

export const flackoPageData: ArtistPageData = {
  slug: "flacko",
  heroImage: "/imagepages/flackoCram.jpg",
  heroAlt: "Flacko",
  heroTitle: "FLACKO",
  heroSubtitle: "Trap music · Kinshasa",
  bioLead: (
    <>
      <p>
        Originaire de la Republique Democratique du Congo et base a Lemba, <span className="font-semibold text-white">Flacko (Armando Choukrani)</span> incarne une nouvelle generation d&apos;artistes africains portee par l&apos;ambition, la discipline et une vision internationale.
      </p>
      <p className="mt-3">Ne a Kinshasa le 28/07/2004, son premier texte a ete ecrit en 2021.</p>
    </>
  ),
  bioExpanded: (
    <>
      <p>
        Artiste bilingue (francais / lingala), il developpe une signature musicale moderne, fusionnant les sonorites congolaises avec les codes du rap americain, de la trap et du dancehall. Influence par des figures majeures comme Chief Keef, Kendrick Lamar, Freeze Corleone et Young Thug, Flacko impose progressivement un univers artistique distinct : brut, authentique et resolument actuel.
      </p>
      <p>
        Dote d&apos;un flow precis, d&apos;une forte presence et d&apos;un sens travaille de l&apos;image, il se positionne comme un artiste complet, capable de connecter musique, esthetique et culture urbaine.
      </p>
      <p>
        Avec plus de 8 ans d&apos;activite, Flacko construit son ascension avec constance. Des titres comme <span className="font-semibold text-white">&quot;C&apos;est fou ca&quot;</span> et <span className="font-semibold text-white">&quot;Masse&quot;</span> sont disponibles sur les principales plateformes de streaming et s&apos;accompagnent de visuels ayant genere des milliers de vues, renforcant sa visibilite sur la scene urbaine congolaise.
      </p>
      <p>
        Sa capacite a engager une audience jeune, connectee et fidele constitue aujourd&apos;hui l&apos;un de ses principaux leviers de croissance. Flacko s&apos;inscrit ainsi dans une dynamique d&apos;expansion, avec une strategie artistique orientee vers la performance, l&apos;image et la regularite des sorties.
      </p>
      <p>
        Actuellement en preparation de nouveaux projets, dont un EP tres attendu, il ambitionne d&apos;elargir son rayonnement a l&apos;international et de s&apos;imposer comme une figure montante de la scene urbaine africaine.
      </p>
    </>
  ),
  tagList: ["Trap music", "Kinshasa", "Live performer", "TRAPPIN mixtape"],
  tracks: flackoTracks,
  playableArtist: "Flacko",
  socialLinks: flackoSocialLinks,
  newsTitle: "Les news de Flacko",
  newsItems: flackoNewsItems,
  merchDescription: "Une selection de pieces inspirees de l&apos;univers visuel de Flacko.",
  merchItems: flackoMerchItems,
  sectionRoundedClassName: "rounded-[32px]",
  expandedMaxClassName: "max-h-[800px]",
};

const keurmaTracks: ArtistTrackItem[] = [
  { title: "Montage (feat. Suintement)", duration: "2:53", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw", src: "/keurma/❤️MA - Montage feat. Suintement (Clip Officiel) - Download - Tubidy.mp3" },
  { title: "Vraie Momie", duration: "2:05", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw", src: "/keurma/❤️MA - Vraie Momie - Download - Tubidy.mp3" },
];

const keurmaSocialLinks: ArtistSocialLinks = {
  spotify: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw",
  instagram: "https://www.instagram.com/santa_calisse_officiel?igsh=ZnNtYjlxdDhidDgz",
  youtube: "https://www.youtube.com/@SainteVi%C3%A8rge-z1m",
  tiktok: "https://www.tiktok.com/@keurma01?_r=1&_t=ZS-96T2hfyjxDA",
};

const keurmaNewsItems: ArtistNewsItem[] = [
  {
    title: "Nouveau single en preparation",
    detail: "Ceurma peaufine un nouveau single afro pop avec une direction vocale plus organique.",
  },
  {
    title: "Nouveaux visuels",
    detail: "Des visuels inedits sont en production pour accompagner sa prochaine sortie.",
  },
  {
    title: "Performances live",
    detail: "L'artiste prepare de nouvelles apparitions live pour renforcer sa presence scenique.",
  },
];

const keurmaMerchItems: ArtistMerchItem[] = [
  {
    name: "T-shirt Ceurma Wave",
    description: "Coupe streetwear inspiree de l'identite visuelle de Ceurma.",
    price: "25$",
  },
  {
    name: "Hoodie Sunset",
    description: "Sweat premium pensé pour les sorties, les shows et le quotidien.",
    price: "45$",
  },
  {
    name: "Casquette Logo",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Mboka.",
    price: "20$",
  },
];

export const keurmaPageData: ArtistPageData = {
  slug: "keurma",
  heroImage: "/imagepages/keurma.jpg",
  heroAlt: "Ceurma",
  heroTitle: "CEURMA",
  heroSubtitle: "Afro pop-kin · Kinshasa",
  bioLead: (
    <>
      <p>
        <span className="font-semibold text-white">Ceurma</span> est l&apos;incarnation meme de la fusion moderne. Artiste Afro-Pop emblematique du label Mboka, elle a su creer une passerelle sonore inedite entre l&apos;energie brute de Kinshasa, sa ville d&apos;origine, et les vibrations solaires des Caraibes. Son image, a la fois urbaine et sophistiquee, reflete une artiste qui a su se reinventer en imposant un style bien a elle : le melange audacieux du Chatta percutant et des melodies caribeennes envoutantes.
      </p>
      <p className="mt-3">
        Elle s&apos;appelle EMMANUELLA NTUMBA CALISSE, nee le 28/08/2003, et son premier son est MA VIE, sorti en 2019.
      </p>
    </>
  ),
  bioExpanded: (
    <>
      <p>
        <span className="font-semibold text-white">Parcours & Evolution Artistique</span>
      </p>
      <p>
        Originaire de la capitale de la Republique Democratique du Congo, Ceurma a puise sa force dans le tumulte creatif kinois avant d&apos;elargir ses horizons. Ses debuts sont marques par une exploration des rythmes locaux, mais c&apos;est sa rencontre avec les sonorites Dancehall et Zouk qui provoque le declic artistique.
      </p>
      <p>
        Son evolution au sein du label Mboka temoigne d&apos;une maturite croissante : elle est passee de l&apos;interprete talentueuse a une artiste complete, capable de naviguer entre un flow saccade et des envolees melodiques. Influencee par les grandes divas de l&apos;Afro-fusion et les rythmes tropicaux, elle propose aujourd&apos;hui une musique qui raconte une Afrique moderne, connectee et audacieuse.
      </p>
    </>
  ),
  tagList: ["Afro pop-kin", "Kinshasa", "Live performer", "Nouveau single"],
  tracks: keurmaTracks,
  playableArtist: "Ceurma",
  socialLinks: keurmaSocialLinks,
  newsTitle: "Les news de Ceurma",
  newsItems: keurmaNewsItems,
  merchDescription: "Une selection de pieces inspirees de l&apos;univers visuel de Ceurma.",
  merchItems: keurmaMerchItems,
};

const wendyTracks: ArtistTrackItem[] = [];

const wendySocialLinks: ArtistSocialLinks = {
  spotify: "https://open.spotify.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  tiktok: "https://www.tiktok.com/",
};

const wendyNewsItems: ArtistNewsItem[] = [
  {
    title: "Profil en cours de mise a jour",
    detail: "Les informations officielles de Wendy Rose arrivent bientot.",
  },
  {
    title: "Nouvelles sorties a venir",
    detail: "Les prochains titres seront ajoutes des reception de tes contenus.",
  },
];

const wendyMerchItems: ArtistMerchItem[] = [
  {
    name: "Collection Wendy Rose",
    description: "Visuels et produits a venir.",
    price: "Bientot",
  },
];

export const wendyRosePageData: ArtistPageData = {
  slug: "wendy-rose",
  heroImage: "/mboka_admi/wendy_rose.png",
  heroAlt: "Wendy Rose",
  heroTitle: "WENDY ROSE",
  heroSubtitle: "Artiste Mboka · Kinshasa",
  bioLead: (
    <p>
      <span className="font-semibold text-white">Wendy Rose</span> rejoint officiellement le catalogue Mboka. Sa bio complete, ses liens officiels et son univers detaille seront ajoutes des reception de tes elements.
    </p>
  ),
  bioExpanded: (
    <>
      <p>
        Cette page est prete et fonctionnelle. Tu peux maintenant m&apos;envoyer sa bio, ses reseaux, ses liens Spotify/YouTube et ses titres pour finaliser son profil complet.
      </p>
    </>
  ),
  tagList: ["Nouveau profil", "Mboka Label", "Kinshasa", "Mise a jour a venir"],
  tracks: wendyTracks,
  playableArtist: "Wendy Rose",
  socialLinks: wendySocialLinks,
  newsTitle: "Les news de Wendy Rose",
  newsItems: wendyNewsItems,
  merchDescription: "Les pieces et visuels de Wendy Rose seront publies prochainement.",
  merchItems: wendyMerchItems,
};

export const ARTIST_PAGE_DATA: Record<ArtistSlug, ArtistPageData> = {
  bogo: bogoPageData,
  c2b: c2bPageData,
  flacko: flackoPageData,
  keurma: keurmaPageData,
  "wendy-rose": wendyRosePageData,
};