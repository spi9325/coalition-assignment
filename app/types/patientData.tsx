export interface VitalReading {
  value: number
  levels: string
}

export interface BloodPressure {
  systolic: VitalReading
  diastolic: VitalReading
}

export interface DiagnosisHistoryEntry {
  month: string
  year: number
  blood_pressure: BloodPressure
  heart_rate: VitalReading
  respiratory_rate: VitalReading
  temperature: VitalReading
}

export interface DiagnosticListEntry {
  name: string
  description: string
  status: string
}

export interface Patient {
  name: string
  gender: string
  age: number
  profile_picture: string
  date_of_birth: string
  phone_number: string
  emergency_contact: string
  insurance_type: string
  diagnosis_history: DiagnosisHistoryEntry[]
  diagnostic_list: DiagnosticListEntry[]
  lab_results: string[]
}