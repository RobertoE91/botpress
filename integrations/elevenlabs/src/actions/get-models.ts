import type { Implementation } from '../misc/types'
import { getClient } from '../utils'

export const getModels: Implementation['actions']['getModels'] = async ({
  ctx,
  logger,
}) => {
  const ElevenlabsClient = getClient(ctx.configuration)
  let models
  try {
    models = await ElevenlabsClient.getModels()
    logger.forBot().info(`Successful - Get Models`)
  } catch (error) {
    logger.forBot().debug(`'Get Models' exception ${JSON.stringify(error)}`)
  }

  return {
    models,
  }
}
