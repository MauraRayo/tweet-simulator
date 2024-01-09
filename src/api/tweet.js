import { v4 as uuidv4 } from "uuid";
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet, userName) {
  const tweets = getTweetApi();

  if (tweets.lenght === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        tweet,
        userName,
        createAt: new Date(),
      },
    ];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
  } else {
    console.log("Hay twweets");
  }

  //   localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
  //   console.log(tweetTemp);
}

export function getTweetApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (tweets) {
    return JSON.parse(tweets);
  } else {
    return [];
  }
}
