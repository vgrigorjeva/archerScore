import Realm from 'realm';
import uuidv1 from 'uuid';

let realm = null;
let training = null;

const TrainingSchema = {
  name: 'Training',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    name: 'string?',
    date: 'date',
    targetType: 'string?',
    bow: 'string?',
    distance: 'int?',
    arrowsPerSet: 'int?',
    environment: 'string?',
    note: 'string?',
    arrow: 'string?',
    sets: 'Set[]',
  },
};

const SetSchema = {
  name: 'Set',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    points: 'Point[]',
  },
};

const PointSchema = {
  name: 'Point',
  properties: {
    value: 'int',
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
          PointSchema,
          SetSchema,
        ],
      }).catch((error) => {
        reject(error);
      }).then((r) => {
        realm = r;
        resolve(realm);
      });
    }
  });

const createTraining = ({
  name,
  targetType,
  bow,
  distance,
  arrowsPerSet,
  environment,
  note,
  arrow,
}) => {
  realm.write(() => {
    training = realm.create(
      'Training',
      {
        itemId: uuidv1(),
        name,
        date: new Date(),
        targetType,
        bow,
        distance,
        arrowsPerSet,
        environment,
        note,
        arrow,
      },
    );
  });
  return training;
};

const getTrainings = () => realm.objects('Training').sorted('date', true);

const getCurrentTraining = ({ trainingId }) => realm.objects('Training').filtered('itemId = $0', trainingId)[0];

const deleteTraining = ({ trainingId }) => {
  training = getCurrentTraining({ trainingId });
  realm.write(() => {
    realm.delete(training);
  });
};

const getCurrentSet = ({ setId }) => realm.objects('Set').filtered('itemId = $0', setId)[0];

const deleteSet = ({ setId }) => {
  const set = getCurrentSet({ setId });
  realm.write(() => {
    realm.delete(set);
  });
};

const addSet = ({ trainingId, pointsPerCurrentSet }) => {
  training = getCurrentTraining({ trainingId });
  realm.write(() => {
    const set = realm.create(
      'Set',
      {
        itemId: uuidv1(),
        points: pointsPerCurrentSet,
      },
    );
    training.sets.push(set);
  });
};

const getTrainingSets = trainingId =>
  realm.objects('Training').filtered('itemId = $0', trainingId)[0].sets;

export default {
  getRealm,
  createTraining,
  getTrainings,
  deleteTraining,
  addSet,
  getTrainingSets,
  deleteSet,
};
