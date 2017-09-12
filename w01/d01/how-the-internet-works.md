## Objectives

1. Explain in general terms how a client machine locates and connects to a server.
2. Understand the difference between a domain name and an IP address.
3. Identify the critical components of HTTP requests/responses.

## Prerequisite Knowledge

- Navigate to a website in a web browser.
- Connect a computer to a network in order to access the Internet.

# Lesson

## The Internet is Serious Business

The Internet is a complex system with a lot of moving pieces. As web developers, it's important for us to understand how certain pieces interact with one another.

We will not be learning everything there is to know about Internet infrastructure, but this is an important topic. I ask at least one question about this in every single web developer interview I conduct.

## There is no cloud--just someone else's computer

When you connect to a website, you're really just connecting to another computer out there somewhere.

When we talk about "the Internet" and "the cloud", we often mean the same thing: billions of computer systems connected to one another to provide a wide variety of content and services. We more typically say "Internet" when we're talking about looking at websites and "cloud" when we're talking about back-end services and APIs (e.g. storing data online, using someone else's data services like image recognition, etc). No matter what you call it, you're ultimately connecting your computer to some other computer out there.

When two computers connect over the Internet, they establish a **server-client** relationship. 

A **server** is a computer (usually out in the cloud) that is set up to accept requests and respond to them. We often say these systems **host** or **serve** webpages.

A **client** is any computer that initiates a request from a server. When you open a webpage, your computer is the client, initiating the request on your behalf. We can also call your web browser (Chrome, Edge, Firefox, etc) the client, since it is the program on your computer that handles making the request and displays the response.

The key here is that two computers get connected in a server-client relationship. The client initiates a request and the server responds. The client handles the response in some way that is useful for the user, like displaying the webpage on screen.

Note that it is possible for the same computer to play the role of server and client. It is common for a developer to set up their own computer to play the role of server while they're building a webpage. Then they can preview the site they're building while they're building it.

## IP Addresses and Domains

We know that our computer needs to establish a connection with a server, but how does it know which computer and where to find that computer?

Every computer has a location on the Internet called their **IP address**. The older IPv4 addresses look like this: `99.53.226.231`. Newer IPv6 addresses look like this: `[2001:db8:85a3:8d3:1319:8a2e:370:7348]`. Note that IPv4 will be phased out eventually due to its technical limitations in favor of IPv6. Until then, computers may have both types of addresses.

So we can connect to a particular computer using its IP address, but that's not very easy to remember. Instead, people type in something simple like `www.google.com` or `en.wikipedia.org`. This human-readable address is called a **domain**.

When you enter a domain like `www.google.com` into your web browser, it goes and finds the IP address of the appropriate computer. We call this lookup process "domain name resolution".

## Domain Name Resolution

Here is an overview of the process of domain name resolution:

1. You type in a domain like `www.google.com`
2. Your computer sends a request to the **Domain Name Server (DNS)**.
3. The DNS looks up registered `.com` sites and finds a match.
4. (There are actually several DNS subsystems consulted before we get the IP for Google.com. Your request might bet bounced around to a system that specifically handles `.com` domains, then another that handles all `.com` domains from `E` to `H`, etc.)
5. The DNS replies to you with the IP address matching `www.google.com` (e.g. `172.217.12.68`)
6. Your computer requests content from the server at `172.217.12.68`.
7. The server responds and the web browser displays the response for us.

As mentioned, there are many other sub-steps involved. While these are certainly interesting, most of the details are not particularly relevant to us as web developers. It is mostly important that we understand IP addresses, domain names, and how domain name resolution happens.

## HTTP communication

On the internet, clients send **HTTP requests** and servers reply with **HTTP responses**. HTTP is HyperText Transfer Protocol, is just an agreed-upon set of rules about what these requests/responses look like.

Every HTTP Request includes the **HTTP method** and **path** (what is being requested?), **HTTP Headers** (extra details about the request), and possibly a **body** (a file needed to process the request, only included for certain HTTP methods).

Every HTTP Response includes an **response status code** (was the request successful?), **HTTP Headers** (extra details about the response), and probably a **body** (a file being sent in response).

Here are the possible HTTP Methods, in order from most common to most rare:
- **GET**
- **POST**
- **PUT**
- **DELETE**
- OPTIONS
- CONNECT
- TRACE
- HEAD

We will learn more about the different HTTP Methods later, but for now just try to recognize them when you look at things in the browser's Dev Console.

HTTP Headers are typically used for providing extra information about requests and responses. Common examples are dates, time stamps, content type, encoding options, caching details, language, user/login information, security details, verification information, etc. The best way to understand HTTP Headers is to start looking at them in your Dev Console, recognize patterns, and look up more information whenever you're curious about a particular header.

## Extra Infro About URLs: Protocol, Host, Path, and Query String

For example: `https://www.google.com/search?q=puppy+gifs`

A web URL is preceded by the protocol. This will usually be `http://` or `https://`.

Next comes the host. This is commonly the full domain name such as `www.google.com` or `en.wikipedia.org`. However, you can also directly specify an IP address such as `173.194.67.106` or `[2607:f8b0:4003:c19::93]`.

Note that the user can specify a port number in order to attempt to connect to a server using a particular networking port. This is always an integer following a colon, such as `:80` or `:3000`.

Next comes the resource path (and possibly filename), beginning with a forward slash `/`. In the above example, the path is `/search`. Paths can also include multiple levels; it can sometimes be helpful to think of them as respresentig folders, though they may or may not correspond to actual folders on the server. For example, `/users/JohnSmith/photos/summer-holiday-2017/1383455088405.jpg`.

Lastly comes the optional query string, starting with a question mark. The query string may contain multiple variables, each with their own values. Variables are separated with an ampersand (`&`) and values are preceded by an equal sign (`=`) if present. Query strings are generally considered extra information, but some sites use them for critical data anyway.

In the example `?q=puppy+gifs`, there is only one variable `q` and it is set to `puppy gifs`. Note that the plus sign (`+`) here indicates a space. In the example `?lang=en&cache=false&user=johndoe&new_user`, many variables are included with values. The last variable `new_user` is included without any specified value.

# Important Terms

- "the cloud"
- server
- client
- IP address
- domain
- DNS
- HTTP request
- HTTP response
- (HTTP) method
- path
- (HTTP) headers
- (HTTP) body
