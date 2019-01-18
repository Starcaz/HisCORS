# HisCORS

A Javascript library to bypass the Jagex API its CORS mechanism

## Getting Started

If you're here just for a demo, just visit [my website](https://starcaz.net/HisCORS/example.html).

Otherwise to use this library you will simply need the HisCORS.js file.  
It contains a function called getHiscores which you will need to call.  
This function is async.

## About Me

I am a 21 year old AEM developer from the Netherlands.  
You can find me in the following places online:

GitHub: [Starcaz](https://github.com/Starcaz)  
Reddit: [Starcaz](https://www.reddit.com/user/Starcaz)  
RuneScape: [Starcaz](https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1=Starcaz)  
Twitch: [Starcaz](https://www.twitch.tv/starcaz)  
Twitter: [@Starcaz_](https://twitter.com/Starcaz_)  
Website: [Starcaz.net](https://starcaz.net/)  

## FAQ

**Q: Why this library?**  
A: This library allows for developers to use XHR in order to obtain OldSchool RuneScape Hiscore data.

**Q: What is XHR?**  
A: XHR stands for XML HTTP Request, this is used by clientside scripting languages in order to do HTTP requests.

**Q: So why do they need this library? Can't they write their own code?**  
A: Jagex its API's make use of CORS, this prevents XHR requests from other domains to access it via a client.

**Q: What is this CORS you are talking about?**  
A: CORS stands for Cross-origin resource sharing, this basically means that it prevents you from doing certain requests when those requests come from domains other than itself.

**Q: Well, how did you solve this problem?**  
A: I made use of a service called [CORS-Anywhere](https://cors-anywhere.herokuapp.com/). This is basically proxying my request through their server.

**Q: Why is that server able to handle these requests while our browsers can't?**  
A: That is because our browsers obey the Same-origin policy. While that server doesn't have to. Our browsers have this extra layer of protection because when accessing a website, alot of unknown code gets run. This means that that policy actually helps us most of the time.

**Q: What is this policy all about?**  
A: This enforces the CORS rule while preventing the client from editing the request headers while trying to spoof a request its origin. Bascally preventing from doing Cross-origin requests.

## Built With

* [CORS-Anywhere](https://cors-anywhere.herokuapp.com/) - Used for CORS bypass.
* [OSRS Hisores API](https://secure.runescape.com/m=hiscore_oldschool/overall.ws) - Used to retrieve hiscore data. 
* [JQuery](https://jquery.com/) - Used for AJAX and my example.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
