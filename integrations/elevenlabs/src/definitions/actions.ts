import {
  textToSpeechInputSchema,
  textToSpeechOutputSchema,
  getModelsInputSchema,
  getModelsOutputSchema,
  getVoicesInputSchema,
  getVoicesOutputSchema,
} from '../misc/custom-schemas'

import { textToSpeechUi, getModelsUi, getVoicesUi } from '../misc/custom-uis'

const textToSpeech = {
  title: 'Text to Speech (Hex)',
  input: {
    schema: textToSpeechInputSchema,
    ui: textToSpeechUi,
  },
  output: {
    schema: textToSpeechOutputSchema,
  },
}

const getModels = {
  title: 'Get Models',
  input: {
    schema: getModelsInputSchema,
    ui: getModelsUi,
  },
  output: {
    schema: getModelsOutputSchema,
  },
}

const getVoices = {
  title: 'Get Voices',
  input: {
    schema: getVoicesInputSchema,
    ui: getVoicesUi,
  },
  output: {
    schema: getVoicesOutputSchema,
  },
}

export const actions = {
  textToSpeech,
  getModels,
  getVoices,
}
