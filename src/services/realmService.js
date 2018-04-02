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

const BowSchema = {
  name: 'Bow',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    name: 'string',
    bowType: 'string',
    brand: 'string',
    size: 'int',
    drawWeight: 'int',
    tiller: 'int',
    braceHeight: 'int',
    limbs: 'string',
    nockingPoint: 'string',
    string: 'string',
    description: 'string',
    sightSettings: 'Sight[]',
  },
};

const SightSchema = {
  name: 'Sight',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    distance: 'int',
    setting: 'string',
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
          BowSchema,
          SightSchema,
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

const getTrainings = () => realm.objects('Training').sorted('date', true);

const getCurrentTraining = ({ trainingId }) => realm.objects('Training').filtered('itemId = $0', trainingId)[0];

const deleteTraining = ({ trainingId }) => {
  const training = getCurrentTraining({ trainingId });
  realm.write(() => {
    realm.delete(training);
  });
};


export default {
  getRealm,
  createTraining,
  getTrainings,
  deleteTraining,
};
