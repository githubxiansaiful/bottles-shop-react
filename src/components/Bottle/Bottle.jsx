const Bottle = ({bottle}) => {
    
    const {name, price, img, category, stock, seller, ratings} = bottle;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <small>Category: {category} | Seller: {seller}</small>
                <small>${price}.00 | Stock: {stock} | Ratings: {ratings}</small>
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Bottle;