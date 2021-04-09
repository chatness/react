import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ChatContacts from '../components/ChatContacts';

const Contacts: React.FC = () => {

  const from = {
    name: 'John Doe',
    objectId: '5EOJTH9nUzM526vKPSVrHzp2zFP2',
    email: 'john@doe.com',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
          <IonSearchbar showCancelButton="focus" />
        </IonHeader>
        <ChatContacts from={from}/>
      </IonContent>
    </IonPage>
  );
};

export default Contacts;
