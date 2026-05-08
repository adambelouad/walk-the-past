type Source = {
  stop: number
  name: string
  sourceType: 'image' | 'pdf'
  src: string
  title: string
  description: string
}

const SOURCES: Source[] = [
  {
    stop: 1,
    name: 'Vanderbilt Gate',
    sourceType: 'pdf',
    src: '/primary-sources/vanderbilt-gate-ps.pdf',
    title: '"New Doors and Gateways: Bronze and Iron Entrances for Homes of New York Millionaires"',
    description:
      'New York Times, 1902. This article describes how millionaire homes used bronze and iron gates as "artistic entrances" that were expensive, highly decorated, and meant to impress people passing by. It notes that Cornelius Vanderbilt\'s house had "an elaborate fence and much ornamental metal work," showing that these gates were not just practical barriers but symbols of wealth and power.',
  },
  {
    stop: 2,
    name: 'Conservatory Garden',
    sourceType: 'pdf',
    src: '/primary-sources/conservatory-garden-ps.pdf',
    title: '"Garden Replacing Greenhouses In Central Park Opened by Moses"',
    description:
      'New York Times, 1937. This article describes the Conservatory Garden as a new public garden built where the old Central Park greenhouses once stood. It says the garden replaced "old-fashioned glass houses" and marked the beginning of a "new tradition" in Central Park — becoming a new "spot of scenic beauty," reflecting Moses\'s belief that parks should be organized, useful, and visually impressive.',
  },
  {
    stop: 3,
    name: "McGowan's Pass",
    sourceType: 'image',
    src: '/primary-sources/mc-gowans-pass-ps.jpg',
    title: 'Topographical Map of the North Part of New York Island (c. 1777)',
    description:
      'This map shows the northern part of New York Island during the Revolutionary War, before Central Park existed. It specifically labels Fort Washington, the rebel lines, roads, hills, and waterways — helping explain why this part of Manhattan was important for military control. The map shows that the land was once understood in terms of defense, roads, elevation, and battle strategy. Today the north end of Central Park feels like a peaceful landscape, but this source reveals that the same area was once part of a contested military zone.',
  },
  {
    stop: 4,
    name: 'Fort Clinton',
    sourceType: 'image',
    src: '/primary-sources/fort-clinton.png',
    title: 'Plan of the Works at McGowan\'s Pass (c. 1814)',
    description:
      'This map shows Fort Clinton as part of the military defenses at McGowan\'s Pass during the War of 1812. It helps explain why the location mattered: Fort Clinton was placed on high ground near an important road, so it helped control movement into northern Manhattan. This source connects to the hidden history of Central Park because it shows that the peaceful park landscape today was once a planned military defense zone.',
  },
  {
    stop: 5,
    name: "Nutter's Battery",
    sourceType: 'image',
    src: '/primary-sources/fort-clinton.png',
    title: 'Plan of the Works at McGowan\'s Pass (c. 1814)',
    description:
      "This map shows the full defensive system at McGowan's Pass during the War of 1812, including Nutter's Battery alongside Fort Clinton, Fort Fish, and the gatehouse. It reveals the network of earthworks that linked the forts along the ridge, with Nutter's Battery positioned to protect the Kingsbridge Road approach. The same map used for Fort Clinton illustrates how these defenses worked together as a coordinated system.",
  },
  {
    stop: 6,
    name: 'The Mount / Mount St. Vincent',
    sourceType: 'image',
    src: '/primary-sources/the-mount.jpg',
    title: 'Stereograph of Mount St. Vincent, Central Park (c. 1860s–70s)',
    description:
      'This stereograph of Mount St. Vincent in Central Park shows what the site looked like before it became only a quiet park landscape. The image shows a large building set on raised ground, surrounded by trees and a road — demonstrating that the Mount was once a built environment, not just open green space. It makes it easier to see that this area once had buildings and communities, not just trees and paths.',
  },
  {
    stop: 7,
    name: 'Harlem Meer',
    sourceType: 'image',
    src: '/primary-sources/harlem-meer.jpg',
    title: 'Sanitary and Topographical Map of the City and Island of New York (Egbert L. Viele, 1865)',
    description:
      'This map shows what the Harlem Meer area looked like before Central Park fully reshaped it. The map shows the original streams, marshland, and uneven topography in the north end of Manhattan — explaining that the Harlem Meer was not simply invented as a decorative lake. It was created from an older wetland landscape, and the park\'s designers used and transformed the natural water features already present.',
  },
  {
    stop: 8,
    name: 'Davis Center / former Lasker Rink and Pool',
    sourceType: 'pdf',
    src: '',
    title: '"Central Park to Get Swimming Pool and Ice Rink"',
    description:
      'New York Times, 1962. This article shows the original public plan for what became Lasker Rink and Pool. The Board of Estimate approved a $1,800,000 combined swimming pool and ice rink at the southwest end of the Harlem Meer, near 110th Street. The rink and pool were designed to serve about 3,000 skaters or swimmers at one time and to be used "365 days a year," as the swimming pool could be turned into an ice-skating rink during colder months. This shows that city officials wanted the north end of Central Park to become a year-round recreational destination.',
  },
  {
    stop: 9,
    name: 'Huddlestone Arch',
    sourceType: 'image',
    src: '/primary-sources/huddlestone-arch.jpg',
    title: 'Photograph of Huddlestone Arch (c. 1895)',
    description:
      'This 1895 photograph shows how the arch originally fit into the North Woods landscape. The image shows the large rough stones, the dark passage below, and the road structure above — explaining that Huddlestone Arch was both a piece of infrastructure and part of the park\'s natural-looking scenery. It shows how Central Park\'s designers made a human-built structure look like it belonged to the rocky landscape.',
  },
  {
    stop: 10,
    name: 'The Ravine',
    sourceType: 'pdf',
    src: '/primary-sources/the-ravine.pdf',
    title: 'Seventh Annual Report of the Board of Commissioners of the Central Park (1864)',
    description:
      'This report shows how the park\'s designers and commissioners described the northern part of Central Park while it was still being created. The report explains that the land between 106th and 110th Streets was added to the park because of its "bold and picturesque topography." This connects directly to the Ravine because the Ravine depends on that rugged northern landscape — showing how the designers saw and worked with the natural terrain to create what now appears to be wilderness.',
  },
]

export default function PrimarySourcesPage() {
  return (
    <main className="flex flex-1 justify-center" style={{ minHeight: 'calc(100vh - 97px)', fontFamily: 'var(--font-hedvig)' }}>
      <div className="w-full max-w-4xl px-8 py-16">
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-young-serif)' }}>
          Primary Sources
        </h1>
        <p className="text-base text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Each stop on this tour is supported by a primary source — an original document, map, photograph, or newspaper article that helps reveal the hidden history of that place.
        </p>

        <div className="flex flex-col gap-16">
          {SOURCES.map((source) => (
            <div key={source.stop} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-widest uppercase text-gray-400" style={{ fontFamily: 'var(--font-hedvig)' }}>
                  Stop {source.stop}
                </span>
                <h2 className="text-2xl" style={{ fontFamily: 'var(--font-young-serif)' }}>
                  {source.name}
                </h2>
              </div>

              {source.sourceType === 'image' && source.src && (
                <div className="border border-gray-200 rounded overflow-hidden bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={source.src}
                    alt={source.title}
                    className="w-full object-contain max-h-[480px]"
                    style={{ background: '#f5f5f0' }}
                  />
                </div>
              )}

              {source.sourceType === 'pdf' && source.src && (
                <div className="border border-gray-200 rounded overflow-hidden" style={{ height: '480px' }}>
                  <iframe
                    src={source.src}
                    className="w-full h-full"
                    title={source.title}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-800 italic">
                  {source.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {source.description}
                </p>
              </div>

              <div className="border-b border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
