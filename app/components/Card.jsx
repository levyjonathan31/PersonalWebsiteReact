function Card({
  title,
  dateRange,
  description,
  image,
  altText,
  link,
  buttonTitle,
}) {
  return (
    <div className="card w-48 lg:w-72 bg-slate-500 shadow-xl mt-20 lg:mx-10 mx-auto">
      <figure className="px-10 pt-10">
        {image && (
          <img
            src={image}
            alt={altText}
            width={120}
            height={120}
            className="rounded-xl"
          />
        )}
      </figure>
      <div className="card-body items-center text-center text-sm">
        <h2 className="card-title">{title}</h2>
        <p className="italic">{dateRange}</p>
        <p>{description} </p>
        <div className="card-actions">
          {link && (
            <a className="btn btn-primary" href={link}>
              {buttonTitle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export { Card };
