import TourMap from './components/TourMap'

export default function PrototypePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-12" style={{ minHeight: 'calc(100vh - 97px)' }}>
      <div className="flex gap-16 items-center">
        {/* Interactive tour map */}
        <TourMap />

        {/* Content */}
        <div className="flex flex-col gap-4 self-start pt-8" style={{ fontFamily: 'var(--font-hedvig)' }}>
          <div>
            <h1
              className="text-6xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-young-serif)' }}
            >
              WalkThePast
            </h1>
            <p className="mt-3 text-base max-w-sm leading-relaxed">
              WalkThePast is a self-guided web tour through the northern end of Central Park. Explore ten historic stops — each one revealing a hidden history buried beneath what now looks like peaceful public space.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-base font-semibold">How to use WalkThePast:</p>
            <ol className="mt-2 ml-5 list-decimal text-base space-y-2 max-w-sm leading-relaxed">
              <li>Press <span className="italic">Start Tour</span> on the map to begin.</li>
              <li>Read the description for each stop, then tap <span className="italic">Learn More</span> for the full history.</li>
              <li>Use <span className="italic">Next</span> and <span className="italic">Previous</span> to move through all ten stops.</li>
              <li>Visit <span className="italic">Primary Sources</span> and <span className="italic">Class Connections</span> for additional context.</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
