// function base64ToStr(str){
//   return Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
// }
const scraperObject = {
  url: 'https://balkangreenenergynews.com/country/romania/',
  async scraper(browser){
      let page = await browser.newPage();
      await page.goto(this.url)
      .catch(error => console.error(error));
      try {
        await page.waitForSelector("div.four-boxes.multi-boxes", { visible: true });
        //console.info("Country News Page loaded");
        
        page.on("console", msg =>
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
        str = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwOSUyRlJvbWFuaWEtdG8tYWRvcHQtbGF3LW9uLW9mZnNob3JlLXdpbmQtdGhpcy15ZWFyLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg=";
        str = str.split("base64,").pop()
        //console.log(str)
        console.log(decodeURIComponent(Buffer.from(str,'base64').toString('utf-8')))
        return;
        let data = await page.evaluate(() => {

        // function base64ToStr(str){
        //   return Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
        // }
        console.log("asds")
        
          // const articles = document.querySelectorAll("div.bn-box");
          // console.log(articles);
          // return;
          const articles = document.querySelectorAll("div.bn-box");
          const textContent = elem => (elem ? elem.textContent.trim() : ""); // helper function
          const articleArray = [];
          // console.log(articles);
          // return;
          // for(var i=0;i<articles.length;i++){
          //   var sampleData = articles[i].querySelector("div.bn-box").innerHTML;
          //   console.log(sampleData);
          //   return;
          // }
          articles.forEach(article => {
            
            var data2 = article.querySelector("div.bn-box");
            //console.log(new Date(textContent(article.querySelector("div.jet-listing-dynamic-field__content"))).toISOString().slice(0, -5).concat("+02:00"))
            //let data = 'nimeshdeuja.com';
            //let buff = new Buffer(data);
            // let stringToBase64 = Buffer.from("PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMjQwIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjI0MCIgZGF0YS11PSJodHRwcyUzQSUyRiUyRmJhbGthbmdyZWVuZW5lcmd5bmV3cy5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYwNyUyRlJvbWFuaWFzLUVsZWN0cmljYS10YWtlcy1vdmVyLUVVUi0yMDctTVctd2luZC1zb2xhci1wb3J0Zm9saW8tZnJvbS1Nb25zc29uLTM4MHgyNDAuanBnIiBkYXRhLXc9IjM4MCIgZGF0YS1oPSIyNDAiIGRhdGEtYmlwPSIiPjwvc3ZnPg==",'base64').toString('utf-8').split(' ').slice(4).join(' ');
            //console.log(base64ToStr("asd"));
           // console.log("data2");
          //  console.log(JSON.stringify(article))
          //  return;
            articleArray.push({
              title:
                textContent(article.querySelector("div.bn-box > a > h3")) || "",
              link: article.querySelector("div.bn-box > a")
                ? article.querySelector("div.bn-box > a").getAttribute("href")
                : "",
              image_link: article.querySelector("div.bn-box-img > a > img")
                ? article.querySelector("div.bn-box-img > a > img").getAttribute("src")
                : "",
              lead_text:
              textContent(article.querySelector("div.bn-box > p")).split(' ').slice(4).join(' ') ||
                "",
              time: new Date(textContent(article.querySelector("p > strong"))).toISOString().slice(0, -5).concat("+01:00")||
              "",
              author: ""
                //textContent(article.querySelector(".entry-author a")) || ""
            });
          });
          //console.log(articles);
          //return;
          //2021-11-24T14:23:37+01:00
          return articleArray;
        });
        console.log(data)

      } catch (error) {
        console.log(":(");
        //console.error("No articles found for " + country.slug + error);
      }
    }
  }

module.exports = scraperObject;
