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
              WalkThePast is a self-guided audio walking tour through the northern end of Central Park. Follow a curated path of historic stops — each one unlocking stories, photographs, and primary sources from the park's past. Designed for curious walkers, students, and history lovers alike.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-base font-semibold">How to use WalkThePast:</p>
            <ol className="mt-2 ml-5 list-decimal text-base space-y-2 max-w-sm leading-relaxed">
              <li>Open the app and allow location access so the map can track your position.</li>
              <li>Start at the designated entry point near the North Woods entrance.</li>
              <li>Follow the numbered stops on the map — tap each pin to reveal its story.</li>
              <li>Read the historical context, view archival images, and listen to the audio guide.</li>
              <li>Continue to the next stop at your own pace until the full route is complete.</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
