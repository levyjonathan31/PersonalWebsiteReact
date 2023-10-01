function AvatarCircle({ imgSrc, alt }) {
  return (
    <div className="avatar">
      <div className="w-72 mx-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={imgSrc} alt={alt} />
      </div>
    </div>
  );
}
export { AvatarCircle };
