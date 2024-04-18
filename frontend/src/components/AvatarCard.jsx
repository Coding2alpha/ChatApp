const AvatarCard = ({avatar}) => {
  return (
    <div className="w-[50px] h-[50px] ">
      <img src={avatar[0]} className="rounded-full" />
    </div>
  );
}
export default AvatarCard