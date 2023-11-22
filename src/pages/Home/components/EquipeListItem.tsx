import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { baseball, basketOutline, basketball } from 'ionicons/icons';
import React from 'react'

interface EquipeItemInformations {
    nom : string;
}

const EquipeListItem : React.FC<EquipeItemInformations> = ({ nom }) => {
  return (
    <IonItem className='d-flex'>
        <IonIcon aria-hidden="true" slot='start' icon={basketball}></IonIcon>
        <IonLabel>
            <p>{ nom }</p>
        </IonLabel>
    </IonItem>
  )
}

export default EquipeListItem