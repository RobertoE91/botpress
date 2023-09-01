import axios, { AxiosInstance } from 'axios'
import { Model, Voice } from 'src/misc/custom-types'

export class ElevenlabsApi {
  private client: AxiosInstance

  constructor(xiApiKey: string) {
    this.client = axios.create({
      baseURL: 'https://api.elevenlabs.io/v1/',
      headers: { 'xi-api-key': xiApiKey },
    })
  }

  async textToSpeech(
    voiceId: string,
    text: string,
    modelId = 'eleven_monolingual_v1',
    stability = 0.5,
    similarityBoost = 0.5
  ): Promise<Buffer> {
    const response = await this.client.post(
      `/text-to-speech/${voiceId}`,
      {
        text,
        model_id: modelId,
        voice_settings: {
          stability,
          similarity_boost: similarityBoost,
        },
      },
      {
        responseType: 'arraybuffer',
        headers: {
          accept: 'audio/mpeg',
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  }

  async getModels(): Promise<Model[]> {
    const response = await this.client.get('/models', {
      headers: {
        accept: 'application/json',
      },
    })
    return response.data
  }

  async getVoices(): Promise<Voice[]> {
    const response = await this.client.get('/voices', {
      headers: {
        accept: 'application/json',
      },
    })
    return response.data.voices
  }
}
