export default function PrototypePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-12" style={{ minHeight: 'calc(100vh - 97px)' }}>
      <div className="flex gap-16 items-center">
        {/* Phone mockup placeholder */}
        <div
          className="flex-shrink-0 bg-gray-300 rounded-3xl"
          style={{ width: '380px', height: '720px' }}
        />

        {/* Content */}
        <div className="flex flex-col gap-4" style={{ fontFamily: 'var(--font-hedvig)' }}>
          <div>
            <h1
              className="text-6xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-young-serif)' }}
            >
              WalkThePast
            </h1>
            <p className="mt-3 text-base">Project Description</p>
          </div>

          <div className="mt-10">
            <p className="text-base">How to use WalkThePast:</p>
            <ol className="mt-1 ml-5 list-decimal text-base space-y-2">
              <li></li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
