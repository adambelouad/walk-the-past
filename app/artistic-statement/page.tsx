const PARAGRAPHS = [
  'I am creating a guided tour of the north end of Central Park that focuses on hidden histories behind places like the Vanderbilt Gate, Conservatory Garden, McGowan\'s Pass, Fort Clinton, Nutter\'s Battery, Mount St. Vincent, the Harlem Meer, the Davis Center, Huddlestone Arch, and the Ravine. My main question is: How does the north end of Central Park hide older histories of wealth, military power, religion, recreation, and constructed nature underneath what now looks like peaceful public space?',
  'The artistic medium I am using is an interactive walking tour/app. This medium helps me answer my question because Central Park\'s history is tied to physical movement through space. Instead of only writing about the park, the tour lets visitors stand in the actual locations where these histories happened. As users move from one site to another, they can see how the landscape changes from formal gardens, to military overlooks, to wooded paths, to water landscapes. This helps show that the park is not just natural scenery. It is a layered place where older histories are hidden inside the design of the landscape.',
  'My project uses course materials and class discussions about Central Park\'s creation, class division, Robert Moses, public space, and the idea that the park was designed to look natural even though it was carefully planned. It especially connects to our discussion of The Park and the People, where we talked about how many working-class New Yorkers were separated from the park because they lived far away and had less leisure time. It also connects to our discussions of Robert Moses and how he reshaped public space through large-scale projects that often came from the top down. My primary sources include New York Times articles about the Vanderbilt Gate, the 1937 opening of the Conservatory Garden, and the 1962 plan for Lasker Rink and Pool, as well as historical maps, photographs, and the 1864 Seventh Annual Report of the Board of Commissioners of the Central Park.',
  'The argument I am making is that the north end of Central Park is often seen as quiet, natural, and separate from the city, but it actually reveals many of the city\'s deeper histories. The Vanderbilt Gate shows class separation and wealth. McGowan\'s Pass, Fort Clinton, and Nutter\'s Battery show military control and the importance of geography. Mount St. Vincent shows that the land was once used for religion, education, travel, and even a Civil War hospital. The Harlem Meer and Davis Center show changing ideas about recreation, neighborhood access, and ecological restoration. Huddlestone Arch and the Ravine show that even the park\'s "wild" nature was carefully designed. Overall, my project argues that Central Park\'s north end is not just a landscape to walk through, but a place where New York\'s hidden histories are still visible if we know how to look.',
]

export default function ArtisticStatementPage() {
  return (
    <main className="flex flex-1 justify-center" style={{ minHeight: 'calc(100vh - 97px)', fontFamily: 'var(--font-hedvig)' }}>
      <div className="w-full max-w-3xl px-8 py-16">
        <h1 className="text-4xl font-bold mb-12" style={{ fontFamily: 'var(--font-young-serif)' }}>
          Artistic Statement
        </h1>
        <div className="flex flex-col gap-6">
          {PARAGRAPHS.map((para, i) => (
            <p key={i} className="text-base text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
