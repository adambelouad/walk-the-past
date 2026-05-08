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
      'As you approach the 105th Street entrance to the Central Park Conservatory Garden, you are met with a large wrought iron gate. While it may appear designed for this spot, it originally belonged to the mansion of Cornelius Vanderbilt at Fifth Avenue and 58th Street — and carries a hidden history of wealth, power, and transformation.',
    details: [
      'The gate was designed by George B. Post and crafted in France in 1894 by the firm Peregotte & Dauvillier. It stood outside the Vanderbilt mansion until Alice Vanderbilt sold the property in 1926, causing the mansion to be demolished in 1927. The gates were saved by Gertrude Vanderbilt Whitney, founder of the Whitney Museum of American Art, who donated them to the city. They were installed at the Conservatory Garden in 1939.',
      'The gate is an important symbol of social separation within the city. When it belonged to the Vanderbilt family, it served as a physical boundary between the public street and one of the most private, wealthy homes in New York — making class division extremely visible. Today, serving as the entrance to the Conservatory, it now welcomes people into a public space where all are welcome regardless of wealth or power. Its hidden history reminds visitors that Central Park still contains many pieces of New York\'s unequal past.',
    ],
  },
  // ── 2. Conservatory Garden ────────────────────────────────────────────────
  {
    name: 'Conservatory Garden',
    emoji: '🌸',
    coords: [-73.9523, 40.7937],
    description:
      'The Conservatory Garden is a six-acre formal garden in the northeast corner of Central Park — the only formal garden in the park. Divided into Italian, French, and English sections, it grew out of a working greenhouse site and was reshaped during the Robert Moses era.',
    details: [
      'The garden\'s name comes from an older glass conservatory, or greenhouse, that stood on the site. A glass conservatory was built there in 1899 for seasonal plant displays. Even before that, the area held a greenhouse designed by Calvert Vaux for growing plants used in the park\'s landscapes. The old greenhouse fell into disrepair and was demolished in 1934.',
      'The current garden was completed in 1937 under Parks Commissioner Robert Moses and landscape architect Gilmore D. Clarke. The Center Garden has an Italian Renaissance influence, with a central lawn, fountain, yew hedges, crabapple trees, and a wisteria pergola. The North Garden uses a French parterre design with the Untermyer Fountain. The South Garden is arranged like an English perennial garden and includes the Burnett Fountain, connected to The Secret Garden author Frances Hodgson Burnett. The garden shows that Central Park is not one single design idea — it is ordered, symmetrical, and highly designed in contrast to the park\'s mostly natural-looking landscapes.',
    ],
  },
  // ── 3. McGowan's Pass ─────────────────────────────────────────────────────
  {
    name: "McGowan's Pass",
    emoji: '⚔️',
    coords: [-73.9550, 40.7933],
    description:
      "McGowan's Pass is a rocky passage in the north end of Central Park, near East Drive around 107th Street. Before Central Park was built, this area was part of the old Kingsbridge Road — a major route connecting lower Manhattan to northern Manhattan. Its hidden history is connected to war, travel, and defense.",
    details: [
      'During the Revolutionary War and the War of 1812, this area was valuable because it helped control movement through Manhattan. In the War of 1812, American forces built defenses around the pass, including Fort Clinton, Nutter\'s Battery, Fort Fish, and the Blockhouse. These structures protected the northern approach to the city. The rocky geography created a natural narrow crossing point — soldiers could defend it more easily than an open road, and its high ground gave views over the surrounding area.',
      'Archaeology shows this history is still physically present. During a 2013 restoration project, archaeologists found the foundation of an old gatehouse and remains of the Kingsbridge Road beneath the park landscape. These findings prove that Central Park still contains traces of older roads and military structures. Today, McGowan\'s Pass looks like a natural and quiet part of the park, but the 2013 discovery of the buried Kingsbridge Road makes clear that the park was literally built over older layers of the city.',
    ],
  },
  // ── 4. Fort Clinton ───────────────────────────────────────────────────────
  {
    name: 'Fort Clinton',
    emoji: '🏰',
    coords: [-73.9522, 40.7953],
    description:
      'Fort Clinton was a military fort in the north end of present-day Central Park, near McGowan\'s Pass. Sitting on high ground above the Kingsbridge Road, it was built during the War of 1812 to defend New York from a possible British attack from the north — and its military history is hidden beneath what now looks like natural parkland.',
    details: [
      'During the Revolutionary War, British troops occupied the area because it gave them control over McGowan\'s Pass. Later, during the War of 1812, New Yorkers built Fort Clinton as part of a larger defense system. The Central Park Conservancy explains that Fort Clinton was connected to Nutter\'s Battery, Fort Fish, and a gatehouse at McGowan\'s Pass, linked by low earthen walls that helped control access to the road. One blockhouse from this larger system still survives in the North Woods today.',
      'Today, Fort Clinton appears as a scenic overlook with cannons and a monument, but its original purpose was defense. Archaeological work in the Fort Landscape has uncovered remains of the old fortification system and the surface of Kingsbridge Road, proving that these earlier histories still exist beneath the park. The site shows that the north end of Central Park was shaped by war, geography, and control over movement before it became a public park.',
    ],
  },
  // ── 5. Nutter's Battery ───────────────────────────────────────────────────
  {
    name: "Nutter's Battery",
    emoji: '💣',
    coords: [-73.9529, 40.7965],
    description:
      "Nutter's Battery is a historic overlook in the north end of Central Park, near McGowan's Pass and the Harlem Meer. A 'battery' means a place where cannons were placed for defense. Named after Valentine Nutter, a local landowner, it was part of the War of 1812 defensive network that once stretched across this ridge.",
    details: [
      "During the War of 1812, New York feared a possible British attack from the north. Nutter's Battery was part of the defensive system built around McGowan's Pass, along with Fort Clinton, Fort Fish, the Blockhouse, and a gatehouse. The location mattered because it sat on high rocky ground near the old Kingsbridge Road. Because the road narrowed between rock outcrops, this area was easier to defend. Nutter's Battery was connected to the other defenses by low earthen walls that linked the forts to the gatehouse at McGowan's Pass.",
      "The expected British attack never happened, so the forts did not see battle. After the war, they were left to decay or were dismantled. Today, the site feels like a quiet overlook, but it was originally chosen because of its height, visibility, and defensive value. It shows how Central Park was built over earlier layers of New York history — before this land became a public park, it was used for roads, military planning, and local property.",
    ],
  },
  // ── 6. The Mount / Mount St. Vincent ─────────────────────────────────────
  {
    name: 'The Mount / Mount St. Vincent',
    emoji: '⛪',
    coords: [-73.9554, 40.7941],
    description:
      'The Mount is a landscape in the north end of Central Park, near McGowan\'s Pass. Its name comes from Mount St. Vincent, a religious community established there in 1847 by the Sisters of Charity of Saint Vincent de Paul. This quiet park area once held several different institutions — a tavern, convent, school, and Civil War hospital.',
    details: [
      'Before Central Park, this area was connected to roads and tavern culture around McGowan\'s Pass. In the mid-1700s, John Dyckman built a tavern in this area for travelers on the old Boston Post Road, and Andrew McGown later purchased the land and tavern — which is where the name McGowan\'s Pass comes from. In the 1840s, the Sisters of Charity turned it into Mount St. Vincent, adding a brick chapel and refectory in 1848 and using the buildings as a convent and boarding school.',
      'When the city began developing Central Park, the sisters had to relocate their motherhouse and academy from McGowan\'s Pass to Riverdale in the Bronx. During the Civil War, the former Mount St. Vincent buildings were used as a military hospital known as the U.S. General Hospital, Central Park. Today it looks like a simple wooded and rocky landscape, but it once held roads, a tavern, a convent, a school, and a Civil War hospital — showing how Central Park absorbed older histories into its landscape.',
    ],
  },
  // ── 7. Harlem Meer ────────────────────────────────────────────────────────
  {
    name: 'Harlem Meer',
    emoji: '🎣',
    coords: [-73.9522, 40.7962],
    description:
      'The Harlem Meer is an eleven-acre lake in the northeast corner of Central Park, near 110th Street and Fifth Avenue. The word "Meer" is Dutch for "lake," connecting the site to the Dutch colonial history of Harlem. Its hidden history shows how this part of the park has always been tied to the communities around it.',
    details: [
      'The Harlem Meer was designed as part of a connected water system in Central Park. Water flows from the Pool into the Loch, and then into the Harlem Meer — meaning the Meer was part of a larger landscape plan, not an isolated lake. The north end of Central Park was often treated differently from the more famous southern areas. By the 1970s, the Harlem Meer and the surrounding north-end landscapes had badly deteriorated. The Central Park Conservancy later restored the Meer in 1993, helping make it a destination again for nearby communities.',
      'The shoreline changed over time. By the 1940s, the city had added a boathouse and walking paths, and the shoreline had become more regularized and fenced. Later restoration work focused on bringing back a more natural shoreline and improving access to the water. The recent Davis Center project replaced the old Lasker Rink and Pool and aimed to reconnect the Harlem Meer area with the surrounding park landscape and nearby communities in East Harlem and Harlem.',
    ],
  },
  // ── 8. Davis Center / former Lasker Rink and Pool ────────────────────────
  {
    name: 'Davis Center / former Lasker Rink and Pool',
    emoji: '⛸️',
    coords: [-73.9546, 40.7965],
    description:
      'The Davis Center is a new recreation facility at the Harlem Meer in the northeast corner of Central Park. It replaced the former Lasker Rink and Pool, built in the 1960s. The hidden history is that the old Lasker facility changed the natural flow of water in this part of the park — and the Davis Center is now trying to restore it.',
    details: [
      'The Harlem Meer was originally connected to a larger water system: the Pool, the Loch, and the Meer. The new Davis Center helps restore this connection by bringing a buried stream back to the surface — a process called "daylighting." This improves water quality, creates aquatic habitats, and supports more biodiversity. The former Lasker Rink and Pool was useful for swimming and skating, but its design separated the facility from the surrounding park and affected the ecology of the Harlem Meer.',
      'The site also matters because it serves communities near the north end of Central Park, especially Harlem and East Harlem. Since opening in April 2025, it has included the Gottesman Pool and Rink, a green, and an indoor gathering space. The Davis Center shows how Central Park is still changing — instead of treating recreation and nature as separate, it tries to combine them. The same site can support swimming, skating, field use, community gathering, and ecological restoration.',
    ],
  },
  // ── 9. Huddlestone Arch ───────────────────────────────────────────────────
  {
    name: 'Huddlestone Arch',
    emoji: '🪨',
    coords: [-73.9557, 40.7958],
    description:
      'Huddlestone Arch is a stone arch in the North Woods of Central Park, near the Ravine, the Loch, and the Harlem Meer. Built in the 1860s as part of Central Park\'s original system of bridges and arches, it was assembled from large natural boulders found near the site — and without mortar.',
    details: [
      'Between 1859 and 1866, 27 arches and bridges were built in the park, all designed by Calvert Vaux, sometimes with help from Jacob Wrey Mould. The Cultural Landscape Foundation notes that Huddlestone was built from boulders found near the site and without mortar — meaning the stones are held together entirely by their own weight and pressure. The hidden history is that it was designed to look natural, even though it was carefully engineered.',
      'Huddlestone Arch marks one entrance to the Ravine, which was designed to feel like a wild woodland escape inside the city. The arch helped solve a practical problem beautifully: it allowed the East Drive and the walking path below to cross without interrupting each other — part of Olmsted and Vaux\'s larger idea of separating different kinds of movement inside the park. It is a good example of Central Park\'s hidden design logic: many features that look natural were actually carefully built.',
    ],
  },
  // ── 10. The Ravine ────────────────────────────────────────────────────────
  {
    name: 'The Ravine',
    emoji: '🌊',
    coords: [-73.9563, 40.7949],
    description:
      'The Ravine is a wooded stream valley in the North Woods of Central Park, between the Pool and the Harlem Meer. Designed by Olmsted and Vaux to feel like a wild woodland escape inspired by the Catskills and the Adirondacks, it looks entirely natural — but its hidden history is one of careful construction.',
    details: [
      'The designers used an existing valley carved by a stream called Montayne\'s Rivulet, then changed the land by damming and widening the stream, deepening the valley, adding plantings, and building features like bridges and cascades. Visitors are meant to feel like they are walking through a natural forest, but the experience was planned. The rocks, water, paths, plants, and bridges were arranged to create a feeling of escape from the city — what the designers called "constructed nature."',
      'The Ravine also shows how the north end of Central Park has changed over time. For much of the twentieth century, the park\'s woodlands suffered from erosion, invasive plants, damaged watercourses, and deteriorating paths and rustic features. The Central Park Conservancy later restored the Ravine to repair these problems and protect the landscape. Huddlestone Arch and Glenspan Arch mark entrances into the Ravine, helping visitors move into a more enclosed and wooded part of the park.',
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
