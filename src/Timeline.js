import React from 'react';
import './Timeline.css';
import Status from './Status'




function Timeline() {
  return (
    <div className="timeline">



      <Status text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. "
        profilePic="https://image.shutterstock.com/image-vector/vector-illustration-dog-paw-tracks-600w-1612785649.jpg"
        username="My Blog"
      postdate="April 3 at 10:25 AM"/>
      <Status text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
        profilePic="https://image.shutterstock.com/image-vector/vector-illustration-mannequin-scissors-needle-600w-1597372264.jpg"
        username="Dummies Timeline"
      postdate="July 3 at 7:25 PM"/>
      <Status text="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. "
      profilePic="https://image.shutterstock.com/z/stock-vector-vector-illustration-dog-paw-tracks-bone-bowl-collar-leash-on-white-background-pet-shop-1580265973.jpg"
      username="My Pet Shop"
    postdate="Dec 22 at 10:25 PM"/>


    </div>

    
  );
}

export default Timeline;
