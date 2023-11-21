import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useState } from 'react';

const Home: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

    // Equipes
    const [ equipes, setEquipes ] = useState([{nom: 'Lakers'}, {nom: 'Golden States'}])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    <h3>Equipes</h3>
                </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <IonList>
                    { equipes.map(( equipe, index ) => {
                        return <IonItem>{ equipe.nom }</IonItem>;
                    }) }
                </IonList>

                <IonButton color={'primary'} expand='block'>Afficher plus</IonButton>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
