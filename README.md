
# Get Youtube Data

A lib for getting youtube title,videoid,channelid,and channel/video description.
## Installation


```bash
  #Install my-project with npm
  npm i get-youtube-detail

  #or

  #Install my-project with pnpm
  pnpm i get-youtube-detail
  
  #or

  #Install my-project with yarn
  yarn add get-youtube-detail

```
    
## Usage/Examples

Data is returned on the basic of url and type selected 


```javascript
import {getYoutubeData} from 'get-youtube-detail'

  const data = getYoutubeData({ url: 'your yt url here', checkType:"select type" }

```
Types are 
```ts
  "videoID" | "channelID" | "description"
```

Data is returned on the basic of url and type selected 

## Authors

- [@rajkumar-justcoder](https://github.com/rajkumar-justcoder/)

