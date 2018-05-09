bplist00�_WebMainResource�	
_WebResourceFrameName_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName^WebResourceURLPO�<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1504.83">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">//linkowanie</p>
<p class="p1">var tweetLink = "https://twitter.com/intent/tweet?text=";</p>
<p class="p1">var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&amp;filter[posts_per_page]=1";</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">//pobieranie cytatu</p>
<p class="p2"><br></p>
<p class="p1">function getQuote() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.getJSON(quoteUrl, createTweet);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">//tworzenie tweeta</p>
<p class="p1">function createTweet(input) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var data = input[0];</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>var quoteText = $(data.content).text().trim();</p>
<p class="p1"><span class="Apple-converted-space">    </span>var quoteAuthor = data.title;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (!quoteAuthor.length) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>quoteAuthor = "Unknown author";</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor; //tekst tweeta</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>//dlugosc do 140</p>
<p class="p1"><span class="Apple-converted-space"> </span>if (tweetText.length &gt; 140) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>getQuote();</p>
<p class="p1">} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var tweet = tweetLink + encodeURIComponent(tweetText);</p>
<p class="p1"><span class="Apple-converted-space">    </span>$('.quote').text(quoteText);</p>
<p class="p1"><span class="Apple-converted-space">    </span>$('.author').text("Author: " + quoteAuthor);</p>
<p class="p1"><span class="Apple-converted-space">    </span>$('.tweet').attr('href', tweet);</p>
<p class="p1">}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">//gotowosc na klikniecie</p>
<p class="p1">$(document).ready(function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>getQuote();</p>
<p class="p1"><span class="Apple-converted-space">    </span>$('.trigger').click(function() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>getQuote();</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1">});</p>
</body>
</html>
Ytext/htmlUutf-8_file:///index.html    ( ? Q g � � �_io                           �