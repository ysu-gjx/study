// 枚举(Enum)

export {}

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2
// }

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }

// enum PostStatus {
//   Draft = 6,
//   Unpublished,
//   Published
// }

// enum PostStatus {
//   Draft = 'aaa',
//   Unpublished = 'bbb',
//   Published = 'ccc'
// }

const enum PostStatus {
  Draft,
  Unpublished,
  Published
}

const post = {
  title: 'Hello TypeScript',
  constent: 'TypeScript is a typed superset of Javascript',
  status: PostStatus.Draft  // 1  //0
}