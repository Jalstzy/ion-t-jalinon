import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from '@ionic/react';
import { camera, videocam, albums, notifications, chatbox, person } from 'ionicons/icons';
import './home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Post Section */}
        <IonList>
          {/* Post Status */}
          <IonItem>
            <IonAvatar slot="start">
              <img src="../src/img/Jalinon.3.jpg" alt="profile" />
            </IonAvatar>
            
          </IonItem>
          {/* End Post Status */}

          {/* Add more posts here */}

        </IonList>

        {/* Photos, Videos, and Reels Section */}
        <IonFooter>
          <IonToolbar>
            <IonButton color="light" slot="start">
              <IonIcon icon={camera} />
              <IonText>Photos</IonText>
            </IonButton>
            <IonButton color="light" slot="start">
              <IonIcon icon={videocam} />
              <IonText>Videos</IonText>
            </IonButton>
            <IonButton color="light" slot="start">
              <IonIcon icon={albums} />
              <IonText>Reels</IonText>
            </IonButton>
          </IonToolbar>

          <IonToolbar color="light">
   
    <IonText style={{ textAlign: 'center' }}>
      Hi its me John Michael Jalinon
    </IonText>
</IonToolbar>


        </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;