<SlideUp id="experiences" delay={0.3} className="mt-[40px]">
  <section className={className}>
    <TitleSection title="Experience" />
    <div className="mt-[40px]">
      <div className="flex flex-col md:flex-row md:max-h-[232px]">
        {/* Liste des expériences (colonne gauche) */}
        <div className="md:w-2/6">
          {experiences.map((item) => (
            <div key={item.id} className="mb-2">
              <p
                className={`cursor-pointer px-4 py-2 font-bold ${cn(
                  NunitoUiDisplay.variable,
                  NunitoUiDisplay.className
                )} ${
                  activeId === item.id
                    ? "bg-[#686D6B] text-gray-300 rounded-xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-xl md:rounded-bl-xl"
                    : ""
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {item.experience}
              </p>

              {/* Contenu affiché en mode mobile uniquement */}
              {activeId === item.id && (
                <div className="flex flex-col space-y-3 p-4 bg-[#686D6B] rounded-xl md:hidden">
                  <p
                    className={`${cn(
                      NunitoUiDisplay.className,
                      NunitoUiDisplay.variable
                    )} font-bold text-lg text-gray-300`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`${cn(
                      NunitoUiDisplay.className,
                      NunitoUiDisplay.variable
                    )} text-xs font-semibold text-gray-300`}
                  >
                    {item.period}
                  </p>
                  <div className="flex flex-col space-y-1">
                    {item.items.map((subItem, index) => (
                      <p
                        key={index}
                        className={`${cn(
                          NunitoUiDisplay.className,
                          NunitoUiDisplay.variable
                        )} text-sm font-normal text-gray-300`}
                      >
                        {subItem}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contenu affiché en mode bureau (colonne droite) */}
        <div
          className={`hidden md:flex flex-col md:w-4/6 p-4 bg-[#686D6B] rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl`}
        >
          {experiences
            .filter((item) => item.id === activeId)
            .map((item) => (
              <div key={item.id} className="flex flex-col space-y-3">
                <p
                  className={`${cn(
                    NunitoUiDisplay.className,
                    NunitoUiDisplay.variable
                  )} font-bold text-lg text-gray-300`}
                >
                  {item.title}
                </p>
                <p
                  className={`${cn(
                    NunitoUiDisplay.className,
                    NunitoUiDisplay.variable
                  )} text-xs font-semibold text-gray-300`}
                >
                  {item.period}
                </p>
                <div className="flex flex-col space-y-1">
                  {item.items.map((subItem, index) => (
                    <p
                      key={index}
                      className={`${cn(
                        NunitoUiDisplay.className,
                        NunitoUiDisplay.variable
                      )} text-sm font-normal text-gray-300`}
                    >
                      {subItem}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
</SlideUp>;
