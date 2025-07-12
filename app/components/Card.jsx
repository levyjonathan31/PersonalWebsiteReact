function Card({
  title,
  technologies,
  description,
  image,
  altText,
  link,
  buttonTitle,
}) {
  // Parse technologies string into array for tags
  const techArray = technologies ? technologies.split(',').map(tech => tech.trim()) : [];

  return (
    <div className="group relative w-80 min-h-96 bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl mt-20 lg:mx-10 mx-auto overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-blue-400/30 hover:border-blue-400/60 hover:shadow-blue-400/20">
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Image section */}
        <div className="flex-shrink-0 p-6 flex justify-center items-center">
          {image && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={image}
                alt={altText}
                width={100}
                height={100}
                className="relative rounded-xl object-cover border-2 border-white/20 transition-transform duration-300 group-hover:scale-110"
                aria-label={altText}
              />
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="flex-1 px-6 pb-6 flex flex-col justify-between text-center min-h-0">
          {/* Title */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h2>
            
            {/* Technology tags */}
            {techArray.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {techArray.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-blue-200 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          {/* Action button */}
          {link && buttonTitle && (
            <div className="flex justify-center mt-auto">
              <a
                href={link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                aria-label={`${buttonTitle} - ${title}`}
              >
                {buttonTitle}
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export { Card };
