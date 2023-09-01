import type { Implementation } from '../misc/types'
import { getClient } from '../utils'

export const getVoices: Implementation['actions']['getVoices'] = async ({
  ctx,
  logger,
}) => {
  const ElevenlabsClient = getClient(ctx.configuration)
  let voices
  try {
    voices = await ElevenlabsClient.getVoices()
    logger.forBot().info(JSON.stringify(voices))
    logger.forBot().info(`Successful - Get Voices`)
  } catch (error) {
    logger.forBot().debug(`'Get Voices' exception ${JSON.stringify(error)}`)
  }

  return {
    voices,
  }
}
