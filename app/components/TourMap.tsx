'use client'

import { useEffect, useRef, useState } from 'react'

type Stop = {
  name: string
  coords: [number, number] // [lng, lat]
  description: string
  details: string[]
  emoji: string
}

const TOUR_STOPS: Stop[] = [
  // ── 1. Vanderbilt Gate ────────────────────────────────────────────────────
  {
    name: 'Vanderbilt Gate',
    emoji: '🚪',
    coords: [-73.9519, 40.7936],
    description:
      'As you approach the 105th street entrance to the Central Park Conservatory Garden, you will be met with the large wrought iron gate that frames the garden. While it may appear like the gate was designed for the garden, it actually originally belonged to the mansion of Cornelius Vanderbilt, one of the richest members of the Vanderbilt family.',
    details: [
      'As you approach the 105th street entrance to the Central Park Conservatory Garden, you will be met with the large wrought iron gate that frames the garden. While it may appear like the gate was designed for the garden, it actually originally belonged to the mansion of Cornelius Vanderbilt, one of the richest members of the Vanderbilt family. His mansion, where the gate originally belonged, was much farther south at Fifth Avenue and 58th Street.',
      'The gate was designed by George B. Post, an American architect responsible for many New York landmarks including the New York Stock Exchange building. According to the Central Park Conservancy, it was crafted in France in 1894 by the firm Peregotte & Dauvillier. The gate stood outside of the mansion until Alice Vanderbilt sold the property in 1926, causing the mansion to later be demolished in 1927. The gates were saved by Gertrude Vanderbilt Whitney, the founder of the Whitney Museum of American Art, who donated them to the city leading them to be installed at the Conservatory Garden in 1939.',
      'The gate is an important symbol of social separation within the city. When the gate belonged to the Vanderbilt family, it served as a physical boundary between the public street and one of the most private, wealthy homes in New York. It controlled who could enter and who had to remain outside. In this way, the gate made the class division within the city extremely visible.',
      'However, today the gate\'s new location gives it a new meaning. Serving as the entrance to the Conservatory, it now welcomes people into a public space, where all are welcome regardless of their wealth or power. Its hidden history reminds visitors that Central Park still contains many pieces of New York\'s unequal past, even in places that are now open to all.',
    ],
  },
  // ── 2. Conservatory Garden ────────────────────────────────────────────────
  {
    name: 'Conservatory Garden',
    emoji: '🌸',
    coords: [-73.9523, 40.7937],
    description:
      'The Conservatory Garden is a six-acre formal garden in the northeast corner of Central Park, along Fifth Avenue from about 104th to 106th Street. It is Central Park\'s only formal garden, divided into the Italianate Center Garden, the French-style North Garden, and the English-style South Garden.',
    details: [
      'The Conservatory Garden is a six-acre formal garden in the northeast corner of Central Park, along Fifth Avenue from about 104th to 106th Street. It is Central Park\'s only formal garden. It is divided into three parts: the Italianate Center Garden, the French-style North Garden, and the English-style South Garden.',
      'The garden\'s name comes from an older glass conservatory, or greenhouse, that stood on the site. A glass conservatory was built there in 1899 for seasonal plant displays. Even before that, the area had an agricultural purpose because it held a greenhouse designed by Calvert Vaux for growing plants used in the park\'s landscapes.',
      'The hidden history is that this quiet garden was not part of Central Park\'s original romantic landscape in the same way as the Ramble, the Lake, or the Sheep Meadow. It grew out of a working plant nursery and greenhouse site.',
      'The current garden was created during the Robert Moses era. The Garden was completed in 1937 under Parks Commissioner Robert Moses and his chief landscape architect Gilmore D. Clarke. The original planting plans were designed by M. Betty Sprout. The old greenhouse had fallen into disrepair and was demolished in 1934 before the six-acre formal outdoor garden was built.',
      'This matters because Robert Moses changed Central Park in major ways. Landscape historian Elizabeth Barlow Rogers explains that Moses saw parks as public spaces that should be shaped around recreation and civic use. She writes that Moses altered parts of Central Park\'s historic landscape to fit his own public program.',
      'The Conservatory Garden shows a different side of Central Park. Much of Central Park was designed to feel natural, rural, and picturesque. The Conservatory Garden is the opposite. It is ordered, symmetrical, and highly designed.',
      'The Center Garden has an Italian Renaissance influence, with a central lawn, fountain, yew hedges, crabapple trees, and a wisteria pergola. The North Garden uses a French parterre design with the Untermyer Fountain. The South Garden is arranged like an English perennial garden and includes the Burnett Fountain, connected to The Secret Garden author Frances Hodgson Burnett.',
      'So, the garden is important because it creates a controlled, formal experience inside a park that is mostly known for appearing natural. It shows that Central Park is not one single design idea.',
    ],
  },
  // ── 3. McGowan's Pass ─────────────────────────────────────────────────────
  {
    name: "McGowan's Pass",
    emoji: '⚔️',
    coords: [-73.9550, 40.7933],
    description:
      "McGowan's Pass is a rocky passage in the north end of Central Park, near East Drive around 107th Street. Before Central Park was built, this area was part of the old Kingsbridge Road, a major route that connected lower Manhattan to northern Manhattan and beyond.",
    details: [
      "McGowan's Pass is a rocky passage in the north end of Central Park, near East Drive around 107th Street. Before Central Park was built, this area was part of the old Kingsbridge Road, a major route that connected lower Manhattan to northern Manhattan and beyond. The road passed between rocky hills, which made the area a natural narrow crossing point.",
      "The hidden history of McGowan's Pass is connected to war, travel, and defense. During the Revolutionary War and the War of 1812, this area was valuable because it helped control movement through Manhattan. In the War of 1812, American forces built defenses around the pass, including Fort Clinton, Nutter's Battery, Fort Fish, and the Blockhouse. These structures protected the northern approach to the city.",
      'Archaeology also shows that this history is still physically present. During a 2013 restoration project, archaeologists found the foundation of an old gatehouse and remains of the Kingsbridge Road beneath the park landscape. These findings show that Central Park still contains traces of older roads and military structures.',
      "The location was important because it gave people control over a main route into Manhattan. The rocky geography created a narrow passage, so soldiers could defend it more easily than an open road. Its high ground also gave views over the surrounding area, which made it useful for watching enemy movement.",
    ],
  },
  // ── 4. Fort Clinton ───────────────────────────────────────────────────────
  {
    name: 'Fort Clinton',
    emoji: '🏰',
    coords: [-73.9522, 40.7953],
    description:
      "Fort Clinton was a military fort in the north end of present-day Central Park, near McGowan's Pass. The area was important because it sat on high ground above an old road through Manhattan — the Kingsbridge Road — one of the main routes connecting lower Manhattan to the northern part of the island.",
    details: [
      "Fort Clinton was a military fort in the north end of present-day Central Park, near McGowan's Pass. The area was important because it sat on high ground above an old road through Manhattan. That road, known as the Kingsbridge Road, was one of the main routes connecting lower Manhattan to the northern part of the island.",
      "The hidden history of Fort Clinton is that this part of Central Park was once a defensive military landscape. During the Revolutionary War, British troops occupied the area because it gave them control over McGowan's Pass. Later, during the War of 1812, New Yorkers built Fort Clinton to defend the city from a possible British attack from the north.",
      "Fort Clinton was part of a larger defense system. The Central Park Conservancy explains that Fort Clinton was connected to Nutter's Battery, Fort Fish, and a gatehouse at McGowan's Pass. These defenses were linked by low earthen walls and helped control access to the road. One blockhouse from this larger system still survives in the North Woods today.",
      'This matters because Central Park hides military history under what now looks like natural parkland. Today, Fort Clinton appears as a scenic overlook with cannons and a monument, but its original purpose was defense. The site shows that the north end of Central Park was shaped by war, geography, and control over movement before it became a public park.',
      "Fort Clinton shows how geography made certain parts of Manhattan strategically important. The site was useful because it overlooked McGowan's Pass, a narrow route through the rocky landscape. This made it easier to watch and defend the road below.",
      'The fort also shows that Central Park contains older layers of history. Before the park was designed as a place for recreation, this land was used for travel, military planning, and defense. Archaeological work in the Fort Landscape has uncovered remains of the old fortification system and the surface of Kingsbridge Road, proving that these earlier histories still exist beneath the park.',
    ],
  },
  // ── 5. Nutter's Battery ───────────────────────────────────────────────────
  {
    name: "Nutter's Battery",
    emoji: '💣',
    coords: [-73.9529, 40.7965],
    description:
      "Nutter's Battery is a historic overlook in the north end of Central Park, near McGowan's Pass and the Harlem Meer. A \"battery\" means a place where cannons were placed for defense. The site was named after Valentine Nutter, a local landowner.",
    details: [
      "Nutter's Battery is a historic overlook in the north end of Central Park, near McGowan's Pass and the Harlem Meer. A \"battery\" means a place where cannons were placed for defense. The site was named after Valentine Nutter, a local landowner.",
      "The hidden history of Nutter's Battery is connected to the War of 1812. During that war, New York feared a possible British attack from the north. To prepare, the city built a defensive system around McGowan's Pass. Nutter's Battery was part of that system, along with Fort Clinton, Fort Fish, the Blockhouse, and a gatehouse at McGowan's Pass.",
      "The location mattered because it sat on high rocky ground near an important road. McGowan's Pass was part of the old Kingsbridge Road, which was a major route through Manhattan. Because the road narrowed between rock outcrops, this area was easier to defend. Nutter's Battery helped protect this route and watch movement through the northern part of the island.",
      "Nutter's Battery was connected to the other defenses by low earthen walls. These walls linked the forts to the gatehouse at McGowan's Pass, which controlled access to the road. The expected British attack never happened, so the forts did not see battle. After the war, they were left to decay or were dismantled.",
      "Nutter's Battery shows that the north end of Central Park was once a military landscape. Today, the site feels like a quiet overlook, but it was originally chosen because of its height, visibility, and defensive value.",
      'It also shows how Central Park was built over earlier layers of New York history. Before this land became a public park, it was used for roads, military planning, and local property. The current overlook marks the place where one part of that defense system once stood.',
      "So, Nutter's Battery is important because it helps reveal the military history hidden inside Central Park. It shows how geography shaped the city's defenses and how a place now used for scenery was once used to control movement and protect Manhattan.",
    ],
  },
  // ── 6. The Mount / Mount St. Vincent ─────────────────────────────────────
  {
    name: 'The Mount / Mount St. Vincent',
    emoji: '⛪',
    coords: [-73.9554, 40.7941],
    description:
      "The Mount is a landscape in the north end of Central Park, near McGowan's Pass. Its name comes from Mount St. Vincent, a religious community established there in 1847 by the Sisters of Charity of Saint Vincent de Paul. This quiet park area once held several different institutions.",
    details: [
      "The Mount is a landscape in the north end of Central Park, near McGowan's Pass. Its name comes from Mount St. Vincent, a religious community established there in 1847 by the Sisters of Charity of Saint Vincent de Paul. The sisters bought an older tavern building on the site and added a brick chapel and refectory in 1848. The buildings were used as a convent and boarding school.",
      "The hidden history of the Mount is that this quiet park area once held several different institutions. Before Central Park, it was connected to roads and tavern culture around McGowan's Pass. In the mid-1700s, John Dyckman built a tavern in this area for travelers on the old Boston Post Road, and Andrew McGown later purchased the land and tavern. This is where the name McGowan's Pass comes from.",
      'The site changed again in the 1840s when the Sisters of Charity turned it into Mount St. Vincent. This means the land was used for religious life, education, and community before it became part of Central Park. When the city began developing Central Park, the sisters had to relocate their motherhouse and academy from McGowan\'s Pass to Riverdale in the Bronx.',
      'The site also had a Civil War history. During the war, the former Mount St. Vincent buildings were used as a military hospital known as the U.S. General Hospital, Central Park.',
      'The Mount shows how the north end of Central Park was built over earlier uses of the land. Today, it looks like a simple wooded and rocky landscape, but it once held roads, a tavern, a convent, a school, and a Civil War hospital.',
      "The location was important because it sat near McGowan's Pass, one of the major routes through northern Manhattan. People used this area for travel, gathering, education, religion, and later military medical care. Its position near a major road made it useful long before it became part of the park.",
      'So, the Mount is important because it reveals how Central Park absorbed older histories into its landscape. It shows that the park was created on land that already had social, religious, educational, and military meaning.',
    ],
  },
  // ── 7. Harlem Meer ────────────────────────────────────────────────────────
  {
    name: 'Harlem Meer',
    emoji: '🎣',
    coords: [-73.9522, 40.7962],
    description:
      'The Harlem Meer is an eleven-acre lake in the northeast corner of Central Park, near 110th Street and Fifth Avenue. The word "Meer" is Dutch for "lake," which connects the site to the Dutch colonial history of Harlem.',
    details: [
      'The Harlem Meer is an eleven-acre lake in the northeast corner of Central Park, near 110th Street and Fifth Avenue. The word "Meer" is Dutch for "lake," which connects the site to the Dutch colonial history of Harlem. The area sits close to the northern edge of the park, next to the neighborhoods of East Harlem and Harlem.',
      'The Harlem Meer was designed as part of a connected water system in Central Park. Water flows from the Pool into the Loch, and then into the Harlem Meer. This means the Meer was part of a larger landscape plan, not an isolated lake.',
      'The hidden history of the Harlem Meer is that this part of the park has always been tied to the communities around it. The north end of Central Park was often treated differently from the more famous southern areas of the park. By the 1970s, the Harlem Meer and the surrounding north-end landscapes had badly deteriorated. The Central Park Conservancy later restored the Meer in 1993, helping make it a destination again for nearby communities.',
      'The Cultural Landscape Foundation explains that the shoreline changed over time. By the 1940s, the city had added a boathouse and walking paths, and the shoreline had become more regularized and fenced. Later restoration work focused on bringing back a more natural shoreline and improving access to the water.',
      'The Harlem Meer shows how the north end of Central Park connects park design with neighborhood access. It was designed as a scenic water landscape, but it also became an important public space for Harlem and East Harlem residents.',
      'The Meer also shows how Central Park has changed over time. Its landscape has gone through design, decline, restoration, and new redevelopment. The recent Davis Center project replaced the old Lasker Rink and Pool and aimed to reconnect the Harlem Meer area with the surrounding park landscape and nearby communities.',
      'So, the Harlem Meer is important because it represents the relationship between Central Park and the communities north of the park. It is a landscape about water, access, restoration, and public use. It also shows that the north end of Central Park has its own history, separate from the more famous areas downtown in the park.',
    ],
  },
  // ── 8. Davis Center / former Lasker Rink and Pool ────────────────────────
  {
    name: 'Davis Center / former Lasker Rink and Pool',
    emoji: '⛸️',
    coords: [-73.9546, 40.7965],
    description:
      'The Davis Center is a new recreation facility at the Harlem Meer in the northeast corner of Central Park. It replaced the former Lasker Rink and Pool, which had been built in the 1960s.',
    details: [
      'The Davis Center is a new recreation facility at the Harlem Meer in the northeast corner of Central Park. It replaced the former Lasker Rink and Pool, which had been built in the 1960s. The Central Park Conservancy says the project rebuilt the old facility to better fit into the landscape, provide more outdoor activities, and increase access for communities around the north end of the park.',
      'The hidden history is that the old Lasker Rink and Pool changed the natural flow of water in this part of the park. The Harlem Meer was originally connected to a larger water system: the Pool, the Loch, and the Meer. The Conservancy explains that the new Davis Center helps restore this connection by bringing a buried stream back to the surface, a process called "daylighting." This improves water quality, creates aquatic habitats, and supports more biodiversity.',
      'This matters because the former Lasker Rink and Pool was a major recreational space, but it also interrupted the older landscape. It was useful for swimming and skating, but its design separated the facility from the surrounding park and affected the ecology of the Harlem Meer. The Davis Center tries to correct that by combining recreation with landscape restoration.',
      'The site also matters because it serves communities near the north end of Central Park, especially Harlem and East Harlem. The Conservancy says the Davis Center was designed to increase access for these communities and create a year-round destination. Since opening in April 2025, it has included the Gottesman Pool and Rink, a green, and an indoor gathering space.',
      'The Davis Center shows how Central Park is still changing. Older park structures are not permanent; they can be rebuilt when they no longer serve the landscape or the public well.',
      'It also shows a newer idea of park design. Instead of treating recreation and nature as separate, the Davis Center tries to combine them. The same site can support swimming, skating, field use, community gathering, and ecological restoration.',
    ],
  },
  // ── 9. Huddlestone Arch ───────────────────────────────────────────────────
  {
    name: 'Huddlestone Arch',
    emoji: '🪨',
    coords: [-73.9557, 40.7958],
    description:
      'Huddlestone Arch is a stone arch in the North Woods of Central Park, near the Ravine, the Loch, and the Harlem Meer. It carries the East Drive over a pedestrian path and stream below, and was built in the 1860s from large natural boulders without mortar.',
    details: [
      'Huddlestone Arch is a stone arch in the North Woods of Central Park, near the Ravine, the Loch, and the Harlem Meer. It carries the East Drive over a pedestrian path and stream below. It was built in the 1860s as part of Central Park\'s original system of arches and bridges. The Central Park Conservancy says that between 1859 and 1866, 27 arches and bridges were built in the park, all designed by Calvert Vaux, sometimes with help from Jacob Wrey Mould.',
      'The arch is unusual because it was made from large natural boulders. The Cultural Landscape Foundation says Huddlestone was built from boulders found near the site and without mortar. This means the stones are held together by their own weight and pressure.',
      'The hidden history of Huddlestone Arch is that it was designed to look natural, even though it was carefully engineered. It fits into the North Woods landscape so that it feels like part of the rocky terrain. This matches the larger design goal of Central Park: to create a landscape that looked natural while still being highly planned.',
      'The location also matters because Huddlestone Arch marks one entrance to the Ravine. The Ravine was designed to feel like a wild woodland escape inside the city. The arch helps create that feeling. When visitors pass under it, they move from the park road system into a quieter, more enclosed landscape of rock, water, and trees.',
      'Huddlestone Arch was important because it solved a practical problem in a beautiful way. It allowed the East Drive and the walking path below it to cross without interrupting each other. This was part of Olmsted and Vaux\'s larger idea of separating different kinds of movement inside the park.',
      'It was also important because it turned engineering into scenery. The arch had to support traffic above it, but it was made to look like a natural rock formation. That makes it a good example of Central Park\'s hidden design logic: many features that look natural were actually carefully built.',
    ],
  },
  // ── 10. The Ravine ────────────────────────────────────────────────────────
  {
    name: 'The Ravine',
    emoji: '🌊',
    coords: [-73.9563, 40.7949],
    description:
      'The Ravine is a wooded stream valley in the North Woods of Central Park, between the Pool and the Harlem Meer. The stream that runs through it is called the Loch. Together, the Ravine and the Loch create one of the most secluded landscapes in Central Park.',
    details: [
      'The Ravine is a wooded stream valley in the North Woods of Central Park. It is located in the northern part of the park, between the Pool and the Harlem Meer. The stream that runs through it is called the Loch. Together, the Ravine and the Loch create one of the most secluded landscapes in Central Park.',
      'The Ravine was designed by Frederick Law Olmsted and Calvert Vaux as part of Central Park\'s original landscape plan. They wanted this area to feel like a wild woodland escape inside the city. The Central Park Conservancy explains that Olmsted and Vaux were inspired by landscapes like the Catskills and the Adirondacks, so they created a place where New Yorkers could experience nature without leaving the city.',
      'The hidden history of the Ravine is that it looks natural, but it was carefully designed and built. The designers used an existing valley carved by a stream called Montayne\'s Rivulet. Park builders then changed the land by damming and widening the stream, deepening the valley, adding plantings, and building features like bridges and cascades.',
      'This matters because the Ravine shows one of Central Park\'s main design ideas: constructed nature. Visitors are meant to feel like they are walking through a natural forest, but the experience was planned. The rocks, water, paths, plants, and bridges were arranged to create a feeling of escape from the city.',
      'The Ravine shows how Central Park turns engineering into landscape. The stream, waterfalls, bridges, and paths all work together to create a natural-looking scene. Huddlestone Arch and Glenspan Arch mark entrances into the Ravine, helping visitors move into a more enclosed and wooded part of the park.',
      'The Ravine also shows how the north end of Central Park has changed over time. For much of the twentieth century, the park\'s woodlands suffered from erosion, invasive plants, damaged watercourses, and deteriorating paths and rustic features. The Central Park Conservancy later restored the Ravine to repair these problems and protect the landscape.',
    ],
  },
]

const OVERVIEW_CENTER: [number, number] = [-73.9554, 40.7960]
const OVERVIEW_ZOOM = 14.5
const STOP_ZOOM = 16.5

export default function TourMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([]) // stores mapboxgl.Marker instances
  const [tourActive, setTourActive] = useState(false)
  const [currentStop, setCurrentStop] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return
    let mounted = true

    const initMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

      if (!mounted || !mapContainerRef.current) return

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: OVERVIEW_CENTER,
        zoom: OVERVIEW_ZOOM,
        attributionControl: false,
        logoPosition: 'bottom-left',
      })

      map.on('load', () => {
        if (!mounted) return

        TOUR_STOPS.forEach((stop, index) => {
          const el = document.createElement('div')
          el.style.cssText = `
            width:34px;height:34px;
            background:white;
            border:2.5px solid #1a1a1a;
            border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            font-size:15px;line-height:1;
            cursor:pointer;
            box-shadow:0 2px 8px rgba(0,0,0,0.4);
            transition:border 0.25s,box-shadow 0.25s;
            user-select:none;
            overflow:hidden;
          `
          el.textContent = stop.emoji

          const marker = new mapboxgl.Marker({ element: el })
            .setLngLat(stop.coords)
            .addTo(map)

          markersRef.current.push(marker)
        })

        setMapReady(true)
      })

      mapRef.current = map
    }

    initMap()

    return () => {
      mounted = false
      mapRef.current?.remove()
      mapRef.current = null
      markersRef.current = []
    }
  }, [])

  // Update marker visuals when stop or tour state changes
  useEffect(() => {
    markersRef.current.forEach((marker, index) => {
      const el = marker.getElement()
      const isActive = tourActive && index === currentStop
      el.style.border = isActive ? '2.5px solid #7c5c1e' : '2.5px solid #1a1a1a'
      el.style.boxShadow = isActive
        ? '0 0 0 5px rgba(124,92,30,0.35), 0 2px 8px rgba(0,0,0,0.4)'
        : '0 2px 8px rgba(0,0,0,0.4)'
      el.style.zIndex = isActive ? '10' : '1'
    })
  }, [currentStop, tourActive])

  const flyTo = (coords: [number, number], zoom: number) => {
    mapRef.current?.flyTo({ center: coords, zoom, duration: 1800, essential: true })
  }

  const startTour = () => {
    setTourActive(true)
    setCurrentStop(0)
    setShowDetails(false)
    flyTo(TOUR_STOPS[0].coords, STOP_ZOOM)
  }

  const goToStop = (index: number) => {
    setCurrentStop(index)
    setShowDetails(false)
    flyTo(TOUR_STOPS[index].coords, STOP_ZOOM)
  }

  const endTour = () => {
    setTourActive(false)
    setShowDetails(false)
    flyTo(OVERVIEW_CENTER, OVERVIEW_ZOOM)
  }

  const stop = TOUR_STOPS[currentStop]
  const isFirst = currentStop === 0
  const isLast = currentStop === TOUR_STOPS.length - 1

  return (
    // Phone shell with border
    <div
      className="flex-shrink-0 rounded-[2.5rem] overflow-hidden relative"
      style={{
        width: '380px',
        height: '720px',
        border: '6px solid #1a1a1a',
        boxShadow: '0 0 0 2px #e5e5e5, 0 24px 60px rgba(0,0,0,0.22)',
      }}
    >
      {/* Map */}
      <div ref={mapContainerRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Loading state */}
      {!mapReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p style={{ fontFamily: 'var(--font-hedvig)', color: '#888' }}>Loading map…</p>
        </div>
      )}

      {/* ── INACTIVE: Start Tour ── */}
      {mapReady && !tourActive && (
        <>
          {/* gradient hint above the panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 40%)' }}
          />
          {/* solid panel — same approach as the tour bottom panel */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center py-6 gap-2"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(6px)' }}
          >
            <p
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-hedvig)', color: '#888' }}
            >
              {TOUR_STOPS.length} stops · Northern Central Park
            </p>
            <button
              onClick={startTour}
              className="text-2xl tracking-wide hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-young-serif)' }}
            >
              Start Tour
            </button>
          </div>
        </>
      )}

      {/* ── ACTIVE: Tour UI ── */}
      {mapReady && tourActive && !showDetails && (
        <>
          {/* Header */}
          <div
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5"
            style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)' }}
          >
            <span
              className="text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-hedvig)', color: '#888' }}
            >
              Stop {currentStop + 1} / {TOUR_STOPS.length}
            </span>
            <button
              onClick={endTour}
              className="text-sm tracking-wide transition-colors hover:text-black"
              style={{ fontFamily: 'var(--font-hedvig)', color: '#888' }}
            >
              End Tour ✕
            </button>
          </div>

          {/* Bottom panel */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(6px)' }}
          >
            {/* Progress bar */}
            <div className="h-0.5 bg-gray-200">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{ width: `${((currentStop + 1) / TOUR_STOPS.length) * 100}%` }}
              />
            </div>

            <div className="px-5 pt-4 pb-5">
              <h3
                className="text-xl leading-snug mb-2"
                style={{ fontFamily: 'var(--font-young-serif)' }}
              >
                {stop.name}
              </h3>
              <p
                className="text-sm text-gray-600 leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-hedvig)' }}
              >
                {stop.description}
              </p>

              {/* Learn More */}
              <button
                onClick={() => setShowDetails(true)}
                className="text-xs tracking-widest uppercase underline underline-offset-2 mb-4 transition-colors hover:text-gray-500"
                style={{ fontFamily: 'var(--font-hedvig)', color: '#555' }}
              >
                Learn More
              </button>

              {/* Nav buttons */}
              <div className="flex gap-2">
                {!isFirst && (
                  <button
                    onClick={() => goToStop(currentStop - 1)}
                    className="flex-1 py-2.5 border border-gray-300 text-sm rounded hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: 'var(--font-hedvig)' }}
                  >
                    ← Previous
                  </button>
                )}
                <button
                  onClick={isLast ? endTour : () => goToStop(currentStop + 1)}
                  className="flex-1 py-2.5 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: 'var(--font-hedvig)' }}
                >
                  {isLast ? 'Finish Tour ✓' : 'Next →'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── DETAILS PANEL ── */}
      {mapReady && tourActive && showDetails && (
        <div
          className="absolute inset-0 z-20 flex flex-col overflow-hidden"
          style={{ background: '#fafafa' }}
        >
          {/* Details header */}
          <div
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid #e5e5e5' }}
          >
            <button
              onClick={() => setShowDetails(false)}
              className="text-xs tracking-widest uppercase transition-colors hover:text-black"
              style={{ fontFamily: 'var(--font-hedvig)', color: '#888' }}
            >
              ← Back
            </button>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-hedvig)', color: '#aaa' }}
            >
              {currentStop + 1} / {TOUR_STOPS.length}
            </span>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <h3
              className="text-2xl leading-snug mb-5"
              style={{ fontFamily: 'var(--font-young-serif)' }}
            >
              {stop.name}
            </h3>

            {stop.details.map((para, i) => (
              <p
                key={i}
                className="text-sm text-gray-700 leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-hedvig)' }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Bottom nav in details */}
          <div className="flex-shrink-0 px-5 py-4" style={{ borderTop: '1px solid #e5e5e5' }}>
            <div className="flex gap-2">
              {!isFirst && (
                <button
                  onClick={() => goToStop(currentStop - 1)}
                  className="flex-1 py-2.5 border border-gray-300 text-sm rounded hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'var(--font-hedvig)' }}
                >
                  ← Previous
                </button>
              )}
              <button
                onClick={isLast ? endTour : () => goToStop(currentStop + 1)}
                className="flex-1 py-2.5 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                style={{ fontFamily: 'var(--font-hedvig)' }}
              >
                {isLast ? 'Finish Tour ✓' : 'Next →'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
