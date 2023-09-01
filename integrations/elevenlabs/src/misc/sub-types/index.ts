interface Language {
  language_id: string
  name: string
}

interface VerificationAttempt {
  accepted: boolean
  date_unix: number
  levenshtein_distance: number
  recording: {
    mime_type: string
    recording_id: string
    size_bytes: number
    transcription: string
    upload_date_unix: number
  }
  similarity: number
  text: string
}

interface FineTuning {
  fine_tuning_requested: boolean
  finetuning_state: 'not_started'
  is_allowed_to_fine_tune: boolean
  language: string
  model_id: string
  slice_ids: string[]
  verification_attempts: VerificationAttempt[]
  verification_attempts_count: number
  verification_failures: string[]
}

interface Sample {
  file_name: string
  hash: string
  mime_type: string
  sample_id: string
  size_bytes: number
}

interface Settings {
  similarity_boost: number
  stability: number
}

interface Sharing {
  cloned_by_count: number
  history_item_sample_id: string
  liked_by_count: number
  original_voice_id: string
  public_owner_id: string
  status: string
}

export { Language, VerificationAttempt, FineTuning, Sample, Settings, Sharing }
