import React from "react";
import "../assets/inviteCard.scss";
import Raspadinhas from "./raspadinha";



const InviteCard = () => {
  const openInvite = () => {
    const heartWrap = document.getElementById("heart-wrap");
    const anmPaper = document.getElementById("for-love");

    heartWrap.style.animation = "rotateHeart 1.5s forwards";
    setTimeout(() => {
      anmPaper.style.animation = "up-page 2s forwards";
    }, 800);
  };

 
  return (
    <div className="invite-card">
      <div className="heart-wrap" id="heart-wrap" onClick={openInvite}>
        {["rectangle", "left-circle", "right-circle"].map((clsName) => (
          <div key={clsName} className={clsName} />
        ))}
      </div>
      <div className="card-info" />
      <div className="for-love" id="for-love">
        <p>Oi meu amor, Aqui está uma raspadinha que decidirá seu presente. <br/> Apenas um mimo de natal desenvolvido por mim. </p>

        <div className="choices">
           <Raspadinhas prizes={['Vale Tattoo Tattoo','Vale R$200 Money', 'Vale Make Make', 'Vale AllStar AllStar']} /> 
        </div>
      </div>
    </div>
  );
};

export default InviteCard;
