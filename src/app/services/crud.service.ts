import { Injectable } from '@angular/core';
import { ClientCleanning } from '../shared/clientCleanning';  
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private afs: AngularFirestore) { }
  private clientsCollection: AngularFirestoreCollection<ClientCleanning>;
  private clients: Observable<ClientCleanning[]>;
  private addDoc: AngularFirestoreDocument<ClientCleanning>;
  private client: Observable<ClientCleanning>;
  public selectedClient: ClientCleanning = {
    id: null
  };
 
  getAllclients() {
    this.clientsCollection = this.afs.collection<ClientCleanning>('clients');
    return this.clients = this.clientsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ClientCleanning;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  getAllclientsOffers() {
    this.clientsCollection = this.afs.collection('clients', ref => ref.where('oferta', '==', '1'));
    return this.clients = this.clientsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ClientCleanning;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneclient(idclient: string) {
    this.addDoc = this.afs.doc<ClientCleanning>(`clients/${idclient}`);
    return this.client = this.addDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ClientCleanning;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addclient(client: ClientCleanning): void {
    this.clientsCollection.add(client);
  }
  updateclient(client: ClientCleanning): void {
    let idclient = client.id;
    this.addDoc = this.afs.doc(`clients/${idclient}`);
    this.addDoc.update(client);
  }
  deleteclient(idclient: string): void {
    this.addDoc = this.afs.doc<ClientCleanning>(`clients/${idclient}`);
    this.addDoc.delete();
  }
}
