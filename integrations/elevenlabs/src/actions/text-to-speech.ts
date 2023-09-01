import type { Implementation } from '../misc/types'
import { textToSpeechInputSchema } from '../misc/custom-schemas'
import { getClient } from '../utils'

export const textToSpeech: Implementation['actions']['textToSpeech'] = async ({
  ctx,
  input,
  logger,
}) => {
  const validatedInput = textToSpeechInputSchema.parse(input)
  const ElevenlabsClient = getClient(ctx.configuration)
  let audioData
  try {
    audioData = await ElevenlabsClient.textToSpeech(
      validatedInput.voiceId,
      validatedInput.text,
      validatedInput.modelId || undefined,
      validatedInput.stability || undefined,
      validatedInput.similarityBoost || undefined
    )
    logger
      .forBot()
      .info(`Successful - Text To Speech - ${validatedInput.voiceId}`)
  } catch (error) {
    logger.forBot().debug(`'Text To Speech' exception ${JSON.stringify(error)}`)
  }

  return {
    voiceId: validatedInput.voiceId,
    originalText: validatedInput.text,
    audioData: audioData?.toString('hex'),
  }
}
