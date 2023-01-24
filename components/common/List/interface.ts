export interface ILoadDataParam {
  pageNum: number
  pageSizee: number
  f: <T1 extends {}>(arg1: T1) => T1
}
