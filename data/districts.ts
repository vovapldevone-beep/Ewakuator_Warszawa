export interface District {
  /** URL slug, e.g. `ewakuator-mokotow` */
  slug: string
  /** Polish display name (alias of namePl, kept for convenience) */
  name: string
  /** Polish district name */
  namePl: string
  /** Ukrainian district name */
  nameUk: string
  /** Unique short Polish SEO description for this district */
  description: string
}

export const districts: District[] = [
  {
    slug: 'ewakuator-srodmiescie',
    name: 'Śródmieście',
    namePl: 'Śródmieście',
    nameUk: 'Шрудмесьце',
    description:
      'Holowanie i pomoc drogowa w Śródmieściu Warszawy. Działamy w ścisłym centrum — wąskie uliczki, parkingi podziemne i strefa płatnego parkowania to dla nas codzienność. Laweta dojeżdża średnio w 20 minut.',
  },
  {
    slug: 'ewakuator-mokotow',
    name: 'Mokotów',
    namePl: 'Mokotów',
    nameUk: 'Мокотув',
    description:
      'Ewakuator i laweta na Mokotowie — od Wierzbna po Służewiec. Holujemy auta osobowe, dostawcze i motocykle, pomagamy przy rozładowanym akumulatorze i braku paliwa. Szybki dojazd o każdej porze.',
  },
  {
    slug: 'ewakuator-wola',
    name: 'Wola',
    namePl: 'Wola',
    nameUk: 'Воля',
    description:
      'Pomoc drogowa na Woli — biznesowe centrum Warszawy z wieżowcami i ruchliwymi arteriami. Holowanie pojazdów po kolizji, awarii czy unieruchomieniu w korku. Laweta gotowa 24 godziny na dobę.',
  },
  {
    slug: 'ewakuator-praga-poludnie',
    name: 'Praga-Południe',
    namePl: 'Praga-Południe',
    nameUk: 'Прага-Полудне',
    description:
      'Ewakuator na Pradze-Południe: Saska Kępa, Grochów, Gocław. Holujemy samochody osobowe i dostawcze, otwieramy zatrzaśnięte auta, dowozimy paliwo. Dzwoń o dowolnej godzinie — przyjedziemy ekspresowo.',
  },
  {
    slug: 'ewakuator-praga-polnoc',
    name: 'Praga-Północ',
    namePl: 'Praga-Północ',
    nameUk: 'Прага-Пулноц',
    description:
      'Laweta i pomoc drogowa na Pradze-Północ. Znamy klimatyczne podwórka i wąskie przejazdy starej Pragi, dlatego sprawnie wyholujemy auto nawet z trudno dostępnego miejsca. Działamy całą dobę.',
  },
  {
    slug: 'ewakuator-ursynow',
    name: 'Ursynów',
    namePl: 'Ursynów',
    nameUk: 'Урсинув',
    description:
      'Holowanie na Ursynowie — od Kabatów po Natolin i Imielin. Pomagamy mieszkańcom osiedli i kierowcom przy trasie S2/S79. Awaria, kolizja, brak paliwa? Laweta dojedzie w kilkanaście minut.',
  },
  {
    slug: 'ewakuator-wilanow',
    name: 'Wilanów',
    namePl: 'Wilanów',
    nameUk: 'Віланув',
    description:
      'Ewakuator w Wilanowie i Miasteczku Wilanów. Holujemy auta premium i SUV-y z najwyższą ostrożnością, obsługujemy garaże podziemne nowych apartamentowców. Pomoc drogowa dostępna 24/7.',
  },
  {
    slug: 'ewakuator-bielany',
    name: 'Bielany',
    namePl: 'Bielany',
    nameUk: 'Беляни',
    description:
      'Pomoc drogowa na Bielanach — Słodowiec, Wawrzyszew, Huta. Holujemy pojazdy po awarii i stłuczce, podłączamy akumulator, dowozimy paliwo. Laweta w gotowości przez całą dobę, także w weekendy.',
  },
  {
    slug: 'ewakuator-zoliborz',
    name: 'Żoliborz',
    namePl: 'Żoliborz',
    nameUk: 'Жолібож',
    description:
      'Ewakuator na Żoliborzu — od Placu Wilsona po Sady Żoliborskie. Sprawnie holujemy auta z zabytkowych uliczek i ciasnych zaułków. Szybki dojazd lawety o każdej porze dnia i nocy.',
  },
  {
    slug: 'ewakuator-targowek',
    name: 'Targówek',
    namePl: 'Targówek',
    nameUk: 'Таргувек',
    description:
      'Holowanie na Targówku — Bródno, Zacisze, Targówek Przemysłowy. Obsługujemy zarówno osiedla mieszkaniowe, jak i tereny przemysłowe. Laweta dla aut osobowych i dostawczych, dostępna 24/7.',
  },
  {
    slug: 'ewakuator-bemowo',
    name: 'Bemowo',
    namePl: 'Bemowo',
    nameUk: 'Бемово',
    description:
      'Ewakuator na Bemowie — Jelonki, Górce, Chrzanów. Holujemy auta po awarii i kolizji, pomagamy przy lotnisku Bemowo i trasie S8. Szybka pomoc drogowa o każdej porze, również nocą.',
  },
  {
    slug: 'ewakuator-ursus',
    name: 'Ursus',
    namePl: 'Ursus',
    nameUk: 'Урсус',
    description:
      'Pomoc drogowa w Ursusie — Niedźwiadek, Skorosze, Czechowice. Holujemy pojazdy osobowe i dostawcze, otwieramy zatrzaśnięte auta i dowozimy paliwo. Laweta dojeżdża szybko o każdej porze.',
  },
  {
    slug: 'ewakuator-wlochy',
    name: 'Włochy',
    namePl: 'Włochy',
    nameUk: 'Влохи',
    description:
      'Ewakuator na Włochach — Okęcie, Raków, Stare Włochy. Działamy w pobliżu Lotniska Chopina i terenów przemysłowych. Holowanie, podłączenie akumulatora i dowóz paliwa przez całą dobę.',
  },
  {
    slug: 'ewakuator-ochota',
    name: 'Ochota',
    namePl: 'Ochota',
    nameUk: 'Охота',
    description:
      'Laweta i pomoc drogowa na Ochocie — Rakowiec, Szczęśliwice, Stara Ochota. Holujemy auta po awarii i stłuczce w gęstej, miejskiej zabudowie. Ekspresowy dojazd ekipy 24 godziny na dobę.',
  },
  {
    slug: 'ewakuator-rembertow',
    name: 'Rembertów',
    namePl: 'Rembertów',
    nameUk: 'Рембертув',
    description:
      'Ewakuator w Rembertowie — Stary i Nowy Rembertów, Kawęczyn. Obsługujemy spokojne, podmiejskie rejony wschodniej Warszawy. Holowanie aut osobowych i dostawczych dostępne całą dobę.',
  },
  {
    slug: 'ewakuator-bialoleka',
    name: 'Białołęka',
    namePl: 'Białołęka',
    nameUk: 'Бялоленка',
    description:
      'Pomoc drogowa na Białołęce — Tarchomin, Nowodwory, Choszczówka. Najszybciej rozwijająca się dzielnica Warszawy to rozległe osiedla i nowe drogi. Laweta dojeżdża sprawnie o każdej porze.',
  },
  {
    slug: 'ewakuator-wawer',
    name: 'Wawer',
    namePl: 'Wawer',
    nameUk: 'Вавер',
    description:
      'Ewakuator w Wawrze — Anin, Falenica, Międzylesie, Radość. Największa powierzchniowo dzielnica Warszawy; mimo rozległego terenu laweta dociera szybko. Holowanie i pomoc drogowa 24/7.',
  },
  {
    slug: 'ewakuator-wesola',
    name: 'Wesoła',
    namePl: 'Wesoła',
    nameUk: 'Весола',
    description:
      'Holowanie w Wesołej — Stara Miłosna, Groszówka, Zielona. Obsługujemy najdalej na wschód wysuniętą dzielnicę i okolice trasy S2. Pomoc drogowa, holowanie i dowóz paliwa przez całą dobę.',
  },
]

export const findDistrict = (slug: string): District | undefined =>
  districts.find((d) => d.slug === slug)
