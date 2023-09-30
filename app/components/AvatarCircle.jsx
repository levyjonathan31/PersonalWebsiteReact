function AvatarCircle({ imgSrc, alt }) {
  return (
    <div className="avatar">
      <div className="w-48 mx-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={imgSrc} alt={alt} />
      </div>
    </div>
  );
}
export { AvatarCircle };
