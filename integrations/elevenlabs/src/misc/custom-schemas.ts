import z from 'zod'

export const textToSpeechInputSchema = z.object({
  voiceId: z
    .string()
    .min(1)
    .describe(
      'The ID of the voice to use for text-to-speech (e.g 21m00Tcm4TlvDq8ikWAM)'
    ),
  text: z.string().min(1).describe('The text to synthesize'),
  modelId: z
    .string()
    .optional()
    .describe(
      'The ID of the model to use for text-to-speech (Optional) (Default: eleven_monolingual_v1)'
    ),
  stability: z
    .number()
    .min(0)
    .max(1)
    .optional()
    .describe(
      'The stability setting for text-to-speech (Optional) (Default: 0.5)'
    ),
  similarityBoost: z
    .number()
    .min(0)
    .max(1)
    .optional()
    .describe(
      'The similarity boost setting for text-to-speech (Optional) (Default: 0.5)'
    ),
})

export const textToSpeechOutputSchema = z.object({
  voiceId: z.string(),
  originalText: z.string(),
  audioData: z.string().or(z.undefined()),
})

export const getModelsInputSchema = z.object({})

export const getModelsOutputSchema = z
  .object({
    models: z.array(
      z
        .object({
          model_id: z.string(),
          name: z.string(),
          description: z.string(),
        })
        .partial()
    ),
  })
  .partial()

export const getVoicesInputSchema = z.object({})

export const getVoicesOutputSchema = z
  .object({
    voices: z.array(
      z
        .object({
          voice_id: z.string(),
          name: z.string(),
          description: z.string().nullable(),
          category: z.string().nullable(),
          preview_url: z.string().nullable(),
        })
        .partial()
    ),
  })
  .partial()
