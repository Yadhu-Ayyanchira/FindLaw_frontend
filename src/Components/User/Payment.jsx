import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import UserRequest from "../../Utils/UserRequest";
import Checkout from "./Checkout";
import { Chip, Dialog } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = ({amount}) => {
    const { id } = useSelector((state) => state.user);
  const [clientSecret, setClientSecret] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  useEffect(() => {
    console.log('hii');
    if (id) {
      
        const makeRequest = async () => {
          try {
            const res = await UserRequest.get(
              `/paymentrequest/${id}/${amount}`
            );
            console.log(res);
            setClientSecret(res.data.clientSecret);
            
          } catch (error) {
            console.error("Error while making the request:", error);
          }
        };

        makeRequest();
      
    }
  }, [id]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Chip
        value="Confirm"
        className="text-center bg-[#028a68]"
        size="lg"
        onClick={handleOpen}
      />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none rounded-none"
      >
        <div className="app">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <Checkout amount={amount} Secret={clientSecret} userId={id} />
            </Elements>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default Payment;
