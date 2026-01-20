import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAarZRjUj9GpoOHNL9MNJ07_t8ASnbxNHY',
  authDomain: 'scicnextjs.firebaseapp.com',
  projectId: 'scicnextjs',
  storageBucket: 'scicnextjs.firebasestorage.app',
  messagingSenderId: '807886517356',
  appId: '1:807886517356:web:fbb5efbb7d27be7cb29449',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
