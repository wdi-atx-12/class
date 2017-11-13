# Interview Prep 101

### Intro
Coming out of WDI we have an abundance of things on our side (passion, enthusiasm, ability to learn), but also a few things not in our favor (experience). This morning I want to go over all the other areas of our skillset that are going to help you get that job even if you're not the most experience developer.

You hate interviewing, but companies also hate it as well. The process for finding the right candidate is a time sink, it costs money and employee time to locate and interview potential candidates. On top of that, new employees have to be trained and will need time before they're making significant contributions.

That's why some companies use recruiters, they're supposed to filter out "qualified candidates" for companies to make it easier.

As you're going through this, remember - Your first development job will be the toughest one to get. You'll continue to develop your skills and experience and that will make it much easier for you to land jobs in the future.

### Interviewing

#### What are companies looking for?

* What you think - They are looking for the most skilled developers
* What they think - Good companies are looking for a culture fit first and foremost
* Research shows that it's better to have a team of average workers who like each other over team of highly skilled workers who don't want to work together
* Example is company will offer current employees referral bonus. They want to find people they already like and will work well with, it's worth it for them to pay these bonuses ($1000 sometimes)


#### General process:

1. Application
2. Phone interview (HR, recruiter)
3. Technical interview with developer (Developer, in-person)
4. Meet the manager/team (Culture fit)

#### 1. Application
We've talked about the application process a lot thus far in Outcomes, but here a quick few reminders when building your brand and applying to jobs:

- Customize your cover letter!
- Follow up - the squeaky wheel gets the oil
- If you know someone at the company you're applying, let them know so they can give a good word or maybe even escalate your application
- Online Presence: (LinkedIn, GitHub, CodePens, Twitter) social media presence is existant and active

#### 2. Phone Interview

This is a chance to tell your story, sell yourself, give them a reason to find you interesting outside of just code competency. Make sure to follow up with a thank you, next steps, and be sure to ask at least a question to show interest! We don't have experience on our side, so let's show off other things too!

Other skills: social, communication skills, eager to learn and learn fast, involved in the community, continuing to learn, etc.

* **Know the interview process.** If they don’t tell you, look it up or ask. You should know what tech stack the company uses, because they’ll likely ask you questions in those languages/technologies. If I list Postgres as a technology, you’d better come prepared to talk about relational databases and SQL queries. Also good to know the format so you can prepare.
* **Know the company.** You should spend an hour browsing the website to really understand what the company does and how it works. You should be able to give an elevator pitch about what their company does.
* **Think of 3 projects you worked on.** Draw from them when you’re asked for examples. Make sure you’re able to explain what part of a project you worked on vs. what others helped with. Don’t pick projects you barely worked on, don’t understand much, or make others look foolish. It’s best if they’re also available on github. Also good to think of at least 1 project that failed and why.
* **Think STAR for behavioral questions.** Situation, Task, Action, Results. There are a ton of other methods which will help you organize your answers. The key is to tell a complete story to your interviewer. Give specific questions, not just generalities. If you’re asked about a time when you had to fix someone else’s code, don’t talk about how you’d do that in general.
* **Ask questions.** Every good interviewer leaves time for you to ask some questions. Write down a few before you show up. Try to have at least 1 that you’re pretty sure won’t be answered during the course of the interview. Probably don’t ask how much you’ll make. Definitely alright to ask about how features are prioritized or what you’d be working on initially. Say you're interested upfront, be honest and say you're interviewing with other companies, ask for them to move the process along!!
* **Follow up.** Tell them thanks. If there are things you got wrong, go research them and explain what you know now. (e.g. I had a chance to think about the runtime complexity of the example and now think that bla bla bla). If you did amazing, think of another bit of info to follow up about (e.g. Hey, thanks for pointing me to that cool new Ruby gem. I’ve taken it for a spin and noticed blah, blah, blah). Buy a coffee, send a thank you, find them on twitter, engage and be grateful.

> Elevator Pitch: peer practice!

#### 3. Technical Interview with Developer, in-person

We are going to do mock interviews with white boarding this unit but lets talk about the other questions we might see in a Technical Interview:

- Tell me about the bug that was the most frustrating for you to find a fix.
- What tech-related blogs, podcasts, newsletters, etc do you read?
- Tell me about a project that failed miserably.
- What are some core benefits/features of object oriented programming?
- How are you a team player?
- Explain what this snippet of code does.

```python
import urllib2
import urllib
import json

url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&"

query = raw_input("What do you want to search for ? >> ")

query = urllib.urlencode( {'q' : query } )

response = urllib2.urlopen (url + query ).read()

data = json.loads ( response )

results = data [ 'responseData' ] [ 'results' ]

for result in results:
    title = result['title']
    url = result['url']
    print ( title + '; ' + url )
```

- Explain what a closure is in javascript.
- Select certain documents from a SQL database.
- Write a function to tell me if a string is a palindrome.
- Design a RESTful JSON API for a google query.
- Compare and contrast different sorting algorithms. What are each's pros and cons? Which one is best for a given situation?
- In JavaScript, what is the difference between ```==``` and ```===```

Hiring managers want to see the cognitive process that applicants go through when working on a problem or a puzzle. Always talk out loud when answering.

Examples:

* 8 marbles question
* How many ATM's are there in the United States

##### Tips

* "I don't know" should never be your answer
  - Talk out loud: Apple interview story
  - Don't BS an answer, but ask them what the correct answer is and what is one way to solve it. This shows that you're wanting to learn and be mentored
* Expect to get derailed. If you're not expecting it and it happens, you'll be frazzled and not handle the rest well. If you're prepared you'll mentally be in a better place
* Technical interviews suck. Expect to get technical questions at any point: Apple story where I already did it and they said next one was a "meet and greet"
* Expect to get some questions wrong
  - Example: Tribal interview where he said he didn't expect me to get a database related question

Sell people on **why** you do what you do, not **what** you do.

#### 4. Meet the manager/team, Culture Fit

Along with deciphering if applicants have the right experience, hiring managers also have to determine if they fit well with team cultural. When answering these questions, state the answer first and then explain your answer.

Example:

* Tell me something that’s a challenge for you
  - *This is a spin on the traditional “what’s your biggest weakness” question, and should be answered carefully. A successful answer demonstrates both self-awareness (where you are challenged) and action (how you are taking steps to improve). A word of caution: don’t respond with a “knock-out” answer that would automatically disqualify you for the job. For example, don’t say you don’t like working in teams in an interview for a leadership position or where performing as part of a team is critical.*


### Interviews for Software Developers

Many established and up-and-coming tech companies send potential hires through a series of trial projects, cognitive tests, and in-person interviews.

Reference: [Three Types of Interview Questions Software Developers Should Expect](http://www.developer.com/mgmt/three-types-of-interview-questions-software-developers-should-expect.html)

[How Great Leaders Inspire Action](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action?language=en)
