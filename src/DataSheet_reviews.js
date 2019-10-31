import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_reviews extends DataSheetBase {

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
    item['reviewDate'] = "1547601438218";
    item['userID'] = "cUV56SRo89TkfNXL30P4Pqaqcpz2";
    item['reviewSubject'] = "test";
    item['reviewerName'] = "Taozi Zhang";
    item['document_key'] = "ROxwO7A8CDletnSJSNNc";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "test";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-5hm_y0_xoS0/AAAAAAAAAAI/AAAAAAAAACI/VLEPZKNTALc/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1547601389076";
    item['userID'] = "cUV56SRo89TkfNXL30P4Pqaqcpz2";
    item['reviewSubject'] = "";
    item['reviewerName'] = "Taozi Zhang";
    item['document_key'] = "f4SUePG4LuUCY7ZEBly4";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-5hm_y0_xoS0/AAAAAAAAAAI/AAAAAAAAACI/VLEPZKNTALc/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1547491180275";
    item['userID'] = "IEYgEWZRIrVeXyvtYt6tiZp2Bu92";
    item['reviewSubject'] = "";
    item['reviewerName'] = "Rohan Arora";
    item['document_key'] = "Y6fEIjyebsnl9zyeK5tX";
    item['reviewRating'] = "0";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "Test\n";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-tUqGZ-TFq4I/AAAAAAAAAAI/AAAAAAAAFvo/O5PuzwzjuZs/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1547488514207";
    item['userID'] = "OELaci4upVPyY7Vk7zeDSEIHN9w2";
    item['reviewSubject'] = "Would raw dawg again..";
    item['reviewerName'] = "Joe Nance";
    item['document_key'] = "uQ9TYHjjYJ3vecuhOz6Y";
    item['reviewRating'] = "4";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "Came for the raw, stayed for the dawg.";
    item['reviewerProfilePicUrl'] = "https://lh4.googleusercontent.com/-EVrVfWnpQa0/AAAAAAAAAAI/AAAAAAAAAAA/DTtfjHEc9cU/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1546975903130";
    item['userID'] = "Acpq7vGZxKQBr0vWGf4WVBZhHFG2";
    item['reviewSubject'] = "It's OK";
    item['reviewerName'] = "Interaction mty";
    item['document_key'] = "D9xpVFiKpNe7MDzkbstS";
    item['reviewRating'] = "2";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "Not the best tacos in town";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-_pXCe29xO7E/AAAAAAAAAAI/AAAAAAAAABU/hS1METNlJCM/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1546964803209";
    item['userID'] = "zy2sBh0DOLcKapfbY7CnryQRMoc2";
    item['reviewSubject'] = "";
    item['reviewerName'] = "Agus Mafud";
    item['document_key'] = "ACHpfONwV4WrpfG13sJG";
    item['reviewRating'] = "0";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh4.googleusercontent.com/-ZGh2iEb30m8/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbUz8V1kaXSZ2weBgAITOqotTTRdA/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1545649784674";
    item['userID'] = "I8HBJT0UWHNKeBADex4XiZ9hV0j1";
    item['reviewSubject'] = "Ik";
    item['reviewerName'] = "Pugar Jayanegara";
    item['document_key'] = "FuqQT2J6MRXe8h06CCpo";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "Ok";
    item['reviewerProfilePicUrl'] = "https://lh6.googleusercontent.com/-0Yg2X8Ts2ik/AAAAAAAAAAI/AAAAAAAAADg/TvA4AnTXOyw/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1545647771826";
    item['userID'] = "lVMpmBKNFEfhSuk9ZapES7p41vy2";
    item['reviewSubject'] = "";
    item['reviewerName'] = "רון טופול";
    item['document_key'] = "JxAqRt5ubCTZyTeNRCQZ";
    item['reviewRating'] = "4";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-JInPlY6Pw00/AAAAAAAAAAI/AAAAAAAACQg/CZ7sweBG82E/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1544163495034";
    item['userID'] = "LKJxbLEMJBPDJeKlPa9lplv9k1g1";
    item['reviewSubject'] = "9999999";
    item['reviewerName'] = "Никита Шульгин";
    item['document_key'] = "hB2o2X5OxBF3T3RhSCDC";
    item['reviewRating'] = "4";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "8888888888888";
    item['reviewerProfilePicUrl'] = "https://lh3.googleusercontent.com/-yQms-gMVjS8/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iAj5Unh45sTVpVvMwntoiG0Uy__A/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1544050059967";
    item['userID'] = "b5l63Yyzz3ek8Hrf52KHZXC2m5T2";
    item['reviewSubject'] = "Dev";
    item['reviewerName'] = "Peter Januarius";
    item['document_key'] = "wZS5z1exdkwDZdTYpovy";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "This is my review";
    item['reviewerProfilePicUrl'] = "https://lh3.googleusercontent.com/-Dhn4GNXqx4I/AAAAAAAAAAI/AAAAAAAAAFc/doyZkJM80QA/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1543837450720";
    item['userID'] = "bUCEtMvjaRPckdBftmPzhNOlBpI2";
    item['reviewSubject'] = "test";
    item['reviewerName'] = "Xan Ravv";
    item['document_key'] = "Pj0YlvvJp8ndOjmZI1oK";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "hoela";
    item['reviewerProfilePicUrl'] = "https://lh6.googleusercontent.com/-_xM8Ejd0AFk/AAAAAAAAAAI/AAAAAAAAAAA/AAN31DUe--zVjNr8BVqX6l0YZk0oqLJovg/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1541656645650";
    item['userID'] = "9ugZHS3bklOiPsiaI6zoaCuQIq93";
    item['reviewSubject'] = "is it working?";
    item['reviewerName'] = "Ricky1097";
    item['document_key'] = "cXm6uLJjWha0zPxSp2iS";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "awesome!";
    item['reviewerProfilePicUrl'] = "https://lh3.googleusercontent.com/-wdtX7-R6Emw/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbA_N3QdIS1UkkN95uryQjPxfohU6g/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1541432338592";
    item['userID'] = "DvN5RVYt9gW4lor43z2jQlF7Mny2";
    item['reviewSubject'] = "";
    item['reviewerName'] = "BENSON FRANCIS";
    item['document_key'] = "5BkAGyXmEB0YBhMn5pT9";
    item['reviewRating'] = "0";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh6.googleusercontent.com/-u6RpgUtmHYg/AAAAAAAAAAI/AAAAAAAAAEY/QrEu93HHHbY/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1541285734929";
    item['userID'] = "6qPxAUNbioaJH10eMHQKUReh50R2";
    item['reviewSubject'] = "fff";
    item['reviewerName'] = "Richard Harris";
    item['document_key'] = "g9zFMr05kz90Ckwd7nSv";
    item['reviewRating'] = "2";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "dfdf";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-M0SPTyeESts/AAAAAAAAAAI/AAAAAAAACzM/6x4SVYCkFHI/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1540651205192";
    item['userID'] = "wls1BtClMfaWrzRB5nqIj1MBjh53";
    item['reviewSubject'] = "";
    item['reviewerName'] = "Thomas Østergaard-Geisler";
    item['document_key'] = "sKfXNJzcTwrHiDgVwc7B";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-CFIX5P5k3Bo/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaOs6YU-6LY9dzw0k8mu0p8EaYKaVQ/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1540640758471";
    item['userID'] = "wls1BtClMfaWrzRB5nqIj1MBjh53";
    item['reviewSubject'] = "test";
    item['reviewerName'] = "Thomas Østergaard-Geisler";
    item['document_key'] = "I7qvIEN1T8Pas3H9XXu3";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-CFIX5P5k3Bo/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaOs6YU-6LY9dzw0k8mu0p8EaYKaVQ/mo/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1540351174548";
    item['userID'] = "thyrE67S0TatZrX21FHJErR5oZD3";
    item['reviewSubject'] = "test";
    item['reviewerName'] = "Gautam Saxena";
    item['document_key'] = "CunP46jrLhqo9fyvoPSJ";
    item['reviewRating'] = "3";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "test ";
    item['reviewerProfilePicUrl'] = "https://lh3.googleusercontent.com/-diPddnH2R6o/AAAAAAAAAAI/AAAAAAAAHk4/go3JR3sfvm8/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1540174329383";
    item['userID'] = "IIguFVY1izVjNdJileiBoUimqfu1";
    item['reviewSubject'] = "testing ";
    item['reviewerName'] = "Jerick Jimenez";
    item['document_key'] = "ZiyyvDCFmwQgqBvllxGI";
    item['reviewRating'] = "5";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "testing ";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-ouz4517NFz4/AAAAAAAAAAI/AAAAAAAAAEU/yo0xc17itm0/photo.jpg";
    item.key = key++;

    item = {};
    this.items.push(item);
    item['reviewDate'] = "1539708464690";
    item['userID'] = "p6yleGZvPdeS3GOukzjF8qLURSD2";
    item['reviewSubject'] = "";
    item['reviewerName'] = "Robert Cereghini";
    item['document_key'] = "aRv6Lc7BXivpvmiHCmjj";
    item['reviewRating'] = "3";
    item['restaurantID'] = "4r2BhNHW8guC9SaDbzoG";
    item['reviewText'] = "Test";
    item['reviewerProfilePicUrl'] = "https://lh5.googleusercontent.com/-wfzzQ9APCoc/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBOSbWDpHSW74IYeGkwGLJu7MZPpA/mo/photo.jpg";
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
