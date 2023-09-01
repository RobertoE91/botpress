import { Language, FineTuning, Sample, Settings, Sharing } from './sub-types'

interface Model {
  can_be_finetuned: boolean
  can_do_text_to_speech: boolean
  can_do_voice_conversion: boolean
  description: string
  languages: Language[]
  model_id: string
  name: string
  token_cost_factor: number
}

interface Voice {
  available_for_tiers: string[]
  category: string
  description: string
  fine_tuning: FineTuning
  labels: object
  name: string
  preview_url: string
  samples: Sample[]
  settings: Settings
  sharing: Sharing
  voice_id: string
}

export { Model, Voice }
