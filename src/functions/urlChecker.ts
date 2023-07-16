interface urldata {
    url: string,
    checkType: "videoID" | "channelID" | "description"
}

export const checkUrl = (data: urldata) => {
    const { url, checkType } = data
    switch (checkType) {
        case 'videoID': return url.indexOf('watch') !== -1;
            break;
        case 'channelID': return url.indexOf('youtube.com') !== -1 || url.indexOf('youtu.be') !== -1
            break;
        case 'description': return url.indexOf('youtube.com') !== -1 || url.indexOf('youtu.be') !== -1
            break;
    }

}