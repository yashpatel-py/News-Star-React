# News Website

## Get API KEY

1. Go to [https://newsapi.org/](https://newsapi.org/)
2. Login or create an account
3. Then click on your email-ID from navbar and you will be redirected to your account page and from there you can copy your API KEY.

## Setup project

1. Once you get **API KEY** you need yo add that key in `src/components/News.js` file.

```javascript
// Replace <API KEY> to your key and make sure to remove <> brackets.
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=<API KEY>&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
```

2. Run command `npm install` in terminal.
3. Then run the command `npm start` in terminal.
