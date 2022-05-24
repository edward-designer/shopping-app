const CategoryItem = ({category:{title,imageUrl}}) => {  // desctructuring a Props
    return (
        <div className="flex flex-1 basis-80 sm:basis-1/3 h-72">
          <div className="flex flex-1 m-1 overflow-hidden">
            <div className="flex  items-center justify-center w-full h-full bg-cover child:bg-gray-50/50 hover:scale-110 child-hover:bg-gray-50/80 transition-all duration-1000" style={{backgroundImage: `url(${imageUrl})`}} >
              <div className="flex flex-col p-12 text-center">
                <h2 className="font-bold text-2xl text-primary">{title}</h2>
                <p className="font-thin">Shop Now</p>
              </div>
            </div>
          </div>
        </div>     
    )
};

export default CategoryItem;