import React, { useState } from 'react';
import Rating from 'react-rating';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../pages/firebase';
import { toast } from 'react-toastify';

const Avaliacao = ({ itemID }) => {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleRatingChange = (value) => {
    setAvaliacao(value);
    db.collection("avaliacoes").doc(itemID).set({ rating: value });
    toast.success('Obrigado pela sua avaliação, isso vai ajudar nos muito!')
  }

  return (
    <div>
      <p>Avalie o nosso serviço:</p>
      <Rating
        initialRating={avaliacao}
        emptySymbol="fa text-warning fa-star-o fa-2x"
        fullSymbol="fa text-warning fa-star fa-2x"
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Avaliacao;
