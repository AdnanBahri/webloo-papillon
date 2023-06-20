const Card = ({ title, url }) => {
  return (
    <>
      <div className="card w-[200px] h-[300px] m-2 rounded-md relative">
        <div className="top">
          <img className="w-full object-cover rounded-md" src={url} alt="img" />
        </div>
        <div className="text-lg font-semibold absolute top-4 left-4">
          {title}
        </div>
      </div>
    </>
  );
};

export default Card;
