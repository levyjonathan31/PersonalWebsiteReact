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
    <div className="card w-96 bg-slate-500 shadow-xl mx-10">
      <figure className="px-10 pt-10">
        {image && (
          <img
            src={image}
            alt={altText}
            width={200}
            height={200}
            className="rounded-xl"
          />
        )}
      </figure>
      <div className="card-body items-center text-center">
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
