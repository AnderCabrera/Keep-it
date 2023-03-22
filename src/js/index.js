import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

model.setModel(model);
view.setView(view);
