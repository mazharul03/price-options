import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const gymPricingOptions = [
        {
            "id": 1,
            "priceOptionName": "Basic",
            "price": 20,
            "features": [
                "Access to gym equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "priceOptionName": "Standard",
            "price": 35,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free group classes"
            ]
        },
        {
            "id": 3,
            "priceOptionName": "Premium",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free group classes",
                "Personal training sessions",
                "Spa access"
            ]
        }
    ];



    return (
        <div className="m-12">
            <h2 className="text-5xl mb-6">Best prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    gymPricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;