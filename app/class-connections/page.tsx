type Connection = {
  stop: number
  name: string
  text: string
}

const CONNECTIONS: Connection[] = [
  {
    stop: 1,
    name: 'Vanderbilt Gate',
    text: 'This reminded me of the reading from The Park and the People because the reading talked about how Central Park was supposed to be a public space, but not everyone had equal access to it. Many working-class people lived far away from the park or did not have enough free time to enjoy it. The Vanderbilt Gate connects to this because it originally belonged to one of the richest families in New York. It was a symbol of wealth and separation. Now that it stands at the entrance to a public garden, it shows how something once private and exclusive can take on a new public meaning. It also connects to our week 2 class discussion about how the wealth divide within New York City influenced the creation of the park, and how many New Yorkers were alienated from it due to distance and a lack of leisure time.',
  },
  {
    stop: 2,
    name: 'Conservatory Garden',
    text: 'This reminded me of the readings about Robert Moses because the Conservatory Garden shows how he changed public spaces in New York. The garden feels very ordered, planned, and controlled, which matches Moses\'s style of making parks more organized and useful for the public. He often focused on order, beautification, and large-scale public improvements, but also made decisions from the top down. It also reminded me of The Park and the People because Central Park has always changed depending on what people thought the park should be. The Conservatory Garden shows that the park is not just natural-looking landscapes, but also formal spaces shaped by city leaders.',
  },
  {
    stop: 3,
    name: "McGowan's Pass",
    text: 'This reminded me of Mannahatta because the reading talks about how Manhattan had many layers of history before the modern city was built. McGowan\'s Pass shows this clearly because before Central Park existed, this area was used for travel, roads, and military defense. The Wickquasgeck Trail and the Kingsbridge Road show that people were moving through this land long before it became a designed park landscape. Today it looks like a quiet part of the park, but it was once an important passage through Manhattan. It also reminds me of The Park and the People because the park often hides the histories that came before it — the 2013 discovery of the buried Kingsbridge Road makes this literal.',
  },
  {
    stop: 4,
    name: 'Fort Clinton',
    text: 'This reminded me of Mannahatta because Fort Clinton shows how the natural geography of Manhattan shaped what people did there. The fort was built on high ground because it helped people watch and defend the area — geography shaped power. It also reminded me of The Park and the People because Central Park was built over older places with different histories. Today Fort Clinton feels like part of a peaceful park, but it was once connected to war and defense. The site is a good example of how the park can hide the histories that came before it.',
  },
  {
    stop: 5,
    name: "Nutter's Battery",
    text: "This reminded me of The Park and the People because the reading shows that Central Park was carefully designed, but it also covered up older histories. Nutter's Battery used to be part of a military defense system, but today it looks more like a quiet overlook. It also reminded me of Mannahatta because the site's high rocky land made it useful for defense — showing how the natural landscape shaped human history before the park became a place for recreation. Both sources help explain how the land's geography determined its uses long before it became Central Park.",
  },
  {
    stop: 6,
    name: 'The Mount / Mount St. Vincent',
    text: 'This reminded me of The Park and the People because the reading explains that Central Park was not built on empty land. The Mount had many different uses before it became part of the park, including a tavern, convent, school, and Civil War hospital. This shows that entire communities were displaced to create the park. It also reminded me of the reading about stereographs because the old image of Mount St. Vincent helps show a version of the park that no longer exists. The photograph makes it easier to see that this area once had buildings and communities, not just trees and paths.',
  },
  {
    stop: 7,
    name: 'Harlem Meer',
    text: 'This reminded me of Mannahatta because the Harlem Meer connects to the older natural landscape of Manhattan. Before Central Park changed the area, the land had streams, wetlands, and uneven ground — and the park\'s designers transformed rather than invented this water landscape. The Meer also reminded me of The Park and the People because it shows how different parts of the park served different communities. Since the Harlem Meer is near Harlem and East Harlem, its history is also about access, restoration, and how nearby neighborhoods use the park. The north end of the park has always had a different relationship with its surrounding communities than the southern sections.',
  },
  {
    stop: 8,
    name: 'Davis Center / Former Lasker Rink and Pool',
    text: 'This reminded me of the readings about Robert Moses because the original Lasker Rink and Pool was built as a large recreation project for the public. It fits with Moses\'s idea that parks should be useful and serve many people at once. But the Davis Center also reminded me of Mannahatta because the new project tries to restore part of the older water system by bringing the stream back above ground. This shows how ideas about parks have changed — from just building recreation spaces to also caring about ecology and the natural landscape. The same site has moved from a Moses-era vision of utility to a newer vision that combines recreation with environmental restoration.',
  },
  {
    stop: 9,
    name: 'Huddlestone Arch',
    text: 'This reminded me of the readings about Central Park\'s design because Huddlestone Arch looks natural, but it was actually carefully built. The arch is made from rough stones, so it blends into the North Woods and feels like part of the landscape. This connects to the idea that Central Park is constructed nature — many features that look wild were actually deliberately engineered. It also reminded me of the readings about how people experience landscapes because walking under the arch makes you feel like you are entering a quieter and wilder part of the park, even though that feeling was designed.',
  },
  {
    stop: 10,
    name: 'The Ravine',
    text: "This reminded me of Emerson's Nature and Thoreau's The Maine Woods because the Ravine feels like a place where people can escape the city and experience nature. However, it also reminded me of The Park and the People because the Ravine is not truly wild. It was carefully designed to feel wild. The stream, rocks, paths, bridges, and plants were all arranged to create that feeling. This shows one of Central Park's main ideas: making a planned landscape feel like natural wilderness. The 1864 Annual Report's language about the 'bold and picturesque topography' of the north end reveals how the designers thought about the land — as raw material for a constructed natural experience.",
  },
]

export default function ClassConnectionsPage() {
  return (
    <main className="flex flex-1 justify-center" style={{ minHeight: 'calc(100vh - 97px)', fontFamily: 'var(--font-hedvig)' }}>
      <div className="w-full max-w-3xl px-8 py-16">
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-young-serif)' }}>
          Class Connections
        </h1>
        <p className="text-base text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Each stop on this tour connects to readings and discussions from FRS 182. These connections show how the histories hidden inside Central Park relate to larger themes about urban space, power, design, and public life.
        </p>

        <div className="flex flex-col gap-10">
          {CONNECTIONS.map((conn) => (
            <div key={conn.stop} className="flex flex-col gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-widest uppercase text-gray-400">
                  Stop {conn.stop}
                </span>
                <h2 className="text-2xl" style={{ fontFamily: 'var(--font-young-serif)' }}>
                  {conn.name}
                </h2>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                {conn.text}
              </p>
              <div className="border-b border-gray-100 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
