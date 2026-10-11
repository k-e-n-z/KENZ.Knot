export type ColorId =
  | 'olive'
  | 'vanilla'
  | 'brown'
  | 'terracotta'
  | 'burgundy'
  | 'charcoal'

export type ColorOption = {
  id: ColorId
  label: string
  swatch: string
}

export const colorOptions: ColorOption[] = [
  { id: 'olive', label: 'Olive', swatch: '#6B7355' },
  { id: 'vanilla', label: 'Vanilla Beige', swatch: '#EFE6D2' },
  { id: 'brown', label: 'Soft Brown', swatch: '#8A5A3B' },
  { id: 'terracotta', label: 'Terracotta', swatch: '#C0703C' },
  { id: 'burgundy', label: 'Burgundy', swatch: '#7C2432' },
  { id: 'charcoal', label: 'Charcoal', swatch: '#3D3A35' },
]

export type Product = {
  id: string
  name: string
  hangul: string
  category: string
  price: number
  color: ColorId
  image: string
  alt: string
  note: string
}

export const products: Product[] = [
  {
    id: 'maehwa-bracelet',
    name: 'Maehwa Knot Bracelet',
    hangul: '매화 매듭',
    category: 'Bracelet',
    price: 190,
    color: 'terracotta',
    image: '/knot-maehwa-bracelet.jpg',
    alt: 'Terracotta plum blossom maedeup knot bracelet with beige adjustable cord',
    note: 'Plum blossom knot on a sliding cord. Fits every wrist.',
  },
  {
    id: 'gilsang-bag-charm',
    name: 'Gilsang Bag Charm',
    hangul: '길상 매듭',
    category: 'Bag charm',
    price: 340,
    color: 'burgundy',
    image: '/knot-red-bag-charm.jpg',
    alt: 'Red good-luck knot bag charm with glass and coral beads hanging from a leather handbag',
    note: 'Good-luck knot with hand-strung glass and stone beads.',
  },
  {
    id: 'gukhwa-ornament',
    name: 'Gukhwa Grand Ornament',
    hangul: '국화 매듭',
    category: 'Wall ornament',
    price: 450,
    color: 'vanilla',
    image: '/knot-cream-gukhwa.jpg',
    alt: 'Large cream chrysanthemum maedeup knot with a silk tassel on a dark background',
    note: 'Our largest piece. Chrysanthemum knot with a full silk tassel.',
  },
  {
    id: 'yeonhwa-belt-charm',
    name: 'Yeonhwa Belt Charm',
    hangul: '연화 매듭',
    category: 'Belt charm',
    price: 300,
    color: 'vanilla',
    image: '/knot-belt-charm.jpg',
    alt: 'Ivory knotted flower belt charm with freshwater pearls worn on denim jeans',
    note: 'Lotus knot with freshwater pearls and a slim clip.',
  },
  {
    id: 'nabi-phone-charm',
    name: 'Nabi Phone Charm',
    hangul: '나비 매듭',
    category: 'Phone charm',
    price: 260,
    color: 'charcoal',
    image: '/knot-nabi-phone-charm.jpg',
    alt: 'Grey butterfly knot phone charm with jade beads and a pearl',
    note: 'Butterfly knot with jade and pearl. Loops onto any case.',
  },
  {
    id: 'norigae-pendant',
    name: 'Norigae Tassel Pendant',
    hangul: '노리개',
    category: 'Pendant',
    price: 280,
    color: 'vanilla',
    image: '/knot-ivory-tassel.jpg',
    alt: 'Ivory Korean norigae pendant with a long straight tassel',
    note: 'Traditional norigae silhouette, kept quiet and undyed.',
  },
  {
    id: 'bouquet-brooch',
    name: 'Maedeup Bouquet Brooch',
    hangul: '꽃다발 매듭',
    category: 'Brooch',
    price: 390,
    color: 'charcoal',
    image: '/knot-bouquet-brooch.jpg',
    alt: 'Brooch made of many small grey, black and ivory knot flowers pinned to a black lapel',
    note: 'Sixteen small knot flowers gathered into one bouquet.',
  },
  {
    id: 'yeonip-pendant',
    name: 'Yeonip Hanging Knot',
    hangul: '연잎 매듭',
    category: 'Hanging knot',
    price: 320,
    color: 'olive',
    image: '/knot-olive-pendant.jpg',
    alt: 'Olive green layered maedeup hanging knot with a coral bead and tassel',
    note: 'Layered leaf knot with a single coral bead.',
  },
  {
    id: 'trio-bracelet',
    name: 'Everyday Knot Bracelet',
    hangul: '기본 매듭',
    category: 'Bracelet',
    price: 150,
    color: 'brown',
    image: '/knot-trio-bracelets.jpg',
    alt: 'Three adjustable knot bracelets in grey, ivory and black with flower knots',
    note: 'The simplest piece to start with. Choose any single colour.',
  },
  {
    id: 'gilsang-mini',
    name: 'Gilsang Mini Knot',
    hangul: '길상 매듭',
    category: 'Keyring',
    price: 170,
    color: 'charcoal',
    image: '/knot-good-luck-black.jpg',
    alt: 'Close-up of a black good-luck maedeup knot with open loops',
    note: 'A bare good-luck knot, finished as a keyring.',
  },
]

export const priceFloor = Math.min(...products.map((p) => p.price))
export const priceCeiling = Math.max(...products.map((p) => p.price))
