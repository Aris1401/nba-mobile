import { IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { basketOutline, basketballOutline } from 'ionicons/icons';
import React from 'react'

interface EquipeApercu {
    idEquipe: number;
    nom: string;
}

const EquipeApercuItem : React.FC<EquipeApercu> = ({ idEquipe, nom }) => {
  return (
    <>
        <IonItem style={{ with: '100%' }} routerLink={ `StatiquesJoueur/${idEquipe}` }>
            <IonIcon icon={basketballOutline} slot='start' ></IonIcon>
            <IonLabel style={{ fontFamily: 'Sora' }}>{ nom } </IonLabel>
        </IonItem>
    </>
  )
}

export default EquipeApercuItem