import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE as string);
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
