import { getExternalTagProvider } from './externalTagProviders';
const componentsTags = require('../../../../vetur/tags.json');
const componentsAttributes = require('../../../../vetur/attributes.json');

export function getAgreeUITagProvider() {
  return getExternalTagProvider('agreeui', { ...componentsTags }, { ...componentsAttributes });
}
