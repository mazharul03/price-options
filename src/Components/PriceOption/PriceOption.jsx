import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { priceOptionName, price, features } = option;
    return (
        <div className="bg-green-400 rounded-md p-4 flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{priceOptionName}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-gray-700 w-full py-2 font-bold rounded-lg hover:bg-slate-500">Buy Now</button>
        </div>
    );
};

export default PriceOption;