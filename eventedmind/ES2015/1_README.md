### ES2015

ES2015 is the latest version of JavaScript, sometimes called ES6, or Harmony.

It has a lot of great new syntax that captures behaviors
that developers have been implementing themselves for a long time.

It's also the version of JavaScript used in Meteor and React.

In this class I'll start by giving some of the history of the language
and what ECMA means.
Then we'll dive into some of the coolest new features, including

classes,
fat arrows,
iterators,
generators,
promises,
default params
and the new spread operator.

1) 1강 ECMAScript History

What is ECMAScript?

In this video I'll introduce the ES2015 class.
The latest version of JavaScript, ES2015,
is also known as ES6 or ECMAScript 2015.
In this video you'll learn about some of the new features.
And I'll take you on a tour of how it all started with Netscape and Microsoft.

대본
The latest standard for JavaScript was just approved in June of 2015.
This version of JavaScript is called ECMAScript 2015 or ECMAScript(ES) 6,
for Short.
But it's all the same for the latest version of JavaScript.
It has a ton of new features.
For example we can create classes that inherit from other classes.
It has support for enhanced object literal syntax.

```
class CommentView extends View {
  events: {
    hello,
    world() {

    }
  },

  // We can pass in parameters that have default values.
  constructor(element = document.body) {
    super();
  },

  onRender() {
    // And we can use the fat arrow syntax for a much more
    // concise way of declaring funcitons
    // that also bind to this arg
    setInterval(() => { this.update(); }, 1000);
  }
}
```

And there's a ton of other features that we'll be exploring in this class.
To start off, let's talk about how we got here and what ECMAScript actually is.

It's way back in the day, in December of 1995.
And if you were around then, and you played with the Netscape browser,
you know that this is where JavaScript originally came from.

So the folks(Netscape) that developed the initial commercial browser
decided that they needed a way for people to be able to script their web pages.
And so they developed a language that was an interpreted language
and the guy who developed it -- his name is Brendan Eich(브랜든 아익크) --
and he's working in Netscape at this time.
And so around 1995, they make a press release and they announce the fact that
JavaScript is going to be a part of Netscape Navigator 2.0.
And originally, JavaScript was actually called Live Script.
But it finally settled on the name JavaScript.

Now soon after that, Microsoft decides to get into this game.
And they create their own version of the language.
And so syntactically it looks very similar, but it works inside of Microsoft
Internet Explorer browser.
So, it was a different implementation of JavaScript.

So the two companies -- Microsoft and Netscape --
are competing for mind share. (마음속 점유율? 실질 점유율?)
And they're both adding feature to their own versions of JavaScript.
Since more than one company was working on their own implementations
of JavaScript, there needed to be some kind of standard so that people
could write JavaScript once, and have it run in different places.

And so two years after its initial release, the JavaScript language gets
submitted by Netscape to the ECMA International Standards Board.

And the purpose of this was to try to develop an agreement that all people would
-- or all companies -- would abide by(따르는, 지키는), which would be
the standard for the language.

And of course, the companies can choose to abide by the standard or not.
But in general, they try their best to do that.

Now what exactly is ECMA?

ECMA(European Computer Manufactures Association) is a nonprofit, international
standards organization that was founded in 1961, and its' headquartered in
Geneva. It's primary purpose is to develop standards for technologies and
communication systems that different companies that implement those technologies
can agree to. ECMA doesn't just manage JavaScript, it has standards for
a bunch of different technologies that you can see examples of here.

ECMA-262 – ECMAScript Language Specification (often referred to as JavaScript)[9]
ECMA-(Standard Version)
ECMA-402 – ECMAScript Internationalization API Specification[19]
ECMA-404 – JSON[20]
ECMA-372 – C++/CLI Language Specification[15]
ECMA-334 – C# Language Specification[10]

The name ECMAScript became a sort of neutral name,
so that Netscape and -- who were just duking it out to decide what should
be in the language standard and what it should be called, could agree on this
common name that was sort of part of the Standards Board, ECMA.
So, we'll be using the word ECMAScript and JavaScript interchangeably.
But this will give you a sense of where it came from.

ECMAScript 6 has a bunch new features.
And in the rest of this class, I'm going to go through them and show
how they work.



> Wiki : ECMAScript
ECMAScript is a trademarked[1] scripting language specification standardized
by Ecma International in ECMA-262 and ISO/IEC 16262.
Well-known implementations of the language,
such as JavaScript, JScript and ActionScript
are widely used for client-side scripting on the Web.

> History
The ECMAScript specification is a standardized specification
of a scripting language developed by Brendan Eich of Netscape
; initially it was named Mocha, later LiveScript, and finally JavaScript.[2]
In December 1995, Sun Microsystems and Netscape announced JavaScript
in a press release.[3]
In March 1996, Netscape Navigator 2.0 was released,
featuring support for JavaScript.

