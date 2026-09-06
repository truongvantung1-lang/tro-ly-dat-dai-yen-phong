export type AdministrativeArea = { code:string; name:string; type:'province'|'commune'|'ward'; parentCode?:string }
export const administrativeAreas: AdministrativeArea[] = [
  { code:'bac-ninh', name:'Bắc Ninh', type:'province' },
  { code:'yen-phong', name:'Khu vực Yên Phong', type:'commune', parentCode:'bac-ninh' }
]
