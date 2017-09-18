Week 01 Review
==============

How the Internet Works
----------------------

### Review Questions

<details>
  <summary><strong>Q:</strong> When your computer requests a webpage from the Internet, it establishes a ________-________ relationship with the computer responsible for delivering the webpage.</summary>
  <p><strong>A:</strong> A <strong>client-server</strong> relationship. Your computer establishes one connection per request but each web page typically involves many requests (the initial HTML plus any linked CSS, JS, images, fonts, etc).</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What is the name of the unique identifier that every computer connected to the Internet has?</summary>
  <p><strong>A:</strong> Each computer has an <strong>IP Address</strong>. <strong>IPv4</strong> is the older format (e.g. <code>99.53.226.231</code>) and <strong>IPv6</strong> is the newer format (e.g. <code>[2001:db8:85a3:8d3:1319:8a2e:370:7348]</code>).</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What is the name of the system/process that translates a human-readable domain name to the address that a computer uses to connect to a server?</summary>
  <p><strong>A:</strong> <strong>Domain name resolution</strong>, thanks to the <strong>domain name service</strong> (DNS for short).</p>
  <p>The first time a client sends a request to a new domain, it will have to lookup/resolve the domain into an IP address.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> Re: servers and clients, which one initiates a request and which responds to requests?</summary>
  <p><strong>A:</strong> The client initiates an HTTP request and the server replies with an HTTP response.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What are the different parts of an HTTP Request?</summary>
  <p><strong>A:</strong> An HTTP request has an <strong>HTTP method</strong> and <strong>path</strong> (everything after the domain in the URL). It also includes several <strong>HTTP Headers</strong>, containing extra information about the request. Lastly, some requests may include a <strong>request body</strong>, depending on the method.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What are the different parts of an HTTP Response?</summary>
  <p><strong>A:</strong> An HTTP response has an <strong>HTTP status code</strong>, describing how the request was handled in general terms. It also includes several <strong>HTTP Headers</strong>, containing extra information about the response. Lastly, most responses include a <strong>response body</strong>, though it may not be strictly necessary depending on the request method.</p>
</details>
<br/>

### Review Materials

- ["How the Internet Works" Slides](https://drive.google.com/open?id=1eQd1PLrOT-YO-2VvPWQFPFUdKTo9iU6sa6mHae8VDTA)
- [What Is a DNS Server?](https://www.lifewire.com/what-is-a-dns-server-2625854) - good summary of DNS
- ["How to Spy on Your Browser’s HTTP Requests and Responses"](https://blog.versionone.com/spy-on-browser-http-requests/) - a guide on how to start inspecting HTTP requests in your Dev Tools
<!-- TODO: article clearly breaking down the anatomy of a URL -->

### Extra Related Topics

- **HTTP/2**
- various **HTTP Headers**
- body content types (**MIME types**)
- the meanings of different **HTTP Response Codes**
- **SSL** vs **TLS** (implementing HTTPS)
- details of the **Domain Name System**
- domain **Registrars**
- **DHCP**
- load balancers / reverse proxies

Git and Github
--------------

### Review Questions

<details>
  <summary><strong>Q:</strong> What is the difference between Git and Github?</summary>
  <p><strong>A:</strong> <strong>Git is an SCM</strong> (version control, source control) technology. <strong>Github is a company</strong> that offers the most widely used Git service.</p>
  <p>Some features like issue tracking, wikis, and pull requests are features of Github, while others like branches, repositories, and commit history are features of the Git technology itself.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> How are changes to files recorded in a Git repo?</summary>
  <p><strong>A:</strong> Each file is analyzed for <strong>line insertions/deletions</strong>. New lines are insertions, removed lines are deletions, and changed lines are both an insertion and a deletion.</p>
  <p>Git takes a snapshot of line changes for all tracked files every time a <strong>commit</strong> is made. The history of a project can be thought of as a series of commits, each representing a complete "snapshot" of the project.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What could happen if you carelessly rewrite a Git repo's history by editing or removing a commit?</summary>
  <p><strong>A:</strong> Editing the history of a repo could make it incompatible with other forks of the project. Different Git repos are only compatible if they share the same commit history.</p>
  <p>For this reason, extra care must be taken with git commands that can modify history, such as <code>git rebase</code> or <code>git push -f</code> (force push). Also, if we need to revert an unintended change that has already been committed to the repo's history, it is safer to make those changes in an additional commit (rather than attempting to remove a previous commit).</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> A developer edits a file, commits with <code>git commit -m "changed color scheme"</code>, and pushes the code with <code>git push origin master</code>. When they look on Github, they are surprised that their changes are not there. What did the developer forget to do?</summary>
  <p><strong>A:</strong> The developer forgot to <strong>stage their changes</strong> before committing. It is also possible they forgot to save the file in their editor (Atom, Sublime Text, etc).</p>
  <p>For this reason, it is a good habit to always save a file before switching from the editor to terminal. It is also a good habit to use <code>git status</code> before committing in order to double-check which changes you are committing.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What is the difference between Git remotes and branches?</summary>
  <p><strong>A:</strong> A <strong>Git remote</strong> is simply a connection between your local repository and another Git repository (often on Github). You can check which remote connections you have for a particular project by running <code>git remote -v</code>.</p>
  <p>A <strong>Git branch</strong> is an alternate branch of commit history within a Git repository. Using branches, developers can work on multiple sets of changes over time and merge them together when appropriate. For example, a developer could create a branch for a site redesign, while continuing routine changes in the <code>master</code> branch. When the redesign is ready, the branch histories can be merged together for a seamless transition.</p>
  <p>You can check your current branches by running <code>git branch</code> and you can change your active branch with <code>git checkout</code> (e.g. <code>git checkout redesign</code>).</p>
  <p>Push and pull operations should specify both a remote (repository) and a branch. For example, <code>git push origin master</code> (push to <code>origin</code> remote, with the <code>master</code> branch).</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What happens when you clone a repo?</summary>
  <p><strong>A:</strong> Cloning a repo creates a new folder on your computer and fills it with the files from the current state of the master branch of the cloned repository. It also sets up a remote connection to the cloned repo as <code>origin</code>.</p>
</details>
<br/>

### Review Materials

- ["Git - the simple guide"](http://rogerdudler.github.io/git-guide/) - a barebones overview of key Git features
- [Uses of Index](http://gitolite.com/uses-of-index.html) - a good explanation of the benefits of Git's staging area (aka "index")
- [Managing Remotes](https://help.github.com/categories/managing-remotes/) - a series of short, focused Github help articles about remotes
- [Atlassian's Git Branch tutorial](https://www.atlassian.com/git/tutorials/using-branches) - a bit long but very comprehensive (note: you'll want to get in the habit of using `git checkout -b <branchname>` instead of `git branch <branchname>`)

### Extra Related Topics

- ["Aha! Moments When Learning Git"](https://betterexplained.com/articles/aha-moments-when-learning-git/) - tips that might help Git concepts "click" for some developers
- [Atlassian's Git Workflow Comparison Guide](https://www.atlassian.com/git/tutorials/comparing-workflows) - probably the best explanation out there about the difference between the main approaches to team collaboration with Git (centralized, feature branch, GitFlow, forking)
- [Trunk Based Development](https://trunkbaseddevelopment.com/) - an alternative workflow that limits use of features like branches/forking in favor of centralized changes and team communication
- ["Git rebase and the golden rule explained"](https://medium.freecodecamp.org/git-rebase-and-the-golden-rule-explained-70715eccc372) - a good explanation of `git rebase` (note that `rebase` rewrites history and as such is not generally recommended for Git beginners)

HTML and CSS Basics
-------------------

### Review Questions

<details>
  <summary><strong>Q:</strong> What are the most important attributes that all HTML tags can have?</summary>
  <p><strong>A:</strong> Every HTML element has a <code>class</code> and <code>id</code> attribute which are used extensively for styling and manipulating elements in CSS and JavaScript.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> Which HTML tag is used for making links to other pages? What are the most important attributes for that tag?</summary>
  <p><strong>A:</strong> The "anchor" tag (<code>&lt;a&gt;</code>) is used for making links. It can wrap around text, images, or large containers of HTML to turn them into links. Anchor tags almost always have an <code>href</code> attribute pointing to the link destination. The optional <code>target</code> attribute describes if the link should open in same tab, a new tab, or a new window. Example: <code>&lt;a href="https://www.google.com" target="_blank"&gt;Google&lt;/a&gt;</code></p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What does "semantic markup" mean?</summary>
  <p><strong>A:</strong> Simply put, <strong>semantic markup</strong> is markup with meaning. The two least semantic HTML tags are <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> since all they do is group and contain elements without describing their purpose.</p>
  <p>Meaningful alternatives to <code>&lt;div&gt;</code>s include: <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, etc.</p>
  <p>Similarly, <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> are more semantic than <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> even though they have the same default styles, because <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> describe characteristics of the content, rather than a formatting detail.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> How do you write CSS selectors to target: tags, classes, IDs, child elements, multiple elements at the same time, etc?</summary>
  <p><strong>A:</strong> <strong>tag selector:</strong> just the tag name, e.g. <code>body</code> or <code>h1</code> or <code>p</code></p>
  <p><strong>class selector:</strong> class name preceded by period, e.g. <code>.primary-nav</code> or <code>.btn-submit</code> or <code>.account-status</code></p>
  <p><strong>ID selector:</strong> element ID preceded by hash, e.g. <code>#article-13925</code> or <code>#nav-company-logo</code></p>
  <p><strong>child elements:</strong> add a space between identifiers (or a greater-than sign to specify that the matching element must be a direct child), e.g. <code>nav .primary-nav-links .link-item a</code> or <code>.user-profile &gt; .user-photo</code></p>
  <p><strong>multiple elements:</strong> separate selectors with a comma, e.g. <code>h1, h2, h3, h4</code> (matches any <code>h1</code> or <code>h2</code> or <code>h3</code> or <code>h4</code>)</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> When multiple CSS rules target the same property on the same element, how does the browser determine which value to set for the property?</summary>
  <p><strong>A:</strong> The browser allows rules with <strong>higher specificity</strong> to override those with lower specificity. In the case of a tie, the rule tied for highest specificity that comes last is applied.</p>
  <p>CSS selectors targetting IDs have very high specificity, selectors targetting classes have moderate specificity, and selectors targetting "raw" HTML tags have low specificity. Specificity can be increased by adding additional conditions like parent-child selectors, pseudoselectors, etc.</p>
</details>
<br/>

### Review Materials

- [Semantic Markup summary](http://html.com/semantic-markup/)
- ["Intro to CSS" Slides](https://drive.google.com/open?id=1MuTw_bLctzZG_dLJiVuiWoo8AErbsp9JAXzJI04gg90)
- [(MDN) CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [(CSS Reference) CSS Typography properties](http://cssreference.io/typography/)
- [(CSS Tricks) How CSS Specificity works](https://css-tricks.com/specifics-on-css-specificity/)

### Extra Related Topics

- [Web Accessibility overview](https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634)
- [Web Accessibility quick tips](https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/)
- [(MDN) Attribute Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)
- **CSS Methodologies** - basically different types of self-imposed rules/patterns to help keep styles for large projects comprehensible and maintainable (no need to learn them all, but you may join a team that follows one)
  - [BEM](http://getbem.com/)
  - [OOCSS](http://oocss.org/)
  - [SMACSS](https://smacss.com/)
  - [Atomic](https://github.com/nemophrost/atomic-css)
  - [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
<!-- TODO: good article about HTML forms -->
<!-- TODO: good article about styling HTML forms -->

CSS Layout, Responsive Web Design, etc
--------------------------------------

### Review Questions

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What are the most common values for the CSS <code>display</code> property? What does each value do?</summary>
  <p><strong>A:</strong> <strong><code>none</code>, <code>block</code>, <code>inline</code>, and <code>inline-block</code>.</strong></p>
  <p><strong><code>display: none;</code> =</strong> The element (and all its children) will be completely hidden from the display and will take up no room in the page layout.</p>
  <p><strong><code>display: block;</code> =</strong> The element creates its own block. It starts on its own new line and defaults to the full width available.</p>
  <p><strong><code>display: inline;</code> =</strong> The element fits inline with text and other inline elements, flowing left-to-right and down like normal text. Inline elements do not respond to certain properties like <code>width</code> or <code>height</code>.</p>
  <p><strong><code>display: inline-block;</code> =</strong> The element shares some of the properties of inline and block elements. It is similar to inline elements in that its default dimensions are just big enough to fit the contents (rather than full width) and it does not break to a new line. It is similar to block elements in that it will respond to layout properties like <code>width</code> and <code>height</code>.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> <strong>(critical question:)</strong> What are the four possible values for the CSS <code>display</code> property? What does each value do?</summary>
  <p><strong>A:</strong> <strong><code>static</code>, <code>relative</code>, <code>absolute</code>, and <code>fixed</code>.</strong></p>
  <p><strong><code>position: static;</code> =</strong> All elements are static-positioned by default. Static elements remain in the natural flow of the page layout. Its position <em>will be ignored</em> by any absolute-positioned children. It also <em>will not respond</em> to certain CSS properties like <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, and <code>z-index</code>.</p>
  <p><strong><code>position: relative;</code> =</strong> Relative elements remain in the natural flow of the page layout but their position can be modified by other properties. Its position <em>will be used</em> by absolute-positioned children to determine their new position. It also <em>will respond</em> to certain CSS properties like <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, and <code>z-index</code>.</p>
  <p><strong><code>position: absolute;</code> =</strong> Absolute elements break out of the natural flow of the page. Their new position will be determined based on the nearest ancestor/parent that is non-static position (or the <code>body</code> if none can be found). Its position <em>will be used</em> by absolute-positioned children to determine their new position. It also <em>will respond</em> to certain CSS properties like <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, and <code>z-index</code>.</p>
  <p><strong><code>position: fixed;</code> =</strong> Fixed elements break out of the natural flow of the page. Their new position will be determined based on the viewport (generally, the browser window). Its position <em>will be used</em> by absolute-positioned children to determine their new position. It also <em>will respond</em> to certain CSS properties like <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, and <code>z-index</code>.</p>
  <p>Note that once elements are positioned with <code>absolute</code> or <code>fixed</code>, they will no longer default to full width even if they are <code>display: block</code>.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What are developers referring to when they talk about "the box model"?</summary>
  <p><strong>A:</strong> The <strong>"box model"</strong> refers to how the browser's rendering engine represents each element as a rectangular box. The dimensions of each box is based on the element's <strong>content, padding, border, and margin</strong>.</p>
  <p>Note that the <code>box-sizing</code> property effects how the element responds to sizing properties like <code>width</code> and <code>height</code>. The default <code>box-sizing: content-box;</code> will interpret <code>width</code> as the intended width of the <em>content box</em>, with padding and border expanding from there. However, <code>box-sizing: border-box;</code> will interpret <code>width</code> as the intended width of the <em>entire element</em>, including content, padding, and border. Margin always pushes out from the specified box dimensions.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What is the purpose of Responsive Web Design?</summary>
  <p><strong>A:</strong> Responsive Web Design is all about making sure a webpage responds appropriately to <strong>the needs of a wide variety of users</strong>. This involves taking into account the different devices, controls, screen resolutions, and environmental factors users are experiencing when they visit a website and making sure the website responds as appropriately as possible.</p>
</details>
<br/>

<details>
  <summary><strong>Q:</strong> What is the name for set of CSS properties that allow developers to easily position elements vertically and horizontally as well as match element dimensions in rows/columns? What is the most important of these properties?</summary>
  <p><strong>A:</strong> <strong>Flexbox</strong></p>
  <p><strong><code>display: flex;</code></strong> is the most important property since it defines a flex container. Other flex properties are ignored unless the element's parent has been made a flex container (or the element itself, depending on the property).
</details>
<br/>

### Review Materials

- [(CSS Reference) CSS Display property](http://cssreference.io/property/display/)
- [(CSS Reference) CSS Positioning properties](http://cssreference.io/positioning/)
- [(CSS Reference) CSS Box Model properties](http://cssreference.io/box-model/)
- [Intro to Flexbox](https://slicejack.com/introduction-to-flexbox/)
- [(CSS Tricks) Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- ["Intro to Sass" Slides](https://drive.google.com/open?id=13fR_1BdKNNNBm5v-wvJFk1t9yaJB5kZZV0GEodCNfR0)
<!-- TODO: intro to Responsive Web Design article -->

### Extra Related Topics

- [(CSS Tricks) All About Floats](https://css-tricks.com/all-about-floats/) - while flexbox solves many of the problems we used to have to rely on floats for, understanding floats can still be valuable in certain situations
- "Mobile First" approach to `@media` queries
  - https://zellwk.com/blog/how-to-write-mobile-first-css/
  - https://www.sitepoint.com/introduction-mobile-first-media-queries/
- [Responsive Images (`<picture>` and `srcset`)](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
<!-- TODO: UX concerns of RWD (other than just pixel dimensions) -->


