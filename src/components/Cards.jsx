function Cards({ title, price, image, description, onpress }) {
  return (
    <div className="sm:w-1/3 mb-10 px-4 cursor-pointer" onClick={onpress}>
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={image}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-base">{description}</p>
      <h4 className="font-bold text-gray-900 mt-4">{price}</h4>
      <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default Cards;
