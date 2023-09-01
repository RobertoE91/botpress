import { Config } from '../misc/types'
import { ElevenlabsApi } from '../client'

export function getClient(config: Config) {
  return new ElevenlabsApi(config.xiApiKey)
}
