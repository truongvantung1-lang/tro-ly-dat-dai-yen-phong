export type LegalDocument = { id: string; title: string; level: string; status: 'effective'|'review'; source?: string }
export const legalDocuments: LegalDocument[] = [
  { id:'placeholder-1', title:'Kho văn bản pháp luật đất đai', level:'Trung ương / địa phương', status:'review' },
]
