import type { IntegrationDefinitionProps } from '@botpress/sdk'
import z from 'zod'

import { actions } from './actions'
import { channels } from './channels'

export { actions }
export { channels }

export const configuration = {
  schema: z.object({
    xiApiKey: z.string().describe('API Key in Profile Tab'),
  }),
}

export const states: IntegrationDefinitionProps['states'] = {}

export const user = {
  tags: {},
}
