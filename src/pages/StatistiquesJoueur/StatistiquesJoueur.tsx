import React from 'react'
import { PageProps } from '../../components/PageProps'
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import './StatistiquesJoueur.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { makeRequest } from '../../Api';

const getClassementEquipe = (idEquipe : number) => {
    return new Promise((resolve, reject) => {
        makeRequest({
            url: `classement/equipe/${idEquipe}`,
            requestType: 'GET',
            successCallback: (data) => {
                resolve(data)
            },
            failureCallback: (error) => {
                reject(error)
            },
            values: null,
            authorization: null,
            isFormData: false
        })
    })
}

const StatistiquesJoueur : React.FC<PageProps>= ({ name }) => {
    const { idEquipe } = useParams<{ idEquipe : string }>();

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
                        <h3>Classements</h3>
                    </IonCardTitle>
                </IonCardHeader>
    
                <IonCardContent className='overflow-auto'>
                    <div>
                        <table className='table table-responsive table-striped'>
                            <thead>
                                <tr>
                                    <th scope='col'>Classement</th>
                                    <th scope='col'>Joueur</th>
                                    <th scope='col'>Equipe</th>
                                    <th scope='col'>M</th>
                                    <th scope='col'>MJ</th>
                                    <th scope='col'>PPM</th>
                                    <th scope='col'>RPM</th>
                                    <th scope='col'>PDPM</th>
                                    <th scope='col'>MPM</th>
                                    <th scope='col'>EFF</th>
                                    <th scope='col'>FG%</th>
                                    <th scope='col'>3P%</th>
                                    <th scope='col'>%LF</th>
                                </tr>
                            </thead>

                            <tbody>

                            </tbody>
                        </table>  
                    </div>
                </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      );
}

export default StatistiquesJoueur