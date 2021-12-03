// function base64ToStr(str){
//   return Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
// }

var Buffer = require("buffer").Buffer;
const { Base64 } = require("js-base64");

function consoler(str) {
  console.log("str ", str);
  return str;
}

const scraperObject = {
  url: "https://balkangreenenergynews.com/country/romania/",
  async scraper(browser) {
    let page = await browser.newPage();
    await page.goto(this.url).catch((error) => console.error(error));
    try {
      await page.waitForSelector("div.four-boxes.multi-boxes", {
        visible: true,
      });
      //console.info("Country News Page loaded");

      page.on("console", (msg) =>
        msg.type() === "error"
          ? console.error(msg.text())
          : console.info(msg.text())
      );
      // let stringToBase64 = Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
      //console.log(new Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==", 'base64').toString('utf-8'));
      // console.log(stringToBase64);
      //return;
      // function base64ToStr(str){
      //   return Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
      // }

      console.log(
        "asds",
        Base64.decode(
          "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwOCUyRlJvbWFuaWFuLWUtVXBDaXR5LWVsZWN0cmljLWJ1cy1wYXNzZXMtdGVzdHMtdXJiYW4tdHJhbnNwb3J0LTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg=="
        )
      );

      // x = document.createElement("svg");
      // x = x.innerHTML(
      //   decodeURIComponent(Buffer.from(str, "base64").toString("utf-8"))
      // );
      // console.log(x);
      // return;
      // var buf = Buffer.from("abc", "base64");

      let data = await page.evaluate(async () => {
        // function base64ToStr(str){
        //   return Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
        // }

        // const articles = document.querySelectorAll("div.bn-box");
        // console.log(articles);
        // return;
        const articles = document.querySelectorAll("div.bn-box");
        const textContent = (elem) => (elem ? elem.textContent.trim() : ""); // helper function
        const articleArray = [];
        // console.log(articles);
        // return;
        // for(var i=0;i<articles.length;i++){
        //   var sampleData = articles[i].querySelector("div.bn-box").innerHTML;
        //   console.log(sampleData);
        //   return;
        // }

        articles.forEach(async (article) => {
          var data2 = article.querySelector("div.bn-box");
          //console.log(new Date(textContent(article.querySelector("div.jet-listing-dynamic-field__content"))).toISOString().slice(0, -5).concat("+02:00"))
          //let data = 'nimeshdeuja.com';
          //let buff = new Buffer(data);
          // let stringToBase64 = Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
          //console.log(base64ToStr("asd"));
          // console.log("data2");
          //  console.log(JSON.stringify(article))
          //  return;

          try {
            articleArray.push({
              title:
                textContent(article.querySelector("div.bn-box > a > h3")) || "",
              link: article.querySelector("div.bn-box > a")
                ? article.querySelector("div.bn-box > a").getAttribute("href")
                : "",
              image_link: article.querySelector("div.bn-box-img > a > img")
                ? article
                    .querySelector("div.bn-box-img > a > img")
                    .getAttribute("src")
                : "",

              lead_text:
                textContent(article.querySelector("div.bn-box > p"))
                  .split(" ")
                  .slice(4)
                  .join(" ") || "",
              time:
                new Date(textContent(article.querySelector("p > strong")))
                  .toISOString()
                  .slice(0, -5)
                  .concat("+01:00") || "",
              author: "",
              //textContent(article.querySelector(".entry-author a")) || ""
            });
          } catch (e) {
            console.error(e);
          }
        });
        // console.log(articles);
        //return;
        //2021-11-24T14:23:37+01:00

        return articleArray;
      });

      newD = data.map((v) => {
        return {
          ...v,
          image_link: decodeURIComponent(
            Base64.decode(v.image_link.split(",").pop()).split('"')[9]
          ),
        };
      });

      console.log(newD);
    } catch (error) {
      console.log(":(", error);
      //console.error("No articles found for " + country.slug + error);
    }
  },
};

module.exports = scraperObject;
