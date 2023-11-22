import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { PageProps } from '../../components/PageProps';
import { useState } from 'react';
import EquipeApercuItem from './components/EquipeApercuItem';

const Equipes: React.FC<PageProps> = ({ name } : PageProps) => {
    // Equipes
    const [ equipes, setEquipes ] = useState([{nom: "Lakers", idEquipe: 1}, {nom: "Golden States", idEquipe: 2}])

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
        
        <IonList>
            { equipes.map((equipe, index) => {
                return <EquipeApercuItem idEquipe={ equipe.idEquipe } nom={ equipe.nom } /> 
            }) }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Equipes;
