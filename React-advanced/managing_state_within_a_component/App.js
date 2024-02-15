import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    const usedGiftCard = {...giftCard};
    usedGiftCard.text = "Your coupon has been used";
    usedGiftCard.valid = false;
    usedGiftCard.instructions = "Please visit our restaurant to renew your gift card";
    setGiftCard(usedGiftCard);
  }

  function spendGiftCard2(){
    setGiftCard(prevState => {
      return {...prevState,
        text:"Your coupon has been used",
        valid:false,
        instructions:"Please visit our restaurant to renew your gift card"}
    })
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard2}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
