I'm tired of trying to make some custom format
that essentially just does a worse job of Markdown!

So I'm going to go back to Markdown and try to render it client-side
with a js library. If that's too tough, I'll go back to straight files
in GitHub and let them deal with it.

One thing I was thinking of was keeping the recipes in markdown format, in the "public"
folder in here, and dynamically listing/reading as necessary. That way you could just
dump in another file without having to rebuild the JS client app. Github has an ok limit
on free/anonymous API usage, so I might go down that route. It allows 60 requests per
hour, I believe...so as long as you aren't repeatedly loading pages, that would serve
you just fine for a while. On the other hand, it is a bit restrictive if there wasn't
any caching going on. Anyhow, if I can't get something reasonable going there, I'm
sure I could just bundle all of the recipes in the JS and require a rebuild every time
there's an update to the recipes...

Ok, I think it wouldn't be that hard to `fetch` the pages and just display your rate limit for now. Don't go crazy or else you'll just have to navigate the git repo yourself.
> The returned HTTP headers of any API request show your current rate limit status:
> ```
> curl -i https://api.github.com/users/octocat
>  HTTP/1.1 200 OK
>  Date: Mon, 01 Jul 2013 17:27:06 GMT
>  Status: 200 OK
>  X-RateLimit-Limit: 60
>  X-RateLimit-Remaining: 56
>  X-RateLimit-Reset: 1372700873
>  ```