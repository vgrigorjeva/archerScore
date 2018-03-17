import Realm from 'realm';
import uuidv1 from 'uuid';

let realm = null;

const TrainingSchema = {
  name: 'Training',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    name: 'string',
    date: 'date',
    bowType: 'string',
    distance: 'string',
  },
};

const getRealm = () =>
  new Promise((resolve, reject) => {
    if (realm) {
      resolve(realm);
    } else {
      Realm.open({
        schema: [
          TrainingSchema,
        ],
      }).catch((error) => {
        reject(error);
      }).then((r) => {
        realm = r;
        resolve(realm);
      });
    }
  });

const createTraining = ({ name, bowType, distance }) => {
  let training;
  realm.write(() => {
    training = realm.create(
      'Training',
      {
        itemId: uuidv1(),
        name,
        date: new Date(),
        bowType,
        distance,
      },
    );
  });
  return training;
};

const getTrainings = () => realm.objects('Training').sorted('name', true);

export default {
  getRealm,
  createTraining,
  getTrainings,
};
