import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_restaurants extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.

    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Tue-Thu 09-17";
    item['restaurantEmail'] = "info@ibm.com";
    item['restaurantName'] = "IBM";
    item['restaurantPhone'] = "0123456789";
    item['document_key'] = "DCAwdqpRvZkYIu0x8fuM";
    item['restaurantCoverImage'] = "https://www.ibm.com";
    item['restaurantDescription'] = "International Business Machines Corporation (IBM) is a technology company. The Company operates through five segments: Cognitive Solutions, Global Business Services (GBS), Technology Services & Cloud Platforms, Systems and Global Financing.";
    item['restaurantWWW'] = "https://www.ibm.com";
    item['restaurantAddress'] = "1 New Orchard Road Armonk, New York";
    item.key = key++;
  }


  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }


  addItem(item, options) {
    console.log("add to firebase: ", item);

    let isCollectionGroup = options.servicePath.startsWith("group:");
    if (isCollectionGroup) {
      console.log("unable to add to collection group: ", options.servicePath.substring(6));
      return;
    }

    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);

    let addItemPromise;
    if (item.document_key && item.document_key.length > 0) {
      addItemPromise = collection.doc(item.document_key).set(item);
    } else {
      addItemPromise = collection.add(item);
    }
    addItemPromise
      .then((docRef) => {
        if (docRef) {
          console.log("Firebase document added with id: ", docRef.id);
          item.document_key = docRef.id;
          item.document_ref = docRef;
        } else {
          console.log("Firebase document added with id: ", item.document_key);
        }
        //super.addItem(item, options);

        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }

  removeItem(item, options) {
    //super.removeItem(item, options);

    console.log("delete from firebase: ", item);

    //const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = item.document_ref;

    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);
      });
  }

  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);

    console.log("update in firebase: ", item);

    //const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = item.document_ref;

    docRef.update((({ key, document_ref, document_key, ...item }) => (item))( item ))
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);
      });
  }


}
