import axios, { AxiosHeaders, AxiosResponse } from "axios"
import { checkUrl } from "./urlChecker"
import { load } from "cheerio"

const headers: Partial<AxiosHeaders> = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
}
const axiosInstance = axios.create({
    headers,
    validateStatus: () => {
        return true
    }
})

interface urldata {
    url: string,
    checkType: "videoID" | "channelID" | "description"
}

export const getYoutubeData = async ({ url, checkType }: urldata) => {
    try {
        if (checkUrl({ url, checkType })) {

            const youtubeResponceScrap: AxiosResponse = await axiosInstance.get(url)
            const $ = load(youtubeResponceScrap.data);
            if (checkType === 'channelID' || checkType === "videoID") {
                const id = $('meta[itemprop="identifier"]').attr('content');
                if (id) {
                    return id
                }
            } else {
                const description = $('meta[itemprop="description"]').attr('content');
                if (description) {
                    return description
                }
            }
        } else {
            throw Error(`"${url}"  is not a valid YouTube ${checkType === 'videoID' ? 'video' : checkType === 'channelID' ? 'channel' : 'description'} link`)
        }
        throw Error(`A error occured while retriving data from ${url}.Do check your url`)
    } catch (error) {
        console.error(error);
    }
}