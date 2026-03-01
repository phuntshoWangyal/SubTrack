import { insertSubscription } from "../models/subscriptionModel";

export const handleAddSubscription = async (
    subName,
    price,
    selectedTab,
    paymentDate,
    icon
) =>{
    try {
        await insertSubscription(
            subName,
            Number(price),
            selectedTab,
            paymentDate,
            icon
        );
        console.log("Subscription inserted");
  
        return {success:true};

    }catch(err) {
        console.log(err);
        return{success:false,error:err};
    };
};

