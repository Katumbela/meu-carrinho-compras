import React, { useState } from 'react';
import Rating from 'react-rating';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../pages/firebase';

const Avaliacao = ({ itemID }) => {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleRatingChange = (value) => {
    setAvaliacao(value);
    db.collection("avaliacoes").doc(itemID).set({ rating: value });
  }

  return (
    <div>
      <p>Avalie este item:</p>
      <Rating
        initialRating={avaliacao}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Avaliacao;
