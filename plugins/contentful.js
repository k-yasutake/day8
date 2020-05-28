import * as contentful from 'contentful'

// 下記の手順で Contentful から取得する情報
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
}

// contentful の連携はこの client を使うみたい
const client = contentful.createClient(config)

// 設定した client を他のファイルからでも参照できるように設定
export default client