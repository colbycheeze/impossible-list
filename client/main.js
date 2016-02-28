import {createApp} from 'mantra-core';
import initContext from './configs/context';

// MODULES
import coreModule from './modules/core';
import usersModule from './modules/users';

// INITIAL CONTEXT
const context = initContext();

// CREATE APP
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.init();


