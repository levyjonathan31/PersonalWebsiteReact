function AvatarCircle({ imgSrc, altText }) {
  return (
    <div className="avatar">
      <div className="w-48 lg:w-72 mx-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={imgSrc} alt={altText} />
      </div>
    </div>
  );
}
export { AvatarCircle };
