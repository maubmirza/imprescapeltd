export function StatsBar() {
  const stats = [
    { value: '100%', label: 'In-House Team' },
    { value: '6', label: 'Core Services' },
    { value: '4', label: 'Counties Covered' },
    { value: 'Fixed', label: 'Written Quotes' }
  ];

  return (
    <div className="border-y border-[#E5E2D9] bg-[#F2F1EC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E2D9]">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${idx > 1 ? 'pt-4 md:pt-0' : ''} px-2`}>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1C14] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-[#5A6344]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
