import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src="ionic-saplot/13d863bd8f69df12ee0ed79755ba9c5f.jpg" />
    <IonCardHeader>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
